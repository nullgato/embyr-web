import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import styles from './LinkButton.module.sass'

interface IProps {
    href: string
    className?: string
    icon?: IconDefinition
    title?: string
    label?: string
    self?: boolean
}

export default function LinkButton(props: IProps) {
    const classes: string[] = [styles.linkButton]
    if (props.className) classes.push(props.className)
    return (
        <Link
            className={classes.join(' ')}
            href={props.href}
            target={props.self ? '_self' : '_blank'}
        >
            <button>
                {props.icon && <FontAwesomeIcon icon={props.icon} />}
                <div>
                    {props.title && <h1>{props.title}</h1>}
                    {props.label && <p>{props.label}</p>}
                </div>
            </button>
        </Link>
    )
}

export { LinkButton, type IProps as LinkButtonProps }
