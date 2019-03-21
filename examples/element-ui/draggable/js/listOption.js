var list = [{
  "name": "柱状图",
  "title": "柱状图",
  "top": 276,
  "left": 536,
  "zIndex": 1,
  "dataType": 1,
  "time": 4000,
  'url': 'http://yapi.demo.qunar.com/mock/9013/bar',
  "data": {},
  "component": {
    "width": 1200,
    "height": 600,
    "name": "avue-echart-bar",
    "prop": "bar",
    "option": {
      "title": "2019年度潍坊城市销售额排名",
      "titlePostion": "",
      "titleFontSize": 24,
      "titleColor": "rgb(115, 170, 229)",
      "titleLink": "http://avue.top",
      "info": "这是图表的简介",
      "width": 1282,
      "height": 600,
      "gridX": 105,
      "gridY": 50,
      "gridX2": 80,
      "gridY2": 100,
      "nameColor": "#eee",
      "lineColor": "#eee",
      "xNameFontSize": 16,
      "yNameFontSize": 16,
      "labelShow": false,
      "labelShowFontSize": 14,
      "labelShowFontWeight": 300,
      "yAxisInverse": false,
      "xAxisInverse": false,
      "xAxisShow": true,
      "yAxisShow": true,
      "xAxisSplitLineShow": false,
      "yAxisSplitLineShow": false,
      "refresh": 3000,
      "barWidth": 30,
      "barRadius": 8,
      "barColor": [{
        "color1": "#83bff6",
        "color2": "#188df0",
        "postion": 90,
        "$index": 0,
        "_show": true
      }, {
        "color1": "#23B7E5",
        "color2": "#564AA3",
        "postion": 50,
        "$index": 1,
        "_show": true
      }],
      "barMinHeight": 2
    },
  },
  "index": 0
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 0,
  "left": 115,
  "zIndex": 13,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-2.png",
  "component": {
    "width": 1700,
    "height": 146,
    "name": "img",
    "prop": "img",
  },
  "index": 1
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 900,
  "left": 115,
  "zIndex": 12,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-1.png",
  "component": {
    "width": 1700,
    "height": 146,
    "name": "img",
    "prop": "img",
  },
  "index": 2
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 20,
  "left": 20,
  "zIndex": 11,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-8.png",
  "component": {
    "name": "img",
    "prop": "img",
  },
  "index": 3
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 344,
  "left": 10,
  "zIndex": 10,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-4.png",
  "component": {
    "width": 80,
    "height": 80,
    "name": "img",
    "prop": "img"
  },
  "index": 4
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 340,
  "left": 230,
  "zIndex": 9,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-5.png",
  "component": {
    "width": 80,
    "height": 80,
    "name": "img",
    "prop": "img",
  },
  "index": 5
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 479,
  "left": 10,
  "zIndex": 8,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-6.png",
  "component": {
    "width": 80,
    "height": 80,
    "name": "img",
    "prop": "img",
  },
  "index": 6
}, {
  "title": "图片框",
  "name": "图片框",
  "top": 481,
  "left": 232,
  "zIndex": 7,
  "data": "https://sugar.bce.baidu.com/static/img-templet/pic-7.png",
  "component": {
    "width": 80,
    "height": 80,
    "name": "img",
    "prop": "img",
  },
  "index": 7
}, {
  "title": "翻牌器",
  "name": "翻牌器",
  "top": 230,
  "left": 1140,
  "zIndex": 6,
  'dataType': 1,
  'time': 3000,
  'url': 'http://yapi.demo.qunar.com/mock/9013/count',
  "component": {
    "width": 750,
    "height": 120,
    "name": "avue-echart-flop",
    "prop": "flop",
    "list": ["https://sugar.bce.baidu.com/static/img-templet/border-1.png", "https://sugar.bce.baidu.com/static/img-templet/border-2.png"],
    "option": {
      "type": "img",
      "borderColor": "#fff",
      "borderWidth": 3,
      "backgroundImage": "https://sugar.bce.baidu.com/static/img-templet/border-1.png",
      "fontSize": 64,
      "fontWeight": "normal",
      "split": 3,
      "backgroundColor": "rgb(15, 57, 107)",
      "color": "#fff"
    }
  },
  "index": 8
}, {
  "title": "翻牌器",
  "name": "翻牌器",
  "top": 344,
  "left": 100,
  "zIndex": 5,
  "data": "71.9",
  'dataType': 0,
  "component": {
    "width": 230,
    "height": 100,
    "name": "avue-echart-flop",
    "prop": "flop",
    "list": ["https://sugar.bce.baidu.com/static/img-templet/border-1.png", "https://sugar.bce.baidu.com/static/img-templet/border-2.png"],
    "option": {
      "type": "",
      "suffixText": "订单总数(万)",
      "suffixTextAlign": "",
      "suffixSplit": 5,
      "suffixColor": "rgba(176, 194, 249, 1)",
      "suffixFontSize": 16,
      "borderColor": "#fff",
      "borderWidth": 3,
      "backgroundImage": "https://sugar.bce.baidu.com/static/img-templet/border-1.png",
      "fontSize": 42,
      "fontWeight": "normal",
      "split": 0,
      "backgroundColor": "",
      "color": "#fff"
    }
  },
  "index": 9
}, {
  "title": "翻牌器",
  "name": "翻牌器",
  "top": 346,
  "left": 320,
  "zIndex": 4,
  'dataType': 0,
  "data": "16.24",
  "component": {
    "width": 230,
    "height": 100,
    "name": "avue-echart-flop",
    "prop": "flop",
    "list": ["https://sugar.bce.baidu.com/static/img-templet/border-1.png", "https://sugar.bce.baidu.com/static/img-templet/border-2.png"],
    "option": {
      "type": "",
      "suffixText": "销售总量（万元）",
      "suffixTextAlign": "",
      "suffixSplit": 5,
      "suffixColor": "rgba(176, 194, 249, 1)",
      "suffixFontSize": 16,
      "borderColor": "#fff",
      "borderWidth": 3,
      "backgroundImage": "https://sugar.bce.baidu.com/static/img-templet/border-1.png",
      "fontSize": 42,
      "fontWeight": "normal",
      "split": 0,
      "backgroundColor": "",
      "color": "#fff"
    }
  },
  "index": 10
}, {
  "title": "翻牌器",
  "name": "翻牌器",
  "top": 478,
  "left": 102,
  "zIndex": 3,
  "dataType": 0,
  "data": "10.5",
  "component": {
    "width": 230,
    "height": 100,
    "name": "avue-echart-flop",
    "prop": "flop",
    "list": ["https://sugar.bce.baidu.com/static/img-templet/border-1.png", "https://sugar.bce.baidu.com/static/img-templet/border-2.png"],
    "option": {
      "type": "",
      "suffixText": "人均消费",
      "suffixTextAlign": "",
      "suffixSplit": 5,
      "suffixColor": "rgba(176, 194, 249, 1)",
      "suffixFontSize": 16,
      "borderColor": "#fff",
      "borderWidth": 3,
      "backgroundImage": "https://sugar.bce.baidu.com/static/img-templet/border-1.png",
      "fontSize": 42,
      "fontWeight": "normal",
      "split": 0,
      "backgroundColor": "",
      "color": "#fff"
    }
  },
  "index": 11
}, {
  "title": "翻牌器",
  "name": "翻牌器",
  "top": 478,
  "left": 322,
  "zIndex": 2,
  "dataType": 0,
  "data": "75",
  "component": {
    "width": 230,
    "height": 100,
    "name": "avue-echart-flop",
    "prop": "flop",
    "list": ["https://sugar.bce.baidu.com/static/img-templet/border-1.png", "https://sugar.bce.baidu.com/static/img-templet/border-2.png"],
    "option": {
      "type": "",
      "suffixText": "近10分钟新增订单数(万)",
      "suffixTextAlign": "",
      "suffixSplit": 5,
      "suffixColor": "rgba(176, 194, 249, 1)",
      "suffixFontSize": 16,
      "borderColor": "#fff",
      "borderWidth": 3,
      "backgroundImage": "https://sugar.bce.baidu.com/static/img-templet/border-1.png",
      "fontSize": 42,
      "fontWeight": "normal",
      "split": 0,
      "backgroundColor": "",
      "color": "#fff"
    }
  },
  "index": 12
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 14,
  "left": 702,
  "zIndex": 26,
  "data": "avuex数据大屏实时展示",
  "component": {
    "width": 490,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 40,
      "fontWeight": "bold",
      "color": "#fff"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 13
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 120,
  "left": 1122,
  "zIndex": 25,
  "data": "电商数据",
  "component": {
    "width": 100,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 22,
      "fontWeight": "normal",
      "color": "rgba(154, 168, 212, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 14
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 120,
  "left": 1250,
  "zIndex": 24,
  "data": "Sell Data",
  "component": {
    "width": 100,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 20,
      "fontWeight": "normal",
      "color": "rgba(64, 77, 105, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 15
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 276,
  "left": 15,
  "zIndex": 23,
  "data": "数据统计",
  "component": {
    "width": 100,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 22,
      "fontWeight": "normal",
      "color": "rgba(154, 168, 212, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 16
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 278,
  "left": 350,
  "zIndex": 22,
  "data": "Statistics Data",
  "component": {
    "width": 150,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 20,
      "fontWeight": "normal",
      "color": "rgba(64, 77, 105, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 17
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 124,
  "left": 320,
  "zIndex": 21,
  "data": "完成的百分比",
  "component": {
    "width": 150,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 20,
      "fontWeight": "normal",
      "color": "rgba(64, 77, 105, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 18
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 180,
  "left": 1104,
  "zIndex": 20,
  "data": "销售量",
  "component": {
    "width": 100,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 16,
      "fontWeight": "normal",
      "color": "rgba(154, 168, 212, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 19
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 180,
  "left": 1760,
  "zIndex": 19,
  "data": "万元",
  "component": {
    "width": 100,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 16,
      "fontWeight": "normal",
      "color": "rgba(154, 168, 212, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 20
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 646,
  "left": 15,
  "zIndex": 18,
  "data": "交易统计",
  "component": {
    "width": 100,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 22,
      "fontWeight": "normal",
      "color": "rgba(154, 168, 212, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 21
}, {
  "title": "文本框",
  "name": "文本框",
  "top": 650,
  "left": 350,
  "zIndex": 17,
  "data": "Count Data",
  "component": {
    "width": 150,
    "height": 50,
    "style": {
      "textAlign": "center",
      "fontSize": 20,
      "fontWeight": "normal",
      "color": "rgba(64, 77, 105, 1)"
    },
    "name": "text",
    "prop": "text"
  },
  "index": 22
}, {
  "title": "进度条",
  "name": "进度条",
  "top": 736,
  "left": 40,
  "zIndex": 16,
  "data": {
    "label": "订单交易",
    "value": 300,
    "data": 30
  },
  "component": {
    "width": 200,
    "height": 200,
    "option": {
      "width": 200,
      "type": "circle",
      "color": "rgba(154, 168, 212, 1)",
      "fontSize": 24,
      "strokeWidth": 14,
      "fontWeight": "normal",
      "borderColor": "#23b7e5",
      "height": 200
    },
    "name": "avue-echart-progress",
    "prop": "progress"
  },
  "index": 23
}, {
  "title": "进度条",
  "name": "进度条",
  "top": 738,
  "left": 300,
  "zIndex": 15,
  "data": {
    "label": "人数增涨",
    "value": 40,
    "data": 80
  },
  "component": {
    "width": 200,
    "height": 200,
    "option": {
      "width": 200,
      "type": "circle",
      "color": "rgba(154, 168, 212, 1)",
      "fontSize": 24,
      "strokeWidth": 14,
      "fontWeight": "normal",
      "borderColor": "#564AA3",
      "height": 200
    },
    "name": "avue-echart-progress",
    "prop": "progress"
  },
  "index": 24
}, {
  "title": "进度条",
  "name": "进度条",
  "top": 150,
  "left": 60,
  "zIndex": 14,
  "data": {
    "label": "人数增涨",
    "value": 40,
    "data": 80
  },
  "component": {
    "width": 400,
    "height": 80,
    "option": {
      "type": "line",
      "color": "rgba(154, 168, 212, 1)",
      "fontSize": 24,
      "strokeWidth": 18,
      "fontWeight": "normal",
      "borderColor": "#564AA3",
      "width": 400,
      "height": 80
    },
    "name": "avue-echart-progress",
    "prop": "progress"
  },
  "index": 25
}]
