const items = document.querySelectorAll('.port-m .slide02 .slide-wrap .slide')
const close = document.querySelector('button')
const popUp = document.querySelector('.pop-up')

items.forEach((el, index) => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('video').play();
    })
    el.onmouseleave = () => {
        el.querySelector('video').pause();
        el.querySelector('video').currentTime = '0'
    }

    // el.addEventListener('click', (e) => {
    //     let videoSrc = e.currentTarget.querySelector('video').
    //     getAttribute('src')

    //     popUp.querySelector('video').setAttribute('src', videoSrc)
    //     popUp.classList.add('active')
    //     popUp.querySelector('video').play()
    // })

})




$(function(){
    const button = $('.about .button')//more버튼
    const about = $('.about') //해당화면
    const popUp = $('.about .about-more')//about팝업
    const close = $('.about button')//close버튼
    
    button.click(function(){
        popUp.addClass('active')
        about.addClass('on')
    })
    close.click(function(){
        popUp.removeClass('active')
        about.removeClass('on')
    })
})