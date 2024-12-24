import { ButtonTree, ContentSection, LinkButtonProps } from '@/components'
import {
    faInstagram,
    faThreads,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
    const items: LinkButtonProps[] = [
        {
            href: '/tiktok',
            icon: faTiktok,
            title: 'tiktok',
            label: 'look behind the scenes with tiktok',
        },
        {
            href: '/threads',
            icon: faThreads,
            title: 'threads',
            label: 'read my monologues and talk to me',
        },
        {
            href: '/instagram',
            icon: faInstagram,
            title: 'instagram',
            label: 'look at loafy pics',
        },
    ]

    return (
        <ContentSection section="music">
            <ButtonTree items={items} />
        </ContentSection>
    )
}
