

// import auth from '../auth.json'

// export const exchangeAuthCode = async (code: string) => {
//   const params = new URLSearchParams()
//   params.append('code', code)
//   params.append('client_id', auth.clientId)
//   params.append('client_secret', auth.clientSecret)
//   params.append('redirect_uri', 'http://localhost:3000/api/auth/google')
//   params.append('grant_type', 'authorization_code')
//   const response = await fetch('https://oauth2.googleapis.com/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: params
//     })
//   return await response.json()
// }


// export const getAccessToken = async () => {

//     const params = new URLSearchParams()
//     params.append('client_id', auth.clientId)
//     params.append('client_secret', auth.clientSecret)
//     params.append('refresh_token', auth.refreshToken)
//     params.append('grant_type', 'refresh_token')
//     params.append('expires_in', '43200')

//     const response = await fetch('https://oauth2.googleapis.com/token', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: params
//         })
//     return await response.json()
    
// }