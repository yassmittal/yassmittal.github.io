const basic_plan_price = document.querySelector('#basic-price-plan');
const master_plan_price = document.querySelector("#master-price-plan")
const professional_plan_price = document.querySelector('#professional-price-plan');
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener("click", function(){
 let basic_plan = basic_plan_price.textContent;
 let master_plan = master_plan_price.textContent;
 let professional_plan = professional_plan_price.textContent;
 master_plan_price.textContent = master_plan === '$399.99' ? '$39.99' : '$399.99';
 professional_plan_price.textContent = professional_plan === '$249.99' ? '$24.99' : '$249.99';
 basic_plan_price.textContent = basic_plan === '$199.99' ? '$19.99' : '$199.99';

})

// let basicPlanPrice = document.getElementById('basic-price-plan');
// let masterPlanPrice = document.getElementById('master-price-plan');
// let professionalPlanPrice = document.getElementById('professional-price-plan');
// let checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('click' , function(){
//   let basicPlan = basicPlanPrice.textContent;
//   let masterPlan = basicPlanPrice.textContent;
//   let professionalPlan = basicPlanPrice.textContent;
//   if(basicPlanPrice.textContent === '$399.99'){
//     return basicPlanPrice.textContent = '$39.99'
//   } else{
//     return basicPlanPrice = '$399.99';
//   }
// })

