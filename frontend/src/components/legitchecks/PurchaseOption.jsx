import PropTypes from 'prop-types';

const PurchaseOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

PurchaseOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PurchaseOption;
