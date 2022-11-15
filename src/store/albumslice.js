import { createSlice } from '@reduxjs/toolkit';


 const albumSlice = createSlice({
    name: 'albumlist',
    initialState: {
        albumList: [],
        categories: {
            Favourite: []
        },
        selectedCategory: '',
        searchResult: []
    },
    reducers:{
        setAlbumList : (state, action) => {
            state.albumList = action.payload
        },
        setCategoriesList : (state, action) => {
            state.categories = {...state.categories, ...action.payload}
        },
        updateCategoriesList : (state, action) => {
            state.categories = action.payload
        },
        setSelectedCategory : (state, action) => {
            state.selectedCategory = action.payload
        },
        setSearchResult : (state, action) => {
            state.searchResult = action.payload
        }
    }
})

export const { setAlbumList, setCategoriesList, updateCategoriesList,  setSelectedCategory, setSearchResult } = albumSlice.actions;

export default albumSlice.reducer;