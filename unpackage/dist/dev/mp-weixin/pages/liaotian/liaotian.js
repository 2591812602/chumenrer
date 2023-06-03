"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      news: [],
      from_id: 1,
      datas: ""
    };
  },
  methods: {
    requestlist() {
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/liaotian",
        method: "POST",
        data: {
          id: this.from_id
        },
        success: (res) => {
          this.news = res.data;
        }
      });
    },
    tiaozhuan1() {
      common_vendor.index.navigateBack(-1);
    },
    fasong() {
      console.log(this.datas);
    }
  },
  onLoad(options) {
    this.from_id = options.id;
    this.requestlist();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.tiaozhuan1 && $options.tiaozhuan1(...args)),
    b: common_vendor.f($data.news, (item, index, i0) => {
      return common_vendor.e({
        a: index % 2 === 0
      }, index % 2 === 0 ? {
        b: common_vendor.t(item.data)
      } : {
        c: common_vendor.t(item.data)
      }, {
        d: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/liaotian/liaotian.vue"]]);
wx.createPage(MiniProgramPage);
