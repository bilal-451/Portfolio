const para=document.getElementById("text");
console.log(para);
const phrase=["Mechanical Engineer...","Programmer...",
"Human Being..."]
let idx=0;
let phaseindex=0;


function adding(phrases){
    if(idx==phrases.length){
        del();
    }
    else if(idx<phrases.length){
        para.textContent+=phrases.charAt(idx);
        idx+=1;
        setTimeout(function(){
            adding(phrases)
        },100)
        
    }
}

function del(){
    if(idx>-1){
        let updated="";
        for(let index=0;index<idx;index++){
            updated+=phrase[phaseindex].charAt(index);
        }
        idx-=1;
        console.log(updated);
        para.textContent=updated;
        setTimeout(del,100)
    }
    else if(idx==-1){
        phaseindex=(phaseindex+1)%phrase.length;
        idx=0;
        adding(phrase[phaseindex]);
    }
}

adding(phrase[phaseindex]);