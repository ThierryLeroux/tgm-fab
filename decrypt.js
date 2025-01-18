const fs = require('fs');

// Function to decrypt the text
function decryptText(encryptedText) {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
        decryptedText += String.fromCharCode(encryptedText.charCodeAt(i) - 3);
    }
    return decryptedText;
}

// Read the encrypted data from a file
const encryptedData = fs.readFileSync('encrypted_data.txt', 'utf8');

// Decrypt the data
const decryptedData = decryptText(encryptedData);

// Write the decrypted data to a file
fs.writeFileSync('decrypted_data.txt', decryptedData);
