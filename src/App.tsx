import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '~/assets/css/App.css'
import { Chatroom } from '~/components/Chatroom'
import { Home } from '~/components/Home'
import { Landing } from '~/components/Landing'
import { Modal } from '~/components/Modal'
import { Footer } from '~/components/footer/Footer'
import { NavBar } from '~/components/header/NavBar'
import { Login } from '~/components/login/Login'

const app: firebase.app.App = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})

const auth: firebase.auth.Auth = app.auth()
const firestore: firebase.firestore.Firestore = app.firestore()

function App() {
  const [user] = useAuthState(auth)
  const [threadData, setThreadData] = useState({
    createdAt: { nanoseconds: 0, seconds: 0 },
    title: '',
    id: '',
    description: '',
  })
  const [showModal, setShowModal] = useState(false)
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar
            user={user}
            auth={auth}
            firestore={firestore}
            setThreadData={setThreadData}
            setShowModal={setShowModal}
          />
        </header>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          firestore={firestore}
        />
      </div>
      <Route exact path="/">
        {user ? <Home /> : <Landing />}
      </Route>
      <Route path="/home">{user ? <Home /> : <Login auth={auth} />}</Route>
      {user && (
        <Switch>
          <Route
            path="/room/:id"
            children={
              <Chatroom
                firestore={firestore}
                auth={auth}
                threadData={threadData}
              />
            }
          />
        </Switch>
      )}
      <Route path="/login">
        {!user ? (
          <Login auth={auth} />
        ) : user ? (
          <Home />
        ) : (
          <Login auth={auth} />
        )}
      </Route>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
