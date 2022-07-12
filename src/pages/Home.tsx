import React, {useContext, useEffect} from "react";
import "../assets/styles/style.css"
import Trigger from "../components/Trigger";
import {DropDownContext} from "../context/DropDownContext";
import {closeAllDropdowns} from "../utils/utils";
import {triggerState} from "../types";
let Home = ()=>{
    const dropDownContext = useContext(DropDownContext)

    document.addEventListener("click", (e: MouseEvent)=>{
        let isTriggerChild = false
        e.composedPath().forEach((value: any)=>{
            if (value.className==="trigger"){
                isTriggerChild = true;
                return
            }
        })
        if (!isTriggerChild)
            closeAllDropdowns(dropDownContext)
    }, true)
    return <>
            <div className={"home"}>
                    {dropDownContext.data.triggerStates.map((
                        value: triggerState
                    )=>{
                        return <Trigger id={value.id} key={value.id}/>
                    })}
            </div>
        </>
}
export default Home