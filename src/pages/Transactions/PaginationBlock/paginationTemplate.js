export const getTemplate = (page, total) => {
  if (total <= 9) {
    const template = [...Array(total + 1).keys()];
    template.shift();
    return [template];
  }

  const start = (page <= 4) ? [1, 2, 3, 4, 5] : [1];
  const center = (page > 4 && page < total - 3) ? [page - 2, page - 1, page, page + 1, page + 2] : null;
  const end = (page >= total - 3) ? [total - 4, total - 3, total - 2, total - 1, total] : [total];
  
  return [start, center, end].filter(x => !!x);
};
