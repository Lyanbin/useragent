/**
 * 探测器
 */
import Rule from './rules';

const userAgent = navigator.userAgent || '';
const appVersion = navigator.appVersion || '';
const vendor = navigator.vendor || '';

const ua = `${userAgent} ${appVersion} ${vendor}`


class Index {

     constructor (rules) {
        this._rules = rules;
     }

     parse(ua) {
         ua = (ua || '').toLowerCase();

         const d = {};


         return d;
     }
 }

export default new Index();