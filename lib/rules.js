/**
 * 规则
 */

// 设备检测规则
const DEVICES = [
    ['ipad', 'ipad'],
    // ipod要放在iphone 之前。
    ['ipod', 'ipod'],
    ['iphone', /\biphone\b|\biph(\d)/],
    ['xiaomi', /(?:mi |redmi |hm )(?:note )?(?:([a-z0-9]+))?/],
    ['huawei', /(?:huawei|honor)(?: ([_\-a-z0-9]+))?/],
    ['samsung', /(?:samsung|sm-|gt-)([0-9a-z]+)/],
    ['oppo', /\boppo(?: ([a-z0-9]+))?/],
    ['vivo', /\bvivo(?: ([a-z0-9]+))?/],
    ['zte', /\bzte(?: ([a-z0-9]+))?/],
    ['htc', /\bhtc(?: ([a-z0-9]+))?/],
    ['meizu', /(\bm([0-9cx]{1,4})\b)|(\bmeizu[\/ ]([a-z0-9]+)\b)/],
    ['lenovo', /\b(lenovo|zuk)(?: ([a-z0-9]+))?/],
    ['coolpad', /\bcoolpad[_ ]?([a-z0-9]+)/],
    ['lg', /\blg([a-z0-9]+)/],
    ['chuizi', /\bsm([0-9]+)/],
    ['jianguo', /\bod([0-9]+)/],
    // 兜底儿
    ['android', /\bandroid\b|\badr\b/],
];

const OS = [
    ['ios', function (ua) {
        if (/\bcpu(?: iphone)? os /.test(ua)) {
            return /\bcpu(?: iphone)? os ([0-9._]+)/;
        } else if (ua.indexOf('iph os ') !== -1) {
            return /\biph os ([0-9_]+)/;
        } else {
            return /\bios\b/;
        }
    }],
    ['android', function (ua) {
        if (ua.indexOf('android') >= 0) {
            return /\bandroid[ \/-]?([0-9.x]+)?/;
        } else if (ua.indexOf('adr') >= 0) {
            if (ua.indexOf('mqqbrowser') >= 0) {
                return /\badr[ ]\(linux; u; ([0-9.]+)?/;
            } else {
                return /\badr(?:[ ]([0-9.]+))?/;
            }
        }
        return 'android';
    }]
];

const ENGINE = [
    ['edgehtml', /edge\/([0-9.]+)/],
    ['trident', /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/],
    ['blink', function () {
        return 'chrome' in window && 'CSS' in window && /\bapplewebkit[\/]?([0-9.+]+)/;
    }],
    ['webkit', /\bapplewebkit[\/]?([0-9.+]+)/],
    ['gecko', function (ua) {
        const match = ua.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/);
        if (match) {
            return {
                version: match[1] + '.' + match[2],
            };
        }
    }],
    ['presto', /\bpresto\/([0-9.]+)/],
    ['androidwebkit', /\bandroidwebkit\/([0-9.]+)/],
    ['coolpadwebkit', /\bcoolpadwebkit\/([0-9.]+)/],
    ['u2', /\bu2\/([0-9.]+)/],
    ['u3', /\bu3\/([0-9.]+)/],
];

const BROWSER = [
    ['shoubai', /\bbaiduboxapp([0-9.]+)?/],
    ['weixin', /\bmicromessenger\/([\d.]+)/],
    ['qq', /\bm?qqbrowser\/([0-9.]+)/],
    ['baidu', /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],
    ['mi', /\bmiuibrowser\/([0-9.]+)/],
    ['opera', function (ua) {
        const re_opera_old = /\bopera.+version\/([0-9.ab]+)/;
        const re_opera_new = /\bopr\/([0-9.]+)/;
        return re_opera_old.test(ua) ? re_opera_old : re_opera_new;
    }],
    ['oupeng', /\boupeng\/([0-9.]+)/],
    // UC放在Android前。
    ['uc', function (ua) {
        if (ua.indexOf('ucbrowser/') >= 0) {
            return /\bucbrowser\/([0-9.]+)/;
        } else if (ua.indexOf('ubrowser/') >= 0) {
            return /\bubrowser\/([0-9.]+)/;
        } else if (/\buc\/[0-9]/.test(ua)) {
            return /\buc\/([0-9.]+)/;
        } else if (ua.indexOf('ucweb') >= 0) {
            return /\bucweb([0-9.]+)?/;
        } else {
            return /\b(?:ucbrowser|uc)\b/;
        }
    }],
    ['oppobrowser', /\boppobrowser\/([0-9.]+)/],
    ['chrome', / (?:chrome|crios|crmo)\/([0-9.]+)/],
    // Android需要在safari之前。
    ['android', function (ua) {
        if (ua.indexOf('android') === -1) { return; }
        return /\bversion\/([0-9.]+(?: beta)?)/;
    }],
    ['safari', /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
    // 如果不能被识别为 Safari，则猜测是 WebView。
    ['webview', /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],
    ['firefox', /\bfirefox\/([0-9.ab]+)/],
    ['nokia', /\bnokiabrowser\/([0-9.]+)/],
];

export default {
    device: DEVICES,
    os: OS,
    browser: BROWSER,
    engine: ENGINE
}