import Image from 'next/image'

import banner from '@/assets/images/banner.jpg'
import styles from './Banner.module.sass'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={banner} alt="" placeholder="blur" sizes="100w" fill />
        </div>
    )
}
