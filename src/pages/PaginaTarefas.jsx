import React from "react";
import { Box } from "@mui/material";
import { AdicionarTarefas } from "../componentes/AdicionarTarefas.jsx";
import { ListaTarefas } from "../componentes/ListaTarefas.jsx";
import "../assets/css/container.css";
import "../assets/css/titulo/titulo-tarefas.css";
import "../assets/css/titulo/titulo-imagem.css";
import { createClient } from "@supabase/supabase-js";
import { Tarefa } from "../componentes/Tarefa.jsx";

const SUPABASE__ANON__KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZXJocnZtdHp2b29zdW1nZXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg4OTcwMjAsImV4cCI6MTk2NDQ3MzAyMH0.4DLYXE2fkTK0GqlsLqL7MaXN7nTtqG02DqCQIq0mWy8";
const SUPABASE__URL = "https://plerhrvmtzvoosumgetc.supabase.co";

export const supabaseClient = createClient(SUPABASE__URL, SUPABASE__ANON__KEY);

export function PaginaTarefas() {
  const regex = /(?=username=).*/g;
  const localizacao = window.location.href;
  const username = localizacao.match(regex).toString();
  const usuario = username.slice(9);
  const [listaTarefas, setListaTarefas] = React.useState([]);

  React.useEffect(() => {
    supabaseClient
      .from("Tarefas")
      .select("*")
      .order("hora", { ascending: true })
      .then(({ data }) => {
        data.forEach((item) => {
          if (item.usuario === usuario) {
            const itemTarefaArmazenado = (
              <Tarefa
                chave={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
                hora={item.hora}
                usuario={usuario}
                list={listaTarefas}
                setar={setListaTarefas}
              />
            );
            setListaTarefas((valorAtualizado) => {
              return [...valorAtualizado, itemTarefaArmazenado];
            });
          }
        });
      });
  }, []);

  return (
    <Box className="container">
      <AdicionarTarefas
        usuario={usuario}
        setLista={setListaTarefas}
        lista={listaTarefas}
      />
      <ListaTarefas listaTarefas={listaTarefas} />
    </Box>
  );
}
