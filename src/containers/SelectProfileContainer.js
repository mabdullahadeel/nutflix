import Header from '../components/header';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import Profiles from '../components/profiles';


export default function SelectUserProfile({ user, setProfile }) {
    return (
        <>
            <Header background={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName ? user.displayName : "User"}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}