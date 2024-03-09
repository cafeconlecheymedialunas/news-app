import React from 'react'
import NewsList from '../components/newsList';
import fetchNews from '../hooks/fetchNews';
import Layout from '../components/layout';

export default function All() {
    const newsData = fetchNews("general");
    return (
        <Layout>
            <NewsList news={newsData} />
        </Layout>

    )
}
