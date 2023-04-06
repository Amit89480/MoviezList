import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from "../MoviesList"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the name and password are matching
   
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      // Set the loggedIn state to true
      setLoggedIn(true);
      setError('');
      
    } else {
      // Show the "Invalid Credentials" message to the user
      setError('Invalid Credentials');
    }
  };

  if (loggedIn) {
    // Navigate the user to the MovieList component
  
    return <MovieList />;
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div class="mb-3"> 
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" value={email}  onChange={handleEmailChange}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" value={password} onChange={handlePasswordChange}  class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
    
    {error && <div>{error}</div>}
  </form>
  </>
  );
}

export default Login;
