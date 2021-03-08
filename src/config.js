import { getUniqueId, getVersion } from 'react-native-device-info';

export default {
  uid: getUniqueId(),

  version: getVersion(),

  production: false,
  /**
   * Default first.
   */
  hosts: [
    {
      label: 'Native Mock API',
      type: 'Test',
      url: 'http://localhost:3721',
    },
    {
      label: 'Production Environment',
      type: 'production',
      url: 'http://103.20.249.82:18901',
    },
  ],
};