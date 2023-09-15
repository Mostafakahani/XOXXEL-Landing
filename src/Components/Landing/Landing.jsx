import Slider from "./Slider/Slider";
import About from "./About/About";
import Products from "./Products/Products";

const Landing = () => {
  return (
    <>
      {/* <Container maxWidth="xl" sx={{ backgroundColor: "#181818" }}> */}
      <Slider />
      <Products />
      <About />
      {/* </Container> */}
    </>
  );
};
export default Landing;
