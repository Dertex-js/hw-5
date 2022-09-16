export type marketItemsSparkLineApi = {
  price: number[];
};

export type marketItemsSparkLineModel = {
  price: number[];
};

export const normalizeMarketItemsSparkLine = (
  from: marketItemsSparkLineApi
): marketItemsSparkLineModel => ({
  price: from.price,
});
