const Link ="http://localhost:3001/api/jobs";
const section=document.querySelector('.section-list')

const displayUser=(user)=>{
    const company=user.company;
    const type=user.type;
    const company_logo=user.company_logo;
    const title=user.title;

    const div=document.createElement('div');
    const h1=document.createElement('h1');
    const p=document.createElement('p');
    const p2=document.createElement('p');
    const img=document.createElement('img');
    
    div.style.boxShadow="1px";
    h1.style.font="bold";
    p.style.fontSize="normal";
    img.src=company_logo;
    img.width="150";
    img.height="150";

    h1.appendChild(document.createTextNode(`${company}`));
    p.appendChild(document.createTextNode(`${type}`));
    p2.appendChild(document.createTextNode(`${title}`));

    div.append(img,h1,p2,p);
    section.appendChild(div);
}

const getUsers= async()=>{
    try{
      const RES =await fetch(Link);
      const data=await RES.json();
      data.forEach(user=>{
        displayUser(user);
      })
    }
    catch(error){
      console.log(error)
    }
  }

  getUsers();