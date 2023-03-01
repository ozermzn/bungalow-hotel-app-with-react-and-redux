import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reservationApi = createApi({
  reducerPath: "reservations",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://media-f5133-default-rtdb.firebaseio.com",
  }),
  endpoints(builder) {
    return {
      addReservation: builder.mutation({
        invalidatesTags: ["Bungalow"],
        query: (reservationObject) => {
          return {
            url: "/reservation.json",
            method: "POST",
            body: {
              id: nanoid(),
              bungalowId: reservationObject.bungalowId,
              bungalowImage: reservationObject.bungalowImage,
              name: reservationObject.name,
              surname: reservationObject.surname,
              email: reservationObject.email,
              checkIn: reservationObject.checkIn,
              checkOut: reservationObject.checkOut,
              totalPrice: reservationObject.totalPrice,
            },
          };
        },
      }),
      fetchReservation: builder.query({
        providesTags: ["Bungalow"],
        query: (bungalowId) => {
          return {
            url: "/reservation.json",
            params: {
              bungalowId: bungalowId,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchReservationQuery, useAddReservationMutation } =
  reservationApi;

export { reservationApi };
