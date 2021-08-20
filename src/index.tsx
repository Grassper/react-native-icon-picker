/* eslint-disable prettier/prettier */
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  FlatList,
  ListRenderItem,
  NativeModules,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native'

import { IconCollection } from './Icons'

interface IconTypes {
  iconName: string
  iconSet: string
  uuid: string
}

type IconObjTypes = {
  [key: string]:
    | typeof AntDesign
    | typeof Entypo
    | typeof EvilIcons
    | typeof Feather
    | typeof FontAwesome
    | typeof FontAwesome5
    | typeof Fontisto
    | typeof Foundation
    | typeof Ionicons
    | typeof MaterialCommunityIcons
    | typeof MaterialIcons
    | typeof Octicons
    | typeof SimpleLineIcons
    | typeof Zocial
}

const IconObj: IconObjTypes = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
}

interface PropsTypes {
  iconColor: string
  backgroundColor: string
  numColumns: number
  placeholderText: string
  placeholderTextColor: string
  searchTitle?: string
  iconsTitle?: string
  onClick: (
    id: string,
    iconName: string,
    iconSet: string,
    iconColor: string,
    backgroundColor: string
  ) => void
}

export const IconPicker: React.FC<PropsTypes> = ({
  iconColor,
  backgroundColor,
  numColumns,
  placeholderText,
  placeholderTextColor,
  searchTitle,
  iconsTitle,
  onClick,
}) => {
  const [search, setSearch] = useState('')
  const filteredIcons = IconCollection.filter((icon) =>
    icon.iconName.toLowerCase().includes(search.toLowerCase())
  )

  const IconRenderer: ListRenderItem<IconTypes> = ({ item }) => {
    const IconBoxComponent = IconObj[item.iconSet]
    return (
      <Pressable
        style={{ ...styles.iconContainer }}
        onPress={() =>
          onClick(
            item.uuid,
            item.iconName,
            item.iconSet,
            iconColor,
            backgroundColor
          )
        }
      >
        <IconBoxComponent
          name={item.iconName}
          size={20}
          color={iconColor || '#fff'}
        />
      </Pressable>
    )
  }

  return (
    <>
      <Text style={{ ...styles.text }}>{searchTitle}</Text>
      <TextInput
        style={{ ...styles.input }}
        onChangeText={setSearch}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        value={search}
      />
      <Text style={{ ...styles.text }}>{iconsTitle}</Text>
      <FlatList
        numColumns={numColumns}
        data={filteredIcons}
        renderItem={IconRenderer}
        keyExtractor={(item) => item.uuid}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 17,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 15,
  },
})

export default NativeModules.IconPickerModule
