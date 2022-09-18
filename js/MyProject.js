let dataMP = []

function addMP(){


    let title = document.getElementById("Title").value
    let description = document.getElementById("Description").value
    let image = document.getElementById("Input Image").files
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value

    let nodeJS = document.getElementById("input-nodeJS").checked
    let nextJS = document.getElementById("input-nextJS").checked
    let reactJS = document.getElementById("input-reactJS").checked
    let typescript = document.getElementById("input-typescript").checked

    if (nodeJS){
        nodeJS = document.getElementById("input-nodeJS").value
    } else {
        nodeJS = ""
    }

    if (nextJS){
        nextJS = document.getElementById("input-nextJS").value
    } else {
        nextJS = ""
    }

    if (reactJS){
        reactJS = document.getElementById("input-reactJS").value
    } else {
        reactJS = ""
    }

    if (typescript){
        typescript = document.getElementById("input-typescript").value
    } else {
        typescript = ""
    }

    if(image.length != 0){
        image = URL.createObjectURL(image[0])
    } else {
        return alert("Tolong Isi Gambar")
    }
    let MP = {
        title,
        description,
        startDate,
        endDate,
        image,
        nodeJS,
        nextJS,
        reactJS,
        typescript,
    }

    dataMP.push(MP)
    console.log(dataMP);

    renderMP()

}

function renderMP(){

    for (let index = 0; index < dataMP.length; index ++){

        if(index == dataMP.length-1){
        document.getElementById("content-main").innerHTML +=`
        
            <div class="content">

                <img src="${dataMP[index].image}" alt="image" id="content">
                <h2>
                    <a href="MyProjectDetail.html" target="_blank" class="link">${dataMP[index].title}</a>
                </h2>
                <div class="waktu">
                    <p>${getTime(dataMP[index].startDate, dataMP[index].endDate)}</p>
                </div>
                <p>${dataMP[index].description}</p>

                <div class="logo">
                    <i class="fa-brands fa-${dataMP[index].nodeJS}"></i>
                    <i class="fa-brands fa-${dataMP[index].nextJS}"></i>
                    <i class="fa-brands fa-${dataMP[index].reactJS}"></i>
                    <i class="fa-brands fa-${dataMP[index].typescript}"></i>
                </div>
                <button class="button-left">edit</button>
                <button class="button-right">delete</button>
                
            </div>`
        }   
    }

}

function getTime(startDate, endDate){

    let endD = new Date(endDate)
    let startD = new Date(startDate)

    
    let distance = endD - startD
    console.log(distance);

    let milisecond = 1000 
    let secondInHours = 3600 
    let hoursInDay = 24 

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)
    
    
    if(distanceDay > 0){
        return `${distanceDay} day ago`
    } else if(distanceHours > 0){
        return `${distanceHours} hours ago`
    } else if(distanceMinutes > 0){
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSecond} seconds ago`
    }
    
}