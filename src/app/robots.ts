import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: '/admin/',
        },
        sitemap: 'https://bratcats.gay/sitemap.xml',
    }
}

export default robots
