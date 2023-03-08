import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseURI = 'http://localhost:8080'


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseURI
    }),
    endpoints: builder => ({
        // getCategories
        getCategories: builder.query({
            // default get request to: http://localhost:8080/api/categories
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        // get labels
        getLabels: builder.query({
            query: () => '/api/labels',
            provideTags: ['transaction']
        }),
        // add new Transaction
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({ // object is wrappes in parenthesis beacause the callback will return the object
                // post http://localhost:8080/api/transaction
                url: '/api/transaction',
                method: 'POST',
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),
        // delete record

        deleteTransaction: builder.mutation({
            // delete http://localhost:8080/api/transaction

            query: recordId => ({
                url: '/api/transaction',
                method: 'DELETE',
                body: recordId
            }),
            invalidatesTags: ['transaction']

        })
    })
})

// this object config the base url of the server and the endpoint of the categories.
export default apiSlice