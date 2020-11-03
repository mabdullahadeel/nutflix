import { useState, useEffect } from 'react';
// Components
import Card from '../components/card';

export default function FilmsAndSeriesContainer({ cat, slides }) {
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setSlideRows(slides[cat]);
    }, [slides, cat]);


    return (
        <>
            <Card.Group>
                {slideRows?.map((item) => (
                    <Card key={`${cat}-${item.title}`}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Entities>
                            {item.data?.map((ent) => (
                                <Card.Item key={ent.docId} item={ent}>
                                    <Card.Image src={`/images/${cat}/${ent.genre}/${ent.slug}/small.jpg`} alt="Lora" />
                                    <Card.Meta>
                                        <Card.SubTitle>{ent.title}</Card.SubTitle>
                                        <Card.Text>{ent.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={cat}>
                            {/* <Player>
                                <Player.Button />
                                <Player.Video src='/videos/bunny.mp4' />
                            </Player> */}
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}