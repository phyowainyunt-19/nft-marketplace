import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, FocusedStatusBar, DetailsDesc, DetailsBid, SubInfo } from '../components';

const Details = ({ route, navigation }) => {
    // console.log(route);
    const { data } = route.params;
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

            <View>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>

        </SafeAreaView>
    )
}

export default Details