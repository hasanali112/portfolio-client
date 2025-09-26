import ShopClient from "./ShopClient";
import { getAllProducts } from "@/services/shopService";

const Shop = async () => {
  let shopData;
  try {
    shopData = await getAllProducts();
  } catch (error) {
    console.error("Error fetching shop data:", error);
  }

  const products = shopData?.data || [];

  return <ShopClient products={products} />;
};

export default Shop;
