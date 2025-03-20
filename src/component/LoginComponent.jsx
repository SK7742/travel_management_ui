import React, { Component } from 'react';
import LoginService from '../service/LoginService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    componentDidMount() {
        /*CandidateLoginService.getCandidate(this.state.candidateUserName, this.state.candidatePassword).then( (res) => {
            let candidateLoginCred = res.data;
            this.setState({candidateUserName: candidateLoginCred.candidateUserName,
                candidatePassword: candidateLoginCred.candidatePassword
            });
        });*/
    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    cancel() {
        this.props.history.push('/..');
    }
    validateLoginCredentials = (e) => {
        e.preventDefault();
        let userLoginCred = { username: this.state.username, password: this.state.password };
        console.log('candidateFetchQuery => ' + JSON.stringify(userLoginCred));

        LoginService.login(userLoginCred).then(res => {
            alert("Login Sucess!");
            this.props.history.push('/home');
        });
    }
    render() {
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
                                            value={this.state.username} onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="password" className="form-control" required
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <p></p>
                                    <button className="btn btn-success" onClick={this.validateLoginCredentials}>Login</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;