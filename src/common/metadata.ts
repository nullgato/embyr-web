import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://bratcats.gay'),
    title: '@bratcatnullgato homepage',
    description: 'bratcatnullgato music, socials, merch, and more!',
    keywords: [
        'nullmoggi',
        'nullgato',
        'bratcat',
        'VTuber',
        'Vtuber',
        'music',
        'lofi',
        'rapper',
        'musician',
        'composer',
    ],
    authors: [{ name: 'nullgato', url: 'https://threads.net/@bratcatnullgato' }],
    creator: 'nullgato',
    publisher: 'nullgato',
    generator: 'Next.js',
    openGraph: {
        title: '@bratcatnullgato homepage',
        description: `nullgato and bratcat accessories gosh dang it`,
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