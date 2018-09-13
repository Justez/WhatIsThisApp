import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

class Main extends Component {

  render() {
    return (
      <View style={styles.mainStyle}>
        <View style={styles.textSection}>
          <Text style={styles.text}>
            Pick up the magnifying glass
          </Text>
          <Text style={styles.text}>
            and start investigating!
          </Text>
        </View>
        <View style={styles.buttonSection}>
          <View style={styles.circleShape}>
          </View>
          <View style={styles.circleShape}>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontFamily:'serif',
    fontSize: 25,
    fontStyle: 'italic'
  },
  textSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    height: '60%'
  },
  buttonSection: {
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flex: 1,
  },
  circleShape: {
    marginStart: 90,
    marginEnd: 90,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#00BCD4'
  }
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Main)
