'use strict';



//badges
const badgeEl = document.querySelector('.badges')
const toTopEl = document.querySelector('#to-top');
// console.log(badgeEl)
//배지 숨기기 & 보이기
//스크롤 양이 500 이사잉면 처리
window.addEventListener('scroll',_.throttle(()=>{
  console.log(window.scrollY);
  const winScroll = window.scrollY;

  if(window.scrollY >=500){
    // badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간,{옵션들});
    gsap.to(badgeEl,.4,{
      opacity: 0 ,
      display:'none'
    });
    // to-top버튼이 보이게 처리
    gsap.to(toTopEl,.7,{
      opacity:1 ,
      x : 0
    })
  }else{
    gsap.to(badgeEl,.4,{
      opacity:1,
      display:'block'
    });

    gsap.to(toTopEl,.7,{
      opacity:0 ,
      x:100
    })
  }

},300));

//to-top 버튼 클릭시 상단의로 이동
toTopEl.addEventListener('click',()=>{
  gsap.to(window,.5,{
    scrollTo : 0
  })
})

//------------- 순차적으로 visual 안의 이미지 보여주기
// 이미지 fade-in 그룹으로 처리

const fadeInEls = document.querySelectorAll('.fade--in');
// console.log(fadeInEls)

//반복적으로 이미지를 보여준다.(fade--in)
fadeInEls.forEach((fadeEl, idx)=>{
  gsap.to(fadeEl,1,{
    delay :(idx +1)*.7,
    opacity:1
  });
})


//notice swiper 
const swiper = new Swiper('.notice-line .inner__left .swiper',{
  direction : 'vertical',
  autoplay : true,
  loop : true
})

//promotion swiper
const swiper2 =  new Swiper('.promotion .swiper',{
  slidesPerView :3,//보여질 슬라이드 갯수
  spaceBetween : 10,//슬라이드 사이의 여백
  centeredSlides : true,//1번 슬라이드를 가운데 배치
  loop: true,
  autoplay :{
    delay: 5000
  },
  pagination: {
    el :'.promotion .swiper-pagination',
    clickable : true
  },
  navigation :{
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
  }
});

// awards swiper
const swiper3 = new Swiper('.awards .swiper',{
  autoplay :true,
  loop :true,
  spaceBetween :30,
  slidesPerView :5,
  navigation : {
    prevEl : '.awards .swiper-button-prev',
    nextEl : '.awards .swiper-button-next'
  }
})

//토글버튼을 클릭시 promotion 닫힘 & 열림
const promotionEl =document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

console.log(promotionEl, promotionToggleBtn)

let isHidePromtion = false;

promotionToggleBtn.addEventListener('click',()=>{
  isHidePromtion= !isHidePromtion;
  // console.log(isHidePromtion);
  if(isHidePromtion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});





//유튜브 위 이미지 추가 애니메이션효과

//범위 내의 숫자를 랜덤함수를 활용하여 처리
//random 함수 인자 최소값, 최대값

function random(min, max){
  //tofixed()
  return parseFloat( (Math.random() * (max - min) + min).toFixed(2) );
}

//gsap으로 애니메이션
//gsap.top(요소, 시간, {옵션들})
const floating1 = document.querySelector('.floating1');

function floatingObject(selector, delay, size){
  gsap.to(selector , 4 , {
    y : size,
    repeat : -1, //무한반복, 자바스크립트에서 지원
    yoyo : true, //한번 재생한 애니메이션을 다시실행
    ease : Power1.easeInOut, //gsap에서 제공하는 easing
    delay :random(0, delay) 
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// scrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(spyEl =>{
  new ScrollMagic
    .Scene({
      //보여질 여부를 검사할 요소 지정
      triggerElement : spyEl,
      //화면의 높이를 0에서 1이라고 보고 0.8 위치에 적용
      //기능이 걸려있는 부분(실행위치), 각각의 클래스
      triggerHook : .8
    })
    //show 클래스 추가/삭제
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller());
});

// console.log(spyEls)




//to-top 버튼을 클릭하면 문서의 상단으로 이동
//gsap에서 모든 기능들을 구현한다면
//로딩 시간등의 무거운 사이트가 된다.
//이를 보완하기 위해 별도 기능별로 구분
//gasp의 scrollToPlugin을 사용해야 한다.
//window 이빈트에 적용










