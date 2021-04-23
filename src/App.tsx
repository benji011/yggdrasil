import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import '~/assets/css/App.css'
import { Chatroom } from '~/components/Chatroom'
import { NavBar } from '~/components/header/NavBar'
import { GitHub as LoginWithGitHub } from '~/components/login/GitHub'
import { Google as LoginWithGoogle } from '~/components/login/Google'

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
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, { idField: 'id' })

  const threadsRef = firestore.collection(
    '45dcf07c-a3f8-11eb-bcbc-0242ac130002'
  )
  const threadsQuery = threadsRef.orderBy('createdAt').limit(25)
  const [threads] = useCollectionData(threadsQuery, { idField: 'id' })

  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header>
        <NavBar user={user} auth={auth} threads={threads} />
      </header>
      <section>
        {user && (
          <Chatroom messages={messages} messagesRef={messagesRef} auth={auth} />
        )}
        {!user && (
          <div role="group" className="btn-group">
            <div className="field is-grouped">
              <LoginWithGoogle firebase={firebase} auth={auth} />
              <LoginWithGitHub firebase={firebase} auth={auth} />
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
