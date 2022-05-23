import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessages from "./ErrorMessages";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(
      name,
      imageUris.filter((imageUris) => imageUris !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
