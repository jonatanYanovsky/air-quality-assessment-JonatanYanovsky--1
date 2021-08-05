import { useField, useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cityActions } from "../Store/index";

export default function AirQualityField(props) {
  const dispatch = useDispatch();

  const [field, meta] = useField(props);

  const { values } = useFormikContext();

  let value = "";
  if (props.name === "cityA") {
    value = values.cityA;
  } else {
    value = values.cityB;
  }

  let timeout;
  let payload = {
    city: props.name,
    value: value
  };
  useEffect(() => {
    timeout = setTimeout(() => {
      dispatch(cityActions.setCityValue(payload));
      clearTimeout(timeout);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
}
