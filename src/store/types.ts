
export enum todoActionType {
   ADD_TEXT = 'ADD_TEXT',
   EDIT_TEXT = 'EDIT_Text',
   DELETE_TEXT = 'DELETE_TEXT',
   SET_TEXT = 'SET_TEXT',
   CHEKED_TEXT = 'CHEKED_TEXT',
   RESTORE_TEXT = 'RESTORE_TEXT',
   CHANGE_TEXT = 'CHANGE_TEXT'
}


export type Item = {
   name: string,
   email: string,
   id: string,
   phone: string
}


export interface TodoState {
   contacts: [] | any
   isAuth: any
}
interface contacts {
   type: todoActionType;
   payload: any
}
export type TodoTypes = contacts