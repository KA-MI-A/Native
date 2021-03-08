import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { userList } from '../services/dataArray';

export default {
  state: {
    userData: null,
    remember: false, // Whether to remember password
    formData: { },
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
    updateForm: (state, payload) => ({
      ...state,
      formData: { ...state.formData, ...payload },
    }),
  },
  //返回mytester界面的事件。
  effects: dispatch => ({
    // 登录
    async userList(_, { dataArray }) {
        console.log('dataArray',dataArray)
      const data = await userList(dataArray.formData);
      if(data && data.code ===1){
        const ref = data.data.rows;
        console.log('ref',ref)
        await this.update({
          formData: ref,
        });
      }
      console.log('data',data)
    },
   
  }),
};