import React, { Component } from "react";
import { ScrollView, View, Text, Image, Dimensions } from "react-native";
import { connect } from "react-redux";
import { getReviewers } from "./actions";

const { width, height } = Dimensions.get("window");
class Reviewer extends Component {
  componentDidMount() {
    this.props.dispatch(getReviewers());
  }

  render() {
    const { dataReviewers } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: 'row', 
          justifyContent: 'space-evenly'
        }}
      >
        {dataReviewers.length > 0 &&
          dataReviewers.map((dataObj, idx) => (
            <Image
              key={dataObj.id}
              source={{ uri: dataObj.avatar }}
              style={{
                marginTop: 10,
                width: '40%',
                height: '40%',
                borderRadius: 5
              }}
            />
          ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataReviewers: state.datareviewers.items
  };
};

export default connect(mapStateToProps)(Reviewer);
