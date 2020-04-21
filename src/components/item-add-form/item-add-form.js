import React, { Component } from 'react';

import './item-add-from.css';

export default class ItemAddFrom extends Component{
    render(){
			return(
				<div className="item-add-from">
					<button className="btn btn-outline-secondary" 
						onClick={() => this.props.onItemAdded('Hello word')}>
							Add Item
					</button>
				</div>
			)
		}
}