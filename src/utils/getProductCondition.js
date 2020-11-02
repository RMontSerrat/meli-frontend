const getProductCondition = (condition) => {
  const conditions = new Map([
    ['new', 'Novo'],
    ['used', 'Usado'],
    ['not_specified', 'No especificado'],
  ]);

  return conditions.get(condition);
};

export default getProductCondition;
