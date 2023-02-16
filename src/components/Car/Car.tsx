import React, {FC, ReactNode} from 'react';
import {ICar} from "../../interfaces";

interface IProps{
    car:ICar,
    children?:ReactNode
}

const Car:FC<IProps> = ({car}) => {

    const {id,year,price,brand} = car;
    return (
        <div>
            <div>id:{id}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <div>brand:{brand}</div>
        </div>
    );
};

export {
    Car
}