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

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeaturContext);
    return showFeature ? (
        <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;

}

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
                setItemFeature(item);
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