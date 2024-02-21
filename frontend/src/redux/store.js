import { createStore } from "redux"
import cakeReducer from "./profileReducer"

const reduxStore = createStore(cakeReducer);

export default reduxStore;