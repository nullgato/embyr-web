'use client'

import { usePathname } from 'next/navigation'

import { LinkButton } from '@/components'
import styles from './Navigation.module.sass'

export default function Navigation() {
    const pathname = usePathname()

    const isSelected = (path: string) => {
        return path === pathname
    }

    return (
        <div className={styles.navigation}>
            <LinkButton
                className={isSelected('/') ? styles.navSelected : undefined}
                href="/"
                title="showcase"
                self
            />
            <LinkButton
                className={
                    isSelected('/music') ? styles.navSelected : undefined
                }
                href="/music"
                title="music"
                self
            />
            <LinkButton
                className={
                    isSelected('/socials') ? styles.navSelected : undefined
                }
                href="/socials"
                title="socials"
                self
            />
            <LinkButton
                className={
                    isSelected('/merch') ? styles.navSelected : undefined
                }
                href="#"
                title="merch"
                self
            />
        </div>
    )
}
