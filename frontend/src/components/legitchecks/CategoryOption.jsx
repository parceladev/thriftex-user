import PropTypes from 'prop-types';

const CategoryOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

CategoryOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CategoryOption;
