console.log("JS working");
const access_key="2LrdHZR2fNvZ6q5lCLZpl_u0HhtXdrs3C5ruYngeu3o";

const searchForm=document.getElementById("search-form");
const userInput=document.getElementById("inputField");
const display=document.getElementById("display");


//testing
const search_btn=document.getElementById("btn");
const more_btn=document.getElementById("moreBtn");
search_btn.addEventListener("click", moreBtnOn);
function moreBtnOn(){
    // console.log("search clicked");
    if(userInput.value!=""){
        // more_btn.style.backgroundColor="blue";
        more_btn.style.visibility="visible";
    }
}
// 

let keyword="office";
let page=1;


async function searchImages(){
     keyword=userInput.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}`;


     console.log(url);

     const response= await fetch(url);  //get API data
     const data= await response.json(); //convert to JSON file
     const results=data.results;

    //  console.log(data);
     diplayImages(results);

    
    
}

function diplayImages(results){
    results.map((result)=>{  //traverse each image one by one , ie: array
        const image= document.createElement("img"); //<img>
        image.src=result.urls.small; //<img scr="...">
        image.id="images";
        // image.height=200;
        // image.width=300;
        
        const imgLink= document.createElement("a");//<a>
        imgLink.href=result.links.download;

        imgLink.id="imgCard";
        
        imgLink.appendChild(image);
        // console.log(display);
        display.appendChild(imgLink);
        
        // console.log(display);
     })
}


//when clicked on search button
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();    //just to hold consloe  eg: getch()
    console.log("Form working");
    // console.log(userInput.value);
    console.log("Calling function");
    page=1; //'.' on every click page no should be 1
    display.innerHTML="";
    searchImages();
})

//more button
moreBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("more btn clicked");
    if(userInput.value==""){
        console.log("Please enter keyword first");
        return ;
    }
    page=page+1;
    console.log("page no increamented",page);
    searchImages();
})




//  console.log(searchImages());
