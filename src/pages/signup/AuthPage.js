import React from "react"
import SignUpForm from "../../components/auth/SignUpForm";
import SignInForm from "../../components/auth/SignInForm";
import "./AuthPage.css"

class AuthPage extends React.Component {

    render() {
        return (
            <div className="authPage">
                <div className="authPage__container">
                    <div className="authPage__signup authPage__formContainer">
                        <SignUpForm/>
                    </div>
                    <div className="authPage__divider"/>
                    <div className="authPage__signin authPage__formContainer">
                        <SignInForm/>
                    </div>
                </div>
            </div>

        )
    }
}

export default AuthPage;