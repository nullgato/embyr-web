import { TokenStore } from '../stores'

const spotifetch = async <TData>(
    store: TokenStore,
    url: string,
    request: RequestInit
) => {
    const trueToken = await store.get()
    if (!trueToken) return

    const headers = new Headers(request.headers)
    headers.set('Authorization', `Bearer ${trueToken.access_token}`)
    request.headers = headers

    const res = await fetch(url, request)
    if (res.status === 200) return (await res.json()) as TData
    console.log(res)
}

export { spotifetch }
