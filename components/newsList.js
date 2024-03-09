import { Spinner, View } from "native-base";
import News from "./news";
import { Text } from "react-native-elements";

export default function NewsList({ news }) {
    return (

        news.length > 1 ? (
            <News news={news} />
        ) : (
            <View>
                <Spinner size="lg" />
                <Text>Loading</Text>
            </View>
        )

    )
}