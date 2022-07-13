import React, {useContext} from "react";
import {context, option} from "../types";
import {closeAllDropdowns} from "../utils/utils";
import {DropDownContext} from "../context/DropDownContext";
let SingleOption = (props: {option: option})=>{
    const dropDownContext = useContext<context>(DropDownContext)
    return <div className={"dropdown_unit"} onClick={()=>{
        eval(props.option.action);
        closeAllDropdowns(dropDownContext)
    }}>
        <div className={"text"}>
            {props.option.name}
        </div>
        <div className={"img"}>
            <img src={props.option.icon}/>
        </div>
    </div>
}
export default SingleOption