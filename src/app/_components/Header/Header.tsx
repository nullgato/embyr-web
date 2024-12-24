'use client'

import { Avatar, Banner, Navigation, SocialGlyphCollection } from '..'
import Newsletter from '../Newsletter/Newsletter'
import styles from './Header.module.sass'

export default function Header() {
    return (
        <header className={styles.header}>
            <Banner />
            <Avatar />
            <h1>nullgato</h1>
            <h2
                style={{
                    maxWidth: 400,
                    textAlign: 'center',
                    paddingRight: 5,
                    paddingLeft: 5,
                }}
            >
                i make music for the girlies with soft souls and the boys who
                screw everything up just like me 😌
            </h2>
            <SocialGlyphCollection />
            <Newsletter />
            <Navigation />
        </header>
    )
}
