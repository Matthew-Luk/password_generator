function getRandomCharacter(str){
    return str[Math.floor(Math.random() * (str.length - 0) + 0)]
}

export function generatePassword(int, upper, special, num){
    let str = []
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let specialCharacters = "!@#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    let numbers = "0123456789"
    str.push(getRandomCharacter(lowerCase))
    if(upper === true){
        str.push(getRandomCharacter(upperCase))
        lowerCase = lowerCase + upperCase
    }if(special === true){
        str.push(getRandomCharacter(specialCharacters))
        lowerCase = lowerCase + specialCharacters
    }if(num === true){
        str.push(getRandomCharacter(numbers))
        lowerCase = lowerCase + numbers
    }
    for(let i=str.length;i<int;i++){
        str.push(getRandomCharacter(lowerCase))
    }
    let shuffledArray = str.sort((a, b) => 0.5 - Math.random());
    shuffledArray = shuffledArray.join("")
    return shuffledArray
}