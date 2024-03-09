import { useEffect, useState } from 'react';
import { services } from '../services';

export default function fetchNews(slug) {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        services(slug)
            .then(data => {
                setNewsData(data);
            })
            .catch(error => {
                console.error(error)
            });
    }, [slug]); // Ensure useEffect runs when slug changes

    return newsData;
}
