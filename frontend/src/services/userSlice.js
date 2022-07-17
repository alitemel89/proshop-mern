import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService'

// Get user from localStorage
const currentUser = JSON.parse(localStorage.getItem('user'))


const initialState = {
    userInfo: currentUser ? currentUser : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


export const getUserDetails = createAsyncThunk('api/users', async (user, thunkAPI) => {
    try {
        return await userService.getUserDetails(user)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateUserProfile = createAsyncThunk('api/users/profile', async (user, thunkAPI) => {
    try {
        return await userService.updateUserProfile(user)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUserDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.userInfo = action.payload
            })
            .addCase(getUserDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.userInfo = null
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.userInfo = action.payload
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.userInfo = null
            })
    }
})

export const { reset } = userSlice.actions
export default userSlice.reducer