import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./SelectMuiField.module.scss";
import { Autocomplete, styled, TextField } from "@mui/material";
SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

SelectField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
function SelectField(props) {
  const { field, form, label, disabled, options, readOnly, id, defaultOp } =
    props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        {...field}
        disabled={disabled}
        className={`form-field ${disabled ? "bg-gray-200" : ""}  ${
          showError ? "border-[2px] border-red-500 focus:outline-none" : ""
        }`}
        value={options.find((v) => v.id === value)?.id}
      >
        <option value="">--{defaultOp}--</option>
        {options
          ? options.map((option, i) => (
              <option value={option.id} key={i}>
                {option.value}
              </option>
            ))
          : null}
      </select>
      {showError && <span className="text-red-500">{errors[name]}</span>}
    </>
  );
}

export default SelectField;
