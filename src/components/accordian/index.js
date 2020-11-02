import { useState, createContext, useContext } from 'react';

import {
    Container,
    Title,
    Item,
    Inner,
    Header,
    Body,
    Frame
} from './styles/accordian';


const ToggleContext = createContext();
export default function Accordian({ children, restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordian.Item = function AccordianItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordian.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                    <img src="/images/icons/add.png" alt="Open" />
                )}
        </Header>
    );
};


Accordian.Body = function AccordianBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return (toggleShow ? <Body {...restProps}>{children}</Body> : null)
}