import {StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, TextInput} from 'react-native';
import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {I18nManager} from "react-native";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);
const Ditailecom = () => {
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
                <View style={styles.DitaileView}>
                    <Image source={require('../assets/photo_2023-11-24_14-52-27.jpg')}
                           style={styles.DeaileImage}/>
                    <View style={styles.TextDitale}>
                        <Text style={styles.TextTitle}>رمان زندان بان مجهلول</Text>
                        <Text style={styles.TextMtan}>نوسینده :
                            <Text style={{color: '#7fa661'}}> میلاد امینی </Text>
                        </Text>
                        <Text style={styles.TextMtan}>ژانر :
                            <Text style={{color: '#7fa661'}}> عاشقانه</Text>
                        </Text>
                        <Text style={styles.TextMtan}>قیمت :
                            <Text style={{color: '#7fa661'}}>رایگان </Text>
                        </Text>
                        <Text style={styles.TextMtan}>بازدید :
                            <Text style={{color: '#7fa661'}}>1701 </Text>
                        </Text>
                        <Text style={styles.TextMtan}>نظرات :
                            <Text style={{color: '#7fa661'}}>487 </Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.Eshtrak}>
                    <Pressable>
                        <Text style={styles.TextMtan}><AntDesign name='star' size={20} color={'#27fb00'}/> نظرات</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.TextMtan}><FontAwesome name='chain-broken' size={20}
                                                                   color={'#27fb00'}/> اشتراک
                            گذاری</Text>
                    </Pressable>

                </View>
                <View style={styles.Bouten}>
                    <Pressable style={styles.EShButen}>
                        <Text style={styles.TextEShButen}>خرید</Text>
                    </Pressable>
                    <Pressable style={styles.EShButen2}>
                        <Text style={styles.TextEShButen}>مشاهده نمونه</Text>
                    </Pressable>
                </View>
                <Text style={{textAlign: 'center'}}>______________________________________</Text>
                <View style={styles.Joview}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', paddingRight: 10}}>معرفی کتاب</Text>
                    <Text style={{padding: 10, fontSize: 15}}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد
                        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                        گذشته
                        حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                        طراحان
                        رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                        امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                        شامل
                        حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد.
                    </Text>
                </View>
                <View style={styles.Textview}>
                    <Text style={styles.Titeltext}>مرتبط ها</Text>
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
                <Text style={{textAlign: 'center'}}>______________________________________</Text>
                <View style={{margin: 10}}>
                    <Text style={styles.Titeltext}>نظر خود را بنویسید</Text>
                    <TextInput style={styles.input} placeholder='لطفا ایمیل خود را وارد کنید'/>
                    <TextInput style={styles.input2} multiline={true} numberOfLines={10}
                               placeholder='متن خود را بنویسید'/>
                    <View style={{alignItems: 'center'}}>
                        <Pressable style={styles.EShButen4}>
                            <Text style={styles.TextEShButen}>ارسال</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={{textAlign: 'center'}}>______________________________________</Text>
                <Text style={styles.Titeltext}>نظرات</Text>
                <FlatList showsHorizontalScrollIndicator={false} style={{margin: 10, flex: 1, elevation: 20}}
                          horizontal={false}
                          keyExtractor={(item, index) => item.id + index} data={data}
                          renderItem={({item}) => {
                              return (
                                  <View style={{paddingLeft: 30, paddingTop: 20}}>
                                      <Text style={styles.ComText1}>رضا سعدانی</Text>
                                      <Text>3 روز قبل</Text>
                                      <Text style={styles.ComText3}>بهترین رمان عمرم بوده</Text>
                                      <Text style={{alignSelf: 'flex-start'}}>_____________</Text>
                                  </View>
                              )
                          }}/>
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    DitaileView: {
        flexDirection: 'row'
    },
    DeaileImage: {
        flex: 1,
        margin: 10,
        borderRadius: 10

    },
    TextDitale: {
        flex: 1,
        margin: 10,
        alignItems: 'flex-start'
    },
    TextTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 9,
        color: '#000000',
    },
    TextMtan: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 6,
        color: '#000000',
    },
    Eshtrak: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderColor: '#7fa661',
        borderWidth: 2,
        margin: 4,
        padding: 5,
        borderRadius: 14
    },
    Bouten: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        margin: 4,
        padding: 5,

    },
    EShButen: {
        borderColor: '#7fa661',
        borderWidth: 2,
        borderRadius: 14,
        backgroundColor: '#7fa661'
    },
    TextEShButen: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 9,
        paddingTop: 10,
        marginRight: 30,
        marginLeft: 30,
        color: '#000000',
    },
    EShButen2: {
        borderColor: '#7fa661',
        borderWidth: 2,
        borderRadius: 14,

    },
    Joview: {
        margin: 10,
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#7fa661',
    },
    input2: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        height: 200,
        textAlignVertical: 'top',
        borderColor: '#7fa661',
    },
    EShButen4: {
        borderColor: '#7fa661',
        borderWidth: 2,
        borderRadius: 14,
        backgroundColor: '#7fa661',
        width: '80%',
        alignItems: "center",
        textAlign: "center"
    },
    ComText1:{
        fontSize: 19,
        fontWeight: 'bold',
        padding: 9,
        color: '#000000',
    },
    ComText3:{
        fontSize: 15,
        fontWeight: 'bold',
        padding: 9,
        color: '#000000',
    }

});
export {Ditailecom}


