import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      style={(pressed) => {
        [styles.button, pressed && styles.pressed];
      }}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
   // margin: 4,  to comment it because positing is not proper in IOS
    justifyContent: "center",
    alignContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
