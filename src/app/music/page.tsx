import { ButtonTree, ContentSection, LinkButtonProps } from '@/components'
import {
    faApple,
    faSpotify,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default function Music() {
    const items: LinkButtonProps[] = [
        {
            href: '/spotify',
            icon: faSpotify,
            title: 'spotify',
            label: 'listen and see playlists',
        },
        {
            href: '/apple',
            icon: faApple,
            title: 'apple music',
            label: 'vibe to hq versions',
        },
        {
            href: '/youtube',
            icon: faYoutube,
            title: 'youtube',
            label: 'watch or listen',
        },
    ]

    return (
        <ContentSection section="music">
            <ButtonTree items={items} />
        </ContentSection>
    )
}
