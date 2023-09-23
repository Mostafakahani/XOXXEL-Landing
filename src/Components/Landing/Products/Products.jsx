import React, { useState } from "react";
import { Box, Grid, Typography, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import { Rating } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Amazon",
    image: "/images/amazon.png",
    stars: 75,
    category: "Gift card",
  },
  {
    id: 2,
    name: "Apple",
    image: "/images/Apple.png",
    stars: 70,
    category: "In app purchases",
  },
  {
    id: 3,
    name: "Blizard",
    image: "/images/Blizzard.png",
    stars: 82,
    category: "Gift card",
  },
  {
    id: 4,
    name: "Ebay",
    image: "/images/ebay.png",
    stars: 76,
    category: "Top up via id",
  },

  {
    id: 6,
    name: "Gamestop",
    image: "/images/Gamestop.png",
    stars: 78,
    category: "Payment service",
  },
  {
    id: 7,
    name: "Google Play",
    image: "/images/google.png",
    stars: 73,
    category: "Gift card",
  },
  {
    id: 8,
    name: "Netflix",
    image: "/images/Netflix.png",
    stars: 70,
    category: "Game voucher",
  },
  {
    id: 9,
    name: "Nintendo",
    image: "/images/Nintendo.png",
    stars: 70,
    category: "Premium service",
  },
  {
    id: 10,
    name: "Playstation",
    image: "/images/Playstation.png",
    stars: 70,
    category: "Game voucher",
  },
  {
    id: 11,
    name: "Razer Gold",
    image: "/images/Razer.png",
    stars: 4,
    category: "Premium service",
  },
  {
    id: 12,
    name: "Spotify",
    image: "/images/Spotify.png",
    stars: 85,
    category: "Premium service",
  },
  {
    id: 13,
    name: "Steam",
    image: "/images/Steam.png",
    stars: 83,
    category: "Premium service",
  },
  {
    id: 14,
    name: "Target",
    image: "/images/Target.png",
    stars: 4,
    category: "Premium service",
  },

  {
    id: 15,
    name: "Visa / Master",
    image: "/images/VIsa Master.png",
    stars: 73,
    category: "Premium service",
  },
  {
    id: 16,
    name: "Xbox",
    image: "/images/Xbox.png",
    stars: 70,
    category: "Premium service",
  },
];

const categories = [
  "Gift card",
  "In app purchases",
  "Top up via id",
  "Game voucher",
  "Premium service",
  "Payment service",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Gift card");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Grid>
      <Grid
        sx={{
          mt: "50px",
          mb: "40px",
          display: "flex",
          justifyContent: "space-between",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
        aria-label="product categories"
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              sx={{
                color: selectedCategory === category ? "#5094FB" : "#E6E6E6",
                background:
                  selectedCategory === category
                    ? "rgba(80, 148, 251, 0.10)"
                    : "",
                "&:hover": {
                  color: selectedCategory === category ? "#5094FB" : "#5094FB",
                },
                mr: "10px",
                py: '10px',
                px: '20px',
                borderRadius: '15px'
              }}
            >
              {category}
            </Button>
          ))}
        </Grid>
        {/* <Grid>
          {[
            { link: "/images/ArrowRight.svg" },
            { link: "/images/ArrowLeft.svg" },
          ].map((x, index) => (
            <Box
              key={index}
              component="img"
              src={x.link}
              sx={{
                backgroundColor: "#5094FB",
                p: "5px",
                mx: "5px",
                borderRadius: 50,
                cursor: "pointer",
              }}
            />
          ))}
        </Grid> */}
      </Grid>

      <Grid container
       spacing={2}
       >
        {products
          .filter(
            (product) =>
              selectedCategory === "Gift card" ||
              selectedCategory === product.category
          )
          .map((product) => (
            <Grid item xs={12} sm={4} md={2} key={product.id}>
              <Link href={"#"}>
                <Box>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "auto", borderRadius: '15px' }}
                    sx={{ mt: '20px'}}
                  />
                  <Typography
                    sx={{fontSize: {md: '13px',sm: '15px', xs: "25px"},ml: { md: "15px", xs: '20px' }, fontWeight: "900", mt: "5px" , color: '#F5F5F6'}}
                    variant="h6"
                  >
                    {product.name}
                  </Typography>
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ml: { md: "15px", xs: '20px' },
                      mt: "5px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ mr: "10px", fontSize: {md: '13px',sm: '15px', xs: "25px"}, fontWeight: "900", color: '#F5F5F6' }}
                    >
                      {product.stars}{" "}%
                    </Typography>
                    {/* <Rating name="rating" value={product.stars} size="small" max={5}
                      readOnly /> */}
                  </Grid>
                </Box>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Grid >
  );
};

export default Products;
