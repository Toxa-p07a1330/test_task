export type triggerState = {
    id: number,
    isDdOpened: boolean,
    options: options
}

export type triggersArray = Array<triggerState>

export type context = {
    data: {
        triggerStates: triggersArray,
    },
    setData: (object: object)=>void
}

export type options = Array<option>
export type option = {
    name: string,
    action: string
    icon: string
}

export type boundRect = {
    top: number,
    left: number,
    bottom: number,
    right: number
}