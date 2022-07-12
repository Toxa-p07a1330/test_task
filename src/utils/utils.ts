import {context, triggerState} from "../types";

const deepClone = (source: any): any=>{
    return JSON.parse(JSON.stringify(source))
}

const closeAllDropdowns = (context: context)=>{
    let data = deepClone(context.data);
    data.triggerStates = data.triggerStates.map((value: triggerState)=>{
        value.isDdOpened = false
        return value;
    })
    context.setData(data)
}

export {deepClone, closeAllDropdowns}
