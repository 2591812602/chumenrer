"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabList: [{
        name: "互关"
      }, {
        name: "关注"
      }, {
        name: "粉丝"
      }],
      active: 0,
      news: []
    };
  },
  methods: {
    ontabtap(index) {
      this.active = index;
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/haoyoulist",
        method: "POST",
        data: {
          type: this.active
        },
        success: (res) => {
          this.news = res.data;
        }
      });
    },
    tiaozhuan1() {
      common_vendor.index.navigateTo({
        url: "/pages/searchhaoyou/searchhaoyou"
      });
    }
  },
  onLoad() {
    this.ontabtap();
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
    a: common_vendor.o($options.tiaozhuan1),
    b: common_vendor.p({
      placeholder: "搜索用户"
    }),
    c: common_vendor.f($data.tabList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.active === index ? "active" : ""),
        c: index,
        d: common_vendor.o(($event) => $options.ontabtap(index), index)
      };
    }),
    d: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: common_vendor.t(item.id),
        b: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/haoyouliebiao/haoyouliebiao.vue"]]);
wx.createPage(MiniProgramPage);
