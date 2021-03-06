import React from "react";
import {Auth} from "aws-amplify"
import Input from "../form/Input";
import "./AuthForm.css"

class SignUpForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            user: {
                email: "",
                username: "",
                password: "",
                repeatedPassword: "",
                name: "",
            },
            errors: {
                email: "",
                username: "",
                password: "",
                repeatedPassword: "",
                name: ""
            }
        }
    }

    handleValidation = () => {
        const {user} = this.state;
        return (user.password === user.repeatedPassword) && user.password.length >= 0 && user.email.length > 0;
    }

    submit = async () => {

        const {email, password, name} = this.state.user;
        let username = email;
        try {
            const {user} = await Auth.signUp({
                username,
                password: password,
                attributes: {
                    email,
                    name
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    onInputChange = event => {
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
                <h1 className="authForm__title">Creat account</h1>
                <Input type="email" hint="email" value={user.email} onChange={this.onInputChange} name="email"
                       error="tralala"/>
                <Input type="password" hint="password" value={user.password} onChange={this.onInputChange}
                       name="password"/>
                <Input type="password" hint="repeat password" value={user.repeatedPassword}
                       onChange={this.onInputChange} name="repeatedPassword"/>
                <Input type="text" hint="name" value={user.name} onChange={this.onInputChange} name="name"/>
                <button type="submit" onClick={this.submit} disabled={!this.handleValidation()} value="Register"
                        className="authForm__btn">Create account
                </button>
            </div>
        );
    }
}

export default SignUpForm;