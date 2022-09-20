const config = {
  getOne: (id: string | undefined) =>
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`,
};

export default config;
