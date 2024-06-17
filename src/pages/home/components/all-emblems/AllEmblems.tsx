import { Grid, TextField, Typography } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { selectEmblems } from "../../store/emblemsSlice";
import CardEmblem from "./CardEmblem";
import { useState } from "react";

export default function AllEmblems() {
  const emblems = useAppSelector(selectEmblems).emblems;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmblems = emblems.filter(
    (emblem) =>
      emblem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emblem.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Emblemas</Typography>
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
        {emblems &&
          filteredEmblems.map((emblem) => (
            <Grid key={emblem.id} item xs={4}>
              <CardEmblem emblem={emblem} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
