let header = document.querySelector('ul')

window.onscroll = function(){
    if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30){
        header.style.backgroundColor = 'white'
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
}