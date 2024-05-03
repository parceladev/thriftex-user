import PropTypes from 'prop-types';

const PurchaseOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

PurchaseOption.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
};

export default PurchaseOption;
