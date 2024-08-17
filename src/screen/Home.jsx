import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native';
const Home = () => {
  const Category = ['Main', 'Heathy food', 'Fast food', 'Drinks'];
  const [active, setActive] = useState(0);
  const dishes = [
    {
      title: 'pancake',
      link: 'https://images.pexels.com/photos/6529789/pexels-photo-6529789.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 30,
      discount: 77,
    },
    {
      title: 'Burger',
      link: 'https://images.pexels.com/photos/18267592/pexels-photo-18267592/free-photo-of-fast-food-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 70,
      discount: 20,
    },
    {
      title: 'Steak',
      link: 'https://images.pexels.com/photos/17889635/pexels-photo-17889635/free-photo-of-salad-with-bread-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 60,
      discount: 47,
    },
    {
      title: 'Cake',
      link: 'https://images.pexels.com/photos/17929133/pexels-photo-17929133/free-photo-of-a-slice-of-cake-lying-on-a-plate-next-to-a-whole-cake-on-a-stand.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 901,
      discount: 22,
    },
  ];
  const handlePress = index => {
    console.log('hello');
    setActive(index);
  };
  const handleClick=(item)=>{
    console.log(item);
  }
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              margin: 7,
              marginBottom: 5,
            }}></Image>
          <Text style={{fontSize: 22, color: 'black', fontWeight: '600'}}>
            Karl
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'bell'} size={35} style={{color: 'black'}}></Icon>
          <IonIcon
            name={'menu-outline'}
            size={40}
            style={{color: 'black'}}></IonIcon>
        </View>
      </View>
      <View style={{margin: 10}}>
        <Text style={{color: 'black', fontSize: 35, fontWeight: '500'}}>
          What would you{' '}
        </Text>
        <Text style={{color: 'black', fontSize: 35, fontWeight: '500'}}>
          {' '}
          like to Order ?
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          backgroundColor: '#F6F6F9',
          borderRadius: 20,
          padding: 10,
        }}>
        <AntDesign
          name={'search1'}
          size={30}
          style={{color: 'black', width: '10%'}}></AntDesign>
        <TextInput placeholder="Want to ...." style={{flex: 1, fontSize: 20}}>
          {' '}
        </TextInput>
      </View>
      <ScrollView horizontal={true} style={{margin: 10}}>
        {Category.map((item, index) => {
          return (
            <View
              style={{margin: 10}}
              key={index}
              onPress={() => handlePress(index)}>
              <Text
                style={[
                  {color: '#B2B2B2', fontWeight: '600', fontSize: 18},
                  active === index && {color: 'black'},
                ]}
                onPress={() => handlePress(index)}>
                {item}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{flexDirection:"row",flexWrap:"wrap",margin:10,alignItems:"center",justifyContent:"space-between",paddingBottom:20}} >
        {dishes.map((item, index) => {
          return (
            <View
              key={index}
              style={{marginBottom: 20}}
              handleClick
              onPress={() => handleClick(item)}>
              <Image
                source={{uri: item.link}}
                style={{
                  height: 200,
                  width: 170,
                  borderRadius: 10,
                }}
                onPress={()=>handleClick(item)}
                ></Image>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  textTransform: 'capitalize',
                  fontWeight: '500',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#8B8B8B',
                  fontSize: 15,
                  textTransform: 'capitalize',
                  fontWeight: '500',
                }}>
                Todays Discount {item.discount} %
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  textTransform: 'capitalize',
                  fontWeight: '500',
                }}>
                {item.price} $
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
