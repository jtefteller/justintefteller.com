import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'You’re message has been sent - Justin Tefteller',
  description: 'You’re message has been sent',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for sending me a message."
      intro="I'll respond to your message as soon as I can."
    />
  )
}
