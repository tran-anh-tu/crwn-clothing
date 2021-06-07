import React, {useState} from 'react'
import { connect } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.action'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss'

const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })
  const {email, password} = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = e => {
    const {value, name} = e.target

    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          required
          handleChange={handleChange}
          label='email' />
        <FormInput
          name='password'
          type='password'
          value={password}
          required
          handleChange={handleChange}
          label='password' />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn)
