import Image from 'next/image'

import avatar from '@/assets/images/avatar.png'
import styles from './Avatar.module.sass'

export default function Avatar() {
    return (
        <div className={styles.avatar}>
            <Image
                style={{ objectFit: 'cover' }}
                src={avatar}
                alt=""
                placeholder="blur"
                sizes="100w"
                fill
            />
        </div>
    )
}
