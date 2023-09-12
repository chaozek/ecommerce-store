import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/Billboard";
import { ProductList } from "@/components/ProductList";
import { Container } from "@/components/ui/Container";
import * as React from "react";

export const revalidate = 0;
interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = async (props) => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5dca730c-e9ca-488b-b7c3-351f3ae20433");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
