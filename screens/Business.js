
import React from 'react'
import Layout from '../components/layout';
import NewsList from '../components/newsList';
import fetchNews from '../hooks/fetchNews';

export default function Business() {
    const newsData = fetchNews("business");
    return (
        <Layout>

            <NewsList news={newsData} />

        </Layout>

    )
}
