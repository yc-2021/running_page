// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoieWlob25nMDYxOCIsImEiOiJja2J3M28xbG4wYzl0MzJxZm0ya2Fua2p2In0.PNKfkeQwYuyGOTT_x9BJ4Q';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) =>
  `我用  Nike Run Club 记录自己跑步 ${yearLength} 年了，下面列表展示的是 ${year} 的数据。`;
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `Running Journey with ${yearLength} Years, the table shows year ${year} data.`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = 'If you cannot do great things, do small things in a great way';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '1全程马拉松' : '1Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '2半程马拉松' : '2Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '3清晨跑步' : '3Morning Run';
const LUNCH_RUN_TITLE = IS_CHINESE ? '4上午跑步' : '4Lunch Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '5午后跑步' : '5Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '6傍晚跑步' : '6Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '7夜晚跑步' : '7Night Run';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  LUNCH_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  IS_CHINESE,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
};

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';