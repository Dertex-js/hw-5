const coinsRequest = {
  url: (page: number | undefined) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=12&page=${page}&sparkline=true`,
};

export default coinsRequest;
