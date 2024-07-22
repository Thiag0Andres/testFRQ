import { FormikErrors, FormikTouched } from "formik";

export interface Form {
  email: string;
  name: string;
  cpf: string;
  phone: string;
}

export interface ResponseData {
  message: string;
}

export interface ViewProps {
  values: Form;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<Form>>;
  setFieldTouched: (
    field: string,
    touched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<Form>>;
  errors: FormikErrors<Form>;
  touched: FormikTouched<Form>;
  isValid: boolean;
  onSubmit: any;
}
