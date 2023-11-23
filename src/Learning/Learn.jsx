import learnimage from "../assets/techny-cybersecurity.png";
import "./Learn.css";
import Card from "./Card/Card";

function Learn() {
  return (
    <div className="container">
      <Card
        title="Basics"
        body="Unlock the secrets of secure communication with an exploration of cryptographic fundamentals and techniques."
        imageUrl={learnimage}
        bth="basic"
        btnName="Basics"
      />
      <Card
        title="SHA-256"
        body="Dive into the world of cryptographic hashing with SHA-256, the gold standard for data integrity and digital signatures."
        imageUrl={learnimage}
        bth="sha256"
        btnName="SHA-256"
      />
      <Card
        title="DES algorithm"
        body="Unveil the legacy of DES (Data Encryption Standard) – a cornerstone of modern encryption. Explore its history and its enduring impact on cybersecurity."
        imageUrl={learnimage}
        bth="sha256"
        btnName="Hashing"
      />
      <Card
        title="RSA algorithm"
        body="Unravel the magic of RSA encryption, where prime numbers become the keys to digital fortresses. Explore the elegance and robustness of asymmetric cryptography"
        imageUrl={learnimage}
        bth="sha256"
        btnName="AES algorithm"
      />

      {/* <button>
        <Link to="/learn/sha256">readmore</Link>
      </button> */}
    </div>
  );
}

export default Learn;
