import React from 'react';
import { connect } from 'react-redux'
import { changeItemFavourite } from '../actions/history'
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { RkCard, RkTheme, RkText, RkButton } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/FontAwesome'

const dimensions = Dimensions.get('window').width < 400

class HistoryItem extends React.Component {
  handleFavouriteChange = () => {
    this.props.changeItemFavourite(this.props.item.key)
    this.setState({})
  }

  render() {
    const { key, value } = this.props.item

    return (
      <TouchableOpacity onPress={() => {}}>
        <RkCard rkType='story'>
          <View rkCardHeader>
            <RkText rkType='header'>{value.name}</RkText>
          </View>
          <View rkCardContent>
            <RkText rkType='description'>
              {value.description}
            </RkText>
          </View>
          <View rkCardFooter>
            <TouchableOpacity onPress={this.handleFavouriteChange}>
              <Icon name="heart" size={25} color={value.favourite ? "lightpink" : "lightgrey"} />
            </TouchableOpacity>
            <Icon name="location-arrow" size={25} color="lightgrey" />
          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }
}

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

const mapDispatchToProps = dispatch => ({
    changeItemFavourite: (key) => { dispatch(changeItemFavourite(key)) }
  })

export default connect(undefined, mapDispatchToProps)(HistoryItem)
