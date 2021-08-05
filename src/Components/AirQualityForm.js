import { useFormik, FormikProvider, Form } from "formik";
import * as Yup from "yup";
import AirQualityField from "./AirQualityField";

import TwoColumn from "./TwoColumn";

require("./air-quality-form.scss");

export default function AirQualityForm(props) {
  let initialValues = { cityA: "", cityB: "" };

  const formik = useFormik({
    initialValues: { initialValues },
    validationSchema: Yup.object({
      cityA: Yup.string().required("Required"),
      cityB: Yup.string().required("Required")
    })
  });

  return (
    <FormikProvider value={formik}>
      <Form className="air-quality-form">
        <TwoColumn
          leftColumn={
            <>
              <label htmlFor="cityA">City A</label>
              <AirQualityField name="cityA" type="text" />
            </>
          }
          rightColumn={
            <>
              <label htmlFor="cityB">City B</label>
              <AirQualityField name="cityB" type="text" />
            </>
          }
        />
      </Form>
    </FormikProvider>
  );
}
