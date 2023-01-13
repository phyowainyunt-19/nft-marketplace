import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  // console.log({ data })

  return (
    <View style={{ backgroundColor: COLORS.white, borderRadius: SIZES.font, marginBottom: SIZES.extraLarge, margin: SIZES.base, ...SHADOWS.dark }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          style={{ width: '100%', height: '100%', borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font }}
          source={data?.image}
          resizeMode={'cover'}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
    </View>
  )
}

export default NFTCard