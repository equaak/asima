import api from "../http";


export default class SendService {
  static async sendMessage(text) {
    console.log(api)
    return api.post("openai", {text});
  }
}