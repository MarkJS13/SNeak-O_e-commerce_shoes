import { createSlice } from "@reduxjs/toolkit"

const notifSlice = createSlice({
    name: 'notif',
    initialState: { show: false },
    reducers: {
        showNotification: (state) => {
            state.show = true;
        },
        hideNotification: (state) => {
            state.show = false;
        }
    }
})


export const {showNotification, hideNotification} = notifSlice.actions;
export default notifSlice; 