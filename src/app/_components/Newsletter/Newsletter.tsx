'use client'

import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

import { ActionButton, Modal } from '@/components'
import { useState } from 'react'
import styles from './Newsletter.module.sass'
import { enrollNewsletter } from './actions'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const isEmailValid = (): boolean => {
        const regex = new RegExp(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        )
        return regex.exec(email) !== null
    }

    const onSubmit = async () => {
        setIsLoading(true)
        await enrollNewsletter(email)
        setIsSubmitted(true)
        setIsLoading(false)
    }

    return (
        <div className={styles.mailingList}>
            <ActionButton
                action={() => setIsVisible(true)}
                icon={faMailBulk}
                title="join the newsletter"
                label="subscribe to nullgato music & news"
            />
            <Modal isVisible={isVisible} dismiss={() => setIsVisible(false)}>
                <div className={styles.modal}>
                    <h1>join the newsletter</h1>
                    <p>
                        join the mailing list to get updates whenever i drop
                        music, merch, and more
                    </p>

                    {isSubmitted && (
                        <div className={styles.animatedCheck}>
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M4.1 12.7L9 17.6 20.3 6.3"
                                    fill="none"
                                />{' '}
                            </svg>
                        </div>
                    )}

                    {!isSubmitted && (
                        <div className={styles.form}>
                            {!isLoading && (
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    data-valid={isEmailValid()}
                                />
                            )}
                            <button
                                className={styles.joinBtn}
                                onClick={onSubmit}
                                disabled={!isEmailValid()}
                            >
                                <span className={styles.btnText}>
                                    {!isLoading ? 'subscribe' : 'enrolling...'}
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    )
}
