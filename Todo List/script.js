let btn=document.querySelector("button");
let list=document.querySelector("#list");
let checkbox=document.querySelector(".check");
let p=document.querySelector(".para");
let taskText=document.querySelector(".task-text");

let cluster="";
let count=1;



btn.addEventListener("click",function(){
    count++
    

   if(taskText.value.trim() !== ""){
       list.innerHTML+=` <div class="items item${count}">
                       <div class="left">
                           <input type="checkbox" name="check" id="check">
                           <p>${taskText.value}</p>
                       </div>
                       <div class="right">
                           <span class="close">&times;</span>
                       </div>
                   </div>`;
   }
   taskText.value = "";
});

document.addEventListener("keydown",function(e)
{
    if(e.key === "Enter"){
        count++;
        if(taskText.value.trim() !== ""){
            list.innerHTML+=` <div class="items item${count}">
                                       <div class="left">
                                        <input type="checkbox" name="check" class="check">
                                        <p class="para">${taskText.value}</p>
                                    </div>
                                    <div class="right">
                                        <span class="close">&times;</span>
                                    </div>
                                </div>`;
        }
        taskText.value = "";
    }
});

list.addEventListener("click",function(e){
    if(e.target.classList.contains("close")){
        e.target.closest(".items").remove();
    }
});

list.addEventListener("change",function(e){
    if(e.target.classList.contains("check")){
        p.style.textDecoration="line-through";
    }
});

//i want when i click to check box or p it will strike through the text and it does not contain any class
// list.addEventListener("click",function(e){
//     if(e.target.classList.contains("check")){
//         document.querySelector(".para").classList.toggle("text");
//     }
// });
// list.addEventListener("click",function(e){
//     if(e.target.classList.contains(".para")){
//         document.querySelector(".para").classList.toggle("text");
//     }
// });
//give me correct code

// list.addEventListener("click",function(e){
//     if(e.target.classList.contains("check")){
//         document.querySelector(".para").classList.toggle("text");
//     }
// });

//upper one is not working


list.addEventListener("click",function(e){
    if(e.target.classList.contains("para") || e.target.classList.contains("check")){
        document.querySelector(".para").classList.toggle("text");
    }
}); 