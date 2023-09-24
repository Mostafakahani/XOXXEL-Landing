import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import TypographyStyle from "./TypographyStyle";
import { useState } from "react";

const BaseTheme = (props) => {
  const [mode, setMode] = useState("light");

  const themeTypography = TypographyStyle(`Gilroy`);

  //   const cacheRtl = createCache({
  //     key: "muirtl",
  //     stylisPlugins: [prefixer, rtlPlugin],
  //   });

  const DataMode = {
    dark: {
      backgroundColorMenus: "#1D2024",
      colorMenuTop: "#fff",
      MainColorPrimary: "#231e93",
      MainColorSecondary: "#fff",
      CustomColor: {
        colorIconTopMenu: "#fff",
        textAndIconMenu: "#fff",
        textAndIconSelected: "#362FD9",
        BackgroundChildMenu: "#131416",
        BoxParentBg: "#1D2024",
        BackgroundSelectBox: "#181818",
        hrColor: "#E1E1E1",
        iconFieldInputText: "#12131A",
        ColorRedIcon: "#E04D1F",
      },
      MainBackground: "#2b2e32",
    },
    light: {
      backgroundColorMenus: "#fff",
      colorMenuTop: "#444",
      MainColorPrimary: "#2C7EFA",
      MainColorSecondary: "#fff",
      CustomColor: {
        colorIconTopMenu: "#12131A",
        textAndIconMenu: "#454545",
        textAndIconSelected: "#362FD9",
        BackgroundChildMenu: "#f6f6f6",
        BoxParentBg: "#fff",
        BackgroundSelectBox: "#181818",
        hrColor: "#E1E1E1",
        iconFieldInputText: "#12131A",
        ColorRedIcon: "#E04D1F",
      },
      MainBackground: "#181818",
    },
  };

  const GetColorData = (object) => {
    const DataObject = {};
    Object.keys(DataMode?.[mode][object]).map((x) => {
      DataObject[x] = DataMode?.[mode][object][x];
    });
    return DataObject;
  };

  const theme = createTheme({
    typography: themeTypography,
    // direction: "rtl",
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: DataMode?.[mode]?.backgroundColorMenus,
            color: DataMode?.[mode]?.colorMenuTop,
            boxShadow: "none",
            backgroundImage: "none",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: DataMode?.[mode]?.backgroundColorMenus,
          },
        },
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: DataMode?.[mode]?.MainColorPrimary,
      },
      secondary: {
        main: DataMode?.[mode]?.MainColorSecondary,
      },
      custom: GetColorData("CustomColor"),
      background: {
        default: DataMode?.[mode]?.MainBackground,
      },
    },
  });

  return (
    // <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
    // </CacheProvider>
  );
};
export default BaseTheme;
