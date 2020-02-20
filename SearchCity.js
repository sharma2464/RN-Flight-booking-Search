import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import React, { useState } from 'react'
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'

const SearchCity = props => {
  // States in the Modal
  const [modalVisible, setModalVisible] = useState(false)
  const [destinationName, setDestinationName] = useState(props.name)
  const [cityInput, setCityInput] = useState('')
  const [searchResult, setSearchResults] = useState('')

  const handleModal = visible => {
    setModalVisible(!visible)
  }
  const cityLookup = inp => {
    setCityInput(inp)
    if (inp.length < 3) {
      setSearchResults(null)
    } else {
      fetch(`https://www.cleartrip.com/places/airports/search?string=${inp}`)
        .then(res => res.json())
        .then(result => setSearchResults(result))
        .catch(console.log)
    }
  }
  const Item = ({ cityCode, cityDetails }) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 16,
          padding: 8,
          flexDirection: 'column',
          backgroundColor: 'ghostwhite',
          borderBottomWidth: 1,
          borderLeftWidth: 15,
          borderLeftColor: 'lightgrey'
        }}
        onPress={() => {
          setDestinationName(cityCode)
          handleModal(modalVisible)
          setCityInput('')
          setSearchResults('')
        }}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name='location-on' size={32} color='grey' />
          <Text
            style={{
              fontSize: 20
            }}>
            {cityCode}
          </Text>
        </View>
        <Text
          style={{
            flexDirection: 'row',
            marginHorizontal: 16
          }}>
          {cityDetails}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            marginBottom: 16,
            backgroundColor: 'azure'
          }}>
          {/* Modal Close Button */}
          <TouchableHighlight
            style={
              (styles.closeButton,
              {
                flexDirection: 'column',
                justifyContent: 'flex-start',
                paddingHorizontal: 16
              })
            }
            onPress={() => handleModal(modalVisible)}>
            <AntDesign name='close' size={32} color='blue' />
          </TouchableHighlight>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            DESTINATION
          </Text>
        </View>

        {/* Modal Content Starts Here */}
        <View>
          <TextInput
            style={styles.searchBar}
            placeholder='Search city...'
            onChangeText={text => cityLookup(text)}
            value={cityInput}
          />
          {searchResult != '' ? (
            <FlatList
              data={searchResult}
              renderItem={({ item }) => (
                <Item cityCode={item.k} cityDetails={item.v} />
              )}
              keyExtractor={item => item.id}
            />
          ) : null}
        </View>
      </Modal>

      {/* Modal Launch Trigger using <Text/> component */}
      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <Text style={styles.modalButton}>{destinationName}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  modalButton: {
    width: 100,
    height: 50,
    fontSize: 20,
    fontWeight: '500',
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'ghostwhite'
  },
  closeButton: {
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  searchBar: {
    height: 60,
    borderWidth: 1,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 16
  }
})
export default SearchCity
