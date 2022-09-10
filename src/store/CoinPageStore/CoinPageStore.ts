import config from "config/config";
import { coinPageItemApi, coinPageItemModel, normalizeCoinPageItems } from "store/models/coinPage";
import axios from "axios";
import {action, computed, makeObservable, observable} from "mobx";
import {ILocalStore} from "../../utils/useLocalStore";

type PrivateFields = "_list";

export default class CoinPageStore implements ILocalStore {
  constructor() {
    makeObservable<CoinPageStore, PrivateFields>(this, {
      _list: observable,
      data: computed,
      requestCoin: action,
    });
  }

  private _list: coinPageItemModel | null = null;

  async requestCoin(id: string | undefined) {
    const response: coinPageItemApi = (
      await axios({
        method: "get",
        url: config.getOne(id),
      })
    ).data;
    this._list = normalizeCoinPageItems(response);
  }

  get data() {
    return this._list;
  }

  destroy() {
    this._list = null;
  }
}
