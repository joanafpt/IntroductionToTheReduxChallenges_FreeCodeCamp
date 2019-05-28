//Redux: Copy an Object with Object.assign
/*The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.*/

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    console.log(JSON.stringify(state))
    switch (action.type) {
      case 'ONLINE':
        // don't mutate state here or the tests will fail
        const newObject = Object.assign({}, state, {
          status: 'online'
        });
        return newObject;
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);