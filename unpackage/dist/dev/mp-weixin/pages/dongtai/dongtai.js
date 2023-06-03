"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabList: [
        {
          name: "关注"
        },
        {
          name: "推荐"
        },
        {
          name: "体育"
        },
        {
          name: "热点"
        },
        {
          name: "财经"
        }
      ],
      active: 0,
      news: []
    };
  },
  methods: {
    ontabtap(index) {
      this.active = index;
      this.requestcontent();
    },
    requestcontent() {
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/dongtai",
        method: "POST",
        data: {
          type: this.active + 1
        },
        success: (res) => {
          this.news = res.data;
        }
      });
    }
  },
  onLoad() {
    this.requestcontent();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.active === index ? "active" : ""),
        c: index,
        d: common_vendor.o(($event) => $options.ontabtap(index), index)
      };
    }),
    b: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: item.titlepic,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.desc),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/dongtai/dongtai.vue"]]);
wx.createPage(MiniProgramPage);
