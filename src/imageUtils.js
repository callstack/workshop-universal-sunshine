/* @flow */

export const getIcon = (code: number) => images(code.toString()).icon;

/* eslint-disable global-require */
const images = (code: string) => {
  switch (code) {
    case '1000': {
      return {
        art: require('./icons/art_clear.png'),
        icon: require('./icons/ic_clear.png'),
      };
    }
    case '1003':
      return {
        art: require('./icons/art_light_clouds.png'),
        icon: require('./icons/ic_light_clouds.png'),
      };
    case '1006':
    case '1009':
      return {
        art: require('./icons/art_clouds.png'),
        icon: require('./icons/ic_cloudy.png'),
      };
    case '1030':
    case '1135':
    case '1147':
      return {
        art: require('./icons/art_fog.png'),
        icon: require('./icons/ic_fog.png'),
      };
    case '1063':
    case '1069':
    case '1150':
    case '1153':
    case '1180':
    case '1183':
    case '1186':
    case '1189':
    case '1198':
    case '1204':
    case '1240':
    case '1249':
    case '1261':
      return {
        art: require('./icons/art_light_rain.png'),
        icon: require('./icons/ic_light_rain.png'),
      };
    case '1066':
    case '1072':
    case '1114':
    case '1117':
    case '1210':
    case '1213':
    case '1216':
    case '1219':
    case '1222':
    case '1225':
    case '1255':
    case '1258':
      return {
        art: require('./icons/art_snow.png'),
        icon: require('./icons/ic_snow.png'),
      };
    case '1087':
    case '1237':
    case '1264':
    case '1273':
    case '1276':
    case '1279':
    case '1282':
      return {
        art: require('./icons/art_storm.png'),
        icon: require('./icons/ic_storm.png'),
      };
    case '1168':
    case '1171':
    case '1192':
    case '1195':
    case '1201':
    case '1207':
    case '1243':
    case '1246':
    case '1252':
      return {
        art: require('./icons/art_rain.png'),
        icon: require('./icons/ic_rain.png'),
      };
    default:
      return {
        art: null,
        icon: null,
      };
  }
};
