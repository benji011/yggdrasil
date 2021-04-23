import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '~/assets/css/App.css'
import { Chatroom } from '~/components/Chatroom'
import { Landing } from '~/components/Landing'
import { NavBar } from '~/components/header/NavBar'
import { Login } from '~/components/login/Login'

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
    <Router>
      <div className="App">
        <header>
          <NavBar user={user} auth={auth} firestore={firestore} />
        </header>
      </div>
      <Route exact path="/">
        {!user ? <Login firebase={firebase} auth={auth} /> : <Landing />}
      </Route>
      <Switch>
        <Route
          path="/room/:id"
          children={<Chatroom firestore={firestore} auth={auth} />}
        />
      </Switch>
    </Router>
  )
}

export default App
