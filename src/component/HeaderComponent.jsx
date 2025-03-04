import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props) 
        this.state = {
           login: true,
           userCode: 'admin'
        } 
      }
    render() {
        if (this.state.login && this.state.userCode == 'admin') {
            return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#"><h1>Test Platform</h1></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="float-right">
                                <div class="navbar-nav" >
                                <a class="nav-item nav-link" href="/user/type/admin/addQuestion">Add Question</a>
                                <a class="nav-item nav-link" href="/user/type/admin/showAllQuestion">View Questions</a>
                                <a class="nav-item nav-link" href="#">Contact</a>
                                
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        } else if(this.state.login && this.state.userCode == 'candidate'){
            return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#"><h1>Test Platform</h1></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="float-right">
                                <div class="navbar-nav" >
                                <a class="nav-item nav-link" href="#">Contact</a>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        } else if(!this.state.login){
            return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#"><h1>Test Platform</h1></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="float-right">
                                <div class="navbar-nav" >
                                <a class="nav-item nav-link" href="http://localhost:3000/candidateRegister">SignUp</a>
                                <a class="nav-item nav-link" href="http://localhost:3000/login">Login</a>
                                <a class="nav-item nav-link" href="#">Contact</a>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }
        
    }
}

export default HeaderComponent;