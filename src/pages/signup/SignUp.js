import React from "react"
import "./SignUp.css"
import SignUpForm from "../../components/auth/SignUpForm";

class SignUp extends React.Component {

    render() {
        return (
            <div className="registration-page">
                <div className="registration-page__container">
                    <p className="registration-page__title">Create your account</p>
                    <SignUpForm/>
                </div>
            </div>

        )
    }
}

export default SignUp;