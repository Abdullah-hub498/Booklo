import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              secureTextEntry
              placeholder="Password"
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  logo: {
    width: 380,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
