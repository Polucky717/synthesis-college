/* ============================================================
 * 合成大院系 —— 游戏配置（照搬 bu.eltaos.top 的配置驱动方式）
 * 候选池：15 个本科生书院 + 14 个院系（共 29 个可选目标）。
 * 合成链：选定目标置于链顶（第 15 级），从未选中的其余院系中
 * 随机抽取 14 个组成 1-14 级；开局（未选目标）标题为「合成大院系」。
 * title 为标题词：两字 →「合成大X」（如 合成大无系 / 合成大经管），
 * 三字 →「合成X」（如 合成数学系）；特殊简称优先。
 * radii/scores 按等级序（等级 0 最小）；score 为合成出该等级时的得分。
 * 徽章的图案偏移/缩放已烤进 assets/img/round/*.png 文件（make-badges.ps1
 * 的 $tweaks 表），渲染层不再做偏移，避免贴图与球底白圆错位出白边。
 * ============================================================ */
(function () {
  "use strict";

  window.MERGE_GAME_CONFIG = {
    id: "weiyang",
    assetBase: "assets/",
    spawnLevelCount: 5,
    progressiveUnlock: true,

    ui: {
      title: "合成大院系",
      description: "清华大学书院与院系徽章合成小游戏"
    },

    radii: [13, 15.2, 17.8, 20.8, 24.3, 28.4, 33.2, 38.8, 43, 49.5, 57, 65.5, 75, 85],
    scores: [0, 60, 120, 200, 300, 420, 560, 720, 900, 1100, 1300, 1500, 1750, 2000],

    /* 投放难度：可投最大球的半径不超过最大球的一半（85 / 2 = 42.5），
     * 即最高只能投到 r=38.8 那一级，更大的目标只能靠合成获得。 */
    maxSpawnRadius: 42.5,

    /* 彩蛋：将两个链顶球（当前合成目标的最高级）合并，
     * 诞生清华大学校徽（隐藏第 15 级，不可投放、不在选择器中）。 */
    bonusLevel: {
      key: "qinghua",
      name: "清华大学",
      short: "清华",
      title: "清华",
      radius: 103,
      score: 3000,
      color: "#660874",
      image: "img/round/qinghua.png"
    },

    colleges: [
      { key: "xinya",    name: "新雅书院",   short: "新雅",     title: "新雅",     color: "#7c2c52", image: "img/round/xinya.png" },
      { key: "zhili",    name: "致理书院",   short: "致理",     title: "致理",     color: "#14506b", image: "img/round/zhili.png" },
      { key: "rixin",    name: "日新书院",   short: "日新",     title: "日新",     color: "#d9720f", image: "img/round/rixin.png" },
      { key: "tanwei",   name: "探微书院",   short: "探微",     title: "探微",     color: "#7b4fc0", image: "img/round/tanwei.png" },
      { key: "xingjian", name: "行健书院",   short: "行健",     title: "行健",     color: "#1e3a8a", image: "img/round/xingjian.png" },
      { key: "weiyang",  name: "未央书院",   short: "未央",     title: "未央",     color: "#3f9ad5", image: "img/round/weiyang.png" },
      { key: "qiuzhen",  name: "求真书院",   short: "求真",     title: "求真",     color: "#a02c2c", image: "img/round/qiuzhen.png" },
      { key: "weixian",  name: "为先书院",   short: "为先",     title: "为先",     color: "#5d2f92", image: "img/round/weixian.png" },
      { key: "xiuzhong", name: "秀钟书院",   short: "秀钟",     title: "秀钟",     color: "#14366b", image: "img/round/xiuzhong.png" },
      { key: "dushi",    name: "笃实书院",   short: "笃实",     title: "笃实",     color: "#3f9ad6", image: "img/round/dushi.png" },
      { key: "zhishan",  name: "至善书院",   short: "至善",     title: "至善",     color: "#c2402a", image: "img/round/zhishan.png" },
      { key: "wuqiong",  name: "无穹书院",   short: "无穹",     title: "无穹",     color: "#1a2470", image: "img/round/wuqiong.png" },
      { key: "zijin",    name: "紫荆书院",   short: "紫荆",     title: "紫荆",     color: "#5f1a4a", image: "img/round/zijin.png" },
      { key: "ziqiang",  name: "自强书院",   short: "自强",     title: "自强",     color: "#8a2fa0", image: "img/round/ziqiang.png" },
      { key: "shuimu",   name: "水木书院",   short: "水木",     title: "水木",     color: "#14405f", image: "img/round/shuimu.png" },
      { key: "jianyuan", name: "建筑学院",   short: "建院",     title: "建院",     color: "#8c4a1f", image: "img/round/jianyuan.png" },
      { key: "jixie",    name: "机械系",     short: "机械",     title: "机械系",   color: "#6d28d9", image: "img/round/jixie.png" },
      { key: "wuxi",     name: "电子系",     short: "电子系",   title: "无系",     color: "#7c3aed", image: "img/round/wuxi.png" },
      { key: "guixi",    name: "计算机系",   short: "计算机系", title: "贵系",     color: "#581c87", image: "img/round/guixi.png" },
      { key: "shuxue",   name: "数学系",     short: "数学",     title: "数学系",   color: "#6b21a8", image: "img/round/shuxue.png" },
      { key: "shengke",  name: "生命科学学院", short: "生科",   title: "生科",     color: "#412f54", image: "img/round/shengke.png" },
      { key: "gongwu",   name: "工物系",     short: "工物",     title: "工物系",   color: "#7e22ce", image: "img/round/gongwu.png" },
      { key: "leixi",    name: "自动化系",   short: "自动化系", title: "雷系",     color: "#9333ea", image: "img/round/leixi.png" },
      { key: "tongji",   name: "统计系",     short: "统计",     title: "统计系",   color: "#8b5cf6", image: "img/round/tongji.png" },
      { key: "chayuan",  name: "交叉信息院", short: "交叉信息院", title: "茶园",   color: "#172554", image: "img/round/chayuan.png" },
      { key: "yixue",    name: "医学院",     short: "医学",     title: "医学院",   color: "#86198f", image: "img/round/yixue.png" },
      { key: "jingguan", name: "经管学院",   short: "经管",     title: "经管",     color: "#2450a4", image: "img/round/jingguan.png" },
      { key: "faxue",    name: "法学院",     short: "法学",     title: "法学院",   color: "#5b21b6", image: "img/round/faxue.png" },
      { key: "meiyuan",  name: "美术学院",   short: "美术",     title: "美院",     color: "#1e40af", image: "img/round/meiyuan.png" }
    ]
  };
}());
