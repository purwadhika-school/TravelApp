import React, { Component } from "react";
import { View, ScrollView, Text, Image, ActivityIndicator } from "react-native";
import { getDestinations } from "./actions";
import { connect } from "react-redux";

class Destination extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getDestinations());
  }

  render() {
    const { dataDestinations } = this.props;
    return (
      <ScrollView
        style={{ flex: 1, flexDirection: "row" }}
        contentContainerStyle={{ alignItems: "center" }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {dataDestinations.length === 0 && <ActivityIndicator size="small" />}
        {dataDestinations.length > 0 &&
          dataDestinations.map((data, idx) => (
            <View key={data.id}>
              <Image
                source={{ uri: data.image }}
                style={{ width: 150, height: 150, borderRadius: 8, margin: 10 }}
              />
            </View>
          ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataDestinations: state.datadestinations.items
  };
};

export default connect(mapStateToProps)(Destination);

// http://172.104.50.9:3000/api/destination_lists
