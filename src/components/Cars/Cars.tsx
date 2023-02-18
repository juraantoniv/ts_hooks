import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {carActions} from "../../redax";

const Cars:FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{

        dispatch(carActions.)

    },[])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
}