"use client";

import { useEffect, useRef } from 'react'
import useLoadGoogleLoginScript from '../common/useLoadGoogleLoginScript'
import CredentialResponse = google.accounts.id.CredentialResponse

import auth from '../../auth.json'



export type GoogleButtonText = 'signin_with' | 'signup_with' | 'continue_with' | 'signin' | undefined

// const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string
export const GOOGLE_CLIENT_ID = auth.clientId
if (!GOOGLE_CLIENT_ID) {
  console.error('Google client ID missing')
}

export default function GoogleLogin({
  text,
  onLogin,
  onError,
  smallScreen,
}: {
  text: GoogleButtonText,
  onLogin: (response: CredentialResponse) => void
  onError: () => void
  smallScreen?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const loaded = useLoadGoogleLoginScript()


  useEffect(() => {
    if (!loaded) return
    window.google?.accounts.id.initialize({
      
      auto_select: true,
      client_id: GOOGLE_CLIENT_ID,
      callback: (credentialResponse) => {
        if (!credentialResponse?.credential) {
          onError()
        }
        onLogin(credentialResponse)
      },
    })

    window.google?.accounts.id.renderButton(ref.current!, {
      locale: 'en',
      logo_alignment: 'center',
      shape: 'rectangular',
      size: 'large',
      text: text,
      theme: undefined,
      type: 'standard',
      

    })
  }, [loaded, onError, onLogin, smallScreen, text])

  return <div ref={ref} />
}
