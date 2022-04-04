import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import './login'

class LoginPage extends React.Component {
  
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <React.Fragment>
            <html>
              
              <div className="headerbackdrop">
                <div className="outerheader">
                  <div className = "headerbackdrop">
                    <img src = {require('C:/Users/ezekm/OneDrive/Pictures/Coding/Photoshop/output/test.05.jpg')} />
                    <img src = {require('C:/Users/ezekm/.git/gitlazealclones/Frontend/src/_images/headerpic.jpg')} alt = "dang"
                      className = "logo"
                    />
                      <div className = "outerheaderlogo">
                      </div>
                  </div>
                </div>
              <div>
        
                </div>
                  <input id="check01" type="checkbox" name="menu" />
                    <label for="check01">Menu</label>
                      <ul class="submenu">
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                      </ul>
        
        
              </div>
            <div className="backdrop">
        
            </div>
        
              
        
        
            </html>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };