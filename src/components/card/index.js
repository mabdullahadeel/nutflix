import { createContext, useContext, useState } from 'react';
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Content, Meta,
    Entities, Image, Item, Maturity
} from './styles/card';

export const FeaturContext = createContext();

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeaturContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeaturContext.Provider>
    );
};

Card.Group = function CardGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Card.Text = function CardText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
    return (
        <Meta {...restProps}>{children}</Meta>
    )
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeaturContext);
    return (
        <Item {...restProps}
            onClick={() => {
                setItemFeature(Item);
                setShowFeature(true);
            }}
        >{children}</Item>
    )
}

Card.Image = function CardImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}