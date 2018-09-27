import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cuisines } from 'services/cuisineApi';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines,
    };
  }
  handleCheckboxChange = (id) => {
    const cuisineList = this.state.cuisines.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    const categories = cuisineList && cuisineList.reduce((accum, value) => {
      if (!value.checked) return accum;
      accum.push(value.alias);
      return accum;
    }, []);
    const value = categories && categories.length ? categories.join() : 'All';
    this.props.setCategories(value);
    this.setState(cuisineList);
  }
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }
  disabledButton() {
    const { condition } = this.props;
    return !condition || !condition.latitude || !condition.longitude;
  }
  render() {
    const { condition, place } = this.props;
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition condition={condition}
            cuisines={this.state.cuisines}
            action={this.handleOnConditionChange}
            handleCheckboxChange={this.handleCheckboxChange}/>
          <Button disabled={this.disabledButton()} onClick={this.handleOnClick} theme="homepageClick" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setCategories: conditionActions.setCategories,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setCategories: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
