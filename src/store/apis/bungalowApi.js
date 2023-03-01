import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bungalowsApi = createApi({
  reducerPath: "bungalows",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://media-f5133-default-rtdb.firebaseio.com",
  }),
  endpoints(builder) {
    return {
      addBungalow: builder.mutation({
        invalidatesTags: ["Bungalow"],
        query: (bungalowObject) => {
          return {
            url: "/bungalow.json",
            method: "POST",
            body: {
              id: nanoid(),
              name: bungalowObject.name,
              price: bungalowObject.price,
              description: bungalowObject.description,
              location: bungalowObject.location,
            },
          };
        },
      }),
      fetchBungalows: builder.query({
        providesTags: ["Bungalow"],
        query: () => {
          return {
            url: "/bungalow.json",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchBungalowsQuery, useAddBungalowMutation } = bungalowsApi;
export { bungalowsApi };
