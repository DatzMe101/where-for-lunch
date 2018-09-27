import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Cuisine from 'components/Cuisine/Cuisine';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
    handleCheckboxChange: PropTypes.func,
    cuisines: PropTypes.arrayOf(PropTypes.object),
  };

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  render() {
    const { condition: { radius }, handleCheckboxChange, cuisines } = this.props;

    return (
      <div>
        <h4>Filters</h4>
        <div className={styles.root}>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
          <span>meters</span>
        </div>
        <Cuisine cuisine={cuisines} onChange={handleCheckboxChange}/>
      </div>
    );
  }
}
