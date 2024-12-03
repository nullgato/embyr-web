/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/bandcamp',
                destination: 'https://bratcatnullgato.bandcamp.com',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/nullgato',
                permanent: false,
            },
            {
                source: '/facebook',
                destination:
                    'https://www.facebook.com/bratcatnullgato',
                permanent: false,
            },
            {
                source: '/instagram',
                destination: 'https://instagram.com/bratcatnullgato',
                permanent: false,
            },
            {
                source: '/ko-fi',
                destination: 'https://ko-fi.com/bratcatnullgato',
                permanent: false,
            },
            {
                source: '/soundcloud',
                destination: 'https://soundcloud.com/bratcatnullgato',
                permanent: false,
            },
            {
                source: '/threads',
                destination: 'https://threads.net/@bratcatnullgato',
                permanent: false,
            },
            {
                source: '/tiktok',
                destination: 'https://www.tiktok.com/@nullmoggi',
                permanent: false,
            },
            {
                source: '/twitch',
                destination: 'https://twitch.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/twitter',
                destination: 'https://twitter.com/bratcatnullgato',
                permanent: false,
            },
            {
                source: '/youtube',
                destination: 'https://youtube.com/@BR4TC4T',
                permanent: false,
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/xhFZS5HuTY',
                permanent: false,
            },
        ]
    },
}

export default nextConfig
