
import Layout from '../components/layout';
import NewsList from '../components/newsList';
import React from 'react'
import fetchNews from '../hooks/fetchNews';
export default function Tech() {
    const newsData = fetchNews("technology");
    return (
        <Layout>

            <NewsList news={newsData} />

        </Layout>
    )
}
