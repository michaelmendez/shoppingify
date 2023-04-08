const shoppingifyDB = async () => {
  const client = (await import('@/lib/db/mongo')).default;
  return (await client).db('shoppingify');
};

export default shoppingifyDB;
