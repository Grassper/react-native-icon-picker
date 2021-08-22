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
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  ViewStyle,
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
  iconSize: number
  backgroundColor: string
  numColumns: number
  placeholderText: string
  placeholderTextColor: string
  searchTitle?: string
  iconsTitle?: string
  textInputStyle?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
  flatListStyle?: StyleProp<ViewStyle>
  iconContainerStyle?: StyleProp<ViewStyle>
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
  textInputStyle,
  textStyle,
  iconSize,
  flatListStyle,
  iconContainerStyle,
}) => {
  const [search, setSearch] = useState('')
  const filteredIcons = IconCollection.filter((icon) =>
    icon.iconName.toLowerCase().includes(search.toLowerCase())
  )

  const IconRenderer: ListRenderItem<IconTypes> = ({ item }) => {
    const IconBoxComponent = IconObj[item.iconSet]
    return (
      <Pressable
        style={{ ...styles.iconContainer, ...(iconContainerStyle as {}) }}
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
          size={iconSize}
          color={iconColor || '#fff'}
        />
      </Pressable>
    )
  }

  return (
    <>
      {searchTitle && (
        <Text style={{ ...styles.text, ...(textStyle as {}) }}>
          {searchTitle}
        </Text>
      )}
      <TextInput
        style={{ ...styles.input, ...(textInputStyle as {}) }}
        onChangeText={setSearch}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        value={search}
      />
      {iconsTitle && (
        <Text style={{ ...styles.text, ...(textStyle as {}) }}>
          {iconsTitle}
        </Text>
      )}
      <FlatList
        style={{ ...(flatListStyle as {}) }}
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
