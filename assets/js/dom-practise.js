import {students} from "../data/students.js"

const loadStudents = () => { 

    let strStudents="";

    students.forEach((student,index)=>{
        strStudents+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        </tr>`;
    });

    document.querySelector("#tblStudents tbody").innerHTML=strStudents;

 };


 const setStudentBg = () => {
    const rows = document.querySelectorAll("#tblStudents tbody tr");


    
 }
 loadStudents();