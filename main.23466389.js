parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var n={"https://api.soapboxlabs.com/":null,"https://config.uca.cloud.unity3d.com/":null,"https://cdp.cloud.unity3d.com/":null,"https://api.gamerize-dictionary.site/":null};function e(){for(var e in n)t(e)}function t(e){if(e){fetch(e,{method:"HEAD"}).then(function(t){n[e]="✅",i()}).catch(function(t){t>200&&t<499?(n[e]="✅",i()):(n[e]="❌",i())})}}function i(){var e=document.getElementById("URL");e.innerHTML="";var t=(o=e.createTHead().insertRow()).insertCell(0),i=o.insertCell(1);for(var l in t.innerHTML="Urls",i.innerHTML="Is accessible",n){var o;t=(o=e.insertRow()).insertCell(0),i=o.insertCell(1);t.innerHTML=l,i.innerHTML=n[l],console.log(n[l])}}e();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.23466389.js.map