import initialState from './initialState';

export default (state = initialState.users, action) => {
   switch (action.type) {
      case "FETCH_USER":
         return [...state, action.payload];
      default:
         return state;   
   }

}