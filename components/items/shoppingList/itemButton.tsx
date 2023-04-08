import { FunctionComponent } from 'react';
import { MdAdd } from 'react-icons/md';

interface ShoppingItemProps {
  name: string;
}

const ItemButton: FunctionComponent<ShoppingItemProps> = ({ name }) => {
  return (
    <button className="bg-white rounded-2xl p-4 xl:w-2/4 lg:w-2/3 w-full flex justify-around items-center">
      {name}
      <MdAdd />
    </button>
  );
};

export default ItemButton;
