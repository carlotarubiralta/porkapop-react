export const filterByName = (adverts, name) => {
  console.log('Filtering by Name:', name);
  return adverts.filter(advert => advert.name.toLowerCase().includes(name.toLowerCase()));
};

export const filterBySale = (adverts, sale) => {
  console.log('Filtering by Sale:', sale);
  if (sale === undefined) return adverts;
  return adverts.filter(advert => advert.sale === sale);
};

export const filterByPrice = (adverts, minPrice, maxPrice) => {
  console.log('Filtering by Price:', minPrice, maxPrice);
  return adverts.filter(advert => advert.price >= minPrice && advert.price <= maxPrice);
};

export const filterByTags = (adverts, tags) => {
  console.log('Filtering by Tags:', tags);
  if (!tags.length) return adverts;
  return adverts.filter(advert => tags.every(tag => advert.tags.includes(tag)));
};
