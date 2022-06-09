let Data = [
    {
        name:"Edward-precious Omegbu", image: "img/Giyu.jpg", bestFood:"Pasta", complexion:"dark", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"One Piece", age:"26"
    },
    {
        name:"Natacha Elohor Danbadan", image: "img/Nat.jpg", bestFood:"Banga soup and starch", complexion:"brown", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"like stars on earth", age:"24"
    },
    {
        name:"fawsiyyah", image: "img/zee.jpg", bestFood:"Dodo and egg", complexion:"fair", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"little", age:"17"
    },
    {
        name:"Ayodeji Eluyemi", image: "img/Ayo.jpg", bestFood:"Fried Rice", complexion:"dark", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"Arthdal chronicles", age:"20"
    },
    {
        name:"Okike Chinonso", image: "img/Chinonso.jpg", bestFood:"African salad", complexion:"dark", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"Power", age:"25"
    },
    {
        name:"Adedamola Jimi-Bada", image: "img/Ade.jpg", bestFood:"Beans", complexion:"dark", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"Star Wars", age:"24"
    },
    {
        name:"Ifechukwude Nwadoor", image: "img/Ify.jpg", bestFood:"Rice", complexion:"fair", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"Titanic", age:"24"
    },
    {
        name:"Obi Divine", image: "img/Divine.jpg", bestFood:"Yam and egg sauce", complexion:"dark", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"Ready payer one", age:"22"
    },
    {
        name:"Mohammed Akorede", image: "img/Akorede.jpg", bestFood:"None", complexion:"dark", thingslearnt: ["html", "css", "bootsrap", "javascript"], bestMovie:"None", age:"22"
    }
];

let row = document.querySelector(".row");
    for (i = 0; i < Data.length; i++) {
        let Bio = `<div class="col-lg-4 col-md-6 mb-3 py-5">
                <div class="card">
                <div class="face face1">
                  <div class="content">
                    <img src="${Data[i].image}" style="width: 35%;" alt="">
                    <h5 class="java">${Data[i].name}</h5>
                    <p class="java2">I have learnt html, css, boostrap and Javascript.</p>
                    <button onclick="name(${i})" class="btn btn-warning mb-3">Click for more info</button>
                  </div>
                </div>
                <div class="face face2">
                  <h2>?</h2>
                </div>
              </div>
        </div>`;
        
    row.innerHTML += Bio;

   }

   function name(i) {
        alert(Data[i].name);
   }
   
