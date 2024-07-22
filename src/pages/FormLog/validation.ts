import * as yup from "yup";

import { validateCpf } from "../../utils/validations";

const validationSchema = {
  email: yup
    .string()
    .email("Email inválido")
    .required("Email é um campo obrigatório"),
  name: yup.string().required("Nome é um campo obrigatório"),
  cpf: yup
    .string()
    .test("Validate cpf", "CPF inválido", (value) => validateCpf(String(value)))
    .required("CPF é um campo obrigatório"),
  phone: yup.string().required("Celular é um campo obrigatório"),
};

export default yup.object().shape(validationSchema);
