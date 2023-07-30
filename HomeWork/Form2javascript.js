function displayMyBio(){

    let firstName = document.getElementById("fname").value;
    let surName = document.getElementById("surname").value;
    let emailAddress = document.getElementById("email").value;
    let m = document.getElementById("m").checked;
    let f = document.getElementById("f").checked;
    let departmentName = document.getElementById("depart").value;
    let rollNumber = document.getElementById("rollno").value;
    let academicSemester = document.getElementById("semester").value;
    let academicYear = document.getElementById("year").value; 
    let age=document.getElementById("age").value;
    let gender;
    if(m){
       gender="Male";
    }
    else{
        gender="Female";
    }
    let array1=[firstName,surName,emailAddress,gender,age,departmentName,rollNumber,academicSemester,academicYear];
    let array2=["Name:","Surname:","Email Address:","Gender:","Age:","Department Name:","Roll Number:","Semester:"," Academic Year:"];
       for(let index=0;index<array1.length ; index++){
         document.getElementById("con4").innerHTML += array2[index] +" "+ array1[index] + "<br>";
        

       }
       document.getElementById("con4").innerHTML+="<br>";

          if(age<18 && age>0 ){
            
              document.getElementById("con4").innerHTML+=" Verification process is finished. "+"<br>"+"You are not eligible."+"\n";

          }
          else if (age<0) {
              document.getElementById("con4").innerHTML+=" Verification process is finished. "+"<br>"+"You have entered wrong age."+"\n";
            
          } else {
              document.getElementById("con4").innerHTML+=" Verification process is finished. "+"<br>"+"Congratulations....."+"\n"+"You have all seats."+"\n";
          }

        








       }

   
    
    