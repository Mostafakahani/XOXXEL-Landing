import React, { useState } from "react";
import { Box, Grid, Typography, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import { Rating } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Fortnite mobile New skin",
    image: "/images/amazon.png",
    stars: 4.2,
    category: "Gift card",
  },
  {
    id: 2,
    name: "Fortnite mobile New skin",
    image: "/images/Apple.png",
    stars: 3.1,
    category: "In app purchases",
  },
  {
    id: 3,
    name: "Fortnite mobile New skin",
    image: "/images/Blizzard.png",
    stars: 4.4,
    category: "Gift card",
  },
  {
    id: 4,
    name: "Fortnite mobile New skin",
    image: "/images/ebay.png",
    stars: 5,
    category: "Top up via id",
  },

  {
    id: 6,
    name: "Fortnite mobile New skin",
    image: "/images/Gamestop.png",
    stars: 4,
    category: "Payment service",
  },
  {
    id: 7,
    name: "Fortnite mobile New skin",
    image: "/images/google.png",
    stars: 4,
    category: "Gift card",
  },
  {
    id: 8,
    name: "Fortnite mobile New skin",
    image: "/images/Netflix.png",
    stars: 4,
    category: "Game voucher",
  },
  {
    id: 9,
    name: "Fortnite mobile New skin",
    image: "/images/Nintendo.png",
    stars: 4,
    category: "Premium service",
  },
  {
    id: 10,
    name: "Fortnite mobile New skin",
    image: "/images/Playstation.png",
    stars: 4,
    category: "Game voucher",
  },
  {
    id: 11,
    name: "Fortnite mobile New skin",
    image: "/images/Razer.png",
    stars: 4,
    category: "Premium service",
  },
  {
    id: 12,
    name: "Fortnite mobile New skin",
    image: "/images/Spotify.png",
    stars: 4,
    category: "Premium service",
  },
  {
    id: 13,
    name: "Fortnite mobile New skin",
    image: "/images/Steam.png",
    stars: 4,
    category: "Premium service",
  },
  {
    id: 14,
    name: "Fortnite mobile New skin",
    image: "/images/Target.png",
    stars: 4,
    category: "Premium service",
  },

  {
    id: 15,
    name: "Fortnite mobile New skin",
    image: "/images/VIsa Master.png",
    stars: 4,
    category: "Premium service",
  },
  {
    id: 16,
    name: "Fortnite mobile New skin",
    image: "/images/Xbox.png",
    stars: 4,
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
                      {product.stars}/5
                    </Typography>
                    <Rating name="rating" value={product.stars} size="small" max={5}
                      readOnly />
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
