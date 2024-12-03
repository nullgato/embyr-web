import '@/app/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { joinCss } from '@/utilities/css-utilities'
import { DM_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import { metadata } from '@/common/metadata'

const inter = DM_Sans({ subsets: ['latin'] })

interface IProps {
    children: ReactNode
}

const RootLayout = (props: Readonly<IProps>) => {
    return (
        <html lang="en">
            <body
                className={joinCss(
                    inter.className,
                    'relative z-10 scroll-auto'
                )}
            >
                {props.children}
            </body>
        </html>
    )
}

export default RootLayout
export { metadata }
