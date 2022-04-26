import React, {useState} from 'react';

import { userService } from '../_services';

export function LoginPage (props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleNameChange = (e) => {
        const { value } = e.target;
        setUserName(value)
    }
    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        setLoading(true);
        userService.login(username, password)
            .then(user => {
                    setLoading(true);
                    props.history.push('/');
                }
            ).catch(error => {
                setError(error);
                setLoading(false);
            });
    }

    return <div>
        <div>
            Username: test<br />
            Password: test
        </div>
        <h2>Login</h2>
        <form name="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} onChange={handleNameChange} />
                {submitted && !username &&
                    <div>Username is required</div>
                }
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                {submitted && !password &&
                    <div>Password is required</div>
                }
            </div>
            <div>
                <button disabled={loading}>Login</button>
                {loading && "Loading..."
                }
            </div>
            {error &&
                <div>{error}</div>
            }
        </form>
    </div>
}