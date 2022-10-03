const keys = document.getElementById("#L");
const key = document.querySelector(".v");
const maker = document.querySelector(".keys");
const make = document.querySelector(".kets");
const mak = document.querySelector(".kil")
const ma = document.querySelector(".clap")
const g = document.querySelector(".gg")
const h = document.querySelector(".cla")
const j = document.querySelector(".cl")
const k = document.querySelector(".clit")
const l = document.querySelector(".bash")
//This section is for
//the sonds
const song = document.querySelector("audio")
const song1 = document.querySelector(".song1")
const song2 = document.querySelector(".song2")
const song3 = document.querySelector(".song3")
const song4 = document.querySelector(".song4")
const song5 = document.querySelector(".song5")
const song6 = document.querySelector(".song6")
const song7 = document.querySelector(".song7")
const song8 = document.querySelector(".song8")


// const k = keys.classList.contains("lights");
// console.log(k);
window.addEventListener("keydown", event => {
    
   
    if(event.key == "a"){
        song.play();
        if(maker.classList.contains("lights")){
            maker.classList.remove("lights");
        }
        else{
maker.classList.add("lights");
        }

            }

if(event.key === "f"){
    song3.play();
    if(make.classList.contains("lights")){
            make.classList.remove("lights");
               
    }
    else{
make.classList.add("lights");
    } 

    document.body.style.background= "green";
}
if(event.key === "d"){
    song2.play();
    if(mak.classList.contains("lights")){
            mak.classList.remove("lights");    
    }
    else{
mak.classList.add("lights");
    }
}

if(event.key === "s"){
    song1.play();
    if(ma.classList.contains("lights")){
            ma.classList.remove("lights");    
    }
    else{
ma.classList.add("lights");
    }

    document.body.style.background= "red";
}
if(event.key === "h"){
    song5.play();
    if(h.classList.contains("lights")){
            h.classList.remove("lights");    
    }
    else{
h.classList.add("lights");
    }

    document.body.style.background= "blue";
}
if(event.key === "g"){
    song4.play();
    if(g.classList.contains("lights")){
            g.classList.remove("lights");    
    }
    else{
g.classList.add("lights");
    }

    document.body.style.background= "blue";
}
if(event.key === "j"){
    song6.play();
    if(j.classList.contains("lights")){
            j.classList.remove("lights");    
    }
    else{
j.classList.add("lights");
    }

    document.body.style.background= "blue";
}
if(event.key === "k"){
    song8.play();
    if(k.classList.contains("lights")){
            k.classList.remove("lights");    
    }
    else{
k.classList.add("lights");
    }

    document.body.style.background= "blue";
}
if(event.key === "l"){
    song7.play();
    if(l.classList.contains("lights")){
            l.classList.remove("lights");    
    }
    else{
l.classList.add("lights");
    }

    document.body.style.background= "blue";
}});

window.addEventListener("keyup", event => {
    if(event.key === "a"){
        if(maker.classList.contains("lights")){
                maker.classList.remove("lights");
                   
        }
        else{
    maker.classList.add(" ");
    
        }
        song.play();
    
        document.body.style.background= "white ";
    }
    if(event.key === "s"){
        if(ma.classList.contains("lights")){
                ma.classList.remove("lights");
                   
        }
        else{
    ma.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }
    if(event.key === "d"){
        if(mak.classList.contains("lights")){
                mak.classList.remove("lights");
                   
        }
        else{
    mak.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }
    if(event.key === "f"){
        song3.play();
        if(make.classList.contains("lights")){
                make.classList.remove("lights");
                   
        }
        else{
    make.classList.add("");
    
        }
    
        document.body.style.background= "white ";
    }
    if(event.key === "g"){
        if(g.classList.contains("lights")){
                g.classList.remove("lights");
                   
        }
        else{
    g.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }
    if(event.key === "h"){
        if(h.classList.contains("lights")){
                h.classList.remove("lights");
                   
        }
        else{
    h.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }
    if(event.key === "j"){
        if(j.classList.contains("lights")){
                j.classList.remove("lights");
                   
        }
        else{
    j.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }

    if(event.key === "k"){
        if(k.classList.contains("lights")){
                k.classList.remove("lights");
                   
        }
        else{
    k.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }
    if(event.key === "l"){
        if(l.classList.contains("lights")){
                l.classList.remove("lights");
                   
        }
        else{
    l.classList.add(" ");
    
        }
    
        document.body.style.background= "white ";
    }

    });
