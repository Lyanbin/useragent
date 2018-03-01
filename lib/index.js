/**
 * 探测器
 */
import Rule from './rules';
import Detector from './detector';

const userAgent = navigator.userAgent || '';
const appVersion = navigator.appVersion || '';
const vendor = navigator.vendor || '';

const ua = `${userAgent} ${appVersion} ${vendor}`

const detector = new Detector(Rule);

const d = detector.parse(ua);


export default d;
