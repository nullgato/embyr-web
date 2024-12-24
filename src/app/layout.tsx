import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Image from 'next/image'
import { CSSProperties } from 'react'
config.autoAddCss = false

import background from '@/assets/images/background-blur.png'
import '@/assets/styles/base.sass'
import { Header } from './_components'
import styles from './layout.module.sass'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
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
}

const imageStyle: CSSProperties = {
    objectFit: 'cover',
    zIndex: 0,
}

interface IProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<IProps>) {
    return (
        <html lang="en">
            <body className={`${dmSans.className}`}>
                <SpeedInsights />
                <div className={styles.backgroundWrapper}>
                    <Image
                        style={imageStyle}
                        src={background}
                        alt="Background of the webpage"
                        placeholder="blur"
                        quality={95}
                        sizes="100w"
                        fill
                        priority
                    />
                </div>
                <div className={styles.boundary}>
                    <div className={styles.presentation}>
                        <Header />
                        <main>{children}</main>
                        <footer>
                            <p>
                                &copy; {new Date().getFullYear()} Bratcats
                                Imperium
                                <br />
                                <span>Developed & Designed by </span>
                                <a href="/github">nullgato</a>
                            </p>
                        </footer>
                    </div>
                </div>
            </body>
        </html>
    )
}
