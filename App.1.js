import React from 'react'
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert
} from 'react-native'
// import Constants from 'expo-constants'

export default function App() {
  const [value, onChangeText] = React.useState('Your Text here')

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
