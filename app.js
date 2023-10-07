gsap.from('.box_1', {
    delay: .7,
    duraction: .7,
    opacity: 0,
    y: -60
})

$(window).scroll(function() {
    if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50 ){
        $('.box_2').css('transform','translateX(0)')
        $('.box_2').css('opacity', '1')
    }
    else{
        $('.box_2').css('transform','translateX(100)')
        $('.box_2').css('opacity', '0') 
    }
})


$(window).scroll(function() {
    if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150 ){
        $('.box_3').css('transform','translateX(0)')
        $('.box_3').css('opacity', '1')
    }
    else{
        $('.box_3').css('transform','translateX(-100)')
        $('.box_3').css('opacity', '0') 
    }
})

$(window).scroll(function() {
    if(document.documentElement.scrollTop > 250 || document.body.scrollTop > 250 ){
        $('.box_4').css('transform','scale(1)')
        $('.box_4').css('opacity', '1')
    }
    else{
        $('.box_4').css('transform','scale(.7)')
        $('.box_4').css('opacity', '0') 
    }
})

$(window).scroll(function() {
    if(document.documentElement.scrollTop > 350 || document.body.scrollTop > 350 ){
        $('.box_5').css('transform','rotate(0deg)')
        $('.box_5').css('opacity', '1')
    }
    else{
        $('.box_5').css('transform','rotate(30deg)')
        $('.box_5').css('opacity', '0') 
    }
})

$(window).scroll(function() {
    if(document.documentElement.scrollTop > 500 || document.body.scrollTop > 500 ){
        $('.box_6').css('transform','rotate(0deg)')
        $('.box_6').css('opacity', '1')
    }
    else{
        $('.box_6').css('transform','rotate(-30deg)')
        $('.box_6').css('opacity', '0') 
    }
})

$(window).scroll(function() {
    if(document.documentElement.scrollTop > 700 || document.body.scrollTop > 700 ){
        $('.box_7').css('transform','skew(0deg)')
        $('.box_7').css('opacity', '1')
    }
    else{
        $('.box_7').css('transform','skew(50deg)')
        $('.box_7').css('opacity', '0') 
    }
})