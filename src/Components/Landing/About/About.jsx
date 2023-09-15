import { Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Grid
        container
        sx={{
          my: "100px",
          backgroundColor: "#232323",
          py: {md: "50px", xs: '40px'},
          px: { md: "200px", sm: '40px', xs: '20px' },
          borderRadius: "15px",
          backgroundImage: 'url("/images/pattern2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid xs={12} md={6} sx={{ display: "flex", alignItems: "center", mb: {md: '0px', xs: '15px'} }}>
          <Typography variant="h3" sx={{ color: "#fff", fontSize: "30.137px" }}>
            About XOXXEL
          </Typography>
        </Grid>
        <Grid xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#fff", fontSize: "16px" }}>
            Quickly create costomised job ads with our easy-to- use Quickly
            create costomised job ads with our easy-to- use editoreditorQuickly
            create costomised job ads with our easy-to- use editorQuickly create
            costomised job ads with our easy-to- use editorQuickly create
            costomised job ads with our easy-to- use editor
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
