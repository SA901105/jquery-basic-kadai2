// HTMLドキュメントが読み込まれたときに「loadイベントが発生しました」とコンロールに表示
$(window).on('load', function(){
  console.log('loadイベントが発生しました');
});

// 画面をスクロールしたときに「'scrollイベントが発生しました'」とコンソールに表示する
$(function() {
$(window).on('scroll', (e) =>{
  console.log('scrollイベントが発生しました');
});
});