const newvalue=document.querySelector("#ni");
const existingCheckbox = document.querySelector("#myCheckbox");

if(existingCheckbox){
  existingCheckbox.style.display = "none";
}

function fun(){
  const newitem = document.createElement('li');
  newitem.innerHTML = newvalue.value;


  if(existingCheckbox){
    const newCheckbox = existingCheckbox.cloneNode(true);
    newCheckbox.style.display = "inline-block";

    newCheckbox.addEventListener("change", function(){
      if(this.checked){
        newitem.classList.add("strike-through");
      }else{
        newitem.classList.remove("strike-through");
      }
    });
    newitem.appendChild(newCheckbox);

  }

  if (newvalue.value !== ''){
    list.appendChild(newitem);
  } else {
    alert("Please Enter the value, it cannot be empty!..")
  }
  ni.value = '';
}

function cl(){
  if(confirm("Are you sure you want to clear all the task")){
    list.innerHTML="";
  }
}
