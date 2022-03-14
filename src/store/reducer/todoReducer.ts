import  {todoActionType,TodoState,TodoTypes,Item } from '../types'
import { v4 as uuidv4 } from 'uuid';
import {getIsAuth} from '../../util'

const initialState: TodoState = {
    isAuth: !!getIsAuth(),
     contacts: [
         {id: uuidv4(), name: 'Deny' , phone: '0989025585', email: 'Armenia@mail.ru',activity:true  },
         {id: uuidv4(), name: 'Mark' , phone: '0665326566', email: 'Moldova@mail.ru',activity:true },
         {id: uuidv4(), name: 'Alex' , phone: '0065965959', email: 'Dania@mail.ru',activity:true }
     ]
}
export const todoReducer = ( state = initialState, action:TodoTypes ) => {
   
   switch(action.type){
       case todoActionType.ADD_TEXT: {
        return {...state, contacts:[...state.contacts, action.payload]}
       }
       case todoActionType.DELETE_TEXT: {
        state.contacts =  Object.assign([],state?.contacts.filter((t:Item)=> t.id !== action.payload.id)) 
        console.log(state.contacts)
        return {...state, contacts:[...state.contacts] } 
    }
    case todoActionType.EDIT_TEXT: {
      state.contacts =   state.contacts.map((t:Item)=> {
      
            if(t.id === action.payload.id){
                console.log(t.id,'id')
               t.email = action.payload.email
               t.name = action.payload.name
               t.phone = action.payload.phone
            }
     
        })
        return state
    }
    case todoActionType.CHANGE_TEXT: {

        return {...state,isAuth: action.payload}
     }
       default: return state
   }
}
   
   
   
   
   
   
   
   
   
   
