var generateDates = function(start, end) {
  var dates = [];
  for(var i = start; i <= end; i++) {
    dates.push(i);
  }
  return dates;
}
var divideNumber = function(number, divisor, precision) {
  return parseFloat((number / divisor).toFixed(precision))
}
var divideData = function(data, divisor, precision) {
  var array = [];
  for(var i = 0; i < data.length; i++) {
    array.push(divideNumber(data[i], divisor, precision));
  }
  return array;
}
var yearPrefix = function(data, startYear) {
  var array = [];
  for(var i = 0; i < data.length; i++) {
    if (data[i]) {
      array.push([startYear, data[i]]);
    }
    startYear++;
  }
  return array;
}
var truncate = function(string, length) {
  if (!length) length = 30;
  if (string.length > length) {
    var words = string.split(" ");
    for(var i = 0; i < words.length; i++) {
      if (words.slice(0, i).join(" ").length > length) break;
    }
    string = words.slice(0, i).join(" ") + "...";
  }
  return string;
}
var tradeCategories = ['Сільське господарство', 'Сировина', 'Промисловість', 'Послуги', 'Різне']
var globalData = {
  "UA": {
    "GDP": [
      //$ since 1990
      81456431291.9, 77464043753.3, 73942294099.3, 65648559194.6, 52549555009.5, 48213868185.2, 44558077827.1, 50150399813.1, 41883241479.9, 31580639053.2, 31261527363.1, 38009344576.6, 42392896031.2, 50132953288.2, 64883060725.7, 86142018069.4, 107753069306.9, 142719009901.0, 179992405832.3, 117227769791.6, 136419300368.0, 163159671670.3, 175781379051.4, 183310146378.1, 131805126738.3
    ], "GDP_PPP": [
      //$ since 1990
      352750658790.0, 333793294808.4, 308293218055.1, 270735982542.4, 213076979363.0, 190987828940.6, 175021638585.2, 172692394159.3, 171248797823.4, 173352922375.9, 187765280601.4, 209709353227.9, 223998984361.7, 249939273142.4, 287879781049.3, 305163922491.9, 337504218645.6, 373876946863.3, 389855304509.0, 334774657261.5, 352542457535, 378531847053, 386097999689, 391851068004, 370533490861
    ], "GDP_PPP_capita": [
      //$ since 1990
      6797.8, 6419.0, 5911.6, 5188.6, 4103.9, 3707.6, 3428.0, 3413.3, 3415.1, 3489.9, 3818.2, 4307.6, 4647.0, 5227.4, 6066.8, 6478.4, 7213.5, 8038.7, 8427.8, 7269.3, 7698.0, 8295.2, 8468, 8614, 8665
    ], "GDP_%_agriculture": [
      //% since 1990
      25.6, 22.8, 20.4, 21.7, 16.2, 15.4, 13.8, 14.4, 14.2, 14.3, 17.1, 16.4, 14.6, 12.1, 11.9, 10.4, 8.7, 7.5, 7.9, 8.3, 8.3, 9.5, 9.1, 10.2, 11.8
    ], "GDP_%_industry": [
      //% since 1990
      44.6, 50.5, 50.9, 37.7, 47.5, 42.7, 38.2, 35.1, 36.1, 38.5, 36.3, 34.7, 34.5, 34.6, 35.9, 32.3, 36.1, 36.7, 33.6, 29.6, 31.3, 29.1, 28.4, 26.2, 25.4
    ], "GDP_%_services": [
      //% since 1990
      29.9, 26.7, 28.7, 40.6, 36.2, 41.9, 48.0, 50.5, 49.6, 47.2, 46.6, 48.9, 50.8, 53.3, 52.2, 57.3, 55.2, 55.8, 58.5, 62.1, 60.4, 61.4, 62.5, 63.6, 62.8
    ], "employment_agriculture": [
      //% since 1990
      19.8, 19.3, 20.8, 20.7, 21.0, 22.5, 21.9, 22.1, 22.6, 22.7, 23.4, 20.9, 20.6, 20.4, 19.7, 19.4, 17.6, 16.7, 15.8, 15.6, null, 16.8, 17.2, null
    ], "employment_industry": [
      //% since 1990
      9.5, 9.1, 8.0, 30.5, 31.7, 28.0, 26.4, 24.6, 23.8, 22.6, 20.8, 26.3, 25.2, 24.6, 24.6, 24.2, 24.2, 23.9, 23.4, 22.4, null, 21.0, 20.7, null
    ], "employment_services": [
      //% since 1990
      15.4, 15.2, 14.7, 14.8, 14.8, 14.0, 14.4, 14.3, 14.0, 14.3, 13.3, 52.8, 54.2, 55.1, 55.7, 56.4, 58.2, 59.4, 60.7, 62.0, null, 62.2, 62.1, null
    ], "trade": {
      //thousands $ since 2002
      "export": [ 17957094.85, 23080187.31, 32672318.23, 34286748.26, 38367704.4, 49248063.6, 66954429.8, 39702883.3, 50744291.2, 67594102.7, 67779842.2, 62305927.3, 53901689.1 ],
      "import": [ 16976834.51, 23020771.01, 28996030.72, 36141094.96, 45034491.1, 60669923.0, 85535356.4, 45435559.2, 60351954.4, 81040530.9, 83135362.0, 75834614.1, 54428716.9 ],
      2013: [
        ['Живі тварини; продукти тваринного походження', 0, 1084105.1, 1892122.8],
        ['Продукти рослинного походження', 0, 8875943.5, 2669782.0],
        ['Жири та олії тваринного або рослинного походження', 0, 3507131.8, 403328.4],
        ['Готові харчові продукти', 0, 3557168.0, 3218803.6],
        ['Мінеральнi продукти', 1, 7494933.0, 22362099.8],
        ['Продукцiя хiмiчної та пов’язаних з нею галузей промисловості', 2, 4327295.8, 8435346.6],
        ['Полімерні матеріали, пластмаси та вироби з них', 2, 787814.4, 4592891.4],
        ['Шкури необроблені, шкіра вичищена', 1, 148917.4, 257421.1],
        ['Деревина і вироби з деревини', 1, 1144395.4, 416010.4],
        ['Маса з деревини або інших волокнистих целюлозних матеріалів', 1, 1246778.7, 1901960.6],
        ['Текстильні матеріали та текстильні вироби', 2, 811128.7, 2434672.9],
        ['Взуття, головнi убори, парасольки', 2, 198737.4, 794905.7],
        ['Вироби з каменю, гiпсу, цементу', 2, 583131.6, 1140777.3],
        ['Перли природні або культивовані, дорогоцінне або напівдорогоцінне каміння', 4, 118413.9, 690298.9],
        ['Недорогоцінні метали та вироби з них', 1, 17570747.8, 5002923.2],
        ['Машини, обладнання та механізми; електротехнічне обладнання', 2, 6975000.3, 12470050.3],
        ['Засоби наземного транспорту, літальні апарати, плавучі засоби', 2, 3344025.0, 5901462.9],
        ['Прилади та апарати оптичні, фотографічні', 2, 296264.1, 1094273.8],
        ['Рiзнi промислові товари', 2, 660972.9, 892139.7],
        ['Послуги', 3, 14836264.2, 7608976.2],
        ['Твори мистецтва', 4, 637.4, 23412.8],
        ['Товари, придбані в портах', 4, 25937.6, 294370.9],
        ['Різне', 4, 552542.5, 74910.0]
      ],
      2014: [
        ['Живі тварини; продукти тваринного походження', 0, 1014473.9, 1124129.2],
        ['Продукти рослинного походження', 0, 8736139.2, 2031639.6],
        ['Жири та олії тваринного або рослинного походження', 0, 3822031.8, 301702.6],
        ['Готові харчові продукти', 0, 3096308.9, 2601785.3],
        ['Мінеральнi продукти', 1, 6103534.8, 16095408.2],
        ['Продукцiя хiмiчної та пов’язаних з нею галузей промисловості', 2, 3054072.6, 6782170.4],
        ['Полімерні матеріали, пластмаси та вироби з них', 2, 586423.1, 3638093.5],
        ['Шкури необроблені, шкіра вичищена', 1, 156684.9, 222670.0],
        ['Деревина і вироби з деревини', 1, 1262640.8, 294518.7],
        ['Маса з деревини або інших волокнистих целюлозних матеріалів', 1, 985583.0, 1289682.3],
        ['Текстильні матеріали та текстильні вироби', 2, 785829.6, 1883342.3],
        ['Взуття, головнi убори, парасольки', 2, 202809.0, 430661.8],
        ['Вироби з каменю, гiпсу, цементу', 2, 479307,8, 801479.4],
        ['Перли природні або культивовані, дорогоцінне або напівдорогоцінне каміння', 4, 161443.7, 296840.0],
        ['Недорогоцінні метали та вироби з них', 1, 15229006.2, 3324372.1],
        ['Машини, обладнання та механізми; електротехнічне обладнання', 2, 5657205.1, 8720756.2],
        ['Засоби наземного транспорту, літальні апарати, плавучі засоби', 2, 1472125.6, 2648153.7],
        ['Прилади та апарати оптичні, фотографічні', 2, 231999.2, 672923.4],
        ['Рiзнi промислові товари', 2, 736271.2, 902112.6],
        ['Послуги', 3, 11520850.7, 6373128.1],
        ['Твори мистецтва', 4, 231.9, 8784.7],
        ['Товари, придбані в портах', 4, 9738.3, 247246.7],
      ]
    }, "investments": {
      //millions $, since 2002
      in:  [ 4406.2, 5339.0, 6657.6, 8353.9, 16375.2, 21186.0, 29489.4, 35723.4, 40026.8, 44708.0, 49362.3, 54462.4, 58156.9, 45916.0 ],
      out: [ 157.5, 143.9, 163.5, 175.9, 218.2, 221.5, 6196.1, 6198.6, 6223.3, 6871.1, 6898.0, 6481.9, 6575.3, 6352.2 ],
    }
  }, "RU": {
    "GDP_PPP_capita": [
      8021.7, 7851.8, 6860.9, 6422.8, 5741.8, 5626.2, 5521.6, 5703.1, 5465.9, 5914.3, 6824.8, 7367.9, 8023.5, 9253.4, 10249.2, 11855.8, 14976.3, 16729.7, 20275.2, 19486.2, 20541.3, 22570.5, 24063, 25033, 25636
    ]
  }, "AZ": {
    "GDP_PPP_capita": [
      5507.8, 5563.5, 4338.2, 3364.0, 2721.7, 2422.6, 2473.7, 2636.6, 2904.1, 3136.0, 3534.3, 3942.0, 4393.8, 4945.7, 5551.1, 7168.7, 9829.6, 12477.3, 13795.3, 14900.0, 15627.7, 15754.2, 16173, 17143, 17516
    ]
  }, "BY": {
    "GDP_PPP_capita": [
      5229.8, 5335.7, 4922.9, 4646.7, 4195.1, 3849.7, 4043.1, 4601.0, 5065.6, 5330.8, 5785.8, 6245.3, 6703.6, 7369.6, 8497.1, 9661.4, 11021.5, 12345.0, 13913.3, 14082.0, 15385.6, 16603.4, 17210, 17651, 18185
    ]
  }, "MD": {
    "GDP_PPP_capita": [
      4152.7, 3594.2, 2604.3, 2637.2, 1866.5, 1888.5, 1826.6, 1894.7, 1791.5, 1758.1, 1839.7, 2000.9, 2195.1, 2393.3, 2647.9, 2944.8, 3190.0, 3381.0, 3722.2, 3530.9, 3831.9, 4179.2, 4225.2, 4692, 4983
    ]
  }, "KZ": {
    "GDP_PPP_capita": [
      8234.9, 7524.8, 7293.6, 6825.5, 6181.2, 5895.3, 6124.8, 6437.0, 6494.3, 6829.9, 7693.2, 8945.9, 9972.9, 11080.3, 12391.2, 13906.3, 15700.5, 17354.1, 18051.3, 17932.9, 19204.8, 20772.1, 21892, 23214, 24205
    ]
  }, "PL": {
    "GDP_PPP_capita": [
      5991.1, 5735.7, 5995.6, 6351.6, 6815.7, 7431.5, 8070.7, 8809.2, 9399.4, 9920.4, 10606.9, 10990.6, 11592.3, 12029.5, 13042.2, 13806.8, 15160.3, 16876.9, 18046.2, 19217.6, 20683.1, 22110.5, 23152, 23994, 24882
    ]
  }, "HU": {
    "GDP_PPP_capita": [
      null, 8240.1, 8173.0, 8328.8, 8768.8, 9097.7, 9396.1, 10046.8, 10768.2, 11222.3, 12081.6, 13617.0, 14885.2, 15573.4, 16375.8, 17215.9, 18592.5, 19252.3, 20742.4, 20878.9, 21480.0, 22737.2, 22494, 23336, 24498
    ]
  }, "US": {
    "GDP_PPP_capita": [
      23954.5, 24405.0, 25493.0, 26464.8, 27776.8, 28782.3, 30068.2, 31572.6, 32949.3, 34620.8, 36449.9, 37273.5, 38166.0, 39677.3, 41921.7, 44307.8, 46437.1, 48061.4, 48401.5, 47001.4, 48377.4, 49803.5, 51457, 52980, 54629
    ]
  }, "AE": {
    "GDP_PPP_capita": [
      74292.1, 73296.9, 73435.9, 72251.6, 74951.8, 77662.7, 79447.5, 82802.8, 79539.9, 78999.1, 85641.2, 85818.3, 86712.0, 92074.4, 95455.1, 91102.7, 87766.1, 78193.6, 70133.2, 59291.1, 55764.9, 56376.8, 58052, 61049, 63497
    ]
  }, "SG": {
    "GDP_PPP_capita": [
      22127.5, 23705.3, 25196.1, 28053.7, 30799.0, 32644.6, 34319.5, 36556.6, 34923.8, 37283.8, 40813.2, 40245.1, 42196.1, 45614.4, 50703.6, 54947.4, 59754.7, 64206.8, 63163.2, 61396.7, 70364.2, 74593.9, 76988, 80295, 82763
    ]
  }, "FR": {
    "GDP_PPP_capita": [
      17593.5, 18306.7, 18940.4, 19168.4, 19923.8, 20670.5, 21300.0, 22247.4, 23348.2, 24250.2, 25997.4, 27431.9, 28504.5, 28058.4, 29013.1, 30377.1, 32304.2, 34009.2, 35144.0, 34941.8, 35873.0, 37312.4, 37258, 37595, 38851
    ]
  }
}

$(function() {
  $(window).on('activate.bs.scrollspy', function (e) {
    var href = $("a[href^='#']", e.target).attr("href")
    history.replaceState({}, "", href);
    $(window).trigger('hashchange');
  })
  $(window).bind('hashchange', function() {
    $(location.hash).trigger('activate.charts');
  });
});
