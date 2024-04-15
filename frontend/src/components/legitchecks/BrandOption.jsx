import PropTypes from 'prop-types';

const BrandOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

BrandOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BrandOption;
