const prompt=require('prompt-sync')();

const stu = {
    name: "aman",
    age: 16,
    grade: 11,
    sub: ["eng", "hin", "physics"]
  };
  

  function information(data) {
    console.log(`${data}\nName: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
  }
  
  const boundDisplayInfo = information.bind(stu);
  boundDisplayInfo("stu Information:");
  information.apply(stu, ["Using Apply:"]);
  information.call(stu, "Using Call:");
   function pass_sub(sub, callback) {
    sub.forEach(callback);
  }
  
  pass_sub(stu.sub, (subject) => {
    console.log(`Studying: ${subject}`);
  });
 
  function score_double(stu) {
    const doubledGrades = stu.sub.map((subject) => {
      return { subject: subject, grade: stu.grade * 2 };
    });
    console.log("Original Grades:", stu.grade);
    console.log("Doubled Grades:", score_double);
  }
  
  score_double(stu);
  
  function subjectss(stu) {
    const passing = stu.sub.filter((subject) => {
      return stu.grade >= 70;
    });
    console.log("Passing Subjects:", passing);
  }
  
  subjectss(stu);
  
