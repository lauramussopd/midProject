function genCard() {
    //genera un elemento de tipo div que tenga la class hero_text
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
    <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quix duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. <br><br>

      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nis cillum minim tempor enim. </p>`
}

const projectNum = projectLoad();
console.log(projectNum);

async function asyncCall() {
    try {
        const res = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        const data = await res.json();
        console.log(data);
        const resFilter = data.filter((element) => element.uuid == projectNum);
        console.log(resFilter[0].name);
        const resName = resFilter[0].name;
    } catch (error) {

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