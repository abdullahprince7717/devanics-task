import { createStore } from "redux"
import profileReducer from "./profileReducer"

const reduxStore = createStore(profileReducer);

export default reduxStore;