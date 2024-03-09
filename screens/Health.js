
import React from 'react'
import { NativeBaseProvider, ScrollView } from 'native-base';

import NewsList from '../components/newsList';
import fetchNews from '../hooks/fetchNews';
import Layout from '../components/layout';

export default function Health() {
    const newsData = fetchNews("health");
    return (
        <Layout>

            <NewsList news={newsData} />

        </Layout>
    )
}
