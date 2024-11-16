import '@/app/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { joinCss } from '@/utilities/css-utilities'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ReactNode } from 'react'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://bratcats.gay'),
    title: 'nullgato homepage',
    description: 'nullgato music, socials, merch, and more!',
    keywords: [
        'nullmoggi',
        'nullgato',
        'VTuber',
        'Vtuber',
        'music',
        'rapper',
        'musician',
        'composer',
    ],
    authors: [{ name: 'nullgato', url: 'https://threads.net/@nullgato' }],
    creator: 'nullgato',
    publisher: 'nullgato',
    generator: 'Next.js',
    openGraph: {
        title: 'nullgato homepage',
        description: `nullgato and nullgato accessories gosh dang it`,
        url: 'https://bratcats.gay',
        siteName: 'nullgato homepage',
        images: [
            {
                url: '/og.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@bratcatnullgato',
        creator: '@bratcatnullgato',
    },
}

interface IProps {
    children: ReactNode
}

const RootLayout = (props: Readonly<IProps>) => {
    return (
        <html lang="en">
            <body
                className={joinCss(
                    inter.className,
                    'relative z-10 scroll-auto'
                )}
            >
                {props.children}
            </body>
        </html>
    )
}

export default RootLayout
