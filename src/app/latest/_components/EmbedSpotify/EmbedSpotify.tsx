import { getLatest } from '@/features/spotify/actions'
import { TokenStore } from '@/features/spotify/stores'
import styles from './EmbedSpotify.module.sass'

const EmbedSpotify = async () => {
    const token = new TokenStore()
    if (token === null) return

    const data = await getLatest(token)

    return (
        <iframe
            className={styles.spotify}
            src={`https://open.spotify.com/embed/track/${data?.id}`}
            width="100%"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
    )
}

export { EmbedSpotify }
