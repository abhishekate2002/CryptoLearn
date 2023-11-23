import "./Sha256.css";
import Shacard from "./Shacards/Shacard";
import secureimg from "../../assets/secureimg.png";
function Sha256() {
  return (
    <div className="container">
      <Shacard
        title="Introduction to SHA-256"
        body="🌟 Meet SHA-256: The Digital Sentinel. Explore its origins, purpose, and the power it brings to cybersecurity."
        imageUrl={secureimg}
        bth="section1"
        btnName="Start"
      ></Shacard>

      <Shacard
        title="How SHA-256 Works"
        body="🕵️‍♂️ Decrypt the Magic: How does SHA-256 work its cryptographic wizardry? Uncover the step-by-step process of hashing."
        imageUrl={secureimg}
        bth="section2"
        btnName="Start"
      ></Shacard>

      <Shacard
        title="Properties and Characteristics"
        body="🛡️ The SHA-256 Shield: Understand its armor of properties – Preimage, Second Preimage, and Collision resistance."
        imageUrl={secureimg}
        bth="section3"
        btnName="Start"
      ></Shacard>

      <Shacard
        title="Practical Applications"
        body="💼 Real-World Resilience: SHA-256 in action! From passwords to blockchain, see how it ensures data integrity."
        imageUrl={secureimg}
        bth="section4"
        btnName="Start"
      ></Shacard>

      <Shacard
        title="Implementing SHA-256"
        body="👨‍💻 Code Mastery: Roll up your sleeves and implement SHA-256. Code examples and hands-on learning await!"
        imageUrl={secureimg}
        bth="section5"
        btnName="Start"
      ></Shacard>

      <Shacard
        title="Security Considerations"
        body="🚨 Guarding Against Threats: Delve into potential vulnerabilities and defenses to protect your cryptographic fortress"
        imageUrl={secureimg}
        bth="section6"
        btnName="Start"
      ></Shacard>

      <Shacard
        title="Best Practices"
        body="🔑 Key to Success: Master best practices for SHA-256 usage. Strengthen your digital security arsenal."
        imageUrl={secureimg}
        bth="section7"
        btnName="Start"
      ></Shacard>
    </div>
  );
}

export default Sha256;
