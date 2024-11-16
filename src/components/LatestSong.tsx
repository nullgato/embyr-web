import IconLinkButton from '@/common/IconLinkButton'
import useWindowDimensions from '@/hooks/WindowDimensions'
import { faApple, faYoutube } from '@fortawesome/free-brands-svg-icons'

interface IAPIParams {
    color: string
    auto_play: boolean
    hide_related: boolean
    show_comments: boolean
    show_user: boolean
    show_reposts: boolean
    show_teaser: boolean
    visual: boolean
}

const LatestSong = () => {
    const windowDimensions = useWindowDimensions()

    /* Spotify Embed */
    /*
    const baseUrl =
        'https://w.soundcloud.com/player?url=https%3A//api.soundcloud.com/tracks'
    const trackId = 1938045329
    const apiParams: IAPIParams = {
        color: 'c43863',
        auto_play: false,
        hide_related: false,
        show_comments: false,
        show_user: true,
        show_reposts: true,
        show_teaser: true,
        visual:
            windowDimensions.width === undefined || windowDimensions.width < 640
                ? true
                : false,
    }

    let query = ''
    for (const param in apiParams)
        query += `&${param}=${apiParams[param as keyof IAPIParams]}`

    https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1893596988&color=%23c43863&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true
    */

    const spotifyTrackId = "5gKpzz20xLufhegbW1azxQ"

    return (
        <div className="w-full">
            <iframe className="border-radius:12px" src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator`} width="100%" height="152" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            
            <IconLinkButton icon={faApple} href="https://music.apple.com/us/album/borderline/1779502461?i=1779502462" className="my-4">
                <p className="font">Also on Apple Music!</p>
            </IconLinkButton>
            
            <IconLinkButton icon={faYoutube} href="https://music.youtube.com/watch?v=Y7UbvhTprLg&si=3-dRAbvgbAmgAzMZ">
                <p className="font">And YouTube Music!</p>
            </IconLinkButton>
        </div>
    )
}

export default LatestSong

//TODO: Pull latest track data from the SoundCloud API
