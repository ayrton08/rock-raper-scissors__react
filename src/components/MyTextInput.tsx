import { TextField } from "@mui/material";
import { useField, ErrorMessage } from "formik";

interface Props {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "checkbox" | "input";
  placeholder?: string;
  className?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, className, ...props }: Props) => {
  // const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextField {...props} autoComplete="off" />
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  );
};
