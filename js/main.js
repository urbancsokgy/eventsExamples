// p click esemény
(function pEvent(){
    const pText=document.querySelector('.txt');
    pText.addEventListener('click', ()=>{
        //pText.innerHTML='Clicked';
        pText.textContent='Klikkeltem';
    })
})();
// Gombok eseménye
(function btnEvent(){
    const BtnNode=document.querySelectorAll('.btn');
    const targetP=document.querySelector('#target');
    const inputX=document.querySelector('#text__x');
    const inputY=document.querySelector('#text__y');
    //console.log(BtnNode);
    //Node-ból tömb
    /* const BtnArray=Array.from(BtnNode);
    console.log(BtnArray); */

    BtnNode.forEach(element => {
        element.addEventListener('click', (event)=>{
        // element.textContent='Húúú';
            //console.log(event);
        targetP.innerHTML='A kattintás célja: '+ event.target.textContent
             +'<br>'+ event.target;
        inputX.value=event.clientX;
        inputY.value=event.clientY;
            
        })
    });
})();

// For cikluissal eseménykezelő -- mousemove
(function btnEvent1(){
    const BtnNode1=document.querySelectorAll('.btn');
    const BtnArray=Array.from(BtnNode1);
    for (let i = 0; i < BtnArray.length; i++) {
        BtnArray[i].addEventListener('mouseenter', ()=>{
            //console.log('Siker');
            BtnArray[i].style.background='red';
            BtnArray[i].textContent=('Gomb '+ (i+1));

        });        
}})(); 

// Div-es példa
(
    function(){
        const divs=document.querySelectorAll('.first, .second, .third');
        divs.forEach(element => {
            element.addEventListener('click', (event)=>{
                element.innerHTML+=event.currentTarget;
                element.innerHTML+='tagName '+element.tagName;
                element.innerHTML+='className '+event.currentTarget.className;
                console.log(event.currentTarget);
            })
        });
    }
)();