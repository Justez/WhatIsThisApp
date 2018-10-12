import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { RkCard, RkTheme, RkText, RkButton } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/FontAwesome'

const dimensions = Dimensions.get('window').width < 400

const HistoryItem = (props) =>
  <TouchableOpacity onPress={() => console.warn()}>
    <RkCard rkType='story'>
      <View rkCardHeader>
        <RkText rkType='header'>{props.item.value}</RkText>
      </View>
      <View rkCardContent>
        <RkText rkType='description'>
          {props.item.description}
        </RkText>
      </View>
      <View rkCardFooter>
        {/*// TODO: if already favourited change color*/}
        <Icon name="heart" size={25} color="lightgrey" />
        <Icon name="location-arrow" size={25} color="lightgrey" />
      </View>
    </RkCard>
  </TouchableOpacity>

  RkTheme.setType('RkCard', 'story', {
    header: {
      alignSelf: 'center',
      marginBottom: 0,
      marginTop: 0,
      paddingBottom: 0,
      paddingTop: 0,
    },
    content: {
      alignSelf: 'center',
    }
  })

  RkTheme.setType('RkText', 'description', {
    color: 'grey',
    fontSize: dimensions ? 15 : 20
  })

  RkTheme.setType('RkText', 'header', {
    fontSize: dimensions ? 20 : 30
  })

export default HistoryItem
