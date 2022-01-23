import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string,
  [x: string]: any,
}

export const CustomField = ( {label, ...props}: Props ) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" placeholder={props.placeholder} {...field} {...props}/>
      {
        meta.touched && meta.error && (
          <span className="">{meta.error}</span>
        )
      }
    </>
  );
};
