import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re message has been sent - Justin Tefteller</title>
        <meta
          name="description"
          content="You’re message has been sent."
        />
      </Head>
      <SimpleLayout
        title="Thanks for sending me a message."
        intro="I'll respond to your message as soon as I can."
      />
    </>
  )
}
