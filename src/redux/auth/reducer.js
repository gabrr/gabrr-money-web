// constants
import { LOGIN } from "./constants"

const INITIAL_STATE = { isAuthticated: true }

const auth = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN:
            return { ...state, ...action.payload }
        default: 
            return state
    }
}

export default auth