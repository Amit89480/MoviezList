import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('profession', profession);
    // Clear the form
    setName('');
    setPassword('');
    setEmail('');
    setPhone('');
    setProfession('');
  };

  return (
   <>
   <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="Name" value={name} onChange={handleNameChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" value={email} onChange={handleEmailChange} class="form-control" id="exampleInputPassword1"/>
  </div>



<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password"value={password} onChange={handlePasswordChange} class="form-control" id="exampleInputPassword1"/>
</div>

<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Mobile Number</label>
<input type="number" value={phone} onChange={handlePhoneChange} class="form-control" id="exampleInputPassword1"/>
</div>
 
<label>
Profession:
<select value={profession} onChange={handleProfessionChange}>
  <option value="">Select a profession</option>
  <option value="developer">Developer</option>
  <option value="designer">Designer</option>
  <option value="writer">Writer</option>
  <option value="other">Other</option>
</select>
</label>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
   </>
  );
}

export default Signup;
