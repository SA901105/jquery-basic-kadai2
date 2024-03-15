$(function() {

  // 「こんにちは！」の文字色を赤色に変換する
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });

  // 「こんにちは！」の文字色を黒にし、テキストを「Hello!」に変換する
  $('#change-text').on('click', function() {
    $('#target').css('color', 'black');
    $('p').text('Hello!').val();
  });

  // 「こんにちは！」の文字を５秒間かけてフェードアウトし、アラートを出す
  $('#fade-out').on('click', function() {
    $('#target').fadeOut(5000, function(){
      alert('フェードアウト完了')
    });
  });

  // 「こんにちは！」の文字を３秒間かけてフェードインし、アラートを出す
  $('#fade-in').on('click', function() {
    $('#target').fadeIn(3000, function(){
      alert('フェードイン完了')
    });
  });

});