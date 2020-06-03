/**
 * 公共接口
 */
import axios from "@/plugins/axios";

const base = "/Api/h5";

export default {
  async getShop(params) {
    return axios.post(`${base}/m/p/getShopRecommendListForIndex`, params);
  },
  async getReadList(params) {
    return axios.post(`${base}/u/reading/articles/p/getReadInfoVOList`, params);
  },
}


