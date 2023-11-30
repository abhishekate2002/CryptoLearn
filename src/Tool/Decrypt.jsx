import { useState } from "react";

// Placeholder function for the ciphers and hash
const algorithms = {
  "Ceasar Cipher": (text) => "Decrypted Ceasar Cipher text",
  "Railfence Cipher": (text) => "Decrypted Railfence Cipher text",
  "SHA-256": (text) => "SHA-256 hash",
  AES: (text) => "Decrypted AES text",
  RSA: (text) => "Decrypted RSA text",
};
function Decrypt() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Ceasar Cipher");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const algorithmFunction = algorithms[selectedAlgorithm];
    const result = algorithmFunction(inputText);
    setOutputText(result);
  };
  return (
    <div className="container-encrypt">
      <div className="center">
        <h4 className="encrypt">Decryption textbox</h4>

        <form onSubmit={handleSubmit}>
          <label>
            Choose an algorithm:
            <select value={selectedAlgorithm} onChange={handleAlgorithmChange}>
              {Object.keys(algorithms).map((algorithm) => (
                <option key={algorithm} value={algorithm}>
                  {algorithm}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Enter text:
            <input type="text" value={inputText} onChange={handleTextChange} />
          </label>
          <br />
          <button type="submit">Decrypt/Hash</button>
        </form>
        <p>Output: {outputText}</p>
      </div>
    </div>
  );
}

export default Decrypt;
