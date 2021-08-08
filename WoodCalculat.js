function woodCalculator(ChairQuantity, tableQuantity , bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //wood calculation
    const chairWoodQantity = ChairQuantity*perChairWood;
    const tableWoodQuantity = tableQuantity*perTableWood;
    const bedWoodQuantity = bedQuantity*perBedWood;

    const totalWood = chairWoodQantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
console.log(woodCalculator(2,3,1));
