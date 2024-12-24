import styles from './ContentSection.module.sass'

interface IProps {
    section: string
    children: React.ReactNode
}

export default function ContentSection({ section, children }: IProps) {
    return (
        <div className={styles.contentSection}>
            <h1>⎯ {section} ⎯</h1>
            {children}
        </div>
    )
}
