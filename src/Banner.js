import React, { Component } from "react";
import { View, Text, Alert, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

class Banner extends Component {
  constructor(props) {
    super(props);

    // http://172.104.50.9:3000/api/banner_lists
    this.state = {
      dataBanners: [
        {
          name: "Scotland",
          image:
            "https://i.pinimg.com/originals/c5/46/d8/c546d82dbb96b5e469a9b0da115a253b.jpg"
        },
        {
          name: "Irish",
          image:
            "http://grahamkellyphotography.com/wp-content/gallery/landscape-photography-ireland/Sligo-landscape-photography-workshop.jpg"
        },
        {
          name: "Iceland",
          image:
            "https://cdn.shopify.com/s/files/1/0289/0132/files/AdobeStock_73243859_grande.jpeg?v=1513805270"
        },
        {
          name: "London",
          image: "https://chicpresets.com/wp-content/uploads/2016/09/After.jpg"
        },
        {
          name: "Amsterdam",
          image:
            "http://zoltangabor.com/wp-content/uploads/2012/11/IMG_1674_LR_ready_small.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper showsButtons loop autoplay showsPagination={false} >
          {this.state.dataBanners.map((dataObj, idx) => (
            <View style={styles.slide1}>
                <Image source={{ uri: dataObj.image }} resizeMode="contain" style={{ width: '150%', height: '150%' }} />
                <Text style={styles.text}>{dataObj.name}</Text>
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    position: 'absolute'
  }
});

export default Banner;
