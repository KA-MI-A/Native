import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>设置</Text>
        </View>
      </SafeAreaView>
    );
  }
}
// import React from 'react';
// import { Text, StyleSheet } from 'react-native';
// import color from 'color';
// const BoldAndBeautiful = () => {
//   return (
//     <Text style={styles.baseText}>
//       消息（3）
//       <Text style={styles.innerText}>点击领取小鸡饲料 </Text>
//     </Text>
//   );
// };

// const styles = StyleSheet.create({
//   baseText: {
//     fontWeight: 'bold',
//     fontSize: '30',
//     color: 'blue'
//   },
//   innerText: {
//     color: 'black',
//     fontSize: '20'

//   }
// });

// export default BoldAndBeautiful;
