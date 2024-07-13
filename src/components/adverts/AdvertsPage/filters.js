export const filterByName = (adverts, name) => {
  return adverts.filter(advert => advert.name.toLowerCase().includes(name.toLowerCase()));
};

export const filterBySale = (adverts, sale) => {
  if (sale === undefined) return adverts;
  return adverts.filter(advert => advert.sale === sale);
};

export const filterByPrice = (adverts, minPrice, maxPrice) => {
  return adverts.filter(advert => advert.price >= minPrice && advert.price <= maxPrice);
};

export const filterByTags = (adverts, tags) => {
  if (!tags.length) return adverts;
  return adverts.filter(advert => tags.every(tag => advert.tags.includes(tag)));
};
