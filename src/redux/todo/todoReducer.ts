import { TodosTypes } from "../../components/Todos"
import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO } from "./todoTypes";

type TodoAction = {
    type: string;
    payload: TodosTypes;
}

const initialState:TodosTypes[] = [];

const todoReducer = (state=initialState, action: TodoAction) => {

    switch(action.type){
        case ADD_TODO: return [...state, action.payload]
        case EDIT_TODO: return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
        case DELETE_TODO: return state.filter(todo => todo.id !== action.payload.id);
        case TOGGLE_TODO: return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
        default: return state;
    }
} 

export default todoReducer;