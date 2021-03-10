import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { userFirst } from '../services/dataBill';

export default {
  state: {
    userData: null,
    remember: false, // Whether to remember password
    formData: {},
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
    updateForm: (state, payload) => ({
      ...state,
      formData: { ...state.formData, ...payload },
    }),
  },
  //返回mytester界面的事件。
  effects: (dispatch) => ({
    // 登录
    async userFirst(_, { dataBill }) {
      console.log('dataBill', dataBill);
      const data = await userFirst(dataBill.formData);
      if (data && data.code === 1) {
        const ref = data.data.rows;
        console.log('ref', ref);
        await this.update({
          formData: ref,
        });
      }
      console.log('data', data);
    },
  }),
};
