import {students} from "../data/students.js"

const loadStudents = () => { 

    let strStudents="";

    students.forEach((student,index)=>{
        strStudents+=`
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        <td><button class="btn btn-danger btn-delete">Del</button></td>
        </tr>`;
    });

    document.querySelector("#tblStudents tbody").innerHTML=strStudents;

 };


 const setStudentBg = () => {
    const rows = document.querySelectorAll("#tblStudents tbody tr");


    for(let row of rows){
        const point=row.querySelector("td:nth-child(3)").innerText;
        if(point<50){
            row.classList.add("table-danger")
        }
    }
 }


 loadStudents();
 setStudentBg();
 
 document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", (e)=> {
       const name=e.target.
       closest("tr").
       querySelector("td").innerText;
      
       const result= confirm (`${name} isimli kaydi silmek istediginizden emin misiniz?`);

       console.log(result);
    });
   
    });


    document.querySelectorAll("#tblStudents tbody tr").forEach((row)=>{
        row.addEventListener("click",(e)=>{
            console.log(e.target);
            e.target.closest("tr").classList.toggle("table-warning");
        });
    })