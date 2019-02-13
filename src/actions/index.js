import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
      const response = await jsonPlaceholder.get('/posts');

      dispatch({ type: 'FETCH_POSTS', payload: response.data });
   };


// memoization solution to stop multiple fetchUser calls for each post
// a limitation for this aproach is that if you ever need to fetch the same user
// info another time for some othr reason, say an update, you need another method, 
// because with memoization, it will always return the same response.

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
      const response = await jsonPlaceholder.get(`/users/${id}`);

      dispatch({ type: 'FETCH_USER', payload: response.data });
});

