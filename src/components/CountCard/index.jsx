import { Card, Typography } from "@mui/material";

const CountCard = ({ count, title }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#13556d",
        height: 150,
        color: "white",
      }}
    >
      <div className="px-3 d-flex justify-content-center flex-column mt-3">
        <Typography className="mt-3" variant="h3">
          {count}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </div>
    </Card>
  );
};

export default CountCard;
