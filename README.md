# React native icon picker

React native implementation of [icons.expo.fyi website](https://icons.expo.fyi/). You can search and pick icons from a wide range of icons.

Package Includes:

- AntDesign
- Entypo
- EvilIcons
- Feather
- FontAwesome
- FontAwesome5
- Fontisto
- Foundation
- Ionicons
- MaterialCommunityIcons
- MaterialIcons
- Octicons
- SimpleLineIcons
- Zocial

> Compatible only with expo and bare react native projects with expo unimodules installed.

Before installation make sure expo unimodules configured if it is bare react native project (For expo not required)

**Installation**

`npm i @grassper/react-native-icon-picker` or `yarn add @grassper/react-native-icon-picker`

**Usage**

`import {IconPicker} from '@grassper/react-native-icon-picker'`

**Props**

| Prop                 | Required           | Type     | Description                                                  |
| -------------------- | ------------------ | -------- | ------------------------------------------------------------ |
| iconColor            | :white_check_mark: | string   | Color of Icons                                               |
| iconSize             | :white_check_mark: | number   | Size of Icons                                                |
| backgroundColor      | :white_check_mark: | string   | Background color of Icons                                    |
| numColumns           | :white_check_mark: | number   | Number of columns in Flatlist                                |
| placeholderText      | :white_check_mark: | string   | Input field placeholder text                                 |
| placeholderTextColor | :white_check_mark: | string   | Color of placeholder text                                    |
| searchTitle          | (optional)         | string   | Search field title text                                      |
| iconsTitle           | (optional)         | string   | Icons title text                                             |
| textInputStyle       | (optional)         | object   | Text input styles                                            |
| textStyle            | (optional)         | object   | Text styles                                                  |
| flatListStyle        | (optional)         | object   | FlatList styles                                              |
| iconContainerStyle   | (optional)         | object   | Icon container styles                                        |
| onClick              | :white_check_mark: | function | `(id, iconName, iconSet,iconColor,backgroundColor) => void ` |
