"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      id: 1,
      contentid: 1,
      news: [],
      comment: [],
      pinglun: "",
      post_id: 1
    };
  },
  methods: {
    requestcontent() {
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/content",
        method: "POST",
        data: {
          type: this.contentid
        },
        success: (res) => {
          for (let index in res.data) {
            res.data[index].create_time = utils_util.friendlyDate(new Date(res.data[index].create_time * 1e3));
            this.post_id = res.data[index].post_class_id;
          }
          this.news = res.data;
        }
      });
    },
    fanhui() {
      common_vendor.index.navigateBack(-1);
    },
    requestcomment() {
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/comment",
        method: "POST",
        data: {
          type: this.contentid
        },
        success: (res) => {
          for (let index in res.data) {
            res.data[index].create_time = utils_util.friendlyDate(new Date(res.data[index].create_time * 1e3));
            this.id = res.data[index].id + 1;
            console.log(this.id);
          }
          this.comment = res.data;
        }
      });
    },
    tianjia() {
      console.log(this.pinglun);
      var timestamp = Date.parse(new Date()) / 1e3;
      console.log(timestamp);
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/tianjia",
        method: "POST",
        data: {
          id: this.id,
          contentid: this.contentid,
          fid: 1,
          fnum: 2,
          data: this.pinglun,
          create_time: timestamp,
          post_id: this.post_id
        },
        success: (res) => {
          console.log(res);
        }
      });
      this.requestcomment();
    },
    dianzang(id, num) {
      num += 1;
      console.log(id, num);
      common_vendor.index.request({
        url: "http://127.0.0.1:3001/dianzang",
        method: "POST",
        data: {
          id,
          num
        },
        success: (res) => {
          console.log(res);
        }
      });
      this.requestcontent();
    }
  },
  onLoad(options) {
    console.log(options);
    this.contentid = options.id;
    this.requestcontent();
    this.requestcomment();
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: common_vendor.t(item.id),
        b: common_vendor.t(item.create_time),
        c: item.titlepic,
        d: common_vendor.t(item.sharenum),
        e: common_vendor.o(($event) => $options.dianzang(item.id, item.sharenum), index),
        f: index
      };
    }),
    b: common_vendor.f($data.comment, (item, index, i0) => {
      return {
        a: common_vendor.t(item.data),
        b: common_vendor.t(item.create_time),
        c: index
      };
    }),
    c: common_vendor.o($options.tianjia),
    d: common_vendor.o(($event) => $data.pinglun = $event),
    e: common_vendor.p({
      placeholder: "文明发言",
      modelValue: $data.pinglun
    }),
    f: common_vendor.p({
      title: "请输入你的评论",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Hbuilder project/出门儿v1.1/pages/content/content.vue"]]);
wx.createPage(MiniProgramPage);
