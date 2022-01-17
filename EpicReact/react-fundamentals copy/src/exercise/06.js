// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInputRef = React.useRef();
  //const [error, setError] = React.useState(0);

  const [username, setUsername] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
//   const text = event.target.elements[0].value;
    onSubmitUsername(userNameInputRef.current.value);

  }
  
  function handleChange(event) {
    setUsername(event.target.value.toLowerCase());
/*     event.preventDefault();
    const newValue = event.target.value;
    console.log(newValue);
    const isValid = newValue === newValue.toLowerCase();
    setError(isValid ? null : 'Username must be lowercase');
 */  }
   return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id='username' onChange={handleChange} value={username} type="text" ref={userNameInputRef}/>
      {/* <div role="alert" style={{color: 'Red'}}>{error}</div> */}
      </div>
      <button /* disabled={Boolean(error)} */ type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
