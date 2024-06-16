import { Grid } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { selectEmblems } from "../../store/emblemsSlice";
import CardEmblem from "./CardEmblem";

export default function AllEmblems() {
  const emblems = useAppSelector(selectEmblems).emblems;
  console.log(emblems);
  return (
    <Grid container spacing={2}>
      {emblems &&
        emblems.map((emblem) => (
          <Grid key={emblem.id} item xs={4}>
            <CardEmblem emblem={emblem} />
          </Grid>
        ))}
    </Grid>
  );
}
