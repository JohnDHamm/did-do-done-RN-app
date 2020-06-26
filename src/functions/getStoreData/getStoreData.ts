import AsyncStorage from '@react-native-community/async-storage';

const getStoreData = async (
  storeKey: StoreKey,
  contextCallback: (storeData: any) => void
): Promise<void> => {
  try {
    const savedData = await AsyncStorage.getItem(storeKey);
    console.log('savedData', savedData);

    if (savedData !== null) {
      contextCallback(JSON.parse(savedData));
    }
  } catch (error) {
    console.log('err with getStoreData:', error.message);
  }
};

export default getStoreData;
