

export function getSeries(content) {
    return (
        {
            series: [
                { title: 'Documentaries', data: content?.filter((item) => item.genre === 'documentaries') },
                { title: 'Comedies', data: content?.filter((item) => item.genre === 'comedies') },
                { title: 'Children', data: content?.filter((item) => item.genre === 'children') },
                { title: 'Crime', data: content?.filter((item) => item.genre === 'crime') },
                { title: 'Feel Good', data: content?.filter((item) => item.genre === 'feel-good') },
            ]
        }
    )
}

export function getFilms(content) {
    return (
        {
            films: [
                { title: 'Drama', data: content?.filter((item) => item.genre === 'drama') },
                { title: 'Thriller', data: content?.filter((item) => item.genre === 'thriller') },
                { title: 'Children', data: content?.filter((item) => item.genre === 'children') },
                { title: 'Suspense', data: content?.filter((item) => item.genre === 'suspense') },
                { title: 'Romance', data: content?.filter((item) => item.genre === 'romance') },
            ]
        }
    )
}