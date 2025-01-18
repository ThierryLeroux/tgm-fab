const fs = require('fs');
const url = require('url');

// Function to decrypt the text
function decryptText(encryptedText) {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
        decryptedText += String.fromCharCode(encryptedText.charCodeAt(i) - 3);
    }
    return decryptedText;
}

// Simulate fetching the encrypted data from the URL
const encryptedData = 'your-encrypted-data-from-url'; // Replace with actual encrypted data

// Decrypt the data
const decryptedData = decryptText(encryptedData);

// Write the decrypted data to a file
fs.writeFileSync('decrypted_data.txt', decryptedData);
console.log('Decryption successful. Decrypted data written to decrypted_data.txt');
