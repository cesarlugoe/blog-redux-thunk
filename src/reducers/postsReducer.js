import initialState from './initialState';

export default (state = initialState.posts, action) => {
   switch(action.type) {
      case 'FETCH_POSTS':
         return action.payload;
      default:
         return state;
   }
};