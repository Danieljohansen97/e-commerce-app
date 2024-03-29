import {useState} from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            switch (error.code) {
                case "auth/popup-closed-by-user":
                    alert("Google Signin cancelled by user");
                    break;
                case "auth/cancelled-popup-request":
                    alert("Cancelled Google popup");
                    break;
                default:
                    console.log(error)
            }
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-credential":
                    alert("Incorrect Credentials")
                    break;
                default:
                    console.log(error)
            }
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;