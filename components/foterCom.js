import {StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, StatusBar} from 'react-native';
import React from "react";
import {I18nManager} from "react-native";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);
const FoterComponent = () => {
    const data = [
        {
            id: 1,
            name: 'bookhut',
            imag: 'https://reactnative.dev/img/tiny_logo.png',
            amount: '203000'
        },
        {
            id: 2,
            name: 'bookhut',
            imag: 'https://reactnative.dev/img/tiny_logo.png',
            amount: '780000'
        },
        {
            id: 3,
            name: 'bookhut',
            imag: 'https://elated-noether-m-6pqjgbm.storage.iran.liara.space/%D8%B9%DA%A9%D8%B3/download.jpg',
            amount: '22000'
        },
        {
            id: 4,
            name: 'bookhut',
            imag: 'https://elated-noether-m-6pqjgbm.storage.iran.liara.space/%D8%B9%DA%A9%D8%B3/download.jpg',
            amount: 'رایگان'
        },
        {
            id: 5,
            name: 'bookhut',
            imag: 'https://elated-noether-m-6pqjgbm.storage.iran.liara.space/%D8%B9%DA%A9%D8%B3/download.jpg',
            amount: 'رایگان'
        }, {
            id: 6,
            name: 'bookhut',
            imag: '../assets/323.jpg',
            amount: 'رایگان'
        }, {
            id: 7,
            name: 'bookhut',
            imag: '../assets/323.jpg',
            amount: 'رایگان'
        },
        {
            id: 8,
            name: 'bookhut',
            imag: 'https://elated-noether-m-6pqjgbm.storage.iran.liara.space/%D8%B9%DA%A9%D8%B3/download.jpg',
            amount: '22000'
        },
        {
            id: 9,
            name: 'bookhut',
            imag: 'https://elated-noether-m-6pqjgbm.storage.iran.liara.space/%D8%B9%DA%A9%D8%B3/download.jpg',
            amount: '22000'
        },
    ]
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: '#ffffff', height: 35, width: '100%', elevation: 20,}}>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        margin: 5,
                        fontSize: 25,
                        color: '#7fa661',
                        fontWeight: 'bold',
                        flex: 1
                    }}>کلبه کتاب</Text>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.Payinmeuo} horizontal={true}>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                    <Pressable style={styles.b1}>
                        <Text style={styles.Btext1}>کلبه کتاب</Text>
                    </Pressable>
                </ScrollView>
                <View style={styles.ImgeView}>
                    <Pressable>
                        <Image source={require('../assets/photo_2023-11-24_14-56-39.jpg')}
                               style={{width: '100%', borderRadius: 12, height: 170}}/>
                    </Pressable>
                </View>
                <View style={styles.Textview}>
                    <Text style={styles.Titeltext}>تازه ترین ها</Text>
                    <Pressable>
                        <Text style={styles.Titeltext2}>مشاهده همه</Text>
                    </Pressable>
                </View>
                <FlatList showsHorizontalScrollIndicator={false} style={{margin: 10, flex: 1, elevation: 20}}
                          horizontal={true}
                          keyExtractor={(item, index) => item.id + index} data={data}
                          renderItem={({item}) => {
                              return (
                                  <View style={{padding: 5}}>
                                      <Pressable>
                                          <Image style={{height: 200, width: 150, borderRadius: 12}}
                                                 source={require('../assets/photo_2023-11-24_14-52-27.jpg')}/>
                                          <Text style={styles.Ditayletext}>{item.name}</Text>
                                          <Text style={styles.Ditayletext2}>{item.amount}</Text>
                                      </Pressable>
                                  </View>
                              )
                          }}/>
                <View style={styles.Textview}>
                    <Text style={styles.Titeltext}>تازه ترین ها</Text>
                    <Pressable>
                        <Text style={styles.Titeltext2}>مشاهده همه</Text>
                    </Pressable>
                </View>
                <FlatList showsHorizontalScrollIndicator={false} style={{margin: 10, flex: 1, elevation: 20}}
                          horizontal={true}
                          keyExtractor={(item, index) => item.id + index} data={data}
                          renderItem={({item}) => {
                              return (
                                  <View style={{padding: 5}}>
                                      <Pressable>
                                          <Image style={{height: 200, width: 150, borderRadius: 12}}
                                                 source={require('../assets/photo_۲۰۲۳-۱۱-۲۴_۱۴-۵۲-۱۷.jpg')}/>
                                          <Text style={styles.Ditayletext}>{item.name}</Text>
                                          <Text style={styles.Ditayletext2}>{item.amount}</Text>
                                      </Pressable>
                                  </View>
                              )
                          }}/>
                <View style={styles.ImgeView}>
                    <Pressable>
                        <Image source={require('../assets/photo_2023-11-24_14-56-39.jpg')}
                               style={{width: '100%', borderRadius: 12, height: 170}}/>
                    </Pressable>
                </View>
                <View style={styles.Textview}>
                    <Text style={styles.Titeltext}>تازه ترین ها</Text>
                    <Pressable>
                        <Text style={styles.Titeltext2}>مشاهده همه</Text>
                    </Pressable>
                </View>
                <FlatList showsHorizontalScrollIndicator={false} style={{margin: 10, flex: 1, elevation: 20}}
                          horizontal={true}
                          keyExtractor={(item, index) => item.id + index} data={data}
                          renderItem={({item}) => {
                              return (
                                  <View style={{padding: 5}}>
                                      <Pressable>
                                          <Image style={{height: 200, width: 150, borderRadius: 12}}
                                                 source={require('../assets/photo_2023-11-24_14-52-27.jpg')}/>
                                          <Text style={styles.Ditayletext}>{item.name}</Text>
                                          <Text style={styles.Ditayletext2}>{item.amount}</Text>
                                      </Pressable>
                                  </View>
                              )
                          }}/>
                <View style={styles.Textview}>
                    <Text style={styles.Titeltext}>تازه ترین ها</Text>
                    <Pressable>
                        <Text style={styles.Titeltext2}>مشاهده همه</Text>
                    </Pressable>
                </View>
                <FlatList showsHorizontalScrollIndicator={false} style={{margin: 10, flex: 1, elevation: 20}}
                          horizontal={true}
                          keyExtractor={(item, index) => item.id + index} data={data}
                          renderItem={({item}) => {
                              return (
                                  <View style={{padding: 5}}>
                                      <Pressable>
                                          <Image style={{height: 200, width: 150, borderRadius: 12}}
                                                 source={require('../assets/photo_۲۰۲۳-۱۱-۲۴_۱۴-۵۲-۱۷.jpg')}/>
                                          <Text style={styles.Ditayletext}>{item.name}</Text>
                                          <Text style={styles.Ditayletext2}>{item.amount}</Text>
                                      </Pressable>
                                  </View>
                              )
                          }}/>
            </ScrollView>
        </View>);
}


const styles = StyleSheet.create({
    Payinmeuo: {
        paddingTop: 8,
    },
    b1: {
        borderColor: '#7c7c7c',
        borderRadius: 10,
        borderWidth: 2,
        margin: 8
    },
    Btext1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 6,
        color: '#7fa661'
    },
    ImgeView: {
        flex: 1,
        padding: 10
    },
    Titeltext: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 9,
        color: '#7fa661',
        paddingLeft: 4
    },
    Textview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 30

    },
    Titeltext2: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 9,
        color: '#000000',
    },
    Ditayletext: {
        marginRight: 10,
        paddingLeft: 82,
        paddingTop: 10

    },
    Ditayletext2: {
        marginRight: 10,
        paddingLeft: 82,
        paddingTop: 5
    }
});
export {FoterComponent}