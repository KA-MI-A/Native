import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  SafeAreaView, StyleSheet, Text,View } from 'react-native';
import { Button,  } from '@uiw/react-native';
class MyScreen extends Component {
    // onSubmit = () => this.props.userList();
    onSubmit = () =>{
        console.log('132132312')
    };
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text></Text>
                </View>
                <Button
                    style={styles.button}
                    textStyle={{ fontSize: 16, fontWeight: '200' }}
                    bordered={false}
                    color="#BFBFBF"
                    onPress={this.onSubmit}
                >
                    开票
              </Button>
            </SafeAreaView>
        );
    }
}
export default connect(
    ({ dataArray }) => ({
        formData: dataArray.formData,
    }),
    ({ dataArray }) => ({
        userList: dataArray.userList,
      }),
)(MyScreen);

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 35,
        paddingVertical: 4,
    },
});
