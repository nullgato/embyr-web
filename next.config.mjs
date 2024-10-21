/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/bandcamp',
                destination: 'https://nullmoggi.bandcamp.com',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/facebook',
                destination:
                    'https://www.facebook.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/instagram',
                destination: 'https://instagram.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/ko-fi',
                destination: 'https://ko-fi.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/soundcloud',
                destination: 'https://soundcloud.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/threads',
                destination: 'https://threads.net/@nullmoggi',
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
                destination: 'https://twitter.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/youtube',
                destination: 'https://youtube.com/@nullmoggi',
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
