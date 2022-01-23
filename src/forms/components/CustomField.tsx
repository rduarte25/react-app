import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string,
  [x: string]: any,
}

export const CustomField = ( {label, ...props}: Props ) => {
  const [field ] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" placeholder={props.placeholder} {...field} {...props}/>
      <ErrorMessage name={props.name} component="span"/>
      {/* {
        meta.touched && meta.error && (
          <span className="">{meta.error}</span>
        )
      } */}
    </>
  );
};
