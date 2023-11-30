import "./Section5.css";
import React from "react";

function Section5() {
  const pseudoCode = `
function sha256(data):
    # Preprocessing
    padded_data = pad(data)
    # Parse the padded_data into 512-bit blocks
    for each block in padded_data:
        # Create a message schedule 'W'
        W = message_schedule(block)
        # Initialize hash values for this block
        a, b, c, d, e, f, g, h = initial_hash_values
        # Main loop
        for i from 0 to 63:
            T1 = h + SIGMA1(e) + Ch(e, f, g) + K[i] + W[i]
            T2 = SIGMA0(a) + Maj(a, b, c)
            h = g
            g = f
            f = e
            e = d + T1
            d = c
            c = b
            b = a
            a = T1 + T2
        # Add the compressed chunk to the current hash value
        current_hash = add_compressed_chunk_to_hash(a, b, c, d, e, f, g, h)
    # Produce the final hash value
    return current_hash
`;
  return (
    <div className="section">
      <h3 className="heading">Implementing SHA-256</h3>
      <p className="para">
        Welcome to the deep dive into SHA-256, an essential cryptographic hash
        function that forms the backbone of digital security in numerous
        applications! 🛡️
      </p>

      <p className="para">The Process Explained 🧩</p>
      <p className="para">
        <b className="small-heading2">Initial Processing:</b>Data is prepped for
        hashing by padding it until its length is 448 mod 512. The padding
        starts with a 1 followed by 0s, ensuring the last 64 bits represent the
        original data length.
      </p>
      <p className="para">
        <b className="small-heading2">Message Blocks:</b>The processed data is
        divided into 512-bit blocks, each dissected into 16 words (32-bit each)
        to form a message schedule of 64 words.
      </p>
      <p className="para">
        <b className="small-heading2">Compression Magic:</b>SHA-256 compresses
        these blocks through 64 iterations, using bitwise operations, logical
        functions (such as CH and MAJ), and modular addition. These operations
        are meticulously designed to achieve avalanche effect – a small change
        in input results in a drastically different hash
      </p>
      <p className="para">
        <b className="small-heading">Implementing on a Website 💻</b>For a CS
        master's student project, implementing SHA-256 from scratch can be
        enlightening but also complex. You'd deal with bitwise operations and
        modular arithmetic in JavaScript or WebAssembly for performance.
      </p>

      <div
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          color: "#E79F3D",
          margin: "10px",
          backgroundColor: "#1E1E1E",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {pseudoCode}
      </div>

      <h3 className="small-heading2">Security Implications 🚨</h3>
      <p className="para">
        Using SHA-256 on your website, especially for password storage, adds a
        layer of security. However, remember that hashing isn't encryption. It's
        irreversible and should be combined with salting to fend off rainbow
        table attacks.
      </p>
    </div>
  );
}

export default Section5;
