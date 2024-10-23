import {
    faDiscord,
    faGithub,
    faInstagram,
    faSoundcloud,
    faThreads,
    faTiktok,
    faTwitch,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import IconLinkButton from '../common/IconLinkButton'

const SocialLinks = () => {
    return (
        <>
            <h2 className="text-center text-2xl mb-5">⎯ Social Media ⎯</h2>

            <IconLinkButton icon={faMugHot} href="/ko-fi">
                <p className="font">Ko-fi</p>
                <p className="text-xs font-light">
                    Tip & view creative financial goals
                </p>
            </IconLinkButton>
            <IconLinkButton
                className="mt-4"
                icon={faSoundcloud}
                href="/soundcloud"
            >
                <p className="font">SoundCloud</p>
                <p className="text-xs font-light">Free streaming of my music</p>
            </IconLinkButton>
            <IconLinkButton className="mt-4" icon={faTwitch} href="/twitch">
                <p className="font">Twitch</p>
                <p className="text-xs font-light">
                    9pm (CST) streaming almost everyday!
                </p>
            </IconLinkButton>
            <IconLinkButton className="mt-4" icon={faYoutube} href="/youtube">
                <p className="font">YouTube</p>
                <p className="text-xs font-light">
                    I also stream here at the same time!
                </p>
            </IconLinkButton>
            <IconLinkButton className="mt-4" icon={faTiktok} href="/tiktok">
                <p className="font">The TikTok</p>
                <p className="text-xs font-light">a.k.a the Ke$ha app</p>
            </IconLinkButton>
            <IconLinkButton className="mt-4" icon={faThreads} href="/threads">
                <p className="font">Threads</p>
                <p className="text-xs font-light">
                    My most active social media
                </p>
            </IconLinkButton>
            <IconLinkButton
                className="mt-4"
                icon={faInstagram}
                href="/instagram"
            >
                <p className="font">Instagram</p>
                <p className="text-xs font-light">
                    Most of my pictures go here
                </p>
            </IconLinkButton>
            <IconLinkButton className="mt-4" icon={faGithub} href="/github">
                <p className="font">GitHub</p>
                <p className="text-xs font-light">
                    Source code for my projects
                </p>
            </IconLinkButton>
            <IconLinkButton className="mt-4" icon={faDiscord} href="/discord">
                <p className="font">Discord</p>
                <p className="text-xs font-light">
                    Bratcats Lounge - Community!
                </p>
            </IconLinkButton>
        </>
    )
}

export default SocialLinks
