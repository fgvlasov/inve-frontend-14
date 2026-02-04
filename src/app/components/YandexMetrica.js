import { Router } from 'next/router'
import { useCallback, useEffect } from 'react'
import ym, { YMInitializer } from 'react-yandex-metrika'

export const YandexMetrica = ({ children }) => {
  const hit = useCallback((url) => {
    ym('hit', url)
  }, [])

  useEffect(() => {
    hit(window.location.pathname + window.location.search)
    Router.events.on('routeChangeComplete', (url) => hit(url))
  }, [hit])
  return (
    <>
      <YMInitializer
        accounts={[50335891]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          ecommerce: "dataLayer",
          webvisor: true,
          defer: true,
        }}
        version="1"
      />
      {children}
    </>
  )
}