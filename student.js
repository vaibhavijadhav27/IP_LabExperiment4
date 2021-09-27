// Creating object using literal syntax
const student1 = {
    name: "Vaibhavi Jadhav",
    className: "D15A",
    rollNo: 26,
  };
  
  console.log("Student 1: ", student1);
  
  // Creating object using constructor
  class Student {
    constructor(uname, className, rollNo) {
      this.uname = uname;
      this.className = className;
      this.rollNo = rollNo;
    }
  }
  
  const student2 = new Student("Vaibhavi Jadhav", "D15A", 26);
  console.log("Student 2: ", student2);
  
  // Use of Prototype
  Student.prototype.college = "VESIT";
  console.log("Student 2: ", student2);
  
  // Generating an Exception
  function checkError() {
    const check = document.getElementById("checkError").value;
  
    if (isNaN(check) || check == 0) {
      alert("Invalid input");
      throw new Error("Invalid Input ");
    } else {
      console.log(check);
      console.log("Valid");
    }
  }
  