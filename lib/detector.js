/**
 * 探测器
 */

export default class Detector {

    constructor(rules) {
        this._rules = rules;
    }

    detect(name, expression, ua) {
        const expr = typeof expression === 'function' ? expression(ua) : expression;
        const info = {
            name: '',
            version: '',
        }
        if (!expr) {
            return info;
        }
        if (Object.prototype.toString.call(expr) === '[object RegExp]') {
            const m = expr.exec(ua);
            if (m) {
                info.name = name;
                if (m.length >= 2 && m[1]) {
                    info.version = m[1].replace(/_/g, ".");
                }
                return info;
            }
        }
        if (Object.prototype.toString.call(expr) === '[object Object]') {
            if (expr.hasOwnProperty("version")) {
                info.version = expr.version;
                info.name = name;
            }
            return info;
        }
        if (Object.prototype.toString.call(expr) === '[object String]') {
            if (ua.indexOf(expr) > -1) {
                info.name = name;
            }
            return info;
        }

    }

    getDevice(ua, patternArray) {
        for (let index = 0; index < patternArray.length; index++) {
            let deviceInfo = this.detect(patternArray[index][0], patternArray[index][1], ua);
            if (deviceInfo && deviceInfo.name) {
                return deviceInfo;
            }
        }
        return null;
    }

    getOs(ua, patternArray) {
        for (let index = 0; index < patternArray.length; index++) {
            let osInfo = this.detect(patternArray[index][0], patternArray[index][1], ua);
            if (osInfo && osInfo.name) {
                return osInfo;
            }
        }
        return null;
    }

    getEngine(ua, patternArray) {
        for (let index = 0; index < patternArray.length; index++) {
            let engineInfo = this.detect(patternArray[index][0], patternArray[index][1], ua);
            if (engineInfo && engineInfo.name) {
                return engineInfo;
            }
        }
        return null;
    }

    getBrowser(ua, patternArray) {
        for (let index = 0; index < patternArray.length; index++) {
            let browserInfo = this.detect(patternArray[index][0], patternArray[index][1], ua);
            if (browserInfo && browserInfo.name) {
                return browserInfo;
            }
        }
        return null;
    }

    parse(ua) {
        ua = (ua || '').toLowerCase();
        const d = {};
        d.device = this.getDevice(ua, this._rules.device)
        d.os = this.getOs(ua, this._rules.os)
        d.engine = this.getEngine(ua, this._rules.engine)
        d.browser = this.getBrowser(ua, this._rules.browser)
        return d;
    }
}