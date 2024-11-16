'use client'

import LatestSongCollection from '@/components/LatestSongCollection'
import SocialIcons from '@/components/SocialIcons'
import avatarIrl from '@/images/avatar-irl.png'
import avatar from '@/images/avatar.png'
import banner from '@/images/banner.png'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'

const Home = () => (
    <>
        <main className="fadeIn flex w-full flex-row justify-center py-0 text-white sm:py-16">
            <div className="flex w-full max-w-2xl flex-col items-center rounded-none pb-20 pt-0 sm:rounded-xl sm:pt-12">
                <div className="banner relative h-52 w-full max-w-xl sm:h-72">
                    <Image
                        quality={80}
                        className="rounded-none sm:rounded-lg"
                        src={banner}
                        alt="Banner picture of a screenshot from a session in Logic Pro X"
                        placeholder="blur"
                        fill
                        style={{
                            objectFit: 'cover',
                        }} />
                </div>

                <div className="avatar relative -mt-20 h-36 w-36">
                    <Image
                        quality={90}
                        sizes="9rem"
                        className="rounded-lg border-2 border-solid border-slate-100"
                        src={avatar}
                        alt="Avatar picture of the nullgato fursona"
                        placeholder="blur"
                        fill />

                    <Image
                        id="avatar-irl"
                        quality={90}
                        sizes="9rem"
                        className="fadeInOut rounded-lg border-2 border-solid border-slate-100"
                        src={avatarIrl}
                        alt="Avatar picture of the actual nullgato"
                        placeholder="blur"
                        fill />
                </div>

                <div className="bio mt-3 text-center">
                    <p className="p-1 text-xl font-semibold">nullgato</p>
                    <p className="text-sm font-light tracking-wider max-w-sm">
                        i make music for the girlies with soft souls and the boys who screw everything up just like me 😌
                    </p>
                    <div className="flex flex-row"></div>
                </div>

                <SocialIcons />

                <div className="latest-info mt-5 w-full max-w-lg px-5 sm:px-0">
                    <LatestSongCollection />
                </div>

                <div className="footer mt-14 w-full max-w-lg text-center text-sm font-light">
                    <p>© {new Date().getFullYear()} Bratcats Imperium</p>
                    <p>
                        Developed & Designed by{' '}
                        <Link
                            className="text-red-300"
                            href="/github"
                            target="_blank"
                        >
                            nullgato
                        </Link>
                    </p>
                </div>
            </div>
        </main>

        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
    </>
)

export default Home
