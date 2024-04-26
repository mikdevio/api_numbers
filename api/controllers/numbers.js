
const numberModel = require("../models/numbers");

// Callback for GET numbers list from server
exports.getData = (req, res) => {
    let copiedArray = Array.from(numberModel.numbers);

    res.status(200).send({
        message:"ok GET", 
        numbers: copiedArray.sort(),
    });
};

exports.postData = (req, res) => {
     
    // numbers from client
    const { numbers } = req.body;
    console.log(numbers);

    if(!Array.isArray(numbers)){
        throw new Error("Numbers should be in an array.");
    } 

    if(numbers.length != 500){
        throw new Error("Numbers array must have 500 elements.")
    }

    numbers.forEach(number => {
        if(typeof number != "number"){
            throw new Error("All array elements must be a number.")
        }
    });

    numberModel.numbers = numbers;

    res.status(200).send({message:"ok POST"});
};

exports.patchData = (req, res) => {

    const { index, value } =req.body;

    try {
        numberModel.numbers.splice(index, 0, value);
        console.log(numberModel.numbers);
        res.status(200).send({message:`ok PATCH numbers[${index}]=${value}`});
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
};