import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (storageName, storageValue) => {
  try {
    await AsyncStorage.setItem(storageName, storageValue);
  } catch (e) {
    // saving error
  }
};

export const storeDataObj = async (storageName, storageValue) => {
  try {
    const jsonValue = JSON.stringify(storageValue);
    await AsyncStorage.setItem(storageName, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async (storageName) => {
  try {
    await AsyncStorage.getItem(storageName, (err, result) => {
      console.log("Super r", result);
      const data = result;
      return data;
    });
  } catch (e) {}
};

export const getDataObj = async (storageName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
