document.addEventListener('DOMContentLoaded',()=>{function toggleCustomInput(radioGroupName,customInputId){const radioButtons=document.getElementsByName(radioGroupName);const customInput=document.getElementById(customInputId);const customLabel=document.getElementById(`${customInputId}_label`);// Check if the "Custom" radio button is selected if (radioButtons[1].checked){// 'Custom' is at index 1 customInput.style.display='block';customInput.setAttribute('required','required');customLabel.style.display='block'}else{customInput.style.display='none';customInput.removeAttribute('required');customLabel.style.display='none'}}// Add event listeners to the radio buttons const radioButtonsStep6=document.getElementsByName("enquiry_step6_motor_shaft");radioButtonsStep6.forEach(radio=>{radio.addEventListener('change',()=>toggleCustomInput("enquiry_step6_motor_shaft","enquiry_step6_motor_shaft_custom"))})});