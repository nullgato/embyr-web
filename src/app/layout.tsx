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
    title: 'nullmoggi homepage',
    description: 'nullmoggi music, socials, merch, and more!',
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
    authors: [{ name: 'nullmoggi', url: 'https://threads.net/@nullmoggi' }],
    creator: 'nullmoggi',
    publisher: 'nullmoggi',
    generator: 'Next.js',
    openGraph: {
        title: 'nullmoggi homepage',
        description: `nullmoggi and nullmoggi accessories gosh dang it`,
        url: 'https://bratcats.gay',
        siteName: 'nullmoggi homepage',
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
        site: '@nullmoggi',
        creator: '@nullmoggi',
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
