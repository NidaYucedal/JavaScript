
document.querySelector("#frmLogin").addEventListener("submit", () => {
    e.preventDefault();
//kullanicidan bilgi alirken veya bir API dan bilgi
//cekerken kullanilir
      
       const email=document.querySelector("#email").value;
       const password=document.querySelector("#password").value;

       try {

       if(!isEmail(email)) throw "Lutfen gecerli bir eposta giriniz";

       if(!password) throw "Lutfen sifrenizi giriiniz";

       e.target.submit();

       }
       catch (error)
     { alert(error);
       }

});


const isEmail = (email) => { 

    //email kontrol islemleri

    return true;

 };