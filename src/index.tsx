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
  FlatListProps,
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

export const IconObj: IconObjTypes = {
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
  flatlistProps?: FlatListProps<any>
  flatListStyle?: StyleProp<ViewStyle>
  iconSets: (keyof IconObjTypes)[]
  icons: Omit<IconTypes, 'uuid'>[]
  iconContainerStyle?: StyleProp<ViewStyle>
  onClick: (
    id: string,
    searchText: string,
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
  flatlistProps,
  iconContainerStyle,
  icons,
  iconSets,
}) => {
  const [search, setSearch] = useState('')

  const filteredIcons = IconCollection.filter(
    (icon) =>
      (iconSets ? iconSets.includes(icon.iconSet) : true) &&
      (icons
        ? icons.some(
            (s) =>
              s.iconName.toLowerCase().includes(icon.iconName.toLowerCase()) &&
              (s.iconSet
                ? s.iconSet.toLowerCase().includes(icon.iconSet.toLowerCase())
                : true)
          )
        : true) &&
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
            search,
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
        {...(flatlistProps as {})}
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
