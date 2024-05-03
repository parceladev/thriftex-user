import PropTypes from 'prop-types';

const ItemConditionOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

ItemConditionOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemConditionOption;
