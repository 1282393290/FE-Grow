function getCookie(name) {
    let cookie = document.cookie;
    let i = cookie.indexOf(name);
    if(i==-1) {
        return null;
    } else {
        let starti = i + name.length;
        let endi = cookie.indexOf(';',starti);
        if(endi === -1) {
            return cookie.slice(starti);
        } else {
            return cookie.slice(starti, endi)
        }
    }
}
function setCookie(cookiename, value, date) {
    document.cookie = cookiename + '=' + value + ';expires=' + date.toGMTString();
}