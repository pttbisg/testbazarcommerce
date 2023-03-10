import Carousel from "components/carousel/Carousel";
import ProductCard1 from "components/product-cards/ProductCard1";
import { H3 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const GrocerySection5 = ({
  products
}) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);else if (width < 950) setVisibleSlides(2);else setVisibleSlides(3);
  }, [width]);
  return <Box>
      <H3 fontSize="25px" mb={4}>
        Best Seller in Your Area
      </H3>

      <Box my="-0.25rem">
        <Carousel totalSlides={12} visibleSlides={visibleSlides} step={3} showDots arrowButtonColor="inherit" showArrowOnHover={true}>
          {products && products.map((item, ind) => <Box py={0.5} key={ind}>
                <ProductCard1 {...item} off={50} hideRating showProductSize />
              </Box>)}
        </Carousel>
      </Box>
    </Box>;
};

export default GrocerySection5;