import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';
//import { COMMENTS } from '../../app/shared/COMMENTS';

export const fetchComments = createAsyncThunk (
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok){
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json();
        return data;
    }
)

export const postComments = createAsyncThunk (
    'comments/postComment',
    async (comment, {dispatch}) => {
        const response = await fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
        }
    )
    if (!response.ok){
        return Promise.reject('Unable to fetch, status: ' + response.status)
    }
    const data = await response.json();
    dispatch(addComment(data));
    return data;

    }
)
const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
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
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.commentsArray = mapImageURL(action.payload);
        },
        [fetchComments.rejected]: (state,action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postComments.rejected]: (state,action) => {
            state.isLoading = false;
            alert(
                'Your comment could not be posted\nError: ' + 
                (action.error ? action.error.message: 'Fetch Failed')
            );
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