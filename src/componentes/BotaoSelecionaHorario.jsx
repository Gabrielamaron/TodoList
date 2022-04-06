import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export function BotaoSelecionaHorario(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Horário"
        value={props.horario}
        onChange={(novoValor) => {
          const hora = props.horario.getHours();
          const minutos = props.horario.getMinutes();
          props.setHorario(novoValor);
          props.setNovoHorario(`${hora}:${minutos}`);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
