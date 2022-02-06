import { Formik, Form } from "formik";
import { CustomField } from "../components";
import formJson from "../data/custom-form.json";
import { CustomSelect } from '../components/CustomSelect';
import * as Yup from "yup";

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (let input of formJson) {
  initialValues[input.name] = input.value;

  if ( !input.validations ) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if ( rule.type === 'required' ) {
      schema = schema.required( 'Este campo es requerido' );
    }

    if ( rule.type === 'minLength' ) {
      schema = schema.min( (rule as any).value, `Tiene que terner minimo ${(rule as any).value}` );
    }

    if ( rule.type === 'email' ) {
      schema = schema.email( `Tiene que ser un email valido` );
    }
    //otras validaciones
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic From Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {
              if (
                type === 'text' ||
                type === 'password' ||
                type === 'email'
              ) {
                return (
                  <CustomField
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              } else if ( type === 'select' ) {
                return (
                  <CustomSelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value="">Select An Option</option>
                    {
                      options?.map( option => (
                        <option
                          key={option.label} 
                          value={option.id}
                        >{option.label}</option>
                       ))
                    }
                  </CustomSelect>
                );
              }

              throw new Error(`El ${type} no es soportado.`);
            })}
            <button>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
