import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  YoutubeInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/me_avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Justin Tefteller</title>
        <meta
          name="description"
          content="I’m Justin Tefteller. I live in Fayetteville AR, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className=" rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi! I’m Justin Tefteller. I live in Fayetteville, AR, where I forge the code of the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Have you ever found something that just makes you feel like you
                were born to do it? That’s how I feel about programming. I love
                the challenge of solving problems, and I love the feeling of
                creating something that didn’t exist before. I love the
                satisfaction of seeing something I’ve made come to life, and I
                love the feeling of being able to help others by creating
                something that makes their lives easier. 
              </p>
              <p>
                I’m a self-taught software engineer with a passion for creating beautiful
                and intuitive user experiences. I’m currently working as a
                software engineer at{' '}
                <a  className="text-teal-500 hover:underline dark:text-teal-500"
                href='https://wpengine.com'
                >
                  WP Engine
                </a>  where I work on a variety of projects, including
                network reliability, website hosting and automation, and 
                user portal experiences. I’m also a member of the{' '}
                Outer Edge Team, where we design and scale the future of WordPress. 
              </p>
              <p>
                I’m entrepreneur, amateur drone pilot, and a lifelong learner. I love
                learning new things, and I’m always looking for new ways to
                improve myself and the ones around me. I’m a big fan of
                tinkering, and I love to read. I’m also a big fan of the outdoors,
                where I explore hiking trails and piloting my drone.
              </p>
              <p>
                I'm currently helping my mentee transition into the tech industry. 
                I'm also working on a few personal projects, including a
                blog about my experiences as a software engineer and a tech start up.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">

              <SocialLink href="https://www.youtube.com/@justintefteller2780" icon={YoutubeInIcon}>
                Follow on Youtube 
              </SocialLink>
              <SocialLink href="https://twitter.com/vontefteller" icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/jteftell/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/jtefteller" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/justin-tefteller-104ab1136" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:justintefteller@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                justin@justintefteller.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
