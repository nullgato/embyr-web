import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactNode } from 'react'

interface IProps {
    href: string
    icon: IconDefinition
    children: ReactNode
    className?: string
}

const IconLinkButton = (props: Readonly<IProps>) => {
    return (
        <Link href={props.href} target="_blank">
            <button
                className={`flex min-h-16 w-full flex-row items-center border-2 border-solid border-white bg-slate-950 bg-opacity-50 p-2 ${props.className}`}
            >
                <FontAwesomeIcon
                    className="absolute float-left p-2 text-4xl text-white hover:cursor-pointer hover:text-opacity-100"
                    icon={props.icon}
                />
                <div className="flex-1">{props.children}</div>
            </button>
        </Link>
    )
}

export default IconLinkButton
