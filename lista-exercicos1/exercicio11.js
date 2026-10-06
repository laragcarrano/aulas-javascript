const girarRoleta=()=>{
    let giros=0;
    do{
     console.log("Girando Roleta...");  
     giros ++;
    }while(giros!==1);
    return `A roleta girou ${giros} vez!`;
};
console.log(girarRoleta());
//const girarRoleta=("Girando Roleta...");
//let giros