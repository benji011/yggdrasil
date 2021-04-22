import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { Chatroom } from '~/components/Chatroom'

import { useAuthState } from 'react-firebase-hooks/auth'

import '~/assets/css/App.css'
import { Google as LoginWithGoogle } from '~/components/login/Google'
import { Signout } from '~/components/Signout'

/**
 * TODO: Read these from environment as vars later.
 */
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatroom</h1>
        {user ? (
          <Signout auth={auth} />
        ) : (
          <LoginWithGoogle firebase={firebase} auth={auth} />
        )}
      </header>
      <section>
        {user && <Chatroom firestore={firestore} auth={auth} />}
      </section>
    </div>
  )
}

export default App
