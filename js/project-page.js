function genCard(nameProject, descriptionProject, dateProject, urlProject, contentProject) {
    const genDiv = document.createElement("div");
    genDiv.classList.add("hero_text");
    genDiv.innerHTML = `<h1>${nameProject}</h1>
    <div class="hero-p">
      <p>${descriptionProject}</p>
      <p><b>Completed on</b> ${dateProject}</p>
    </div>
    <section class="principal-image">
      <img src="${urlProject}" alt="">
      <img src="${urlProject}" alt="">
    </section>
    <p>${contentProject}</p>`;
    console.log(genDiv);
    return genDiv;
}

async function appendGenCard(){
    try {
        const {completed_on, content, description, image, name, uuid} = await asyncCall();
        const cardContentElement = document.querySelector(".card_content");
        cardContentElement.appendChild(genCard(name, description, completed_on, image, content));    
   
    } catch (error) {
        console.log(error);
    }

}

appendGenCard();

const projectNum = projectLoad();
console.log(projectNum);

async function asyncCall() {
    try {
        const res = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        const data = await res.json();
        console.log(data);
        const resFilter = data.filter((element) => element.uuid == projectNum);
        return resFilter[0];
    } catch (error) {
        console.log(error);
    }
}

asyncCall();


// const searchParams = new URLSearchParams(window.location.search);
// const urlId = searchParams.get("id");
// console.log(urlId);

function projectLoad() {
    const searchParams = new URLSearchParams(window.location.search);
    const urlId = searchParams.get("id");
    console.log(urlId);
    return urlId;
}


//(genCard(resName); per dopo