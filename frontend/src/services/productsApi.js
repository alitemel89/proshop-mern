import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;