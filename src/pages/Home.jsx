import axios from "../utils/axios";
import { Button } from "@mui/material";

const Home = () => {
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          getProducts();
        }}
      >
        Click
      </Button>
    </>
  );
};

export default Home;
