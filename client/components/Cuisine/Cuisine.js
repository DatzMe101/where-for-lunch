import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox/Checkbox';

export default class Cuisine extends PureComponent {
  static propTypes = {
    cuisine: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
  };

  render() {
    const { cuisine, onChange } = this.props;
    return (
      <div>
        <h4>Cuisine</h4>
        <React.Fragment>
          {
            cuisine.map(item => (
              <div key={item.alias}>
                <label key={item.alias}>
                  <Checkbox id={item.id} name={item.name} checked={item.checked} onChange={onChange}/>
                  {item.name}
                </label>
              </div>
            ))
          }
        </React.Fragment>
      </div>
    );
  }
}
