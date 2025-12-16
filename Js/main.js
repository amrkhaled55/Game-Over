 "use strict"
 import { GetApi } from "./get api.module.js";
 import { GameList } from "./home.module.js";
import DetailsGames from "./details.js";


//  !Html Elements
 const links=document.querySelectorAll(".nav-link");
 const home=document.querySelector(".home");
 const details=document.querySelector(".details");
  const linkActive=document.querySelector(".nav-link.active");
//  appVariables
let gameApi;
 let displayGames;
//  !! functions!!
function showLoading() {
  document.getElementById("loader").classList.remove("d-none");
}
function hideLoading() {
  document.getElementById("loader").classList.add("d-none");
}
 //  ?Events??
 window.addEventListener("load", async()=>{
  showLoading();
 gameApi=  new GetApi("mmorpg");
 let data=await gameApi.getGames()
 hideLoading();
   displayGames=new GameList(data);
 displayGames.display();
 displayDetailGame();
 })
function displayDetailGame(){
 const row=document.querySelector(".all-games");
          row.addEventListener("click",async (e)=>{
                const card = e.target.closest(".card");                
                if(!card) return;
                 let idCard=card.dataset.id;
                 home.classList.add("d-none");
                 details.classList.remove("d-none");
                 window.scroll(0,0)
                 showLoading();
            let apiDetails= await gameApi.getDetails(idCard);
              let allDetails=new DetailsGames(apiDetails);
              allDetails.display()
              hideLoading();
            })
         } 

 for(let i=0;i<links.length;i++){   
    links[i].addEventListener("click",async (e)=>{
          const linkActive=document.querySelector(".nav-link.active");
      showLoading(); 
  if(e.target!==linkActive){
    e.target.classList.add("active");
    linkActive.classList.remove("active");
  }




  gameApi=  new GetApi(e.target.textContent);
let data=await gameApi.getGames()
  displayGames=new GameList(data);
displayGames.display();
hideLoading();
displayDetailGame();
hideLoading();
    })
 }