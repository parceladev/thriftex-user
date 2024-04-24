import { PropTypes } from 'prop-types';

const CategoryOption = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </>
  );
};

CategoryOption.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryOption;
