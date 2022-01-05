import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

export default function CollectionPreview({items, title}) {
  return (
    <div className='collection-preview' >
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          //to make sure that we only display four items I filter only the items that are indexed at less that 4
          //then map through those four items to create the divs for each of them
          items.filter((item, index)=> index<4).map(item=> (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}; 
