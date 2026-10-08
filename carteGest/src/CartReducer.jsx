export const initialState={cart:[]}
export const CartReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            if(state.cart.find((p,pos)=>p.id===action.payload.id)){
                return {...state,cart:state.cart.map((p,pos)=>p.id===action.payload.id?{...p,qte:p.qte+1}:p)};
            }else{
                return {...state,cart:[...state.cart, {...action.payload,id:Date.now(),qte:1}]};
            };
        
        case "REMOVE_FROM_CART":
            return{...state,cart:state.cart.filter((p,pos)=>p.id!==action.payload.id)}
        case "CLEAR":
            return {...state,cart:[]}

        case "INCREMENT_QTE":
            return {...state,cart:state.cart.map((p,pos)=>p.id===action.payload.id?{...p,qte:p.qte+1}:p)}
        case "DECREMENT_QTE":
            return {...state,cart:(state.cart.map((p,pos)=>p.id===action.payload.id?{...p,qte:p.qte-1}:p)).filter(p=>p.qte>0)}
        case "SET_PRODUCTS":
            return {...state,produits:action.payload}
        default:
            return state;
    }
}