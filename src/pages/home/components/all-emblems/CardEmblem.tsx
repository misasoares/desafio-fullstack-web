import Card from "@mui/material/Card";
import { IEmblems } from "../../store/types";

interface PropsEmblem {
  emblem: IEmblems;
}

export default function CardEmblem({ emblem }: PropsEmblem) {
  return (
    <>
      <Card
        sx={{
          width: 345,
          height: 310,
          backgroundColor: "black",
          border: "1px solid white",
        }}
        className="bg-black p-6"
      >
        <div
          className="bg-contain bg-no-repeat bg-center w-full h-full "
          style={{ backgroundImage: `url(${emblem.image})` }}
        />
      </Card>
    </>
  );
}
