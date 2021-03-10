import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import MyHomeBilling from '../pages/MyHome/Billing';
import MyTester from '../pages/MyTester';
import TransportHome from '../pages/TransportHome';
// import MyBook from '../pages/MyBook';
export const stackPageData = [
  {
    name: 'Home',
    component: Home,
    options: {
      // headerShown: false,
      // header: () => null
    },
  },
  {
    name: 'SignIn',
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null,
    },
  },
  {
    name: 'DevOptions',
    component: DevOptions,
    options: {
      headerShown: false,
      header: () => null,
    },
  },
  {
    name: 'MyHomeSetting',
    component: MyHomeSetting,
    options: {
      title: '设置',
    },
  },
  {
    name: 'MyHomeBilling',
    component: MyHomeBilling,
    options: {
      title: '票据',
    },
  },
  {
    name: 'MyTester',
    component: MyTester,
    options: {
      title: '测试界面',
    },
  },
  {
    name: 'TransportHome',
    component: TransportHome,
    options: {
      title: '首页',
    },
  },
  // {
  //   name: "MyBook",
  //   component:MyBook,
  //   options: {
  //     title: '进入首页',
  //   }
  // },
];
