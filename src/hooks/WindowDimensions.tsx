import { useEffect, useState } from "react"

interface IDimensions {
    width: number | undefined
    height: number | undefined
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState<IDimensions>({ width: undefined, height: undefined})

    useEffect(() => {
        const onResize = () => {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener('resize', onResize)
        onResize()

        return () => window.removeEventListener('resize', onResize)
    }, [])

    return windowDimensions
}

export default useWindowDimensions