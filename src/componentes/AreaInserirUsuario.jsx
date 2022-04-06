import { Box, TextField, Icon, Switch } from "@mui/material";
import "../assets/css/titulo-principal.css";
import "../assets/css/imagem-usuario.css";
import React from "react";
import { BotaoEntrar } from "./BotaoEntrar.jsx";

export function AreaInserirUsuario() {
  const [usuario, setUsuario] = React.useState("");
  return (
    <Box
      component="form"
      onSubmit={(evento) => {
        evento.preventDefault();
        window.location.href = `/PaginaTarefas/?username=${usuario}`;
      }}
      sx={{
        alignItems: "center",
        backgroundColor: "var(--cinza-background)",
        borderRadius: "var(--borda-raio-padrao)",
        display: "grid",
        gridTemplateColumns: "75% 20%",
        gridTemplateRows: "95% 5%",
        maxWidth: "53em",
        padding: "var(--padding-padrao)",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gridColumn: "1",
          gridRow: "1",
          height: "85%",
          justifyContent: "space-around",
          padding: "var(--padding-padrao)",
        }}
      >
        <h1 className="titulo-principal">Insira o usuário do github: </h1>
        <TextField
          onChange={(evento) => {
            setUsuario(evento.target.value);
          }}
          id="filled-basic"
          label="Usuário"
          required
          variant="filled"
          placeholder="usuário"
          sx={{ maxWidth: "11.75em" }}
        />
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gridColumn: "2",
          gridRow: "1",
          height: "100%",
          justifyContent: "space-around",
          padding: "var(--padding-padrao)",
        }}
      >
        <img
          className="imagem-usuario"
          src={`https://github.com/${usuario}.png`}
        />
        <h3>{usuario}</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          gridColumn: "1 / 3",
          gridRow: "2",
          justifyContent: "center",
          padding: "var(--padding-padrao)",
        }}
      >
        <BotaoEntrar usuario={usuario} />
      </Box>
    </Box>
  );
}
