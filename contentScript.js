const enableCC = () => {};

document.ewatch = [];
watchEle = (tagName, callback) => {
  var ii = document.ewatch.length;
  document.ewatch[ii] = {};
  var we = {
    watch_id: ii,
    ele: document.getElementsByTagName(tagName)[0],
  };
  we.fun = callback;
  we.old = we.ele.innerHTML;
  we.watch_code = function () {
    var tagName = ii;
    var ee = document.ewatch[tagName];
    var new1 = ee.ele.innerHTML;
    if (new1 != ee.old) {
      we.fun(ee.old, new1);
      ee.old = new1;
      document.ewatch[tagName] = ee;
    }
  };
  document.ewatch[ii] = we;
  return {
    start: () => {
      we.interval = setInterval(we.watch_code, 100);
    },
    stop: () => {
      try {
        clearInterval(we.interval);
      } catch (e) {}
    },
  };
};

(() => {
  var e1 = watchEle("body", (oldc, newc) => {
    if (newc.includes("<iframe")) {
      document.getElementsByTagName("button")[9].click();

      var e2 = watchEle("body", (oldc, newc) => {
        if (newc.includes("<li")) {
          const activate_cc = document.getElementsByTagName("li")[5];
          if (activate_cc.innerText === "Ativar legendas") {
            activate_cc.click();
          }
          e2.stop();
        }
      });
      e2.start();

      e1.stop();
    }
  });
  e1.start();
})();
