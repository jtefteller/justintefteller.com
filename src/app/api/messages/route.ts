import { NextApiRequest, NextApiResponse } from 'next'
import { contactMessage } from '@/lib/validation'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  let message
  try {
    message = contactMessage.parse(req.body)
    message.website = 'https://justintefteller.com'
  } catch (error: any) {
    return res.status(400).json({ error: error.errors })
  }

  try {
    const response = await fetch(
      'https://autumn-wildflower-c93c.justin-128.workers.dev/message',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      },
    )
    if (!response.ok) {
      console.error(response)
      return res
        .status(500)
        .json({ error: 'An error occurred while sending the message' })
    }
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'An error occurred while sending the message' })
  }

  return res.status(200).json({ error: null })
}
