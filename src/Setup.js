import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "../src/Banner";
import Destination from "../src/Destination";
import Reviewer from "../src/Reviewer";

export default class Setup extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Banner />
        <Destination />
        <Reviewer />
      </View>
    );
  }
}
