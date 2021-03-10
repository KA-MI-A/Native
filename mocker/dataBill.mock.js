// import { Text, StyleSheet } from 'react-native';
// import React, { Component } from 'react';
// import { View, Image, SafeAreaView} from 'react-native';
// import { blue } from '@uiw/react-native/lib/utils/colors';
// class TextInANest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <>
//       <SafeAreaView>
//         <View style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           // backgroundColor:'hotpink',
//           margin: 10
//         }}>
//         <View style={styles.container}>
//         <Image
//           style={styles.tinyLogo}
//           source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1823469283,2141368856&fm=26&gp=0.jpg'}}
//           />
//           </View>
//           <View style={{
//             marginLeft: 10
//           }}>
//             <View style={{
//               width: 300,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: "center"
//             }}>
//               <Text style={{
//                 fontSize: 20
//               }}>
//                 中通快递
//               </Text>
//               <Text style={{
//                 marginRight: 10
//               }}>
//                 08:30
//               </Text>
//             </View>
//             <View style={{
//               marginTop: 5
//             }}>
//               <Text>
//                 免费领取一个马克杯
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           // backgroundColor:'hotpink',
//           margin: 10
//         }}>
//           <View style={styles.container}>
//         <Image
//           style={styles.tinyLogo}
//           source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2119117207,1447305224&fm=26&gp=0.jpg'}}
//           />
//           </View>
//           <View style={{
//             marginLeft: 10
//           }}>
//             <View style={{
//               width: 300,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: "center"
//             }}>
//               <Text style={{
//                 fontSize: 20
//               }}>
//                 生活号
//               </Text>
//               <Text style={{
//                 marginRight: 10
//               }}>
//                 昨天
//               </Text>
//             </View>
//             <View style={{
//               marginTop: 5
//             }}>
//               <Text>
//               菜鸟：一分钟，轻轻松松50元红包到手
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           // backgroundColor:'hotpink',
//           margin: 10
//         }}>
//           <View style={styles.container}>
//         <Image
//           style={styles.tinyLogo}
//           source={{uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1803197552,1054913238&fm=26&gp=0.jpg'}}
//           />
//           </View>
//           <View style={{
//             marginLeft: 10
//           }}>
//             <View style={{
//               width: 300,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: "center"
//             }}>
//               <Text style={{
//                 fontSize: 20
//               }}>
//                 支付宝商家服务
//               </Text>
//               <Text style={{
//                 marginRight: 10
//               }}>
//                 昨天
//               </Text>
//             </View>
//             <View style={{
//               marginTop: 5
//             }}>
//               <Text>
//                 今天，千万别去支付宝搜这个字
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           // backgroundColor:'hotpink',
//           margin: 10
//         }}>
//           <View style={styles.container}>
//         <Image
//           style={styles.tinyLogo}
//           source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3989775766,2505673289&fm=26&gp=0.jpg'}}
//           />
//           </View>
//           <View style={{
//             marginLeft: 10
//           }}>
//             <View style={{
//               width: 300,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: "center"
//             }}>
//               <Text style={{
//                 fontSize: 20
//               }}>
//                 支付宝市民中心
//               </Text>
//               <Text style={{
//                 marginRight: 10
//               }}>
//                 昨天
//               </Text>
//             </View>
//             <View style={{
//               marginTop: 5
//             }}>
//               <Text>
//                 最新！一图读懂2021年《政府工作报告》
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           // backgroundColor:'hotpink',
//           margin: 10
//         }}>
//          <View style={styles.container}>
//         <Image
//           style={styles.tinyLogo}
//           source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=448867373,1178419164&fm=26&gp=0.jpg'}}
//           />
//           </View>
//           <View style={{
//             marginLeft: 10
//           }}>
//             <View style={{
//               width: 300,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: "center"
//             }}>
//               <Text style={{
//                 fontSize: 20
//               }}>
//                 麦当劳
//               </Text>
//               <Text style={{
//                 marginRight: 10
//               }}>
//                 昨天
//               </Text>
//             </View>
//             <View style={{
//               marginTop: 5
//             }}>
//               <Text>
//                 免费辣翅！！！速速领取！！！
//               </Text>
//             </View>
//           </View>
//         </View>
//         </SafeAreaView>
//       </>
//     )
//   };
// }
// const styles = StyleSheet.create({
//   tinyLogo:{
//     width: 50,
//     height: 50,
//   },
// });
// module.exports = {
//     'POST /api/pipeline/list': (req, res) => {
//       return res.send({
//         code: 1,
//         message: '请求成功',
//         data: {
//           total: 3,
//           rows: myInvoice,
//         },
//         token: null,
//       });
//     },
//   };
// //         stretch:{
// //            backgroundColor: 'blue',
// //             height: 50,
// //             width: 50,
// //             resizeMode: 'stretch'
// // }
