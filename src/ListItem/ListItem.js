import React, { Component } from 'react'
import slugify from 'slugify'

class ListItem extends Component {
    render() {
        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));

            return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={item.name === this.props.state.selected[this.props.feature].name}
                    onChange={e => this.props.handleUpdate(this.props.feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );

            });
            
        return (
            <div>
                {options}
            </div>
        )
    }
}


export default ListItem