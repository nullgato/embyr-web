import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './ActionButton.module.sass'

interface IProps {
    action: () => void
    className?: string
    icon?: IconDefinition
    title?: string
    label?: string
    self?: boolean
}

const ActionButton = (props: IProps) => {
    const classes: string[] = [styles.actionButton]
    if (props.className) classes.push(props.className)

    return (
        <div className={classes.join(' ')} onClick={props.action}>
            <button>
                {props.icon && <FontAwesomeIcon icon={props.icon} />}
                <div>
                    {props.title && <h1>{props.title}</h1>}
                    {props.label && <p>{props.label}</p>}
                </div>
            </button>
        </div>
    )
}

export { ActionButton, type IProps as ActionButtonProps }
