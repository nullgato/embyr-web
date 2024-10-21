import useWindowDimensions from '@/hooks/WindowDimensions'

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

    /*
    https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1893596988&color=%23c43863&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true
    */

    return (
        <div className="w-full as">
            <iframe
                className="w-full h-auto sm:h-32 aspect-square sm:aspect-auto"
                allow="autoplay"
                src={`${baseUrl}/${trackId}${query}`}
            ></iframe>
        </div>
    )
}

export default LatestSong

//TODO: Pull latest track data from the SoundCloud API
