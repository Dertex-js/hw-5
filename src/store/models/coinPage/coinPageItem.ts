import {
  coinPageItemImageApi,
  coinPageItemImageModel,
} from "store/models/coinPage/coinPageItemImage";
import {
  coinPageItemMarketDataApi,
  coinPageItemMarketDataModel,
  normalizeCoinPageItemsMarketData,
} from "./coinPageItemMarketData";

export type coinPageItemApi = {
  id: string;
  name: string;
  symbol: string;
  image: coinPageItemImageApi;
  market_data: coinPageItemMarketDataApi;
};

export type coinPageItemModel = {
  id: string;
  name: string;
  symbol: string;
  image: coinPageItemImageModel;
  marketData: coinPageItemMarketDataModel;
};

export const normalizeCoinPageItems = (
  from: coinPageItemApi
): coinPageItemModel => ({
  id: from.id,
  name: from.name,
  symbol: from.symbol,
  image: from.image,
  marketData: normalizeCoinPageItemsMarketData(from.market_data),
});
