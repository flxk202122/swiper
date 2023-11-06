//setInterval, animate, css, appendTo
//setInterval(function () { }, 3000)
//$(태그).animate({}, speed, function () { })
//$(태그).css(스타일,스타일값)
//$(옮길태그).appendTo($(부모가될 태그))


// $(document).ready(function () {
//     const aniw = $(".swiper-slide").height();//$(".swiper-wrapper").css("width");

//     setInterval(function () {
//         $(".swiper-wrapper").animate({ "marginTop": -aniw }, 400, function () {
//             $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
//             $(".swiper-wrapper").css("marginTop", 0)
//         })
//     }, 3000)
// })



// $(document).ready(function () {

//     let count = 0;
//     let leng = $(".swiper-slide").length;
//     //콜백함수. (함수만들어옴, 초)
//     setInterval(fadeani, 3000)


//     function fadeani() {//선언적 함수 먼저 해석
//         count++;
//         count = count % leng
//         $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
//     }
// })


$(document).ready(function () {
    let count = 0;
    const leng = $(".swiper-slide").length
    setInterval(fadeani, 3000)

    function fadeani() {
        count++;
        count = count % leng
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
    }
})