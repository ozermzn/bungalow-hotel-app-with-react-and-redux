import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bungalowsApi } from "./apis/bungalowApi";
import { reservationApi } from "./apis/reservationApi";

const store = configureStore({
  reducer: {
    [bungalowsApi.reducerPath]: bungalowsApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(bungalowsApi.middleware)
      .concat(reservationApi.middleware);
  },
});
setupListeners(store.dispatch);
export {
  useFetchBungalowsQuery,
  useAddBungalowMutation,
} from "./apis/bungalowApi";
export {
  useAddReservationMutation,
  useFetchReservationQuery,
} from "./apis/reservationApi";
export { store };
