import { PropTypes } from "prop-types";
import { data } from "../../datas/options-legit-form";
import { useTranslation } from "react-i18next";
import { fetchCategories } from "../../utils/brand-api-service";
import { useState, useEffect } from "react";

const InputSelect = (props) => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  console.log(categories)
  const {
    label,
    name,
    htmlFor,
    id,
    isRequired = "none",
    value,
    defaultValue,
    onChange,
    className,
    dataType,
  } = props;

  useEffect(() => {
    if (dataType === "categories" && categories.length === 0) {
      fetchCategories()
        .then((data) => {
          if (data) {
            setCategories(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }
  }, [dataType, categories]);
  let optionsData = [];

  switch (dataType) {
    case 'categories':
      optionsData = categories.map(category => ({
        value: category.id,
        label: category.kategori_name
      }));
      break;
    case "brands":
      optionsData = data.brands;
      break;
    case "purchases":
      optionsData = data.purchases;
      break;
    case "conditions":
      optionsData = data.conditions;
      break;
    default:
      optionsData = [];
  }

  return (
    <div className="mb-8">
      <label
        htmlFor={htmlFor}
        className="flex gap-2 mb-5 font-semibold uppercase"
      >
        {label}
        {isRequired === "optional" && (
          <span className="text-xs font-normal"> {t("Optional")}</span>
        )}
        {isRequired === "required" && (
          <span className="text-xs font-normal text-red-500">
            {" "}
            {t("Required")}
          </span>
        )}
      </label>
      <select
        name={name}
        id={id}
        className={`w-full outline-none p-2 border-b-2 bg-primary border-gray-700 dark:border-gray-200 dark:bg-secondary ${className}`}
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled className="text-gray-400">
          {defaultValue}
        </option>
        {optionsData.map((item) => (
          <option key={item.value} value={item.value}>
            {t(item.label)}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  isCategoryClassName: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  isRequired: PropTypes.oneOf(["required", "optional", "none"]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(File),
  ]),
  onChange: PropTypes.func,
  dataType: PropTypes.string,
};

export default InputSelect;
