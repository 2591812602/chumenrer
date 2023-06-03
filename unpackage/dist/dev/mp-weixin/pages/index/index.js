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
      news: [],
      datas: ""
    };
  },
  onLoad() {
    this.requestcontent();
  },
  methods: {
    ontabtap(index) {
      this.active = index;
      this.requestcontent();
    },
    requestcontent() {
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/message",
        method: "POST",
        data: {
          type: this.active + 1
        },
        success: (res) => {
          this.news = res.data;
        }
      });
    },
    tiaozhuan(id) {
      common_vendor.index.navigateTo({
        url: "/pages/content/content?id=" + id
      });
    },
    tiaozhuan1() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
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
    a: common_vendor.o($options.tiaozhuan1),
    b: common_vendor.p({
      placeholder: "请输入帖子"
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
      return common_vendor.e({
        a: item.titlepic
      }, item.titlepic ? {
        b: common_vendor.t(item.user_id),
        c: common_vendor.t(item.title),
        d: item.titlepic,
        e: common_vendor.o(($event) => $options.tiaozhuan(item.id), index)
      } : !item.titlepic ? {
        g: common_vendor.t(item.user_id),
        h: common_vendor.t(item.title)
      } : {}, {
        f: !item.titlepic,
        i: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
