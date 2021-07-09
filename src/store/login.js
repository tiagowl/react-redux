import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {
        fetchStarted(state){
            state.loading = true;
        },
        fetchSucess(state, action){
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchError(state, action){
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        }
    }
});

export const {fetchStarted, fetchSucess, fetchError} = slice.actions;

export const fetchToken = (user) => async (dispatch) => {
    try{
        dispatch(fetchStarted());
        const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json();
        return dispatch(fetchSucess(data))
    }catch(error){
        return dispatch(fetchError(error.message));
    }
}

export default slice.reducer;