//returns Random Dog Data
const fetchData2=document.querySelector("#fetch2");
const randDog=document.querySelector("#API2");

fetchData2.addEventListener("click",getDogData);

async function getDogData(){
    randDog.innerHTML="";
    try{                     
let fetchDogResult=await fetch("https://random.dog/woof.json");
let dogList=await fetchDogResult.json();
console.log(dogList);
randDog.innerHTML=`
<div>fileSizeBytes: ${dogList.fileSizeBytes}</div>
<a href="${dogList.url}" target="_blank">image_link</a>
`;
    }catch(err){
        randDog.innerHTML= error;
    }
}