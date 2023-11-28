import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, TextInput, Text, View } from "react-native";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

function PlaceForm({onCreatePlace}) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function onChangeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }
  /***therefore, in the place where the function for this prop is
   * deined in the Placeorm component,
   * I wanna wrap this pickLocationHandler with useCallback. */
  /*  function pickedLocationHandler(location) {
    setPickedLocation(location);
  } */

  const pickedLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
    onCreatePlace(placeData);
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>The Place Form</Text>
        <TextInput
          onChangeText={onChangeTitleHandler}
          style={styles.input}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickedLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
