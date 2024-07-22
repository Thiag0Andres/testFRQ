import * as React from "react";
import { useFormik } from "formik";
import View from "./view";
import { Form, ResponseData } from "./model";
import validationSchema from "./validation";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const FormLog = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // Função para enviar dados do formulário
  const sendFormData = async (newData: Form): Promise<ResponseData> => {
    const { data } = await axios.post<ResponseData>("/api/data", newData);
    return data;
  };

  // Definindo a mutação usando useMutation com tipagem correta
  const mutation = useMutation({
    mutationFn: sendFormData,
    onSuccess: (data) => {
      // Lógica para sucesso
      console.log("Success:", data);
      navigate("/Home");
      // Invalidar a query para buscar os dados mais recentes
      queryClient.invalidateQueries({ queryKey: ["userData"] }); // Corrigido para a versão 5.x
    },
    onError: (error) => {
      // Lógica para erro
      console.log("Error:", error.message);
    },
  });

  const formik = useFormik<Form>({
    initialValues: {
      email: "",
      name: "",
      cpf: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values: Form) => {
      // Chamando a mutação no onSubmit do Formik
      mutation.mutate(values);
    },
  });
  const {
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    isValid,
    handleSubmit,
  } = formik;

  // {mutation.isLoading ? 'Submitting...' : 'Submit'}

  return (
    <View
      values={values}
      setFieldValue={setFieldValue}
      setFieldTouched={setFieldTouched}
      errors={errors}
      touched={touched}
      isValid={isValid}
      onSubmit={handleSubmit}
    />
  );
};

export default FormLog;
