function caesarCipher(str){
    let encryptedString = ''
    let charCode = 0

    for(let i = 0; i < str.length; i++){
        charCode = str.charCodeAt(i)

        if (charCode >= 65 && charCode <= 88){
            encryptedString += String.fromCharCode(charCode + 2);
        }
        else if(charCode >= 97 && charCode <= 120){
            encryptedString += String.fromCharCode(charCode + 2);
        }
        else if(charCode == 89){
            encryptedString += String.fromCharCode(65);
        }
        else if(charCode == 90){
            encryptedString += String.fromCharCode(66);
        }
        else if(charCode == 121){
            encryptedString += String.fromCharCode(97);
        }
        else if(charCode == 122){
            encryptedString += String.fromCharCode(98);
        }
        else{
            encryptedString += String.fromCharCode(charCode);
        }
    }
    return encryptedString
}
module.exports = caesarCipher