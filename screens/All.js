import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { services } from '../services';
import moment from 'moment';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import News from '../components/news';
import NewsList from '../components/newsList';

export default function All() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('general')
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
