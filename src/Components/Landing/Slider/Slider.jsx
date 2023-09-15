import SliderComponent from "@/Components/SliderComponent/SliderComponent";
import { Box, Container, Grid, SvgIcon } from "@mui/material";

const Slidert = () => {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: 'row',
          //  xs: "column-reverse",
          justifyContent: 'center',
        }}
      >
        <Grid>
          {[
            "/images/instagram.svg",
            "/images/telegram.svg",
            "/images/whatsapp.svg",
          ].map((x) => (
            <Box
              component="img"
              src={x}
              sx={{
                display: { sm: 'flex', xs: 'none' },
                backgroundColor: "#303030",
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                p: "5px",
                cursor: "pointer",
                my: "10px",
                mx: { md: '0px', xs: '10px', sm: '0px' }
              }}
            />
          ))}
        </Grid>
        <SliderComponent />
      </Grid>
    </>
  );
};
export default Slidert;
