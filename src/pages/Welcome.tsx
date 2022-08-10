import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <hr />
      <Link to="/instructions">
        <Button variant="contained">Next Page</Button>
      </Link>
    </>
  );
};
