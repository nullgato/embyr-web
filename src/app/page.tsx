'use client'

import IconLinkButton from '@/components/IconLinkButton'
import LatestSong from '@/components/LatestSong'
import SocialIcons from '@/components/SocialIcons'
import SocialLinks from '@/components/SocialLinks'
import avatar from '@/images/avatar.png'
import banner from '@/images/banner.png'
import { faBandcamp } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'

const Home = () => {
    return (
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
                            }}
                        />
                    </div>

                    <div className="avatar relative -mt-20 h-36 w-36">
                        <Image
                            quality={100}
                            sizes="9rem"
                            className="rounded-lg border-2 border-solid border-slate-100"
                            src={avatar}
                            alt="Banner picture of a screenshot from a session in Logic Pro X"
                            placeholder="blur"
                            fill
                        />
                    </div>

                    <div className="bio mt-3 text-center">
                        <p className="p-1 text-xl font-semibold">embyr.</p>
                        <p className="text-sm font-light tracking-wider">
                            [She/Her] Whiny Musician & Streamer 🏳️‍⚧️
                        </p>
                        <div className="flex flex-row"></div>
                    </div>

                    <SocialIcons />

                    <div className="latest-info mt-5 w-full max-w-lg px-5 sm:px-0">
                        <LatestSong />
                        <IconLinkButton
                            className="mt-4"
                            icon={faBandcamp}
                            href="/bandcamp"
                        >
                            <p className="font">Bandcamp</p>
                            <p className="text-xs font-light">
                                Pay what you want - $0+
                            </p>
                            <p className="text-xs font-light">
                                All funds go towards distribution
                            </p>
                        </IconLinkButton>
                    </div>

                    <div className="content mt-14 w-full max-w-lg px-5 sm:px-0">
                        <SocialLinks />
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
                theme="light"
            />
        </>
    )
}

export default Home
