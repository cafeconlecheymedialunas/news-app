
import { View, Text } from 'react-native';

import { styles } from '../assets/styles';
import moment from 'moment';
import { FlatList, Divider, Image } from 'native-base';

export default function News({ news }) {

    return (


        <FlatList
            data={news}
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


    )
}