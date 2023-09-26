let hospital = {
    hospitalName:"Harmony Children's Hospital",
    patients:[
    {
        id:"001",
        fullName:"John Hart",
        dateOfBirth:"07-11-2014",
        symptoms:["Sore Throat", "Headache", "Vomiting"]
    },

    {
        id:"002",
        fullName:"Belle Finnegan",
        dateOfBirth:"01-23-2012",
        symptoms:["Redness in the eye", "Itchiness", "Light sensitivity"]
    },
   
    {
        id:"003",
        fullName:"Robin Adams",
        dateOfBirth:"12-06-2015",
        symptoms:["Fever", "Vomiting", "Stomach pain"]

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
    let randomNumber = Math.floor(Math.random()*4);
    let pt = pts[randomNumber];
    return pt.id;
  }
    console.log(); 
    getPatients(hospital.patients);
