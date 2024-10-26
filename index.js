const correctAnswers=['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y'];

const form=document.querySelector('.question-form');
const result=document.querySelector('.result');
const success=document.getElementById('successMessage');
const button=document.querySelector('.btn');
const answers=document.querySelector('.answers');
const ul=document.querySelector('.list');

form.addEventListener('submit',e=>{
    // for prevent refresh
    e.preventDefault();

    let score=0;
    // kullanıcının verdiği cevapları form.name.value yardımıyla userAnswers adlı değişkende tutuyoruz.
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    console.log(userAnswers);
    // const check=document.querySelectorAll('.form-check-label');
    
    // CEVAPLARI BİR DİZİYE BASTIK VE ORDAN ÇEKİP HTML'E BASIYORUZ
    const kamer=['1-Isaac Newton','2-Albert Einstein','3-Sadi Carnot','4-Rudolf Clasius','5-Alexander Graham Bell','6-John Logie Baird','7-Aristoteles','8-Charles Babbage','9-Heisenberg','10-James Prescott Joule'];
    const list=document.createElement('li');
    
    kamer.forEach(e=>{
      ul.innerHTML+=`<li>${e}</li>`;
    })
    
    // console.log(check[0]);
    answers.classList.remove('d-none');
    // for(i=0;i<check.length;i++){
    //    answers.innerHTML+=`<li>${check[i]}</li>`;
          
    // }
    // check.forEach(e=>{
    //     li.textContent+='<li>${e}</li>';
    // })
    
  
  

    userAnswers.forEach((answer,index)=>{
          if(answer===correctAnswers[index]){
              score+=10;
          }
    })
    if(score<=100){
         // successMessage
    
      button.setAttribute('disabled','');
    }
    if(score==100){
        success.classList.remove('d-none');
    }
    
    result.classList.remove('d-none');
    let point=0;
    const bass=setInterval(()=>{
        result.querySelector('span').textContent=`${point}%`;
        if(point==score){
            clearInterval(bass);
        }
        else{
            point++;
        }
    },10);

   
})






