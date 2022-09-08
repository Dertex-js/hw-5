import {
  coinPageItemImageApi,
  coinPageItemImageModel,
} from "store/models/coinPage/coinPageItemImage";

export type coinPageItemApi = {
  id: string;
  name: string;
  symbol: string;
  image: coinPageItemImageApi;
};

export type coinPageItemModel = {
  id: string;
  name: string;
  symbol: string;
  image: coinPageItemImageModel;
};

