import "styles/style.scss";
import debounce from "lodash/debounce";
import setRootFontSize from "./rem.js";

const userAgent = navigator.userAgent;
const vendor =
  navigator.userAgentData && navigator.userAgentData.vendor
    ? navigator.userAgentData.vendor
    : navigator.vendor;

// 檢查是否是iOS設備
const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

// 檢查是否是Android設備
const isAndroid = /Android/.test(userAgent) && !window.MSStream;

// 檢查是否是Chrome瀏覽器
const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(vendor);

// 檢查是否是Safari瀏覽器
const isSafari = /Safari/.test(userAgent) && /Apple Computer/.test(vendor);

// 定義一個將class名稱添加到外容器的函數
const addRootClass = (className) => {
  document.querySelector("#app").classList.add(className);
};

// 根據當前用戶端的設備和瀏覽器類型，動態地添加class名稱到外容器中
if (isIOS) {
  addRootClass("is-ios");
} else if (isAndroid) {
  addRootClass("is-android");
}
if (isChrome) {
  addRootClass("is-chrome");
} else if (isFirefox) {
  addRootClass("is-firefox");
} else if (isSafari) {
  addRootClass("is-safari");
}

// 動態rem處理
document.addEventListener("DOMContentLoaded", () =>
  setRootFontSize(document, window)
);

const debouncedSetRootFontSize = debounce(
  () => setRootFontSize(document, window),
  10
);
window.addEventListener("resize", debouncedSetRootFontSize);
window.addEventListener("orientationchange", debouncedSetRootFontSize);