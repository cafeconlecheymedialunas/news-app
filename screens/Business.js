import React, { useEffect, useState } from 'react'
import { services } from '../services';

import { NativeBaseProvider, ScrollView } from 'native-base';
import NewsList from '../components/newsList';

export default function Business() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('business')
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
