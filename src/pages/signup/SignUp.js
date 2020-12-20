import React from "react"
import "./SignUp.css"
import SignUpForm from "../../components/auth/SignUpForm";

class SignUp extends React.Component {

    render() {
        return (
            <div className="registration-page">
                <div className="registration-page__container">
                    <SignUpForm/>
                </div>
            </div>

        )
    }
}

export default SignUp;