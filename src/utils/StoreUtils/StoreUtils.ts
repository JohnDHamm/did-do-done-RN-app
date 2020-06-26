import AsyncStorage from '@react-native-community/async-storage';

const StoreUtils = {
  // getStore: async (storeKey: string): Promise<void> => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem(storeKey);
  //     return jsonValue !== null ? JSON.parse(jsonValue) : null;
  //   } catch (error) {
  //     console.log('err with StoreUtils.getStore:', error.message);
  //   }
  // },
  // setStore: async (
  //   storeKey: string,
  //   value: Array<SavedEvent | Tag>
  // ): Promise<void> => {
  //   try {
  //     return await AsyncStorage.setItem(storeKey, JSON.stringify(value));
  //   } catch (error) {
  //     console.log('err with StoreUtils.setStore:', error.message);
  //   }
  // },
  // mergeStore: async (storeKey: string, value): Promise<void> => {
  //   try {
  //     return await AsyncStorage.mergeItem(storeKey, JSON.stringify(value));
  //   } catch (error) {
  //     console.log("err with StoreUtils.mergeStore:", error.message);
  //   }
  // },
  removeStore: async (storeKey: StoreKey): Promise<void> => {
    try {
      return await AsyncStorage.removeItem(storeKey);
    } catch (error) {
      console.log('err with StoreUtils.removeStore:', error.message);
    }
  },
};

export default StoreUtils;
