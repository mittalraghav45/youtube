import { createSlice } from "@reduxjs/toolkit";
import {OFFSET} from '../utils/constants'
const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[], 
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET,1)//restricting the msg length to 10 , will remove 1 msg after every 10 msgs
            state.messages.push(action.payload)
            //unshfit pushes the data from the first end
        }
    }
})

export default chatSlice.reducer;

export const{addMessage}=chatSlice.actions