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
  current_price: number;
  sparkline_in_7d: marketItemsSparkLineApi;
  price_change_percentage_24h: number;
};

export type marketItemsModel = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  currentPrice: number;
  sparklineIn7d: marketItemsSparkLineModel;
  priceChangePercentage24h: number;
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
  priceChangePercentage24h: from.price_change_percentage_24h,
});
