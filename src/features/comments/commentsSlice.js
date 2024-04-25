import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

const initialState = {
    commentsArray: COMMENTS
};

const commentSlice = createSlice ({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload: ', action.payload);
            console.log('addComment state.commentsArray: ', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentSlice.reducer;

export const {addComment} = commentSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};