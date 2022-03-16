import { todoActionType } from "./types";


export const setChangeText = (value:boolean) => ({
    type: todoActionType.CHANGE_TEXT,
    payload: value
  })

  
export const setRemoveText = (id: string | undefined) =>({
    type:todoActionType.DELETE_TEXT,
    payload: {
      id: id,
  
    }
  })
  
  export const setEditText = (id: string | undefined,form:any ) => ({
    type: todoActionType.EDIT_TEXT, payload: {
    id,
    ...form
  }
})
