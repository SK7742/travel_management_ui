import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ marginBlockStart: '10px' }}>
            <footer>
            <div className="footer-copyright text-center py-3">© 2025 Copyright:
            <a href="#" style={{ textDecoration: 'none' }}> travel-management.com</a>
            </div>
            </footer>
            </div>
        );
    }
}

export default FooterComponent;