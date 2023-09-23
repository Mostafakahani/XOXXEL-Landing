import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Grid, SvgIcon, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import Link from "next/link";

const SliderComponent = () => {
  const props = {
    speed: 500,
    autoplaySpeed: 400000,
    data: [
      {
        id: 1,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 2,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 3,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 4,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 5,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 6,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 7,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 8,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 9,
        image: "/images/slider.png",
        title: "Earn money from xoxxel",
      },
    ],
  };

  const sliderRef = React.useRef(null);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleAfterChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: props.speed,
    autoplaySpeed: props.autoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // حذف دکمه‌های ناوبری
    afterChange: handleAfterChange,
  };

  const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
  return (
    <Grid container sx={{ mt: "15px" }} 
    spacing={2}
    >
      <Grid item xs={12} md={8} sx={{ alignSelf: "center" }}>
        <Slider
          ref={sliderRef}
          {...settings}
          style={{ display: "flex", alignItems: "center" }}
        >
          {props?.data?.map((x) => {
            return (
              <Grid key={x}>
                <Grid sx={{ position: "relative" }}>
                  <img
                    src={x.image}
                    alt="Slide 1"
                    style={{
                      width: "90%",
                      borderRadius: "12px",
                      margin: "auto",
                    }}
                  />
                  <Grid
                    sx={{
                      position: "absolute",
                      width: "calc(90% + 2px )",
                      margin: "auto",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bottom: "-40px",
                      borderRadius: "0px 0px 10px 10px",

                      height: "80px",
                      background: "rgba(0, 0, 0, 0.18)",
                      backdropFilter: "blur(18px)",
                    }}
                  ></Grid>

                  <Grid
                    sx={{
                      position: "absolute",
                      width: "calc(90% + 2px )",
                      margin: "auto",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bottom: "-40px",
                      borderRadius: "0px 0px 10px 10px",
                      zIndex: 1,
                      height: "80px",
                      padding: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "15px", fontWeight: 800, color: "#fff" }}
                    >
                      {x.title}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        marginInlineStart: "auto",
                        color: "#fff",
                        border: "1px solid #fff",
                      }}
                      size="small"
                    >
                      Buy now
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      disableElevation
                      sx={{
                        marginInlineStart: "10px",
                        minWidth: "max-content",
                      }}
                    >
                      Sell now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
          {/* <Grid>
            <img src="/images/slider.png" alt="Slide 1" />
          </Grid>
          <Grid>
            <img src="/images/slider.png" alt="Slide 2" />
          </Grid>
          <Grid>
            <img src="/images/slider.png" alt="Slide 3" />
          </Grid>
          <Grid>
            <img src="/images/slider.png" alt="Slide 4" />
          </Grid>
          <Grid>
            <img src="/images/slider.png" alt="Slide 5" />
          </Grid>
          <Grid>
            <img src="/images/slider.png" alt="Slide 6" />
          </Grid>
          <Grid>
            <img src="/images/slider.png" alt="Slide 7" />
          </Grid> */}
        </Slider>
      </Grid>
      <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Grid
          sx={{
            p: "10px",
            backgroundColor: "#2C2C2C",
            borderRadius: "12px",
            maxHeight: "350px",
            overflow: "auto",
          }}
        >
          {props?.data?.map((x, index) => {
            return (
              <Button
              key={index}
                sx={{ display: "block", width: "100%" }}
                variant="text"
                onClick={() => sliderRef.current.slickGoTo(index)}
              >
                <Grid display="flex" sx={{ p: "10px" }}>
                  <Typography
                    sx={{ color: index === currentSlide ? "#2C7EFA" : "#C0C0C4" }}
                  >
                    {x.title + x.id}
                  </Typography>
                  <Link
                    href={"/" + x.id}
                    style={{ marginInlineStart: "auto", display: "block" }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        color: "#2C7EFA",
                        fontSize: "12px",
                      }}
                    >
                      More
                      <SvgIcon
                        sx={{
                          width: "15px",
                          height: "15px",
                          marginInlineStart: "3px",
                        }}
                      >
                        <svg
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.38379 8.00002H14.0355M14.0355 8.00002L10.0411 4.00562M14.0355 8.00002L10.0411 11.9944"
                            stroke="#2C7EFA"
                            strokeWidth="0.998602"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </SvgIcon>
                    </Typography>
                  </Link>
                </Grid>
                {index === currentSlide && (
                  <Grid sx={{ height: "2px", backgroundColor: "#676771" }}>
                    <Grid
                      sx={{
                        height: "2px",
                        backgroundColor: "#2C7EFA",
                        width: "0%",
                        animation: `${fillAnimation} ${
                          +props.autoplaySpeed - +props.speed
                        }ms linear forwards`,
                      }}
                    ></Grid>
                  </Grid>
                )}
              </Button>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SliderComponent;
