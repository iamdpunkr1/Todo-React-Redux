import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./todoTypes";
import { TodosTypes } from "../../components/Todos";

export const addTodo = (todo: TodosTypes) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export const editTodo = (todo: TodosTypes) => {
    return {
      type: EDIT_TODO,
      payload: todo,
    };
  }

  export const deleteTodo = (id: number) => {
    return {
      type: DELETE_TODO,
      payload: { id},
    };
  }

  