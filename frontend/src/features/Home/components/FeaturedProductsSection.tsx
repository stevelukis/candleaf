import React from "react";
import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import useFeaturedProducts from "../hooks/useFeaturedProducts";
import ProductCard from "../../Products/components/ProductCard";

const FeaturedProductsSection = () => {
  const { data } = useFeaturedProducts();

  return (
    <Container maxW="container.xl">
      <VStack py="90px" justifyContent="center">
        <Heading fontWeight="normal">Products</Heading>
        <Text fontSize={18} color="#5E6E89">
          Order it for you or for your beloved ones
        </Text>
        <SimpleGrid columns={1} mt="60px" spacing="20px" hideFrom="lg">
          {data?.slice(0, 4)?.map((featuredProduct) => (
            <ProductCard
              key={featuredProduct.id}
              product={featuredProduct.product}
            />
          ))}
          <Button w="180px" mt="55px" mx="auto">
            See more
          </Button>
        </SimpleGrid>
        <SimpleGrid
          columns={4}
          w="full"
          mt="60px"
          spacingX="auto"
          spacingY="20px"
          hideBelow="lg"
        >
          {data?.slice(0, 8).map((featuredProduct) => (
            <ProductCard
              key={featuredProduct.id}
              product={featuredProduct.product}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default FeaturedProductsSection;
