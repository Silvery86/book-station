'use strict';
!(function () {
  var n,
    e,
    s,
    t = $('.speech-to-text');
  t.length &&
    null != (n = n || webkitSpeechRecognition) &&
    ((e = new n()),
    (s = !1),
    t.on('click', function () {
      const t = $(this);
      !(e.onspeechstart = function () {
        s = !0;
      }) === s && e.start(),
        (e.onerror = function (n) {
          s = !1;
        }),
        (e.onresult = function (n) {
          t.closest('.form-send-message')
            .find('.message-input')
            .val(n.results[0][0].transcript);
        }),
        (e.onspeechend = function (n) {
          (s = !1), e.stop();
        });
    }));
})();