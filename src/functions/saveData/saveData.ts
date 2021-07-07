import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (
  storeKey: StoreKey,
  data: StoreData,
  contextCallback: (storeData: any) => void
): Promise<void> => {
  try {
    await AsyncStorage.setItem(storeKey, JSON.stringify(data));
    const savedData = await AsyncStorage.getItem(storeKey);

    if (savedData !== null) {
      contextCallback(JSON.parse(savedData));
    }
  } catch (error) {
    console.log('err with saveData:', error.message);
  }
};

export default saveData;
