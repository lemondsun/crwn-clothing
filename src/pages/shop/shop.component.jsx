import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'; 

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
      
    }
}

  render() {
    //here I deconstruct the state
    const {collections}= this.state
    return (
      <div className='shop-page'>
        {//below I use the spread operator to provide all the key value pairs without explictly listing them all
          collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
       }
      </div>
    )
  }
}
