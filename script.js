function onload() {
    // create reference to html
    const btn=document.querySelector('#navbutton')
    const nav=document.querySelector('.navigation')
    //make button clickable
    btn.addEventListener('click',function(){
        //if navigation opne 
        if(nav.classList.contains('open')){
            //open it
            nav.classList.remove('open')
        }
        //ifnavihgation is not open
        else {
            //open it 
            nav.classList.add('open')
        }
    })
}
//wait for document to load
window.addEventListener('load' , onload)