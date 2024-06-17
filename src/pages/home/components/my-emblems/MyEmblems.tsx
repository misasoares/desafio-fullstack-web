import { Button, Grid, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

import { useEffect, useState } from "react";
import {
  getRandomEmblemToUser,
  selectUser,
} from "../../../auth/store/userSlice";
import CardEmblem from "../all-emblems/CardEmblem";

export default function MyEmblems() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [haveAllEmblems, setHaveAllEmblems] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function getEmblemToUser() {
    dispatch(getRandomEmblemToUser(user.id));
  }

  const filteredEmblems = user.emblems.filter(
    (emblem) =>
      emblem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emblem.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (user.emblems.length === 10) {
      setHaveAllEmblems(true);
    }
  }, [user]);

  return (
    <>
      <Grid container spacing={2} className="items-center">
        <Grid item xs={4}>
          <Typography variant="h3">Meus Emblemas</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={getEmblemToUser}
            color={haveAllEmblems ? "error" : "primary"}
            variant="contained"
          >
            {haveAllEmblems
              ? "Você já possui todos emblemas"
              : "Resgatar um emblema aleatório"}
          </Button>
        </Grid>
      </Grid>

      <div className="my-4">
        <TextField
          label="Pesquisar emblemas"
          variant="outlined"
          className=" w-2/5"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Grid container spacing={2}>
        {user.emblems &&
          filteredEmblems
            .slice()
            .reverse()
            .map((emblem) => (
              <Grid key={emblem.id} item xs={4}>
                <CardEmblem emblem={emblem} />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
