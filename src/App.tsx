import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '~/assets/css/App.css'
import { Chatroom } from '~/components/chatroom/Chatroom'
import { Footer } from '~/components/footer/Footer'
import { NavBar } from '~/components/header/NavBar'
import { AddChatroomModal } from '~/components/home/AddChatroomModal'
import { Dashboard } from '~/components/home/Dashboard'
import { Home } from '~/components/home/Home'
import { Landing } from '~/components/home/Landing'
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
    author: '',
  })
  const [userDoc, setUserDoc] = useState({
    uid: '',
    chatrooms: 0,
    email: '',
    isDisabled: false,
    name: '',
    reasonForBan: '',
  })
  const [showModal, setShowModal] = useState(false)

  /**
   * Get user data to check if this user is either banned or has added a lot of chatrooms
   */
  const getUserData = async (userId: string) => {
    const userDataRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = firestore
      .collection('users')
      .doc(userId)
    const doc: firebase.firestore.DocumentData = await userDataRef.get()
    if (doc) {
      setUserDoc(doc.data())
    }
  }

  /**
   * Called as default 'componentDidMount function'
   */
  useEffect(() => {
    if (user?.uid) {
      getUserData(user?.uid)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="App">
        <header>
          <NavBar
            user={user}
            auth={auth}
            userDoc={userDoc}
            firestore={firestore}
            setThreadData={setThreadData}
            setShowModal={setShowModal}
          />
        </header>
        <AddChatroomModal
          user={user}
          showModal={showModal}
          setShowModal={setShowModal}
          firestore={firestore}
        />
      </div>
      <Route exact path="/">
        {user ? <Home /> : <Landing />}
      </Route>
      <Route path="/home">{user ? <Home /> : <Login auth={auth} />}</Route>
      <Route path="/dashboard">
        {user && (
          <Dashboard firestore={firestore} setThreadData={setThreadData} />
        )}
      </Route>
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
