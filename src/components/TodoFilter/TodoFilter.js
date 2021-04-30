import React from 'react';
import './TodoFilter.scss';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { todosSelectors, changeFilter } from '../../redux/todos';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: todosSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

TodoFilter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
