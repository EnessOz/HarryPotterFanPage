import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  wizardsList: [],

}
export const getWizards = createAsyncThunk("fetchData", async () => {
    const response = await fetch("https://hp-api.onrender.com/api/characters")
    const data = await response.json()
    return data;
});

export const potterSlice = createSlice({
  name: 'potter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(getWizards.pending, (state) => {
        state.loading = true;
    })
    .addCase(getWizards.fulfilled, (state, action) => {
        state.loading = false
        state.wizardsList = action.payload
    })
    .addCase(getWizards.rejected, (state) => {
        state.loading = false;
    })
  }
})




export default potterSlice.reducer