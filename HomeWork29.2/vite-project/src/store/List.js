import { ADD_TASK } from "./actions";
const initialState =  {
    tasks: []
}

export default function formik(state = initialState, action){
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        default:
            return state;
    }

}