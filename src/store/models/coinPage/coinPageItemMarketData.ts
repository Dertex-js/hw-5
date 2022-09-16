import {
  coinPageItemMarketDataUsdApi,
  coinPageItemMarketDataUsdModel,
} from "./coinPageItemMarketDataUsd";

export type coinPageItemMarketDataApi = {
  current_price: coinPageItemMarketDataUsdApi;
  price_change_24h: number;
  price_change_percentage_24h: number;
};

export type coinPageItemMarketDataModel = {
  currentPrice: coinPageItemMarketDataUsdModel;
  priceChange24h: number;
  priceChangePercentage24h: number;
};

export const normalizeCoinPageItemsMarketData = (
  from: coinPageItemMarketDataApi
): coinPageItemMarketDataModel => ({
  currentPrice: from.current_price,
  priceChange24h: from.price_change_24h,
  priceChangePercentage24h: from.price_change_percentage_24h,
});
