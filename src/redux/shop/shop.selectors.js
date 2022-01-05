import { createSelector } from 'reselect';

import { memoize } from 'lodash';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //below I get all the keys from the object collections and then turm them into an array with map
  //taking the value of that collections object at that key
  //this gives me an array of items
  collections => Object.keys(collections).map(key=> collections[key])
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
);