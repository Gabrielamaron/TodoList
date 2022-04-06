import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export function BotaoEntrar(props) {
  return (
    <Button
      sx={{
        backgroundColor: "var(--vermelho-chamada)"
      }}
      type="submit"
      variant="contained"
      endIcon={<SendIcon />}
    >
      Entrar
    </Button>
  );
}
