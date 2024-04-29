import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';
//import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok){
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json();
        return data;
    }
) 

const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
};

const campsitesSlice = createSlice ({
    name:'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        } 
    }
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

/* export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
} */

export const selectCampstiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id));
}

export const selectedFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
}