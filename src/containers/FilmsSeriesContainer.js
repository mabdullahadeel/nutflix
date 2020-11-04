import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
// Components
import Card from '../components/card';
import Player from '../components/player';

export default function FilmsAndSeriesContainer({ cat, slides, searchWord }) {
    const [slideRows, setSlideRows] = useState([]);
    const [search, setSearch] = useState(searchWord)

    useEffect(() => {
        setSlideRows(slides[cat]);
    }, [slides, cat]);

    useEffect(() => {
        console.log('slideROws', slideRows);
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(search).map(({ item }) => item);
        console.log('results', results);

        if (slideRows.length > 0 && search.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[cat]);
        }
    }, [search]);

    console.log("rendered", slideRows);

    return (
        <>
            <Card.Group>
                {slideRows?.map((item) => (
                    <Card key={`${cat}-${item.title}`}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Entities>
                            {item.data?.map((ent) => (
                                <Card.Item key={ent.docId} item={ent}>
                                    <Card.Image src={`/images/${cat}/${ent.genre}/${ent.slug}/small.jpg`} alt={ent.title} />
                                    <Card.Meta>
                                        <Card.SubTitle>{ent.title}</Card.SubTitle>
                                        <Card.Text>{ent.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={cat}>
                            <Player>
                                <Player.Button />
                                <Player.Video src='/videos/bunny.mp4' />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}