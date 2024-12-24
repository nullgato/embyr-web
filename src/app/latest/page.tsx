import { Suspense } from 'react'

import { ContentSection } from '@/components'
import { EmbedSkeleton, EmbedSpotify } from './_components'
import { EmbedYoutube } from './_components/EmbedYoutube/EmbedYoutube'
import styles from './page.module.sass'

export default async function Latest() {
    return (
        <ContentSection section="latest">
            <div className={styles.embedWrapper}>
                <Suspense fallback={<EmbedSkeleton />}>
                    <EmbedSpotify />
                </Suspense>
                <Suspense fallback={<EmbedSkeleton />}>
                    <EmbedYoutube />
                </Suspense>
            </div>
        </ContentSection>
    )
}
