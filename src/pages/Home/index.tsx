import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { Form } from "../FormLog/model";
import axios from "axios";

const Home = () => {
  // Função para buscar dados do usuário
  const fetchUserData = async (): Promise<Form> => {
    const { data } = await axios.get<Form>("/api/user");
    return data;
  };

  // Query para buscar dados do usuário
  const { data: userData, isLoading } = useQuery<Form, Error>({
    queryKey: ["userData"],
    queryFn: fetchUserData,
  });

  return (
    <div>
      <h1>Bem vindo</h1>
    </div>
  );
};

export default Home;
