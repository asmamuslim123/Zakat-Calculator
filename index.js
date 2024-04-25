import inquirer from "inquirer";
//create some variables
let zakatPercentage = 2.5; //holding the zakat percentage value
let zakatTolahold = 7.5; //Holding the minimum weight in Tolas for Zakat Deduction
let goldAmountPerTola = 236000; //value of gold in amount per tola
//create a prompt for getting Gold value in Tola
const zakatWeight = await inquirer.prompt([{
        message: "Enter Gold Weight in Tola",
        name: "zakatWeight",
        type: "number"
    }]);
//check the value of gold weight 
//gold weight must be greater or equal to threshold
if (zakatWeight.zakatWeight >= zakatTolahold) {
    let zakatApplicableAmount = (zakatWeight.zakatWeight * goldAmountPerTola) * (zakatPercentage / 100);
    console.log(`The total amount of Zakat will be Rs=${zakatApplicableAmount}/ for ${zakatWeight.zakatWeight} tola`);
}
else {
    console.log(`Zakat is not applicable for ${zakatWeight.zakatWeight} tola`);
}
