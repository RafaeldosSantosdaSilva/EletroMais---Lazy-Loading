import products from '../../api';

const initialState = [...products];

const productsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ALL_PRODUCTS':
      return state.filter(product => {
        return product.ativo === true;
      });
   
    default:
      return state;
  }
} 

export default productsReducer;