
import React from 'react'
import NewsList from '../components/newsList';
import fetchNews from '../hooks/fetchNews';
import Layout from '../components/layout';

export default function Sports() {
    const newsData = fetchNews("sports");
    return (
        <Layout>

            <NewsList news={newsData} />

        </Layout>
    )
}
