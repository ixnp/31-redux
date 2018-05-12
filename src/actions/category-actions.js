'use strict'; 

export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTORY = 'CATEGORY_DESTORY';

export function categoryCreate(category) {
  return { type: CATEGORY_CREATE, category }
}

export function categoryUpdate(value) {
  return {type: 'CATEGORY_UPDATE', category}
}

export function categoryDestroy(value) {
  return {type: 'CATEGORY_DESTORY', category}
}





