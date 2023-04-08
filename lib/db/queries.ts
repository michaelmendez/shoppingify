import shoppingifyDB from '@/lib/db/db';

const getShoppingList = async () => {
  const db = await shoppingifyDB();
  const categories = db.collection('categories');
  const shoppingItems = await categories
    .aggregate([
      {
        $lookup: {
          from: 'items',
          localField: 'uuid',
          foreignField: 'categoryUUID',
          pipeline: [
            {
              $project: {
                name: true,
              },
            },
          ],
          as: 'shoppingItems',
        },
      },
      { $project: { _id: false } },
    ])
    .toArray();

  return shoppingItems;
};

export { getShoppingList };
