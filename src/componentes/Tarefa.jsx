import { Box, Button, Checkbox } from "@mui/material";
import "../assets/css/tarefa/tarefa.css";
import "../assets/css/tarefa/tarefa__titulo.css";
import "../assets/css/tarefa/tarefa__descricao.css";
import { supabaseClient } from "../pages/PaginaTarefas.jsx";

export function Tarefa(props) {
  const deletarTarefa = async (props) => {
    await supabaseClient.from("Tarefas").delete().eq("id", props.chave);
    await supabaseClient
      .from("Tarefas")
      .select("*")
      .order("hora", { ascending: true })
      .then(({ data }) => {
        props.setar("");
        data.forEach((item) => {
          if (item.usuario === props.usuario) {
            const itemRestaurado = (
              <Tarefa
                chave={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
                hora={item.hora}
                usuario={item.usuario}
                list={props.list}
                setar={props.setar}
              />
            );
            props.setar((valorAtualizado) => {
              return [...valorAtualizado, itemRestaurado]
            })
          }
        });
      });
  };
  return (
    <li className="tarefa" key={props.chave}>
      <Box
        sx={{
          alignItems: "center",
          height: "fit-content",
          display: "flex",
          width: "100%",
        }}
      >
        <Checkbox
          onClick={(evento) => {
            if (evento.target.checked) {
              deletarTarefa(props);
            }
          }}
          size="small"
        />
        <h2 className="tarefa__titulo">{props.titulo}</h2>
      </Box>
      <p id={props.chave} className="tarefa__descricao">
        {props.descricao}
      </p>
      <p>{props.hora}</p>
    </li>
  );
}
