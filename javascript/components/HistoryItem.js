import React from 'react';
import { View, Dimensions } from 'react-native';
import { RkCard, RkTheme, RkText, RkButton } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/FontAwesome'

const dimensions = Dimensions.get('window').width < 400

const HistoryItem = (props) =>
  <RkCard rkType='story'>
    <View rkCardHeader>
      <RkText rkType='header'>{props.itemName}</RkText>
    </View>
    <View rkCardContent>
    <RkText>
        description
      </RkText>
    </View>
    <View rkCardFooter>
      {/*// TODO: if already favourited change color*/}
      <Icon name="heart" size={25} color="lightgrey" />
      <Icon name="location-arrow" size={25} color="lightgrey" />
    </View>
  </RkCard>

  RkTheme.setType('RkCard', 'story', {
    header: {
      alignSelf: 'center'
    },
    content:{
      alignSelf: 'center',
    }
  })

export default HistoryItem
