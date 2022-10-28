import BaseLayout from '../../components/layouts/baseLayout';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'

export default function Merch() {
  return (
    <BaseLayout>
      <h1 className="text-5xl text-center mt-16">COMING SOON</h1>
    </BaseLayout>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();


  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};