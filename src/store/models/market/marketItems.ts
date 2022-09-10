import {
  marketItemsSparkLineApi,
  marketItemsSparkLineModel,
  normalizeMarketItemsSparkLine
} from "./marketItemsSparkLine";

export type marketItemsApi = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: string;
  sparkline_in_7d: marketItemsSparkLineApi;
};

export type marketItemsModel = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  currentPrice: string;
  sparklineIn7d: marketItemsSparkLineModel;
};

export const normalizeMarketItems = (
  from: marketItemsApi
): marketItemsModel => ({
  id: from.id,
  name: from.name,
  image: from.image,
  symbol: from.symbol,
  currentPrice: from.current_price,
  sparklineIn7d: normalizeMarketItemsSparkLine(from.sparkline_in_7d),
});
