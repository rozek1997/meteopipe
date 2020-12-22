import React from "react";
import {Auth} from "aws-amplify"
import Input from "../form/Input";
import "./AuthForm.css"

class SignInForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            user: {
                signInEmail: "",
                signInPassword: "",
            },
            errors: {
                signInEmail: "",
                signInPassword: ""
            }
        }
    }

    handleValidation = () => {
        const {user} = this.state;
        return user.signInPassword.length >= 6 && user.signInEmail.length > 0;
    }

    submit = async () => {

        const {signInEmail, signInPassword} = this.state.user;
        try {
            const {user} = await Auth.signIn(signInEmail, signInPassword);
            console.log(user);
        } catch (error) {
            console.log('error signing in:', error);
        }
    }

    onInputChange = event => {
        // console.log(event.target, event.target.name)
        const {name, value} = event.target;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };

    render() {

        const {user} = this.state;
        return (
            <div className="authForm">
                <h1 className="authForm__title">Sign in</h1>
                <Input type="email" hint="email" value={user.signInEmail} onChange={this.onInputChange}
                       name="signInEmail"/>
                <Input type="password" hint="password" value={user.signInPassword} onChange={this.onInputChange}
                       name="signInPassword"/>
                <button type="submit" onClick={this.submit} disabled={!this.handleValidation()}
                        className="authForm__btn">Sign In
                </button>
            </div>
        );
    }
}

export default SignInForm;