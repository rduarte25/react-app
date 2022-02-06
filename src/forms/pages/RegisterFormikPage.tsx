import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomField } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe tener mixino 15 caracteres")
            .min(2, "Debe tener minino 2 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo eletronico no tiene un formato valido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Debe tener minimo 6 caracteres")
            .required("Requerido"),
          confirmPassword: Yup.string()
            .min(6, "Debe tener minimo 6 caracteres")
            .oneOf([Yup.ref('password')], 'Las contrasenas deberian de coincidir')
            .required("Requerido"),
        })}
      >
        {({handleReset}) => (
          <Form noValidate>
            <CustomField label="Name" name="name" placeholder="Nombre" />
            <CustomField
              label="Email Address"
              type="email"
              name="email"
              placeholder="Correo Electronico"
            />
            <CustomField
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <CustomField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <button type="button">Submit</button>
            <button type="button" onClick={() => handleReset()}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
