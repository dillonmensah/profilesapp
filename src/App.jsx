import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import './App.css'

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Dillon Mensah</h1>
          <h2>AWS Web App Assignment</h2>
          <p>Welcome, {user?.signInDetails?.loginId}</p>

          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default App