import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface IProps {
    href: string
    icon: IconDefinition
}

export default function SocialGlyphLink({ href, icon }: IProps) {
    return (
        <Link href={href} target="_blank">
            <FontAwesomeIcon icon={icon} />
        </Link>
    )
}
