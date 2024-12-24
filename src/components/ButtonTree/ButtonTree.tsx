import { LinkButton, LinkButtonProps } from '@/components/LinkButton/LinkButton'
import styles from './ButtonTree.module.sass'

interface IProps {
    items: LinkButtonProps[]
}

export default function ButtonTree({ items }: IProps) {
    return (
        <div className={styles.buttonTree}>
            {items.map((item) => {
                return (
                    <LinkButton
                        key={item.title}
                        href={item.href}
                        icon={item.icon}
                        title={item.title}
                        label={item.label}
                        self={item.self}
                    />
                )
            })}
        </div>
    )
}
