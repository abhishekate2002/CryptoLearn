import "./Section4.css";
import React from "react";

function Section4() {
  return (
    <div className="section">
      <h3 className="heading">
        Practical Applications of SHA-256 Algorithm 🔐
      </h3>
      <p className="para">
        The SHA-256 algorithm, a member of the Secure Hash Algorithm 2 (SHA-2)
        family, is renowned for its robust security features and is integral to
        numerous fields within computer science. Here’s how SHA-256 is applied
        in various domains:
      </p>
      <h4 className="small-heading">Cryptocurrency Security 🪙</h4> <br />
      <p className="para">
        SHA-256 is the cryptographic backbone of Bitcoin and several other
        cryptocurrencies. It's used for:
      </p>
      <p className="para">
        <b className="small-heading2">mining:</b>SHA-256 is part of the
        Proof-of-Work mechanism, where miners solve complex puzzles by hashing
        blocks with the SHA-256 algorithm to add new blocks to the blockchain.
      </p>
      <p className="para">
        <b className="small-heading2">Address Generation: </b>It helps create
        public and private keys, ensuring secure cryptocurrency transactions.
      </p>
      <h4 className="small-heading">
        Digital Signatures and Certificate Authorities 📝
      </h4>
      <p className="para">
        SHA-256 is pivotal in digital signatures and SSL certificates for:
      </p>
      <p className="para">
        <b className="small-heading2">authenticity:</b>It hashes the data to be
        signed, ensuring the document or software's integrity hasn’t been
        tampered with since the signature was applied.
      </p>
      <p className="para">
        <b className="small-heading2">SSL Certificates:</b>It's employed by
        certificate authorities when issuing SSL/TLS certificates, fortifying
        the security of web communications.
      </p>
      <h4 className="small-heading">
        Data Integrity in Storage and Transmission 🗄️
      </h4>
      <p className="para">
        In databases and data transmission, SHA-256 ensures the data's
        integrity:
      </p>
      <p className="para">
        <b className="small-heading2">Checksums:</b>SHA-256 checksums validate
        the integrity of data downloaded from the internet, guarding against
        corruption.
      </p>
      <p className="para">
        <b className="small-heading2">Deduplication:</b>It helps in identifying
        duplicate data blocks in storage systems by comparing hashes, thus
        optimizing storage space.
      </p>
      <h4 className="small-heading">Password Hashing in System Security 🔑</h4>
      <p className="para">For password storage, SHA-256:</p>
      <p className="para">
        <b className="small-heading2">Secures Passwords:</b>It hashes passwords
        before storing them, so even if the data store is compromised, the
        passwords are not easily recoverable.
      </p>
      <p className="para">
        <b className="small-heading2">salting:</b>Combined with a unique salt
        for each password, it provides a layer of defense against rainbow table
        attacks.
      </p>
      <h4 className="small-heading">Secure Application Development 🛠️</h4>
      <p className="para">Developers use SHA-256 in various ways:</p>
      <p className="para">
        <b className="small-heading2">Integrity Checks: </b>To ensure software
        updates and patches have not been altered maliciously before reaching
        the end-user.
      </p>
      <p className="para">
        <b className="small-heading2">API Security</b>To create a fingerprint of
        API data, which can be used to verify that requests have not been
        tampered with.
      </p>
      <h4 className="small-heading">Challenges and Considerations 🤔</h4>
      <p className="para">
        While SHA-256 is considered secure, it's crucial to use it correctly:
      </p>
      <p className="para">
        <b className="small-heading">Performance:</b>SHA-256 can be
        computationally intensive, which might impact system performance.
      </p>
      <p className="para">
        <b className="small-heading2">Security Best Practices: </b> Simply
        hashing sensitive information is not enough; additional security
        measures like salting and key stretching are important.
      </p>
    </div>
  );
}

export default Section4;
