'use strict'

{
  //Slideshowに入る画像を格納
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
  ];

  //メイン画像に描画されるimagesのindexを指定する変数
  //初期値は0を設定
  let currentIndex = 0;
  //htmlのimg要素
  const slideImage = document.getElementById('slide-image');
  //次の画像に切り替えるボタン要素
  const nextBtn = document.getElementById('next-btn');
  //前の画像に切り替えるボタン要素
  const prevBtn = document.getElementById('prev-btn');
  //Slideshowをスタートさせるボタン要素
  const startBtn = document.getElementById('start-btn');
  //Slideshowをストップさせるボタン要素
  const stopBtn = document.getElementById('stop-btn');

  //画像を1つ次に進める処理
  function nextSlide() {
    currentIndex++;
    // if (currentIndex > images.length - 1) currentIndex = 0; //もしcurrentIndexの値が用意された配列番号の値を超えてしまったら、0に戻す
    if ( currentIndex === 3 )  currentIndex = 0; //これでも可能
    slideImage.src = images[currentIndex]; //img要素のsrc属性を決定
  }
  //画像を1つ前に戻す処理
  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0)currentIndex = images.length -1; 
    slideImage.src = images[currentIndex]; 
  }

  // クリックしたら次の画像に切り替える処理
  nextBtn.addEventListener('click', nextSlide);
  // クリックしたら前の画像に切り替える処理
  prevBtn.addEventListener('click', prevSlide);

  //setTimeoutを止めるための変数
  let intervalId;
  
  //画像を1秒ごとに切り替える処理
  function startSlide() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    nextBtn.disabled = true;
    prevBtn.disabled = true;

    intervalId =  setInterval(nextSlide, 1000);
  }
  //クリックしたらSlideshowをスタートする処理
  startBtn.addEventListener('click', startSlide);

  function stopSlide() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    nextBtn.disabled = false;
    prevBtn.disabled = false;
    
    clearInterval(intervalId);
  }

  //クリックしたらSlideshowをストップする処理
  stopBtn.addEventListener('click', stopSlide);
}
