import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";

const MenuTop = (props) => {
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Grid sx={{ display: "flex", p: "20px", alignItems: "center" }}>
        <img src="/images/logo.png" style={{ width: "30px", height: "30px" }} />
        <Typography
          sx={{
            fontSize: "10px",
            marginInlineStart: "5px",
            flex: "1 1 auto",
            textAlign: "left",
          }}
        >
          XOXXEL
        </Typography>
        <SvgIcon sx={{ width: "20px", height: "20px" }}>
          <svg
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10.75C1 6.03595 1 3.67893 2.46447 2.21447C3.92893 0.75 6.28595 0.75 11 0.75C15.714 0.75 18.0711 0.75 19.5355 2.21447C21 3.67893 21 6.03595 21 10.75C21 15.464 21 17.8211 19.5355 19.2855C18.0711 20.75 15.714 20.75 11 20.75C6.28595 20.75 3.92893 20.75 2.46447 19.2855C1 17.8211 1 15.464 1 10.75Z"
              stroke="#DC3838"
              stroke-width="1.5"
            />
            <path
              d="M13.5 8.25002L8.5 13.25M8.49998 8.25L13.5 13.25"
              stroke="#DC3838"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </SvgIcon>
      </Grid>
      <Grid
        sx={{
          width: "90%",
          m: "auto",
          backgroundColor: "#EAF2FF",
          borderRadius: "10px",
          p: "10px",
        }}
      >
        <Grid sx={{ display: "flex" }}>
          <img
            src="/images/logo.png"
            style={{ width: "40px", height: "40px" }}
          />
          <Grid sx={{ marginInlineStart: "10px", alignSelf: "center" }}>
            <Typography sx={{ fontSize: "10px" }}>Soroushnorozy</Typography>
            <Typography sx={{ fontSize: "10px" }}>09387880911</Typography>
          </Grid>
          <Grid
            sx={{
              marginInlineStart: "10px",
              alignSelf: "center",
              display: "flex",
            }}
          >
            <SvgIcon>
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.988281"
                  y="0.5"
                  width="24"
                  height="25"
                  rx="7"
                  fill="#FBFFFF"
                />
                <g clip-path="url(#clip0_45_1920)">
                  <path
                    d="M19.6553 9.66667C19.6553 8.19391 18.4614 7 16.9886 7H8.98861C7.51585 7 6.32194 8.19391 6.32194 9.66667V16.3333C6.32194 17.8061 7.51585 19 8.98861 19H16.9886C18.4614 19 19.6553 17.8061 19.6553 16.3333V9.66667Z"
                    stroke="#2C7EFA"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3213 13C10.3213 11.8954 9.42586 11 8.32129 11H6.32129V15H8.32129C9.42586 15 10.3213 14.1046 10.3213 13V13Z"
                    stroke="#2C7EFA"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_1920">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(4.98828 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </SvgIcon>
            <Typography sx={{ fontSize: "10px", marginInlineStart: "5px" }}>
              2,000 $
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ position: "relative", p: "10px" }}>
          <Button
            sx={{
              position: "absolute",
              right: 0,
              borderRadius: "11px",
              p: "7px",
              fontSize: "10px",
            }}
            variant="contained"
            disableElevation
            fullWidth
            size="small"
          >
            deposit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Grid>
        <Grid
          sx={{
            m: "20px 0px 0px 0px",
            backgroundColor: "#181818",
            p: "15px 10px",
            borderRadius: "12px",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Grid display="flex">
            <img
              src={"/images/logo.png"}
              style={{ width: "40px", height: "40px" }}
            />
            <Typography sx={{ marginInlineStart: "10px", alignSelf: "center", color: '#fff' }}>
              XOXXEL
            </Typography>
          </Grid>
          <TextField
            sx={{
              marginInlineStart: "10px",
              div: { backgroundColor: "#323232", borderRadius: "12px", color: '#fff' },
              fieldset: { border: "none" },
            }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Search or type a command"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 9.5C16.5 13.366 13.366 16.5 9.5 16.5C5.63401 16.5 2.5 13.366 2.5 9.5C2.5 5.63401 5.63401 2.5 9.5 2.5C13.366 2.5 16.5 5.63401 16.5 9.5ZM16.5319 15.1177C17.7635 13.578 18.5 11.625 18.5 9.5C18.5 4.52944 14.4706 0.5 9.5 0.5C4.52944 0.5 0.5 4.52944 0.5 9.5C0.5 14.4706 4.52944 18.5 9.5 18.5C11.625 18.5 13.578 17.7635 15.1177 16.5319L17.7929 19.2071C18.1834 19.5976 18.8166 19.5976 19.2071 19.2071C19.5976 18.8166 19.5976 18.1834 19.2071 17.7929L16.5319 15.1177Z"
                      fill="#2C7EFA"
                    />
                  </svg>
                </InputAdornment>
              ),
            }}
          />
          <Grid sx={{ marginInlineStart: "auto", display: "flex" }}>
            <FormControl
              sx={{ width: 95, fieldset: { border: "none" } }}
              size="small"
            >
              <Select
                id="demo-select-small"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={1}>
                  <Grid display={"flex"}>
                    <img
                      src="/images/en-flag.png"
                      style={{
                        width: "20px",
                        height: "20px",
                        scrollMarginInlineEnd: "10px",
                        display: "block",
                      }}
                    />
                    <Typography sx={{ marginInlineStart: "10px", color: '#fff' }}>
                      EN
                    </Typography>
                  </Grid>
                </MenuItem>
              </Select>
            </FormControl>
            <Button variant="text">
              <SvgIcon width="22" height="22">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70675 2.76526C2.23193 2.60698 1.7187 2.8636 1.56042 3.33842C1.40215 3.81324 1.65876 4.32647 2.13359 4.48475L2.45369 4.59145C3.27101 4.86389 3.81138 5.04545 4.20946 5.23064C4.58642 5.40601 4.74939 5.54713 4.85381 5.69201C4.95824 5.83689 5.04059 6.03613 5.08775 6.4492C5.13755 6.88542 5.13892 7.45547 5.13892 8.317L5.13892 11.5455C5.13889 13.198 5.13887 14.5299 5.27972 15.5775C5.42594 16.6652 5.73877 17.5809 6.46609 18.3082C7.19341 19.0356 8.10917 19.3484 9.1968 19.4946C10.2444 19.6355 11.5763 19.6354 13.2288 19.6354H22.9618C23.4623 19.6354 23.8681 19.2297 23.8681 18.7292C23.8681 18.2287 23.4623 17.8229 22.9618 17.8229H13.2952C11.5607 17.8229 10.351 17.821 9.43831 17.6983C8.55167 17.5791 8.08214 17.361 7.74772 17.0266C7.63088 16.9098 7.52824 16.7764 7.43907 16.6146H19.4075C19.9492 16.6146 20.4258 16.6146 20.8214 16.5719C21.2497 16.5257 21.6646 16.423 22.055 16.1656C22.4454 15.9081 22.7032 15.5672 22.9144 15.1918C23.1095 14.845 23.2972 14.407 23.5106 13.909L24.0747 12.5928C24.5393 11.509 24.9279 10.6022 25.1225 9.86466C25.3254 9.09526 25.3783 8.29195 24.8995 7.56585C24.4207 6.83976 23.6615 6.57189 22.8744 6.45536C22.1199 6.34366 21.1333 6.3437 19.9541 6.34375L6.89917 6.34375C6.89584 6.30993 6.89231 6.27655 6.88855 6.2436C6.82167 5.65778 6.67593 5.12024 6.32419 4.63223C5.97245 4.14421 5.50858 3.83597 4.97397 3.58727C4.47102 3.35329 3.83142 3.14012 3.07455 2.88786L2.70675 2.76526ZM6.95142 8.15625C6.95142 8.1928 6.95142 8.22961 6.95142 8.26668L6.95142 11.4792C6.95142 12.8953 6.9527 13.9616 7.01996 14.8021H19.3632C19.9624 14.8021 20.3401 14.8009 20.6269 14.7699C20.8918 14.7413 20.9936 14.6943 21.0572 14.6524C21.1208 14.6105 21.2041 14.5353 21.3347 14.3031C21.4762 14.0517 21.6261 13.7051 21.8621 13.1543L22.38 11.946C22.8808 10.7773 23.2137 9.99451 23.3699 9.40235C23.5217 8.8269 23.4448 8.65226 23.3863 8.56362C23.3279 8.47498 23.1977 8.33548 22.609 8.24832C22.0032 8.15864 21.1526 8.15625 19.881 8.15625H6.95142Z" fill="#DBDBDB" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.34725 23.5625C6.34725 25.064 7.56448 26.2812 9.066 26.2812C10.5675 26.2812 11.7847 25.064 11.7847 23.5625C11.7847 22.061 10.5675 20.8438 9.066 20.8438C7.56448 20.8438 6.34725 22.061 6.34725 23.5625ZM9.066 24.4688C8.56549 24.4688 8.15975 24.063 8.15975 23.5625C8.15975 23.062 8.56549 22.6563 9.066 22.6563C9.56651 22.6563 9.97225 23.062 9.97225 23.5625C9.97225 24.063 9.56651 24.4688 9.066 24.4688Z" fill="#DBDBDB" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.941 26.2813C18.4395 26.2813 17.2222 25.0641 17.2222 23.5626C17.2222 22.0611 18.4395 20.8438 19.941 20.8438C21.4425 20.8438 22.6597 22.0611 22.6597 23.5626C22.6597 25.0641 21.4425 26.2813 19.941 26.2813ZM19.0347 23.5626C19.0347 24.0631 19.4405 24.4688 19.941 24.4688C20.4415 24.4688 20.8472 24.0631 20.8472 23.5626C20.8472 23.0621 20.4415 22.6563 19.941 22.6563C19.4405 22.6563 19.0347 23.0621 19.0347 23.5626Z" fill="#DBDBDB" />
                </svg>

              </SvgIcon>
            </Button>
            <Button variant="contained" disableElevation size="small" sx={{ color: '#fff' }}>
              Login/Signup
            </Button>

            <Button variant="text">
              <SvgIcon width="22" height="22">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5 9.25L5.5 9.25" stroke="#DBDBDB" stroke-width="1.875" stroke-linecap="round" />
                  <path d="M25.5 15.5L5.5 15.5" stroke="#DBDBDB" stroke-width="1.875" stroke-linecap="round" />
                  <path d="M25.5 21.75L5.5 21.75" stroke="#DBDBDB" stroke-width="1.875" stroke-linecap="round" />
                </svg>

              </SvgIcon>
            </Button>
          </Grid>
        </Grid>
        <Grid
          sx={{
            backgroundColor: "red",
            width: "90%",
            m: "auto",
            p: "20px",
            borderRadius: "0px 0px 10px 10px",
            backgroundColor: "#EAF2FF",
            display: { xs: "none", md: "none" },
            // display: { xs: "none", md: "flex" },  این بود بالایی شد
          }}
        >
          <Grid>
            <Button variant="text" sx={{ color: "#000" }}>
              Top up
              <SvgIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  marginInlineStart: "10px",
                }}
              >
                <svg
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8327 8L9.99935 13L4.16602 8"
                    stroke="#1D1E2D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </SvgIcon>
            </Button>
            <Button variant="text" sx={{ color: "#000" }}>
              Gift card{" "}
              <SvgIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  marginInlineStart: "10px",
                }}
              >
                <svg
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8327 8L9.99935 13L4.16602 8"
                    stroke="#1D1E2D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </SvgIcon>
            </Button>
            <Button variant="text" sx={{ color: "#000" }}>
              Accounts
              <SvgIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  marginInlineStart: "10px",
                }}
              >
                <svg
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8327 8L9.99935 13L4.16602 8"
                    stroke="#1D1E2D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </SvgIcon>
            </Button>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: { xs: "flex", md: "none" },
            m: "20px 0px 0px 0px",
            backgroundColor: "#181818",
            p: "15px 10px",
            borderRadius: "12px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#1D1D1D",
              borderRadius: "8px",
              minWidth: "min-content",
            }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9.12923" cy="4.75008" r="2.83333" fill="#2C7EFA" />
              <ellipse
                opacity="0.5"
                cx="9.12923"
                cy="12.5416"
                rx="4.95833"
                ry="2.83333"
                fill="#2C7EFA"
              />
            </svg>
          </Button>
          <Grid sx={{ m: "auto", color: '#fff' }}>
            <img src="" />
            XOXXEL
          </Grid>
          <Button sx={{ minWidth: "min-content" }} onClick={handleDrawerToggle}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5371 5.45825L3.20377 5.45825"
                stroke="#1C274C"
                stroke-width="1.1875"
                stroke-linecap="round"
              />
              <path
                d="M14.5371 9L3.20377 9"
                stroke="#1C274C"
                stroke-width="1.1875"
                stroke-linecap="round"
              />
              <path
                d="M14.5371 12.5415L3.20377 12.5415"
                stroke="#1C274C"
                stroke-width="1.1875"
                stroke-linecap="round"
              />
            </svg>
          </Button>
        </Grid>
      </Grid>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
export default MenuTop;
