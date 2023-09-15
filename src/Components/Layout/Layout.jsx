import { Grid } from "@mui/material";
import MenuTop from "@/Components/MenuTop/MenuTop";
import FooterCo from "@/Components/FooterCo/FooterCo";

// import Menus from "../Menus/Menus";

const Layout = (props) => {
  return (
    <>
      {/* <Menus> */}
      <Grid
        sx={{
          maxWidth: "1600px",
          m: "auto",
          p: { xs: "0px 20px", md: "0px 40px" },
        }}
      >
        <MenuTop />

        {props.children}
      </Grid>
      <FooterCo />
      {/* </Menus> */}
    </>
  );
};
export default Layout;
