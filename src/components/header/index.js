import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    Text,
    FeatureCallOut,
    Link,
    Group,
    Picture,
    Dropdown,
    Profile,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from './styles/header';

export default function Header({ background = true, children, ...restProps }) {
    return (
        background ? <Background {...restProps}>{children}</Background> : children
    )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} >
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return (
        <PlayButton {...restProps}>{children}</PlayButton>
    )
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return (
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Picture = function HeaderPicture({ children, ...restProps }) {
    return (
        <Picture {...restProps}>{children}</Picture>
    )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
};

Header.HeaderButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}