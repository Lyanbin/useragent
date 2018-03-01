/**
 * 探测器
 */
import Rule from './rules';
import Detector from './detector';

const userAgent = navigator.userAgent || '';
const appVersion = navigator.appVersion || '';
const vendor = navigator.vendor || '';

let ua = `${userAgent} ${appVersion} ${vendor}`

ua = 'Mozilla/5.0 (Linux; Android 7.1.1; OPPO R11 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043508 Safari/537.36 MicroMessenger/6.5.13.1100 NetType/4G Language/zh_CN	';

const detector = new Detector(Rule);

const d = detector.parse(ua);


export default d;
