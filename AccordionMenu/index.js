let sayac = 0;
document.querySelector('body .accordion').addEventListener('click',accordion)


function accordion(){
    sayac++;
    if(sayac == 1){
    document.querySelector('body .accordion i').style.transition = '0.50s'
    document.querySelector('body .accordion i').style.transform = 'rotate(45deg)'
    document.querySelector('.accordionBar').style.display = 'block'
    }
    else if(sayac == 2){
    document.querySelector('body .accordion i').style.transform = 'rotate(0deg)'
    document.querySelector('.accordionBar').style.display = 'none'
    sayac = 0;
    }
}