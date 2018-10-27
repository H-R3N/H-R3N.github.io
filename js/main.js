/* ------------------------------------------------------------
Language Change Botton
------------------------------------------------------------ */

let langChgBtn = document.getElementById("langChgBtn");
let langJa = document.getElementsByClassName("ja");
let langEn = document.getElementsByClassName("en");
let lang = document.getElementById("lang");
if (!langChgBtn.checked) {
    lang.textContent = "JP";
    for (let item of langEn) {
        item.style = "display: none; ";
    }
}

let langChg = () => {
    if (langChgBtn.checked) {
        lang.textContent = "EN";
        for (let item of langJa) {
            item.style = "display: none; ";
        }
        for (let item of langEn) {
            item.style = "";
        }
    } else {
        lang.textContent = "JP";
        for (let item of langEn) {
            item.style = "display: none; ";
        }
        for (let item of langJa) {
            item.style = "";
        }
    }
}

/* ------------------------------------------------------------
Scroll Event
------------------------------------------------------------ */

// 直前のスクロール量を保存する変数を定義する
let prevScrollTop = 0;

/* ------------------------------
Global Navigation Acting
------------------------------ */

// onScroll1 イベントリスナー
let onScroll1 = (event) => {
    // scrollTop : スクロール量を取得する
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 指定idのHTML要素を取得する
    let gNav = document.getElementById("gNav");
    let top = document.getElementById("top");
    // offsetHeight : 要素の高さを取得
    let gNavPos = top.offsetHeight - gNav.offsetHeight;
    if (prevScrollTop < scrollTop) {
        if (scrollTop > gNavPos) {
            gNav.className = "gNav show flex fixed";
        }
    } else {
        if (scrollTop < gNavPos) {
            gNav.className = "gNav hide flex fixed";
        }
    }
}

/* ------------------------------
Back to Top Botton Acting
------------------------------ */

// onScroll2 イベントリスナー
let onScroll2 = (event) => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let toTop = document.getElementById("toTop");
    let top = document.getElementById("top");
    let toTopPos = top.offsetHeight - 1;
    // 下へスクロールしたか判定
    if (prevScrollTop < scrollTop) {
        // スクロール量がtoTopPosを上回ったか判定
        if (scrollTop > toTopPos) {
            // クラス名を追加
            toTop.className = "toTop fixed show";
        }
    }
    // 上へスクロールしたか判定    
    else {
        if (scrollTop < toTopPos) {
            toTop.className = "toTop fixed hide";
        }
    }
    // スクロール量を保持する. 他のスクロールイベントのスクロール判定にも反映される.
    prevScrollTop = scrollTop;
}

/* ------------------------------
Add Scroll Event Listeners
------------------------------ */

window.addEventListener("scroll", onScroll1, false);
window.addEventListener("scroll", onScroll2, false);

/* ------------------------------------------------------------
Smooth Scroll
------------------------------------------------------------ */



/* ------------------------------------------------------------
Click Event
------------------------------------------------------------ */

let thumbs = document.querySelectorAll(".thumb");

/* ------------------------------
Large Image on Overlay
------------------------------ */
let largeImg = document.getElementById("largeImg");

// event : イベントオブジェクトパラメータ = イベントに関する様々なプロパティを持つ
let onImgClick1 = (event) => {
    // .target : イベントが発生したタグを表すオブジェクト
    let imgTag = event.target;
    // .getAttribute("") : 指定した属性の値を取得する
    let largeImgPath = imgTag.getAttribute("data-largeImg");
    // .setAttribute("arg1", arg2) : arg1の属性とarg2の属性値を付与する
    largeImg.setAttribute("src", largeImgPath);
    largeImg.className = "largeImg active";
    console.log("onImgClick1 was run.");
}

/* ------------------------------
Overlay
------------------------------ */

let blurUnderOverlay = document.getElementById("blurUnderOverlay");
let overlay = document.getElementById("overlay");

let onImgClick2 = (event) => {
    blurUnderOverlay.className = "blurUnderOverlay active";
    overlay.className = "overlay active";
    console.log("onImgClick2 was run.");
}

// onImgClickイベントリスナー
for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", onImgClick1, false);
    thumbs[i].addEventListener("click", onImgClick2, false);
}

/* ------------------------------
Overlay Close
------------------------------ */

let onImgClick3 = (event) => {
    blurUnderOverlay.className = "blurUnderOverlay";
    overlay.className = "overlay";
    largeImg.className = "largeImg";
    console.log("onImgClick3 was run.");
}

overlay.addEventListener("click", onImgClick3, false);
largeImg.addEventListener("click", onImgClick3, false);

/* ------------------------------
Photo Slider
------------------------------ */
