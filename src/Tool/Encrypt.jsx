import "./Tools.css";
import { useState } from "react";
import CryptoJS from "crypto-js";

function encryptCaesarCipher(inputText, shift) {
  const shiftAmount = shift % 26; // In case shift is not between 0-25
  return inputText
    .split("")
    .map((char) => {
      // Check if the character is an uppercase letter
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - "A".charCodeAt(0) + shiftAmount) % 26) +
            "A".charCodeAt(0)
        );
      }
      // Check if the character is a lowercase letter
      else if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - "a".charCodeAt(0) + shiftAmount) % 26) +
            "a".charCodeAt(0)
        );
      }
      // Non-alphabetical characters are unchanged
      return char;
    })
    .join("");
}

function encryptRailFenceCipher(inputText, rails) {
  // Create an array to hold the rails
  const railArray = [...Array(rails)].map(() => []);

  // Determine the direction of movement
  let directionDown = false;
  let rail = 0;

  // Distribute the letters into the rail array
  for (const char of inputText) {
    // Place the current character into the current rail
    railArray[rail].push(char);

    // Check if the direction needs to change
    if (rail === 0 || rail === rails - 1) {
      directionDown = !directionDown;
    }

    // Move to the next rail
    rail += directionDown ? 1 : -1;
  }

  // Combine the characters from each rail into the encrypted string
  return railArray.flat().join("");
}

function hashSHA256(inputText) {
  return CryptoJS.SHA256(inputText).toString(CryptoJS.enc.Hex);
}

function encryptAES(inputText, secretKey) {
  return CryptoJS.AES.encrypt(inputText, secretKey).toString();
}

function Encrypt() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("CeasarCipher");
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEncrypt = () => {
    let result = "";
    switch (selectedAlgorithm) {
      case "CeasarCipher":
        result = encryptCaesarCipher(inputText, 3); // Example shift value
        break;
      case "RailfenceCipher":
        result = encryptRailFenceCipher(inputText, 3); // Example rail value
        break;
      case "SHA-256":
        result = hashSHA256(inputText);
        break;
      case "AES":
        result = encryptAES(inputText, "mySecretKey"); // Example key
        break;
      default:
        result = "Invalid algorithm selected.";
    }
    setEncryptedText(result);
  };

  return (
    <div className="container-encrypt">
      <div className="center">
        <h4 className="encrypt">Encryption textbox</h4>
        <div className="textandselect">
          <input
            className="input"
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
          <select
            className="select"
            value={selectedAlgorithm}
            onChange={handleAlgorithmChange}
          >
            <option value="CeasarCipher">Caesar Cipher</option>
            <option value="RailfenceCipher">Railfence Cipher</option>
            <option value="SHA-256">SHA-256</option>
            <option value="AES">AES</option>
            <option value="RSA">RSA</option>
          </select>
        </div>

        <button className="button" onClick={handleEncrypt}>
          Encrypt
        </button>
        <h4 className="encrypt">Result: </h4>
        <p className="para-output">{encryptedText}</p>
      </div>
    </div>
  );
}

export default Encrypt;
