//DOM
const touches = [...document.querySelectorAll('.bouton')];
 //console.log(touches);
const listkeycode = touches.map(touche => touche.dataset.key);
//console.log(listkeycode);
const ecran = document.querySelector(' .ecran');
document.addEventListener('keydown', (e )=> {

const val = e.keyCode.toString();
//console.log(val, typeof val)
calcul(val)

})


document.addEventListener('click', (e) => {
  const val = e.target.dataset.key;
  calcul(val)
   //console.log(val)
}) 


const calcul = (val) => {
  if(listkeycode.includes(val)){
     //console.log(listkeycode)
     switch (val){                                                              
        case '8':
           ecran.textContent= "";
           break;
             
           case '13':
             const sommes = eval(ecran.textContent);
             ecran.textContent = sommes;
             break;

            case '53':
               ecran.textContent=ecran.textContent.slice(0,ecran.textContent.length-1);
               break;

            case '219':
               ecran.textContent= ""+Math.sqrt(ecran.textContent);
               break;

             default:
                const indexkeycode = listkeycode.indexOf(val);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;
     }
  }
}

window.addEventListener('error' , (e) => {
    alert('Ou fe yon ere nan kalkil la :' + e.message)


})

