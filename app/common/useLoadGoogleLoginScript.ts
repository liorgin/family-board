import { useEffect, useState } from 'react'

export default function useLoadGoogleLoginScript(): boolean {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://accounts.google.com/gsi/client'
    scriptTag.async = true
    scriptTag.defer = true
    scriptTag.onload = () => {
      setLoaded(true)
    }
    scriptTag.onerror = () => {
      setLoaded(false)
    }

    document.body.appendChild(scriptTag)
    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  return loaded
}
