import PropTypes from "prop-types";
import React from "react";
import styles from "./TextAreaField.module.scss";
import { Input } from "@material-tailwind/react";
TextAreaField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

TextAreaField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function TextAreaField(props) {
  const { field, form, type, label, placeholder, disabled, autoFocus } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = touched[name] && errors[name];
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`form-field h-[100px] ${disabled ? "bg-gray-200" : ""}  ${
          showError
            ? " border-[2px] border-red-500 focus:border-red-500 focus:outline-none"
            : ""
        }`}
        autoFocus={autoFocus}
      />

      {showError && <span className="text-red-500">{errors[name]}</span>}
    </>
  );
}

export default TextAreaField;
