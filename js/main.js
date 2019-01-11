// récupérer les cases
let cases = document.querySelectorAll('.case');
cases = Array.from(cases);
let choice =  0;



function add(){
    choice++;
    return choice % 2 === 0 ? '0' : 'X';

}


cases.forEach(item => item.addEventListener('click',function(){
    
    if(item.textContent)return;
    item.textContent = add();
}))
   

