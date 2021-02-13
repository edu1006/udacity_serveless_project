// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'r0pn3v1cel'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-89k3jm1u.us.auth0.com',            // Auth0 domain
  clientId: 'jTEpj0UisFSX2Ojcm0i6WcuT5WS0y01r',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
