# React native icon picker

React native implementation of [icons.expo.fyi website](https://icons.expo.fyi/). You can search and pick icons from a wide range of icons.

![Icon picker display](https://raw.githubusercontent.com/Grassper/react-native-icon-picker/main/src/assets/example1.png 'Icon picker display')
![Icon picker search](https://raw.githubusercontent.com/Grassper/react-native-icon-picker/main/src/assets/example2.png 'Icon picker search')

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

**Example**

```
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconPicker } from '@grassper/react-native-icon-picker';

export default function App() {
  const handleSubmit = (id, iconName, iconSet, iconColor, backgroundColor) => {
    console.log({ id, iconName, iconSet, iconColor, backgroundColor });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconPickerContainer}>
        <IconPicker
          searchTitle={'Name'}
          iconsTitle="Icons"
          numColumns={6}
          iconSize={20}
          iconColor="#fff"
          backgroundColor='#121212'
          placeholderText="Search Food, shopping .."
          placeholderTextColor="#555"
          onClick={handleSubmit}
          iconContainerStyle={styles.iconContainer}
          flatListStyle={styles.flatList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
    backgroundColor: '#000',
  },
  iconPickerContainer:{
    flex:1
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  flatList:{
    alignItems: 'center'
  }
});

```

Run it on [snack](https://snack.expo.dev/@grassper/react-native-icon-picker) :rocket:

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
