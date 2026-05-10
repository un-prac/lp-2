import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    if(username == 'admin' && password == 'admin') {
      setLoggedIn(true)
    } else {
      setError('Wrong username or password!')
    }
  }

  function handleLogout() {
    setLoggedIn(false)
    setUsername('')
    setPassword('')
    setError('')
  }

  if(loggedIn) {
    return (
      <div className="success-box">
        <h3 style={{color:'green'}}>Login Successful!</h3>
        <p>Welcome Admin</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <div className="login-box">
      <h4>Login</h4>
      <hr/>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br/>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <br/>
        <div>
          <label>Password:</label><br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br/>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
      <p style={{color:'gray'}}>hint: admin / admin</p>
    </div>
  )
}

export default App
