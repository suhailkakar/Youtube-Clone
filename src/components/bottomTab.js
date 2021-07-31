import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const SampleScreen = () => <Text></Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", color: "#fff", title: "Home", icon: "home" },
    { key: "trending", color: "#fff", title: "Trending", icon: "fire" },
    {
      key: "subscriptions",
      color: "#fff",
      title: "Subscriptions",
      icon: "video",
    },
    { key: "inbox", color: "#fff", title: "Inbox", icon: "email" },
    { key: "library", color: "#fff", title: "Library", icon: "folder" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: SampleScreen,
    trending: SampleScreen,
    subscriptions: SampleScreen,
    inbox: SampleScreen,
    library: SampleScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#FF0000"
      inactiveColor="#616161"
    />
  );
};

export default MyComponent;
