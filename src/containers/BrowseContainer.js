import { useState, useEffect } from 'react';
// Components
import Header from '../components/header';
import Card from '../components/card';
import Player from '../components/player';

import Fuse from 'fuse.js';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { selectUser } from '../Redux/features/userSlice';
import { useSelector } from 'react-redux';

import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

import { firebase } from '../lib/firebase/firebase';
import { logOut } from '../Redux/features/userSlice';
import { useDispatch } from 'react-redux';

export default function BrowseContainer({ slides }) {

    const user = useSelector(selectUser);
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { threshold: 0.0, keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map((item) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    const opts = {
        height: "700",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const [trailer, setTrailerUrl] = useState('');
    const handleClick = (movieTitle) => {
        console.log('Movie clicked...', movieTitle);
        if (movieTitle) {
            movieTrailer(movieTitle)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    };

    // Redux
    const dispatch = useDispatch()


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
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={`/images/users/${user.photoURL}.png`} alt="User Pic" />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={`/images/users/${user.photoURL}.png`} alt="User Pic" />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.TextLink onClick={() => {
                                    firebase.auth().signOut().then(() => {
                                        dispatch(logOut())
                                    })
                                }}>
                                    SignOut
                                </Header.TextLink>
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
            <Card.Group>
                {slideRows?.map((item) => (
                    <Card key={`${category}-${item.title}`}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Entities>
                            {item?.data?.map((ent) => (
                                <Card.Item key={ent.docId} item={ent} >
                                    <Card.Image onClick={() => handleClick(ent.title)} src={`/images/${category}/${ent.genre}/${ent.slug}/small.jpg`} alt={ent.title} />
                                    <Card.Meta>
                                        <Card.SubTitle>{ent.title}</Card.SubTitle>
                                        <Card.Text>{ent.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Video setTrailerUrl={setTrailerUrl}>
                                    <YouTube videoId={trailer} opts={opts} />
                                </Player.Video>
                                <Player.Button />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}