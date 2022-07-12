import React, { useState } from 'react';

import {deepFreeze} from "../utils/object";
import {context, options} from "../types";

import share from "../assets/images/share.svg"
import edit from "../assets/images/edit.svg"
import deletion from "../assets/images/delete.svg"

let optionsDD:options = [
    {
        name: "Поделиться в социальных сетях",
        icon: share,
        action: "alert(\"Share\")"
    },
    {
        name: "Редактировать страницу",
        icon: edit,
        action: "alert(\"Edit\")"
    },
    {
        name: "Удалить страницу",
        icon: deletion,
        action: "alert(\"Delete\")"
    },

]
let initialContext:context = {
    data: {
        triggerStates: [
            {
                id: 1,
                isDdOpened: false,
                options: optionsDD
            },
            {
                id: 2,
                isDdOpened: false,
                options: optionsDD
            },
            {
                id: 3,
                isDdOpened: false,
                options: optionsDD
            },
            {
                id: 4,
                isDdOpened: false,
                options: optionsDD
            },

        ]
    },
    setData: (object) => {}
}
const DropDownContext = React.createContext<context>(initialContext);

export function DropDownContextProvider(props: { children: React.ReactNode; }) {


    const [data, mSetData] = useState(initialContext.data);

    const setData = (mData: object | Array<any>) => mSetData(deepFreeze(mData));
    return (
        < DropDownContext.Provider value={{
            data: data,
            setData: setData
        }}>
            {props.children}
        </ DropDownContext.Provider>
    );
}

export default DropDownContextProvider;
export { DropDownContext };
