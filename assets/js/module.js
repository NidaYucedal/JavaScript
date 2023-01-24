
///*moduller,js kodlari bolerek farkli farkli dosyalardan cagirmak ve*/
//boylece buyuk projelerde kod karmasasinin onune gecmek icin kullanilan bir yontem

//import { showConfirm } from "./message"
import showAlert,{ showConfirm } from "./message.js"

  //export disari aktarma
  //import iceri alma
 document.querySelector("#btn").addEventListener("click",()=>{

    showAlert();
 })