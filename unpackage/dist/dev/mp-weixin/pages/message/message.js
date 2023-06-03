"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      news: []
    };
  },
  methods: {
    requestlist() {
      common_vendor.index.request({
        url: "http://127.0.01:3001/list",
        method: "GET",
        success: (res) => {
          for (let index in res.data) {
            res.data[index].create_time = utils_util.friendlyDate(new Date(res.data[index].create_time * 1e3));
            this.news = res.data;
          }
        }
      });
    },
    tiaozhuan1() {
      common_vendor.index.navigateTo({
        url: "/pages/haoyouliebiao/haoyouliebiao"
      });
    },
    tiaozhuan2(id) {
      common_vendor.index.navigateTo({
        url: "/pages/liaotian/liaotian?id=" + id
      });
    }
  },
  onLoad() {
    this.requestlist();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.tiaozhuan1 && $options.tiaozhuan1(...args)),
    b: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: common_vendor.t(item.data),
        b: common_vendor.t(item.create_time),
        c: index,
        d: common_vendor.o(($event) => $options.tiaozhuan2(item.from_id), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
