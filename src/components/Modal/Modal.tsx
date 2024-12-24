import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Modal.module.sass'

interface IProps {
    children: React.ReactNode
    dismiss: () => void
    isVisible: boolean
}

export default function Modal({
    children,
    dismiss,
    isVisible = false,
}: IProps) {
    return !isVisible ? null : (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalClose} onClick={dismiss}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                {children}
            </div>
        </div>
    )
}
