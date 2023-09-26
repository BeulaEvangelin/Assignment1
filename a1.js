let hospital = {
    hospitalName:"<h1>Harmony Children's Hospital</h1>",
    patients:[
    {
        id:"001",
        fullName:"<h2>John Hart, ",
        dateOfBirth:"07-11-2014</h2>",
        symptoms:["<li>Sore Throat</li>", "<li>Headache</li>", "<li>Vomiting</li>"]
    },

    {
        id:"002",
        fullName:"<h2>Belle Finnegan, ",
        dateOfBirth:"01-23-2012</h2>",
        symptoms:["<li>Redness in the eye</li>", "<li>Itchiness</li>", "<li>Light sensitivity</li>"]
    },
   
    {
        id:"003",
        fullName:"<h2>Robin Adams,",
        dateOfBirth:"12-06-2015</h2>",
        symptoms:["<li>Fever</li>", "<li>Vomiting</li>", "<li>Stomach pain</li>"]

    }
]
}
console.log(hospital.hospitalName);
function showPatients(){
for(let i=0; i<hospital.patients.length; i++){
    console.log(hospital.patients[i].fullName + hospital.patients[i].dateOfBirth);
    console.log(hospital.patients[i].symptoms[0]);
        console.log(hospital.patients[i].symptoms[1]);
        console.log(hospital.patients[i].symptoms[2]);
}
}
showPatients();

function getPatients(pts){
    let randomNumber = Math.floor(Math.random()*pts.length);
    let pt = pts[randomNumber];
    return pt.id;
  }
    console.log(getPatients(hospital.patients)); 

