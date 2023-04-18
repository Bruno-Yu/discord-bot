// 共用訊息統一管理

module.exports = {
  replyMessage: '正在思考中...',
  errorMessage:({status, statusText})=> `發生 ${status} - ${statusText} 錯誤`,
  sendMaxLengthMessage: '此貼文內容超過我目前能處理的長度囉! 建議另開新貼文'
}