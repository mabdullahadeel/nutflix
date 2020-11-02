import Header from '../components/header';
import * as ROUTS from '../constants/routes';
import logo from '../logo.svg';


export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTS.HOME} alt="Netflix Logo" src={logo} />
                <Header.HeaderButtonLink to={ROUTS.SIGN_IN}>Sign In</Header.HeaderButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
