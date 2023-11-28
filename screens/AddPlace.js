import { insertPlace } from "../Util/database";
import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    //navigation.navigate("AllPlaces", { place: place }); //before adding into local db
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
