import React, {useContext, useEffect, useRef, useState} from "react";
import {DropDownContext} from "../context/DropDownContext";
import {boundRect, option, options} from "../types";
import SingleOption from "./SingleOption";

let DropDownMenuWrapper = (props: {id: number})=>{

    const dropDownContext = useContext(DropDownContext)
    const myOptions: options = dropDownContext.data.triggerStates.filter((value)=>{return value.id===props.id})[0].options

    const ref = useRef<HTMLDivElement|null>(null)
    const [isVisible, setVisible] = useState<boolean>(true)
    const [checkShow, setCheckShow] = useState<number>(0);
    const [xPosition, setXPosition] = useState<"left"|"right">("left")
    const [yPosition, setYPosition] = useState<"top"|"bottom">("top")


    useEffect(()=>{
        setTimeout(()=>{
            setCheckShow(checkShow+1)
        }, 100)

        let element = ref.current;
        if(!element)
            return;
        let boundReact:DOMRect | ClientRect = element.getBoundingClientRect()
        if (boundReact.top<0 && yPosition==="top"){
            setYPosition("bottom")
        }
        if (boundReact.top<0 && yPosition==="bottom"){
            setVisible(false);
            return
        }
        else{
            setVisible(true)
        }
        if (boundReact.bottom>window.innerHeight && yPosition==="bottom"){
            setYPosition("top")
        }
        if (boundReact.bottom>window.innerHeight && yPosition==="top"){
            setVisible(false);
            return;
        }
        else{
            setVisible(true)
        }

        if (boundReact.left<0 && xPosition==="left"){
            setXPosition("right")
        }
        if (boundReact.left<0 && xPosition==="right"){
            setVisible(false);
            return;
        }
        else{
            setVisible(true)
        }
        if (boundReact.right>window.innerWidth && xPosition==="right"){
            setXPosition("left")
        }
        if (boundReact.right>window.innerWidth && xPosition==="left"){
            setVisible(false);
            return;
        }
        else{
            setVisible(true)
        }
    }, [checkShow])

    if (!isVisible){
        return <div ref={ref}/>
    }
    return <div ref={ref} className={`dropdown_wrapper ${xPosition} ${yPosition}`}>
        {myOptions.map((value: option)=>{
            return <SingleOption option={value}/>
        })}
    </div>

}
export default DropDownMenuWrapper