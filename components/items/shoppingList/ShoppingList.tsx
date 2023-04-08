import { FunctionComponent } from 'react';
import ItemButton from '@/components/items/shoppingList/itemButton';

interface ShoppingListProps {
  list: any;
}

const ShoppingList: FunctionComponent<ShoppingListProps> = ({ list }) => {
  return (
    <div className="text-xl">
      {list?.map(({ uuid, name: categoryName, shoppingItems: items }: any) => (
        <div key={uuid} className="mb-10">
          <h4 className="font-semibold pb-5">{categoryName}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {!items?.length ? (
              <p>No items</p>
            ) : (
              items?.map(({ _id, name }: any) => (
                <ItemButton key={_id} name={name} />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;
