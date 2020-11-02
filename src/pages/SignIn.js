import { useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import Form from '../components/form';
import { firebase } from '../lib/firebase/firebase';
// Redux
import { logIn } from '../Redux/features/userSlice';
import { useDispatch } from 'react-redux';

export default function SignIn() {
    // authentication
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    // Form Validation
    const isInValid = password === '' || emailAddress === '';
    // Form Submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // firebase authentication
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then((authUser) => {
                console.log(authUser);
                dispatch(logIn({
                    uid: authUser.user.uid,
                    email: authUser.user.email,
                    displayName: authUser.user.displayName,
                    photoURL: authUser.user.photoURL,
                }))
            })
            .catch((error) => {
                setPassword('');
                setError(error.message)
            })
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSubmit} method="POST">
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
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signUp">Sign Up</Form.Link>
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
