import { Box } from "@mui/material";
import { AreaInserirUsuario } from "../componentes/AreaInserirUsuario.jsx";

export function Login() {
  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "var(--branco-background)",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        padding: "var(--padding-padrao)",
        width: "100vw",
      }}
    >
      <AreaInserirUsuario />
    </Box>
  );
}
