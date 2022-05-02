import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import { createUsersDocumentFromAuth } from "../../utils/firebase/firebase"
import FormInput from "../Form-input/form-input"
import './sign-up.scss'


// Initial field state
const defaultDisplayFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultDisplayFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword){
            alert(`Password doesn't match`)
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUsersDocumentFromAuth(user, { displayName })

            alert('You have successfully signed up')
            const resetFormFields = () => {
                setFormFields(defaultDisplayFields)
            }
            resetFormFields()
            return
        } catch (error) {

            if(error.code === 'auth/email-already-in-use'){
                alert('You already have an account')
            }

            console.log(
                'An error occured on creating the user with email and password',
                error
            )
        }
    }

    const handleChange = (event) => {
        // Retreving the name and value from the event
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
        console.log(formFields)
    }

    return (
        <div className="sign-up_wrapper">
            <h1 className="sign-up_text">Sign up now</h1>
            <form className="form_wrapper" onSubmit={handleSubmit}>

                <FormInput
                    label='Display Name'
                    type='text'
                    id="name"
                    onChange={handleChange}
                    required
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label='Email'
                    type='email'
                    onChange={handleChange} 
                    required
                    name="email"
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleChange} 
                    required
                    name="password"
                    value={password}
                />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    onChange={handleChange}
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <button className="form_button" type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm