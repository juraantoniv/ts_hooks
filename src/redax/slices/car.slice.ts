import {createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";

interface IState{
    cars:ICar[]
}


const initialState:IState={
    cars:[]

}

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
});


const {reducer:carReducer} = carSlice;


const carActions = {

}

export {
    carActions,
    carReducer
}
