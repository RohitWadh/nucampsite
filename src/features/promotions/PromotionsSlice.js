import { createSlice } from '@reduxjs/toolkit'
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

const initialState = {
    promotionsArray: PROMOTIONS 
};

const promotionSlice = createSlice ({
    name: 'promotions',
    initialState
});

export const promotionsReducer = promotionSlice.reducer

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);
}