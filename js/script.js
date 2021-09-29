// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生（falseで自動再生なし）
  autoPlay : true,
  // 自動再生時のスライド切替間隔（ミリ秒）
  autoPlayDuration : 3000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false,
});


$(".slider").slick({
  //次のスライド表示
  centerMode: true,
  //表示スライドの余白
  centerPadding: '10%',
  //インジケーター表示
  dots: true,
  //自動再生
  autoplay: true,
  //自動再生速度
  autoplaySpeed: 3000,
  //フェードアニメーションの速度
  speed: 1000,
  //スライドのループ
  infinite: true,
});



// $('.slider').slick({
//   // 自動再生を設定
//   autoplay:true,
//   // スライド切り替えの時間を設定
//   autoplaySpeed: 3000,
//   // インジケーターを表示
//   dots:true
// });