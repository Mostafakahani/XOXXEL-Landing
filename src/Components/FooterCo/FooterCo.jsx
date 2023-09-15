import { Button, Grid, TextField, Typography } from "@mui/material";

const FooterCo = () => {
  return (
    <>
      <Grid
        sx={{
          // backgroundImage: "url(/images/pattern.png)",
          backgroundImage: 'url("/images/pattern2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#181818",
        }}
      >
        <Grid sx={{ maxWidth: "1600px", m: "auto", p: "40px" }}>
          <Grid
            sx={{ display: { xs: "block", md: "flex" }, alignItems: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                flex: "1 1 auto",
                textAlign: { xs: "center", md: "left", color: '#fff' },
              }}
            >
              Paymenth methods
            </Typography>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: { xs: "30px", md: "0" },
              }}
            >
              <img
                src="/images/GooglePay.png"
                style={{ marginInlineEnd: "20px" }}
              />
              <img
                src="/images/GooglePay.png"
                style={{ marginInlineEnd: "20px" }}
              />
              <img
                src="/images/GooglePay.png"
                style={{ marginInlineEnd: "20px" }}
              />
              <img
                src="/images/GooglePay.png"
                style={{ marginInlineEnd: "20px" }}
              />
            </Grid>
          </Grid>
          <Grid sx={{ mt: "20px" }} container>
            <Grid
              item
              md={4}
              sx={{ p: "20px", display: { md: "block", xs: "none" } }}
            >
              <Grid
                sx={{
                  alignItems: "center",
                  mt: "20px",
                }}
              >
                <img
                  src="/images/logo.png"
                  style={{ width: "50px", marginInlineEnd: "10px" }}
                />
                <Typography sx={{ fontSize: "15px", fontWeight: 700, color: '#FFFFFF' }}>
                  XOXXEL
                </Typography>
              </Grid>
              <Typography sx={{ mt: "10px", color: '#FFFFFF' }}>
                ip ex ea commodo consequat. Duis aute irure dolor t, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  mt: "40px",
                  textAlign: "center",
                }}
              >
                <Grid sx={{ marginInlineEnd: "10px" }}>
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9064 0.666748H6.09446C2.85087 0.666748 0.688477 2.82914 0.688477 6.07273V12.5599C0.688477 15.8035 2.85087 17.9659 6.09446 17.9659H16.9064C20.15 17.9659 22.3124 15.8035 22.3124 12.5599V6.07273C22.3124 2.82914 20.15 0.666748 16.9064 0.666748ZM13.5439 10.43L10.8733 12.0301C9.79213 12.6789 8.90554 12.1815 8.90554 10.9165V7.70535C8.90554 6.44035 9.79213 5.943 10.8733 6.59172L13.5439 8.19187C14.5711 8.81896 14.5711 9.81367 13.5439 10.43Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                  <Typography sx={{ color: '#FFFFFF' }}>Youtube</Typography>
                </Grid>

                <Grid sx={{ marginInlineEnd: "10px" }}>
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9064 0.666748H6.09446C2.85087 0.666748 0.688477 2.82914 0.688477 6.07273V12.5599C0.688477 15.8035 2.85087 17.9659 6.09446 17.9659H16.9064C20.15 17.9659 22.3124 15.8035 22.3124 12.5599V6.07273C22.3124 2.82914 20.15 0.666748 16.9064 0.666748ZM13.5439 10.43L10.8733 12.0301C9.79213 12.6789 8.90554 12.1815 8.90554 10.9165V7.70535C8.90554 6.44035 9.79213 5.943 10.8733 6.59172L13.5439 8.19187C14.5711 8.81896 14.5711 9.81367 13.5439 10.43Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                  <Typography sx={{ color: '#FFFFFF' }}>Youtube</Typography>
                </Grid>

                <Grid sx={{ marginInlineEnd: "10px" }}>
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9064 0.666748H6.09446C2.85087 0.666748 0.688477 2.82914 0.688477 6.07273V12.5599C0.688477 15.8035 2.85087 17.9659 6.09446 17.9659H16.9064C20.15 17.9659 22.3124 15.8035 22.3124 12.5599V6.07273C22.3124 2.82914 20.15 0.666748 16.9064 0.666748ZM13.5439 10.43L10.8733 12.0301C9.79213 12.6789 8.90554 12.1815 8.90554 10.9165V7.70535C8.90554 6.44035 9.79213 5.943 10.8733 6.59172L13.5439 8.19187C14.5711 8.81896 14.5711 9.81367 13.5439 10.43Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                  <Typography sx={{ color: '#FFFFFF' }}>Youtube</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{ p: "20px" }}>
              <Grid
                container
                spacing={2}
                display={"flex"}
                sx={{ justifyContent: "center" }}
              >
                <Grid item md={4}>
                  <Typography sx={{ fontWeight: "bold", color: '#FFFFFF' }}>
                    Gift cards
                  </Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography sx={{ fontWeight: "bold", color: '#FFFFFF' }}>
                    Gift cards
                  </Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                </Grid>

                <Grid item md={4}>
                  <Typography sx={{ fontWeight: "bold", color: '#FFFFFF' }}>
                    Gift cards
                  </Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                  <Typography sx={{ mt: "20px", color: '#F3F3F3' }}>Gift cards</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{ p: "20px", display: { md: "none", xs: "bloxk" } }}
            >
              <Grid
                container
                spacing={2}
                display={"flex"}
                sx={{ justifyContent: "center" }}
              >
                <Grid
                  sx={{
                    alignItems: "center",
                    mt: "20px",
                  }}
                >
                  <img
                    src="/images/logo.png"
                    style={{ width: "50px", marginInlineEnd: "10px" }}
                  />
                  <Typography sx={{ fontSize: "15px", fontWeight: 700, color: '#FFFFFF' }}>
                    XOXXEL
                  </Typography>
                </Grid>
              </Grid>
              <Typography sx={{ mt: "10px", color: '#FFFFFF' }}>
                ip ex ea commodo consequat. Duis aute irure dolor t, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  mt: "40px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Grid sx={{ marginInlineEnd: "10px" }}>
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9064 0.666748H6.09446C2.85087 0.666748 0.688477 2.82914 0.688477 6.07273V12.5599C0.688477 15.8035 2.85087 17.9659 6.09446 17.9659H16.9064C20.15 17.9659 22.3124 15.8035 22.3124 12.5599V6.07273C22.3124 2.82914 20.15 0.666748 16.9064 0.666748ZM13.5439 10.43L10.8733 12.0301C9.79213 12.6789 8.90554 12.1815 8.90554 10.9165V7.70535C8.90554 6.44035 9.79213 5.943 10.8733 6.59172L13.5439 8.19187C14.5711 8.81896 14.5711 9.81367 13.5439 10.43Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                  <Typography sx={{ color: '#fff' }}>Youtube</Typography>
                </Grid>

                <Grid sx={{ marginInlineEnd: "10px" }}>
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9064 0.666748H6.09446C2.85087 0.666748 0.688477 2.82914 0.688477 6.07273V12.5599C0.688477 15.8035 2.85087 17.9659 6.09446 17.9659H16.9064C20.15 17.9659 22.3124 15.8035 22.3124 12.5599V6.07273C22.3124 2.82914 20.15 0.666748 16.9064 0.666748ZM13.5439 10.43L10.8733 12.0301C9.79213 12.6789 8.90554 12.1815 8.90554 10.9165V7.70535C8.90554 6.44035 9.79213 5.943 10.8733 6.59172L13.5439 8.19187C14.5711 8.81896 14.5711 9.81367 13.5439 10.43Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                  <Typography sx={{ color: '#fff' }}>Youtube</Typography>
                </Grid>

                <Grid sx={{ marginInlineEnd: "10px" }}>
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9064 0.666748H6.09446C2.85087 0.666748 0.688477 2.82914 0.688477 6.07273V12.5599C0.688477 15.8035 2.85087 17.9659 6.09446 17.9659H16.9064C20.15 17.9659 22.3124 15.8035 22.3124 12.5599V6.07273C22.3124 2.82914 20.15 0.666748 16.9064 0.666748ZM13.5439 10.43L10.8733 12.0301C9.79213 12.6789 8.90554 12.1815 8.90554 10.9165V7.70535C8.90554 6.44035 9.79213 5.943 10.8733 6.59172L13.5439 8.19187C14.5711 8.81896 14.5711 9.81367 13.5439 10.43Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                  <Typography sx={{ color: '#fff' }}>Youtube</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={4} sx={{ alignSelf: "center" }}>
              <Grid sx={{ display: { md: "grid", xs: "none" } }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: '#FFFFFF'
                  }}
                >
                  Subscribe to newsletter
                </Typography>
                <TextField
                  fullWidth
                  sx={{
                    mt: "15px",
                    maxWidth: "300px",
                    div: { backgroundColor: "#323232", borderRadius: "12px", color: '#fff' },
                    fieldset: { border: "none" },
                  }}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Search or type a command"
                  size="small"
                />
                <Button
                  variant="contained"
                  sx={{ width: "max-content", mt: "15px" }}
                  disableElevation
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default FooterCo;
