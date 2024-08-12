import {
    faBandcamp,
    faInstagram,
    faSoundcloud,
    faThreads,
    faTiktok,
    faTwitch,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import IconLink from './IconLink'

const SocialIcons = () => {
    return (
        <div className="icon-links mb-1 py-3 text-2xl sm:text-3xl">
            <IconLink icon={faSoundcloud} href="/soundcloud" />
            <IconLink icon={faBandcamp} href="/bandcamp" />
            <IconLink icon={faTwitch} href="/twitch" />
            <IconLink icon={faYoutube} href="/youtube" />
            <IconLink icon={faTiktok} href="/tiktok" />
            <IconLink icon={faThreads} href="/threads" />
            <IconLink icon={faInstagram} href="/instagram" />
            <IconLink icon={faTwitter} href="/twitter" />
        </div>
    )
}

export default SocialIcons
