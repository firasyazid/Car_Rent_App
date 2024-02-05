import Toast from 'react-native-toast-message';


export const showToast = (type, message1, message2) => {
    Toast.show({
      type: type,
      text1: message1,
      text2: message2,
      visibilityTime: 2000,  

      });
  };

  