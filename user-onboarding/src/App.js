import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './component/Form.js';

import schema from './validation/forSchema.js';
import * as yup from 'yup';

const initialFormData = {
username: '',
email: '',
password: '',
terms: false
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: ''
}
function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData]= useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const inputChange = (name,value) =>{
    validate(name,value);
    setFormData({...formData, [name]:value})
  }
  const onSubmit = () =>{
    axios.post('https://reqres.in/api/users', formData)
    .then(res => {
      setUsers([res.data],...users);
    })
    .catch(err => console.error(err))
    .finally(setFormData(initialFormData))
  }
  const validate = (name, value) =>{
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
  }

  return (
    <div>
      <Form
      values={formData}
      change= {inputChange}
      submit = {onSubmit}
      errors={formErrors}
      />
      {users.map(user => {
        return(
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
      )})}
    </div>
  );
}

export default App;
