import { Button, TextField, Typography } from "@mui/material";
import LosSantosBG from "../../../assets/los_santos.png";

export default function RegisterPage() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${LosSantosBG})` }}
    >
      <form className="border-white border-2 w-2/6 rounded-md flex flex-col gap-5 p-10 justify-center items-center bg-white bg-opacity-80">
        <Typography variant="h4" component="h1">
          Registre-se
        </Typography>
        <TextField label="Digite seu nome" variant="standard" fullWidth />
        <TextField label="Crie um nickname" variant="standard" fullWidth />
        <TextField
          label="Crie uma senha"
          variant="standard"
          type="password"
          fullWidth
        />
        <TextField
          label="Digite a senha novamente"
          variant="standard"
          type="password"
          fullWidth
        />
        <Button variant="contained">Registrar-se</Button>
      </form>
    </div>
  );
}
