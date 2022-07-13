import React, {useContext} from "react";
import {triggerState} from "../types";
import DropDownMenuWrapper from "./DropDownMenuWrapper";
import {DropDownContext} from "../context/DropDownContext";
import {deepClone} from "../utils/utils";
import {deepFreeze} from "../utils/object";

let Trigger = (props: {id: number})=>{
    const dropDownContext = useContext(DropDownContext)


    const clickHandler = (id: number)=>{
        let data = deepClone(dropDownContext.data);
        data.triggerStates = data.triggerStates.map((value: triggerState)=>{
            if (value.id===id){
                value.isDdOpened = !value.isDdOpened
                return value;
            }
            else {
                value.isDdOpened = false
                return value;
            }
        })
        dropDownContext.setData(data)
    }
    const hoverHandler = (id: number)=>{
        let data = deepClone(dropDownContext.data);
        data.triggerStates = data.triggerStates.map((value: triggerState)=>{
            if (value.id===id){
                value.isDdOpened = true
                return value;
            }
            else {
                value.isDdOpened = false
                return value;
            }
        })
        dropDownContext.setData(data)
    }
    const triggerInfo = dropDownContext.data.triggerStates.filter((value)=>{return value.id===props.id})[0];
    return <>
        <div className={"trigger"}>
            <div className={"click_catcher"} onClick={(e)=>{clickHandler(props.id)}}
                 onMouseEnter={()=>{hoverHandler(props.id)}}/>
            {triggerInfo.isDdOpened && <DropDownMenuWrapper id={props.id}/>}
        </div>
    </>
}
export default Trigger