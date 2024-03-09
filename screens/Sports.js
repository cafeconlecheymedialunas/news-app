import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { services } from '../services';
import moment from 'moment';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';

export default function Sports() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('sports')
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
                {newsData.length > 1 ? (
                    <FlatList
                        data={newsData}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.newsContainer}>
                                    {item.urlToImage && <Image
                                        width={550}
                                        height={250}
                                        resizeMode={"cover"}
                                        source={{
                                            uri: item.urlToImage,
                                        }}
                                        alt={item.title}
                                    />}
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.date}>
                                        {moment(item.publishedAt).format('LLL')}
                                    </Text>
                                    <Text style={styles.newsDescription}>
                                        {item.description}
                                    </Text>
                                </View>
                                <Divider my={2} bg="#e0e0e0" />
                            </View>

                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View>
                        <Spinner size="lg" />
                        <Text>Loading</Text>
                    </View>
                )}

            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
    }
});