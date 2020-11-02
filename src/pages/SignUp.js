import { useState, useContext } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import Form from '../components/form';
import { firebase } from '../lib/firebase/firebase';
// Redux
import { logIn } from '../Redux/features/userSlice';
import { useDispatch } from 'react-redux';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    // Form Validation
    const isInValid = password === '' || emailAddress === '' || firstName === '' || confirmPassword === '';
    // Form Submission
    const handleSignUp = (event) => {
        event.preventDefault();
        // firebase authentication
        if (password === confirmPassword) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password)
                .then((result) => {
                    result.user.updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    }).then(() => {
                        dispatch(logIn({
                            uid: result.user.uid,
                            email: result.user.email,
                            displayName: result.user.displayName,
                            photoURL: result.user.photoURL
                        }))
                    })
                }).catch((error) => {
                    setPassword('');
                    setConfirmPassword('');
                    setError(error.message)
                })
        } else {
            setPassword('');
            setConfirmPassword('');
            setError("Two Password Fields doesn't match.")
        }
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="username"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            autpComplete="off"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Input
                            autpComplete="off"
                            placeholder="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={({ target }) => setConfirmPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a User? <Form.Link to="/signIn">Sign In</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA  to ensure you're not a bot. <Form.Link>Learn More</Form.Link>
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
