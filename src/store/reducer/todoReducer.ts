import  {todoActionType,TodoState,TodoTypes,Item } from '../types'
import { v4 as uuidv4 } from 'uuid';
import {getIsAuth} from '../../util'

const initialState: TodoState = {
    isAuth: !!getIsAuth(),
     contacts: [
         {id: uuidv4(), name: 'Deny' , phone: '0989025585', email: 'Armenia@mail.ru',activity:true, isEdit: false  },
         {id: uuidv4(), name: 'Mark' , phone: '0665326566', email: 'Moldova@mail.ru',activity:true , isEdit: false},
         {id: uuidv4(), name: 'Alex' , phone: '0065965959', email: 'Dania@mail.ru',activity:true, isEdit: false }
     ]
}
export const todoReducer = ( state = initialState, action:TodoTypes ) => {
   
   switch(action.type){
       case todoActionType.ADD_TEXT: {
        console.log(action.payload,'add')
        return {...state, contacts:[...state.contacts, action.payload]}
       }
       case todoActionType.DELETE_TEXT: {
        state.contacts =  Object.assign([],state?.contacts.filter((t:Item)=> t.id !== action.payload.id)) 
        console.log(state.contacts)
        return {...state, contacts:[...state.contacts] } 
    }
    case todoActionType.EDIT_TEXT: {
    //   state.contacts =   state.contacts.map((t:Item)=> {
    //         console.log(action.payload,'nsajcbjsa')
    //         if(t.id === action.payload.id ){
    //             // console.log(t.id,'id')
    //            t.email = action.payload.email
    //            t.name = action.payload.name
    //            t.phone = action.payload.phone
    //         }
     
    //     })
     
    const id = action.payload
    const isEditContacts = state.contacts.map((item: Item) => ({
        ...item,
        isEdit: item.id === id ? !item.isEdit : false,
        email:  item.id ===  action.payload.id? item.email = action.payload.email: item.email,
        phone: item.id === action.payload.id? item.phone = action.payload.phone: item.phone,
        name: item.id === action.payload.id? item.name = action.payload.name: item.name,
       
    }))

    console.log(isEditContacts,'isEditContacts')
        return {...state, contacts: isEditContacts }
    }
    case todoActionType.CHANGE_TEXT: {
        // console.log(action.payload, 'paylod')
        return {...state,isAuth: action.payload}
     }
       default: return state
   }
}
   
   
   
   
   
   
   
   
   
   
