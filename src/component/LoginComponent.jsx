import React from 'react';
import LoginService from '../service/LoginService';
import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const changeUsernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
    };

    const cancel = () => {
        setUsername('');
        setPassword('');
    };

    const validateLoginCredentials = (e) => {
        e.preventDefault();

        LoginService.login(username, password).then(res => {
            if (res.success) {
                alert('Welcome ' + res.user.username);
                navigate('/home');
            } else {
                alert('Login Failed');
            }
        });
    };

    return (
        <div>
            <div style={{ marginBlockStart: '40px' }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">User Login</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input placeholder="username" className="form-control" required
                                        value={username} onChange={changeUsernameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="password" className="form-control" required
                                        value={password} onChange={changePasswordHandler} />
                                </div>
                                <p></p>
                                <button className="btn btn-success" onClick={validateLoginCredentials}>Login</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;