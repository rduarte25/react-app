import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { CustomField } from '../components/CustomField';
import { CustomSelect } from '../components/CustomSelect';
import { CustomCheckbox } from "../components/CustomCheckbox";

export const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Components tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener minino 15 caracteres")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener minino 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo eletronico no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <CustomField label="First Name" name="firstName" placeholder="Nombre" />
            <CustomField label="Last Name" name="lastName" placeholder="Apellido" />
            <CustomField label="Email Address" name="email" placeholder="Correo Electronico" />
            <CustomCheckbox label="Terms and conditions" name="terms"/>
            <CustomSelect label="jobType" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </CustomSelect>
            <button type="button">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
