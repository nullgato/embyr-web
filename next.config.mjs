/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/bandcamp',
                destination: 'https://embyr.bandcamp.com',
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
                    'https://www.facebook.com/profile.php?id=61563811955653',
                permanent: false,
            },
            {
                source: '/instagram',
                destination: 'https://instagram.com/embyrdot',
                permanent: false,
            },
            {
                source: '/ko-fi',
                destination: 'https://ko-fi.com/embyrdot',
                permanent: false,
            },
            {
                source: '/soundcloud',
                destination: 'https://soundcloud.com/embyrdot',
                permanent: false,
            },
            {
                source: '/threads',
                destination: 'https://threads.net/@embyrdot',
                permanent: false,
            },
            {
                source: '/tiktok',
                destination: 'https://www.tiktok.com/@embyrdot',
                permanent: false,
            },
            {
                source: '/twitch',
                destination: 'https://twitch.com/transcendingember',
                permanent: false,
            },
            {
                source: '/twitter',
                destination: 'https://twitter.com/embyrdot',
                permanent: false,
            },
            {
                source: '/youtube',
                destination: 'https://youtube.com/@embyrdot',
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
