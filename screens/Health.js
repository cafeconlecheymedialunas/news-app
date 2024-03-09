import React, { useEffect, useState } from 'react'

import { services } from '../services';

import { NativeBaseProvider, ScrollView } from 'native-base';

import NewsList from '../components/newsList';

export default function Health() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('health')
            .then(data => {
                setNewsData(data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])
    return (
        <NativeBaseProvider>
            <ScrollView height={850}>

                <NewsList news={newsData} />

            </ScrollView>
        </NativeBaseProvider>
    )
}
