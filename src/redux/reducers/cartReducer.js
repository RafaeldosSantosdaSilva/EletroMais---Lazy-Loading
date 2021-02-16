import products from '../../api';

const initialState = products.map(product => ({...product, qtt: 0}));

const cartReducer = (state= initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      return state.map(product => {
        product.id_produto === action.id && product.qtt++;
        return product;
      });
    
    case 'REMOVE_FROM_CART':
      return state.map(product => {
        product.id_produto === action.id && product.qtt--;
        return product;
      });

    case 'CLEAR_CART':
       return state.map(product => {
        product.qtt = 0;
        return product;
      });
    
    default:
      return state;
  }
}

export default cartReducer;