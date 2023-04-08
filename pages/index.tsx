import Search from '@/components/common/search/Search';
import ShoppingList from '@/components/items/shoppingList/ShoppingList';
import { getShoppingList } from '@/lib/db/queries';
import { InferGetServerSidePropsType } from 'next/types';
import Bottle from '@/public/bottle.svg';

export default function Home({
  shoppingList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="grid grid-cols-[3fr_.8fr]">
      <div className="grid relative">
        <span className="text-3xl lg:w-2/3 grid lg:inline">
          <h3 className="text-orange font-semibold lg:inline">
            Shoppingify&nbsp;
          </h3>
          <p className="md:inline">
            allows you to take your shopping list wherever you go
          </p>
        </span>
        <div>
          <Search
            className="justify-start flex items-center justify-self-end md:justify-self-auto my-5 lg:w-1/2 text-base"
            placeholder="search Item"
            searchValue=""
            handleOnChange={() => {}}
          />
        </div>
        <ShoppingList list={shoppingList} />
      </div>
      <div className="bg-cornsilk absolute top-0 right-0 h-screen invisible md:visible md:w-96 p-10">
        <div className="bg-deepruby rounded-3xl grid grid-cols-2 pt-4 pb-5 px-7 relative">
          <Bottle className="absolute -top-4  left-3" />
          <div className="text-base text-white self-center col-start-2">
            <p className="pb-3">Didn&apos;t find what you need?</p>
            <button className="bg-white text-gray-800 rounded-xl py-2 px-7 text-sm font-semibold">
              Add item
            </button>
          </div>
        </div>
        <div>
          <p className="font-semibold my-10">Shopping List</p>
          <p className="text-sm text-gray-500">Fruit and vegetables</p>
          <div className="[&>p]:my-5 text-lg font-semibold">
            <p>Avocado</p>
            <p>Pre-cooked corn 450g</p>
          </div>

          <p className="text-sm text-gray-500">Meat and Fish</p>
          <div className="[&>p]:my-5 text-lg font-semibold">
            <p>Chicken 1kg</p>
            <p>Pork fillets 450g</p>
            <p>Salmon 1kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const shoppingList = await getShoppingList();

  return {
    props: {
      shoppingList: JSON.parse(JSON.stringify(shoppingList)),
    },
  };
};
