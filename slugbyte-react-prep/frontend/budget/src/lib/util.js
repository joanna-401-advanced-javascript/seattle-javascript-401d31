'use strict';

// returns a curryed function that will act like setState for 
// a property of the state. This is usefuill if you dont wana
// type Object.assing(state[subState], {newdata}) allll ooover the 
// app
export let subStateUpdaterCreate = (propName, setState) => update =>  {
  setState(prevState => ({
    [propName]: Object.assign(prevState[propName], update),
  }));
};

// used to create onChange handler functions for forms whos state
// is manages in the app's rootState
export let changeHandlerCreate  = (subStateUpdater) => e => {
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let targetName = target.name;

  subStateUpdater({[targetName]: value});
};

// used in jsx templats like {renderIf(someValue, <p> lul </p>)} 
// to render something only if the test is truthy
// basicily use it like angulars ng-if 
export let renderIf = (test, result) => {
  if(test) return result;
};

// it takes and object like {'some-class': someValue} and 
// returns a className string that has classes for every key
// that had a truthy value
// basicly use it like angulars ng-class
export let classToggler = (opts) => {
  let className = '';
  for(let key in opts) {
    if(opts[key]) className += key + ' ';
  }
  return className;
};

