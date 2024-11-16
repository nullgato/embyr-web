
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

const LatestSongCollection = () => {
    const spotifyTrackId = "5gKpzz20xLufhegbW1azxQ"
    const appleTrackUrl = "https://embed.music.apple.com/us/album/borderline/1779502461?i=1779502462"
    const youtubeTrackUrl = "https://www.youtube.com/embed/Y7UbvhTprLg?si=_DFBBuogMKEDXiDk"

    return (
        <div className="w-full">
            <h2 className="text-center text-2xl mb-5">⎯ Latest Available Songs ⎯</h2>

            <iframe style={spotifyStyle} src={`https://open.spotify.com/embed/track/${spotifyTrackId}`} width="100%" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <iframe style={appleStyle} className="my-5" allow="autoplay *; encrypted-media *;"sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={appleTrackUrl}></iframe>

            <iframe style={youtubeStyle} src={youtubeTrackUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

const appleStyle = {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    background: 'transparent',
    borderRadius: '12px'
}

const spotifyStyle = {
    width: '100%',
    height: 152,
    borderRadius: '12px'
}

const youtubeStyle = {
    width: '100%',
    height: 152,
    borderRadius: '12px'
}

export default LatestSongCollection

//TODO: Pull latest track data from the SoundCloud API
