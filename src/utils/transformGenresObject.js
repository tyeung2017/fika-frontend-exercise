// converting array to object enable search to perform at O(1) instead of O(n)
// but here the assumption is the genres ids are unique, which is a reasonable assumption

const transformGenresObject = (genres) => {
    return genres.reduce((state, current) => {
      state[current.id] = current.name;
      return state;
    }, {});
  };
  
  export default transformGenresObject;
  