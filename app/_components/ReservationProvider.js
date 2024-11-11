"use client"
import {createContext, useContext, useEffect, useState} from "react";

let initialState = {
    from:undefined,
    to:undefined
}

const ReservationContext=createContext()

export function useReservation(){
    const context=useContext(ReservationContext);
    if(!context){
        throw new Error("useReservation must be used within the context");
    }
    return context;
}

export default function ReservationProvider({children}) {
    let[range,setRange]=useState(initialState);
    const resetRange=()=>setRange(initialState)
    useEffect(() => {
        console.log(range)
    }, [range]);
    return<ReservationContext.Provider value={{range, setRange,resetRange}}>{children}</ReservationContext.Provider>
}