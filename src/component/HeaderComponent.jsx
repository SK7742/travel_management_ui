import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            brandName: "Travel Management"
        }
        this.changeCurrentLandingPage = this.changeCurrentLandingPage.bind(this); 
      }
      changeCurrentLandingPage(page) {
        this.setState({currentLandingPage: page});
        window.location.href = 'http://localhost:3000/sign-up';
    }

    render() {
        return (
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                            <a class="navbar-brand" href="#"><h1>{this.state.brandName}</h1></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="float-right">
                                    <div class="navbar-nav" >
                                    <a class="nav-item nav-link" href="http://localhost:3000/login">Login</a>
                                    <a class="nav-item nav-link" href="http://localhost:3000/sign-up">SignUp</a>
                                    <a class="nav-item nav-link" href="#">Contact</a>
                                </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                );
            }
}

export default HeaderComponent;