import { contactMessage } from '@/lib/validation'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.method !== 'POST')
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  let message
  try {
    message = contactMessage.parse(await req.json())
    message.website = 'https://justintefteller.com'
  } catch (error: any) {
    return NextResponse.json({ error: error.errors }, { status: 400 })
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
      return NextResponse.json(
        { error: 'An error occurred while sending the message' },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'An error occurred while sending the message' },
      { status: 500 },
    )
  }

  return NextResponse.json({ error: null }, { status: 200 })
}
