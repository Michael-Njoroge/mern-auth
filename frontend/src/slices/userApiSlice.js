import {apiSlice} from './apiSlice.js';

const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body:data
            })
        })
    })
})

export const {useLoginMutation} = usersApiSlice;