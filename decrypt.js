const fs = require('fs');

// Function to decrypt the text
function decryptText(encryptedText) {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
        decryptedText += String.fromCharCode(encryptedText.charCodeAt(i) - 3);
    }
    return decryptedText;
}

// Check if the encrypted data file exists
const filePath = 'encrypted_data.txt';
if (fs.existsSync(filePath)) {
    // Read the encrypted data from the file
    const encryptedData = fs.readFileSync(filePath, 'utf8');

    // Decrypt the data
    const decryptedData = decryptText(encryptedData);

    // Write the decrypted data to a file
    fs.writeFileSync('decrypted_data.txt', decryptedData);
    console.log('Decryption successful. Decrypted data written to decrypted_data.txt');
} else {
    console.error(`Error: File not found - ${filePath}`);
    process.exit(1);
}
