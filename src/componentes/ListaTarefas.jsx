import { Box, Button } from "@mui/material";
import "../assets/css/titulo/titulo-secundario-tarefas.css";
import "../assets/css/lista-tarefas/lista-tarefas-container.css";
import "../assets/css/lista-tarefas/lista-tarefas.css";

export function ListaTarefas(props) {
  return (
    <Box className="lista-tarefas-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.475em 0",
        }}
      >
        <h2 className="titulo-secundario-tarefas">Tarefas</h2>
        <Button
          onClick={() => {
            window.location.href = "/";
          }}
          size="small"
          sx={{
            backgroundColor: "var(--vermelho-chamada)",
            display: "flex",
            justifyContent: "space-around",
          }}
          variant="contained"
        >
          Logout
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "var(--cinza-background)",
          borderRadius: "var(--borda-raio-padrao)",
          height: "65%",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <ul className="lista-tarefas">{props.listaTarefas}</ul>
      </Box>
    </Box>
  );
}
