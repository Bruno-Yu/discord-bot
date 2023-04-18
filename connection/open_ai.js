const { Configuration, OpenAIApi } = require('openai');

const { OPEN_AI_API_KEY } = require('../config');

// 用 Configuration 先將 api key 建立 設定檔
const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY,
});

// 再用 OpenAIApi 利用設定檔建立
const openAI = new OpenAIApi(configuration);

module.exports = openAI;