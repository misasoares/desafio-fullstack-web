import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IEmblems } from "../../store/types";

interface PropsEmblem {
  emblem: IEmblems;
}

export default function CardEmblem({ emblem }: PropsEmblem) {
  console.log(emblem);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={emblem.image}
        title={emblem.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {emblem.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {emblem.slug}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
