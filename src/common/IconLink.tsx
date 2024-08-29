import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface IProps {
    icon: IconDefinition
    href: string
}

const IconLink = (props: Readonly<IProps>) => {
    return (
        <Link href={props.href} target="_blank">
            <FontAwesomeIcon
                className="p-2 text-white hover:cursor-pointer hover:text-opacity-100"
                icon={props.icon}
            />
        </Link>
    )
}

export default IconLink
