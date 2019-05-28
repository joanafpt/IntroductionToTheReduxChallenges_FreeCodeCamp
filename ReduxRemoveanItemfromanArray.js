//Redux: Remove an Item from an Array
/*The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed. */

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
      case 'REMOVE_ITEM':
        // don't mutate state here or the tests will fail
        //copy the state array so it doesn't change the original one 
        const newState = [...state];
        //splice method says where to start changing the array (action.index) and how many items do we want to remove (1). 
        newState.splice(action.index, 1);
        //returning the updated array
        return newState;
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);