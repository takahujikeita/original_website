//Splideの実装

$('#slider').slick({
    autoplay: true,         //自動再生
    autoplaySpeed: 0,       //自動再生のスピード
    speed: 7000,            //スライドスピード
    slidesToShow: 4,        //スライドの表示枚数
    cssEase: "linear",      //スライドの動きを等速に
    pauseOnHover: false,    //ホバーしても止まらないように
    pauseOnFocus: false,    //フォーカスしても止まらないように
});

//ハンバーガーメニューの実装
const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納

ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
    ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
});