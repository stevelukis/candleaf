import React, { useEffect } from "react";
import { useProductsList } from "./hooks";
import ProductCard from "../../components/ProductCard";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";

function Products() {
  const [searchParams] = useSearchParams();
  const { productList, pageCount, loadProductList } = useProductsList();

  const handlePageClick = (e: { selected: number }) => {
    const search = searchParams.get("search");
    const newPage = e.selected + 1;

    loadProductList(search ? search : "", e.selected + 1);
    const url = new URL(window.location.toString());
    url.searchParams.set("page", newPage.toString());
    window.history.pushState(null, "", url.toString());
  };

  useEffect(() => {
    const search = searchParams.get("search");
    loadProductList(search ? search : "", 1);
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      <ul className="mx-auto flex flex-row flex-wrap gap-1">
        {productList?.map((product) => (
          <Link key={product.id} to={`/products/${product.slug}`}>
            <ProductCard
              title={product.title}
              price={product.unit_price}
              imageUrl={
                product.images.length > 0
                  ? product.images[0].image
                  : "logo512.png"
              }
            />
          </Link>
        ))}
      </ul>
      <div className="flex flex-row justify-center">
        <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
}

export default Products;
