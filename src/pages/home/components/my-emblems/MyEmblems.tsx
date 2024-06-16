import { Button, Grid, Typography } from "@mui/material";
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

  function getEmblemToUser() {
    dispatch(getRandomEmblemToUser(user.id));
  }

  useEffect(() => {
    if (user.emblems.length === 10) {
      setHaveAllEmblems(true);
    }
  }, [user]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3">Meus Emblemas</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={getEmblemToUser} variant="contained">
            {haveAllEmblems
              ? "Você já possui todos emblemas"
              : "Resgatar um emblema aleatório"}
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {user.emblems &&
          user.emblems
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
