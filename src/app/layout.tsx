import '@/app/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.min.css'

import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import { joinCss } from '@/utilities/css-utilities'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://bratcats.gay'),
    title: 'embyr. homepage',
    description: 'embyr. music, socials, merch, and more!',
    keywords: [
        'embyr.',
        'nullgato',
        'VTuber',
        'Vtuber',
        'music',
        'rapper',
        'musician',
        'composer',
    ],
    authors: [{ name: 'embyr.', url: 'https://threads.net/@embyrdot' }],
    creator: 'embyr.',
    publisher: 'embyr.',
    generator: 'Next.js',
    openGraph: {
        title: 'embyr. homepage',
        description: `embyr. and embyr. accessories gosh dang it`,
        url: 'https://bratcats.gay',
        siteName: 'embyr. homepage',
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
        site: '@embyrdot',
        creator: '@embyrdot',
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
