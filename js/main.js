var emailInput = document.getElementById('email');
var nameInput = document.getElementById('name');
var domainInput = document.getElementById('domain');
function click_me(){
      var eamil_value = emailInput.value;
      if(eamil_value !== "" && eamil_value.includes("@")) {

            var atIndex = eamil_value.indexOf('@');
            var domainValue = eamil_value.slice(atIndex+1);
            if( domainValue.includes('.')){
                  var nameValue = eamil_value.slice(0,atIndex);
                 domainInput.value= domainValue;
                 nameInput.value= nameValue;
            }
            else{
                  alert("Please enter correct domain")
            }
      
      }
      else{
            alert("Please enter a valid Email address")
      } 

}