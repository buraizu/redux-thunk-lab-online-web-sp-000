export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
      })
  }
}
