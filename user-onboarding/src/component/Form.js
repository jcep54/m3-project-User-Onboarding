import React from 'react';


function Form(props) {
    const { submit, change, errors} = props;
    const {username, email, password, terms} = props.values;

    const onChange = e =>{
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox'? checked : value;
        change(name,valueToUse)
    }
    const onSubmit = e =>{
        e.preventDefault()
        submit()
    }

    return(
        <div>
            <h1>Used up users</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.terms}</p>
            <form onSubmit={onSubmit}>
                <label> Username:
                    <input
                    name='username'
                    type='text'
                    value={username}
                    onChange={onChange}
                    />
                </label>
            
                <label> Email:
                    <input
                    name='email'
                    type='text'
                    value={email}
                    onChange={onChange}
                    />
                </label>
                <label> Password:
                    <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChange}
                    />
                </label>
                <label> Aggree to terms of service
                    <input
                    type='checkbox'
                    name='terms'
                    checked={terms}
                    onChange={onChange}
                    />
                </label>
                <input type='submit' value='Create a friend' />            
            </form>
        </div>
    )
}


export default Form;