import {
    faApple,
    faBandcamp,
    faInstagram,
    faSoundcloud,
    faSpotify,
    faThreads,
    faTiktok,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import styles from './SocialGlyphCollection.module.sass'
import SocialGlyphLink from './SocialGlyphLink'

export default function SocialGlyphCollection() {
    return (
        <div className={styles.glyphs}>
            <SocialGlyphLink href="/spotify" icon={faSpotify} />
            <SocialGlyphLink href="/apple" icon={faApple} />
            <SocialGlyphLink href="/youtube" icon={faYoutube} />
            <SocialGlyphLink href="/soundcloud" icon={faSoundcloud} />
            <SocialGlyphLink href="/bandcamp" icon={faBandcamp} />
            <SocialGlyphLink href="/tiktok" icon={faTiktok} />
            <SocialGlyphLink href="/threads" icon={faThreads} />
            <SocialGlyphLink href="/instagram" icon={faInstagram} />
        </div>
    )
}
