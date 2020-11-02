import { useState, useEffect } from 'react';
import { getSeriesFilmsDataFromFirebase } from '../utils/firebaseQuery';
import { getSeries, getFilms } from '../utils/selection-filter';
// Components
import Card from '../components/card';

export default function FilmsAndSeriesContainer({ cat }) {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        if (cat === 'series') {
            setSeries((getSeries(getSeriesFilmsDataFromFirebase(cat))).series)
        }
        if (cat === 'films') {
            setSeries((getFilms(getSeriesFilmsDataFromFirebase(cat))).films)
        }
    }, [cat])

    console.log(series);

    return (
        <>
            <Card.Group>
                {series?.map((item) => (
                    <Card key={`${cat}-${item.title}`}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Entities>
                            {item.data.map((ent) => (
                                <Card.Item key={ent.docId} item={ent}>
                                    <Card.Image src={`/images/${cat}/${ent.genre}/${ent.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{ent.title}</Card.SubTitle>
                                        <Card.Text>{ent.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}