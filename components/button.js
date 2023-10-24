import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Button as NBButton, Container, Content } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <NBButton
          style={styles.button}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text style={styles.buttonText}>Go to Detail</Text>
        </NBButton>
      </Content>
    </Container>
  );
};

const DetailScreen = () => {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <NBButton style={styles.button}>
          <Text style={styles.buttonText}>Detail Screen</Text>
        </NBButton>
      </Content>
    </Container>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);

const styles = {
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#dddddd",
    padding: 15,
    borderRadius: 30,
    width: 200,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
};
