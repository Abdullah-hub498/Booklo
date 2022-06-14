import { useEffect } from "react";
//import { Notifications } from "expo";
//import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";
export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addPushTokenListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;

      const token = await (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
