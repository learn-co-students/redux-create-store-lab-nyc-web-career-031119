export default function createStore(reducer) {
  let state = 0;

  const dispatch = (action) => {
    state = reducer(state, action);
    render()
  }

  const getState = () => {
    return state
  }

  return {
    dispatch,
    getState
  };

};//end createStore

function render() {
  const container = document.getElementById('container');
}
