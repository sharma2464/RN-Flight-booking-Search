import { AntDesign } from '@expo/vector-icons'
import Constants from 'expo-constants'
import React from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'
// Importing components
import SearchCity from './SearchCity'

// Separator Component for margin
function Separator() {
  return <View style={styles.separator} />
}

// Main Component
export default function App() {
  const [route, setRoute] = React.useState('rightcircle')

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 16,
          marginBottom: 16,
          backgroundColor: 'azure'
        }}>
        {/* Modal Close Button */}
        <TouchableHighlight
          style={{
            flexDirection: 'column',
            paddingHorizontal: 16
          }}
          onPress={() => 'go back code here..'}>
          <AntDesign name='arrowleft' size={32} color='blue' />
        </TouchableHighlight>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            flexDirection: 'column'
          }}>
          FLIGHT BOOKING
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <Button title='ONE WAY' onPress={() => ''}></Button>
        <Button title='ROUND TRIP' onPress={() => ''}></Button>
        <Button title='MULTI CITY' onPress={() => ''}></Button>
      </View>

      <Separator />

      <View style={styles.fixToText}>
        <SearchCity name='FROM' />
        <AntDesign
          name={route}
          size={32}
          style={{ marginVertical: 32 }}
          color='grey'
          onPress={() =>
            route === 'rightcircle'
              ? setRoute('leftcircle')
              : setRoute('rightcircle')
          }
        />
        <SearchCity name='TO' />
      </View>
      <View style={styles.pickerBox}>
        <TextInput
          style={{
            height: 60,
            borderWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 16,
            marginBottom: 10
          }}
          
          placeholder='Departure - DD/MM/YYY'
        />
        <TextInput
          style={{
            height: 60,
            borderWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 16,
            marginBottom: 10
          }}
          placeholder='Passengers'
        />
        <TextInput
          style={{
            height: 60,
            borderWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 16
          }}
          placeholder='Cabin Class'
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: Constants.statusBarHeight
    // marginHorizontal: 16
  },
  fixToText: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373'
  },
  pickerBox: {
    marginHorizontal: 20
  }
})
