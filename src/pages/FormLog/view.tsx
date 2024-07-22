import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ViewProps } from "./model";
import Typography from "@mui/material/Typography";

const View = ({
  values,
  setFieldValue,
  setFieldTouched,
  errors,
  touched,
  isValid,
  onSubmit,
}: ViewProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          width: 500,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
        autoComplete="off"
        onSubmit={(event: React.FormEvent) => {
          event.preventDefault();
          onSubmit(values);
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={2}>
          Formulário
        </Typography>

        <TextField
          id="name"
          fullWidth
          label="Nome"
          value={values.name || ""}
          onBlur={() => setFieldTouched("name")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("name", event.target.value)
          }
          error={touched.name && Boolean(errors && errors.name)}
          helperText={
            touched.name && Boolean(errors && errors.name) ? errors.name : ""
          }
        />
        <TextField
          id="email"
          fullWidth
          label="email"
          type="email"
          value={values.email || ""}
          onBlur={() => setFieldTouched("email")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("email", event.target.value)
          }
          error={touched.email && Boolean(errors && errors.email)}
          helperText={
            touched.email && Boolean(errors && errors.email) ? errors.email : ""
          }
        />
        <TextField
          id="cpf"
          fullWidth
          label="cpf"
          value={values.cpf || ""}
          onBlur={() => setFieldTouched("cpf")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("cpf", event.target.value)
          }
          error={touched.cpf && Boolean(errors && errors.cpf)}
          helperText={
            touched.cpf && Boolean(errors && errors.cpf) ? errors.cpf : ""
          }
        />
        <TextField
          id="phone"
          fullWidth
          label="Celular"
          value={values.phone || ""}
          onBlur={() => setFieldTouched("phone")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("phone", event.target.value)
          }
          error={touched.phone && Boolean(errors && errors.phone)}
          helperText={
            touched.phone && Boolean(errors && errors.phone) ? errors.phone : ""
          }
        />

        <Button
          id="button-form"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={Boolean(!isValid)}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default View;
