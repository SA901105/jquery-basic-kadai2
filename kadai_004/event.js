$(function() {
  $(window).on({
  // HTMLドキュメントが読み込まれたときのイベント
  'load': () => {
    console.log('loadイベントが発生しました');
  },

  // 画面をスクロールしたときのイベント
  'scroll': () => {
    console.log('scrollイベントが発生しました');
  },
});
});