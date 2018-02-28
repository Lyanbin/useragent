/**
 * 探测器
 */
import Rule from './rules';

const userAgent = navigator.userAgent || '';
const appVersion = navigator.appVersion || '';
const vendor = navigator.vendor || '';

const ua = `${userAgent} ${appVersion} ${vendor}`


class Index {

 }

export default new Index();