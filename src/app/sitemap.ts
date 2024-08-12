import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: 'https://bratcats.gay',
            lastModified: new Date(),
        },
    ]
}

export default sitemap
