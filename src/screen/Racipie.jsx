import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Racipie = () => {
  const data = {
    title: 'pancake',
    link: 'https://images.pexels.com/photos/6529789/pexels-photo-6529789.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 30,
    discount: 77,
  };
  return (
    <ScrollView>
      <ImageBackground source={{uri: data.link}} style={{height: 350}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 25,
              padding: 10,
            }}>
            <IonIcon
              name={'arrow-back-outline'}
              size={25}
              style={{color: '#B2B2B2'}}></IonIcon>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 25,
              padding: 10,
            }}>
            <IonIcon
              name={'share-social'}
              size={25}
              style={{color: '#B2B2B2'}}></IonIcon>
          </View>
        </View>
      </ImageBackground>
      <ScrollView
        style={{
          bottom: 60,
          backgroundColor: 'white',
          borderTopLeftRadius: 39,
          borderTopRightRadius: 39,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // margin: 20,
            // marginTop: 30,
            marginHorizontal: 20,
            marginVertical: 30,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {data.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFD600',
              width: '25%',
              justifyContent: 'center',
              paddingVertical: 2,
              borderRadius: 20,
            }}>
            <IonIcon
              name={'star-sharp'}
              size={25}
              style={{color: 'black'}}></IonIcon>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                marginHorizontal: 4,
              }}>
              4.5
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#CACACA',
              marginHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}>
            <AntDesign
              name={'clockcircleo'}
              size={25}
              style={{color: '#8A8A8A', margin: 7}}></AntDesign>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
              10 min
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#CACACA',
              marginHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}>
            <IonIcon
              name={'bicycle-outline'}
              size={25}
              style={{color: '#8A8A8A', margin: 7}}></IonIcon>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
              15 min
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#CACACA',
              marginHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}>
            <IonIcon
              name={'fast-food-sharp'}
              size={25}
              style={{color: '#8A8A8A', margin: 7}}></IonIcon>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
              10 min
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Ingredient
          </Text>
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#6F6F6F', fontWeight: '700', fontSize: 17}}>
              . 1 pound oats
            </Text>
            <Text style={{color: '#6F6F6F', fontWeight: '700', fontSize: 17}}>
              . 3 Strawberry
            </Text>
            <Text style={{color: '#6F6F6F', fontWeight: '700', fontSize: 17}}>
              . 5 Black berrys
            </Text>
            <Text style={{color: '#6F6F6F', fontWeight: '700', fontSize: 17}}>
              . 1 Maple Syrup
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Description
          </Text>
          <Text style={{color: '#6F6F6F', fontWeight: '400', fontSize: 17}}>
            This is random Description.While this approach can be useful for
            small grids or specific layout requirements, it's not as efficient
            as using FlatList with numColumns for large datasets.
          </Text>
        </View>
        <TouchableOpacity
          style={{backgroundColor: '#333333', width: '90%', margin: 15,paddingVertical:5,borderRadius:10}}>
          <Text style={{fontSize: 30, color: 'white',textAlign:"center"}}>
            Choose this for <Text style={{color: 'yellow'}}>{data.price}</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default Racipie;
