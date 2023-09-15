
let Mafia = ["پدرخوانده","معشوقه","دکترلکتر","ناتاشا","تروریست","وکیل","جاسوس","تروریست","وکیل","جاسوس","مردقوی","یاکوزا","افسونگر","دزد","ناتو","خرابکار","رگبار","جیب بر","مافیاساده","لئون"];
let Citizen=["کاراگاه","دکتر","اسنایپ","کشیش","شهرساده"," کابوی","تفنگدار"," محافظ","روئین تن","ماسون","هکر","قاظی","شهردار","بازجو","بمبر" ,"جان سخت","روانپزشک","نخبه","فرشته","جادوگر","کلانتر"]
let selected=[];
let numberOfPlayers=5;

const getRole=(length)=>{
    for (let i = 0; i < numberOfPlayers; i++) {
            let x = Math.floor((Math.random() * length) + 1);
            return x;
        }
}
// makePlayer(numberOfPlayers);
const mafiaContainer = document.getElementById("MafiaList")
const citizenContainer = document.getElementById("CitizenList");
const h2=document.getElementsByName("h2");


// mafiaContainer.append(h2)
for (let i = 0; i < Mafia.length; i++) {
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.name=Mafia[i];
    checkbox.value=Mafia[i];
    checkbox.id=Mafia[i];
    checkbox.className = "checkBox";
    let label = document.createElement("label");
    label.htmlFor = Mafia[i];
    label.appendChild(document.createTextNode(Mafia[i]));
    mafiaContainer.appendChild(checkbox);
    mafiaContainer.appendChild(label);

    
}
for (let i = 0; i < Citizen.length; i++) {
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.name=Citizen[i];
    checkbox.value=Citizen[i];
    checkbox.id=Citizen[i];

    checkbox.className="checkBox";
    let label=document.createElement("label");
    label.htmlFor =Citizen[i];
    label.appendChild(document.createTextNode(Citizen[i]));
    citizenContainer.appendChild(checkbox);
    citizenContainer.appendChild(label);
}
const btn=document.querySelector("button");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const checkedCheckBoxes=document.querySelectorAll('.checkBox');
    console.log(checkedCheckBoxes);
    checkedCheckBoxes.forEach(checkbox=>{
        if (checkbox.checked) {
            console.log(checkbox.value);
            selected.push(checkbox.value)
        }
    });
    const roles=()=>{
        const map=new Map();
        // console.log(map.keys());
        selected.forEach((element) => {
            // console.log(map.has("2"));
            let key=getRole(selected.length);
            // console.log(key);
            if (!map.has(`${key}`)) {
                map.set(`${key}`,element)
            }else{
            key = getRole(selected.length);
                map.set(`${key}`, element)
            }
        });
        console.log(map);
    }
    roles();
})