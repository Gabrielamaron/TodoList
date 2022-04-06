import React from "react";
import { Box, Button, TextField } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "../assets/css/imagem-usuario-tarefa.css";
import "../assets/css/adicionar-tarefas.css";
import { BotaoSelecionaHorario } from "./BotaoSelecionaHorario.jsx";
import { Tarefa } from "./Tarefa.jsx";
import { supabaseClient } from "../pages/PaginaTarefas.jsx";

export function AdicionarTarefas(props) {
  const [titulo, setTitulo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [horario, setHorario] = React.useState(new Date());
  const [novoHorario, setNovoHorario] = React.useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`
  );
  const listaTarefas = props.lista;
  const setarLista = props.setLista;
  const usuario = props.usuario;

  return (
    <Box className="adicionar-tarefas">
      <Box
        sx={{
          alignContent: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "var(--padding-padrao)",
        }}
      >
        <h1 className="titulo-tarefas">Bem Vindo {usuario}</h1>
        <img
          alt={`Foto do usuario: ${usuario}`}
          className="titulo-imagem"
          src={`https://github.com/${usuario}.png`}
        />
      </Box>
      <Box
        component="form"
        sx={{
          backgroundColor: "var(--cinza-background)",
          borderRadius: "var(--borda-raio-padrao)",
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          padding: "var(--padding-padrao)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "var(--padding-padrao)",
          }}
        >
          <TextField
            id="filled-basic"
            label="Tarefa"
            onChange={(evento) => {
              setTitulo(evento.target.value);
            }}
            placeholder="titulo da tarefa"
            value={titulo}
            variant="filled"
            sx={{
              height: "30%",
              width: "70%",
            }}
          />
          <img
            alt={`Foto do usuario: ${usuario}`}
            className="imagem-usuario-tarefa"
            src={`https://github.com/${usuario}.png`}
          />
        </Box>
        <Box
          sx={{
            height: "fit-content",
            padding: "var(--padding-padrao)",
          }}
        >
          <TextField
            id="filled-basic"
            label="Descrição"
            multiline
            onChange={(evento) => {
              setDescricao(evento.target.value);
            }}
            placeholder="descrição da tarefa"
            rows="5"
            sx={{
              width: "100%",
            }}
            value={descricao}
            variant="filled"
          />
        </Box>
        <Box
          sx={{
            alignContent: "space-between",
            display: "flex",
            height: "27%",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            padding: "var(--padding-padrao)",
            rowGap: "0.5em",
          }}
        >
          <BotaoSelecionaHorario
            horario={horario}
            setHorario={setHorario}
            setNovoHorario={setNovoHorario}
          />
          <Button
            onClick={() => {
              const novaTarefa = {
                descricao: descricao,
                hora: novoHorario,
                titulo: titulo,
                usuario: usuario,
              };
              supabaseClient
                .from("Tarefas")
                .insert(novaTarefa)
                .then((resposta) => {
                  const itemTarefa = (
                    <Tarefa
                      chave={resposta.data[0].id}
                      titulo={resposta.data[0].titulo}
                      descricao={resposta.data[0].descricao}
                      hora={resposta.data[0].hora}
                      usuario={usuario}
                      list={listaTarefas}
                      setar={setarLista}
                    />
                  );
                  props.setLista([...props.lista, itemTarefa]);
                });

              setTitulo("");
              setDescricao("");
              setHorario(new Date());
              setNovoHorario(
                `${new Date().getHours()}:${new Date().getMinutes()}`
              );
            }}
            sx={{
              backgroundColor: "var(--vermelho-chamada)",
              display: "flex",
              justifyContent: "space-around",
            }}
            variant="contained"
          >
            Criar Tarefa
            <CheckCircleOutlineIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
