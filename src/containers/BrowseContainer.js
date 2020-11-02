import { useState, useEffect, useContext, createContext } from 'react';
// Components
import Header from '../components/header';
import FilmsAndSeriesContainer from './FilmsSeriesContainer';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { selectUser } from '../Redux/features/userSlice';
import { useSelector } from 'react-redux';

export default function BrowseContainer({ slides }) {
    const user = useSelector(selectUser);
    const [category, setCategory] = useState('series');

    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);


    useEffect(() => {
        setSlideRows(category)
    }, [category])

    return (
        <>
            {/* Header */}
            <Header src="joker1">
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={`/images/users/${user.photoURL}.png`} alt="User Pic" />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={`/images/users/${user.photoURL}.png`} alt="User Pic" />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.TextLink onClick={() => console.log("Apply Login To Log Out of Firebase")}>SignOut</Header.TextLink>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowed, failed comedian Authutr Flecj seeks connection as he walks the streetsof Gothan City.
                        Authur wears two masks -- the one he paints for his day job as a clown, and guise he projects.
                </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            {/* Cards */}
            <>
                <FilmsAndSeriesContainer cat={category} />
            </>
        </>
    )
}