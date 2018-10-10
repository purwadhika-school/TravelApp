import React, { Component } from "react";
import { View, Text, Alert, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { getBannners } from "./actions";

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getBannners());
  }

  render() {
    const { dataBanners } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Swiper showsButtons loop autoplay showsPagination={false}>
          {dataBanners.length > 0 &&
            dataBanners.map((dataObj, idx) => (
              <View key={dataObj.id} style={styles.slide1}>
                <Image
                  source={{ uri: dataObj.image }}
                  resizeMode="contain"
                  style={{ width: "150%", height: "150%" }}
                />
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
    position: "absolute"
  }
});

const mapStateToProps = state => {
  return {
    dataBanners: state.databanners.items
  };
};

export default connect(mapStateToProps)(Banner);
