import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTORY
} from '../actions/category-actions.js';

const initialState = {
    categories: []
  }

export default function categoryReducer (state, action) {
  if (state === undefined) {
    return initialState
  }

  let newState = {};
  let newCats = [];

  switch(action.type) {
    case 'CATEGORY_CREATE' :
      console.log('21 action', action);
      return Object.assign(newState, {
        categories: [...state.categories, action.category]
      });

    case 'CATEGORY_UPDATE' :
      let updateCategories = state.categories.map(cat => {
        if(cat.id === action.categories.id){
          return action.category;
        } else {
          return cat;
        }
      });
    case 'CATEGORY_DESTORY' :
   
      newCats = state.categories.filter(cat => cat.id !== action.category.id);

      return Object.assign(newState, {
        categories: newCats
      })

      default:
        return state; 
  }
}

