"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      datas: "",
      news: []
    };
  },
  methods: {
    sousuo() {
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/sousuohaoyou",
        method: "POST",
        data: {
          name: this.datas
        },
        success: (res) => {
          this.news = res.data;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.sousuo),
    b: common_vendor.o(($event) => $data.datas = $event),
    c: common_vendor.p({
      placeholder: "搜索用户",
      modelValue: $data.datas
    }),
    d: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: item.avatarurl,
        b: common_vendor.t(item.nickname),
        c: common_vendor.t(item.type),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/searchhaoyou/searchhaoyou.vue"]]);
wx.createPage(MiniProgramPage);
