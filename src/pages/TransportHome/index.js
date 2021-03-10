import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from '@uiw/react-native';
class MyTester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit = () => {
    this.props.userList();
  };
  render() {
    const { formData } = this.props; //解构
    return (
      <SafeAreaView>
        <View>
          <Text>首页</Text>
        </View>
        <Button
          style={styles.button}
          textStyle={{ fontSize: 16, fontWeight: '200' }}
          bordered={false}
          color="#BFBFBF"
          onPress={this.onSubmit} //点击事件
        >
          进入首页
        </Button>
        <FlatList
          data={formData} //属性
          renderItem={({ item }) => {
            return <Text style={styles.item}>{item.courierName}</Text>; //遍历数组
          }}
        />
      </SafeAreaView>
    );
  }
}
//获取model里的数据，并推送出来
export default connect(
  ({ dataArray }) => ({
    formData: dataArray.formData,
  }),
  ({ dataArray }) => ({
    userList: dataArray.userList,
  }),
)(MyTester);
// 样式
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 35,
    paddingVertical: 4,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'pink',
  },
});
