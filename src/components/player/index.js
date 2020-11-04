import { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

import { Button, Close, Container, Inner, Overlay } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>
                {children}
            </Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ src, setTrailerUrl, children, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => {
            setShowPlayer(false);
            setTrailerUrl('');
        }} {...restProps}>
            <Inner>
                {children}
            </Inner>
            <Close />
        </Overlay>,
        document.body
    ) :
        null)
}

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
            Play
        </Button>
    );
};