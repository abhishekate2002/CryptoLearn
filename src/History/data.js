let atbash = [
  "The Atbash Cipher is one of the earliest known substitution ciphers and was originally used to encrypt the Hebrew alphabet. It is a simple and symmetrical cipher where the first letter of the alphabet is replaced with the last letter, the second letter with the second to last, and so on. This means in the Hebrew alphabet, 'aleph' (the first letter) is substituted with 'tav' (the last), 'beth' (the second) with 'shin' (one before the last), and continues in this pattern.",
  "The Atbash Cipher does not require a key beyond the rule of reversal and is a special case of the affine cipher where a equals the length of the alphabet and b is 1. Due to its simplicity, the Atbash Cipher offers very little security against those familiar with the method, but it was effective in its time when literacy was limited, and knowledge of such ciphers was not widespread.",
  "The cipher has been used historically not just for encryption but also for various literary purposes. For example, some scholars suggest that it was used to hide names or words in the Hebrew Bible. Because of its simplicity, the Atbash Cipher serves as a good example for teaching basic cryptography principles today.",
];

let caesar = [
  "The Caesar cipher is one of the earliest and simplest forms of encryption techniques. Named after Julius Caesar, who used it in his private correspondence, it's a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 3, the letter 'A' in the plaintext would be encrypted to 'D', 'B' would become 'E', and so on.",
  "The encryption process can be represented by the following equation, where x is the position of a letter in the alphabet (starting from 0), n is the shift, and m is the modulus (26 in the case of the standard English alphabet):",
  "E(x)=(x+n)modm",
  "And the decryption process is the inverse of this operation:",
  "D(x)=(x−n)modm",
  "The simplicity of the Caesar cipher makes it very vulnerable to frequency analysis and brute force attacks, where the attacker systematically checks all possible shifts. Despite its vulnerability, it has had a lasting impact on the development of cryptography and is still often used as an educational tool to introduce the concept of encryption.",
];

let vigenC = [
  'The Vigenère Cipher is a method of encrypting alphabetic text through a simple form of polyalphabetic substitution, which uses multiple substitution alphabets. It was originally described by Giovan Battista Bellaso in his 1553 book &"La cifra del. Sig. Giovan Battista Bellaso&", but it is mistakenly attributed to Blaise de Vigenère, who published a similar cipher in 1586.',
  "The Vigenère Cipher improves upon the Caesar cipher by using a keyword to determine which Caesar shift to use. Each letter of the keyword refers to a different shift amount, based on its position in the alphabet. This method results in a more secure encryption that is less susceptible to frequency analysis, as the same plaintext letter can be encrypted in different ways depending on its position relative to the keyword.",
  "The encryption process can be visualized with a table called the Vigenère square, which consists of the alphabet written out 26 times in different rows, each row shifted one position to the left compared to the previous. To encrypt a message, a keyword is repeated until it matches the length of the plaintext. Each letter of the plaintext is then encrypted by finding the intersection of the row defined by the corresponding letter of the keyword and the column defined by the plaintext letter.",
  "Decryption works in reverse, with the keyword used to determine the appropriate row in the Vigenère square, and then finding the plaintext letter at the intersection of this row and the column defined by the ciphertext letter.",
  "The strength of the Vigenère cipher lies in its use of multiple Caesar ciphers, which made it resistant to simple frequency analysis. It was considered secure for centuries until Charles Babbage and later, cryptanalyst Friedrich Kasiski independently developed methods to break it in the 19th century. Despite its eventual vulnerability to sophisticated cryptanalysis, the Vigenère Cipher is an important step in the history of cryptography and a classic example of a polyalphabetic cipher.",
];

let zimmerC = [
  "The Zimmermann Telegram was a secret diplomatic communication sent by the German Empire to Mexico on January 16, 1917, during World War I. Authored by German Foreign Minister Arthur Zimmermann, the telegram proposed a military alliance between Germany and Mexico in the event that the United States entered the war against Germany. Germany promised Mexico the territories of Texas, New Mexico, and Arizona as incentives for joining the alliance.",
  "British codebreakers intercepted and decrypted the message, and its contents were shared with the United States. The revelation of the proposed alliance outraged the American public and helped to turn public opinion against Germany, contributing to the U.S. decision to enter the war on the side of the Allies.",
  "The incident is significant in the history of cryptography because it demonstrated the critical impact of codebreaking in modern warfare and international relations. The decryption of the Zimmermann Telegram is often cited as a pivotal moment in cryptologic history, highlighting the importance of secure communications and the potential consequences when they are compromised.",
];

let enigmaC = [
  "The Enigma Machine was a sophisticated cipher device used by Nazi Germany during World War II to encrypt and decrypt secret messages. It was invented by German engineer Arthur Scherbius at the end of World War I, and the complexity of its encryption system was due to its changeable rotors and a series of plugs and wires that offered millions of cryptographic combinations.",
  "The Enigma's key advantage was the ability to change the settings daily, which theoretically gave it 150 trillion possible configurations. This made it incredibly challenging for the encrypted messages to be read by anyone other than the intended recipient. Enigma machines were used in various branches of the German military, with the Navy, in particular, using a more complex version than the Army or Air Force.",
  "The Allies, particularly the British, undertook a significant effort to crack the Enigma codes, an endeavor led by mathematician Alan Turing and his team at Bletchley Park in England. Through a combination of mathematical brilliance, innovative engineering, and intelligence from captured Enigma machines and codebooks, they developed the Bombe, a machine designed to determine the Enigma's settings.",
  "Breaking the Enigma codes is considered one of the pivotal achievements of Allied intelligence work during World War II. It provided crucial information that influenced key military strategies and operations. The success of this cryptanalysis effort significantly shortened the war and saved countless lives.",
];

let rsa = [
  "The RSA algorithm is one of the first public-key cryptosystems and is widely used for secure data transmission. It was invented in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, hence the acronym RSA from the initials of their surnames.",
  "RSA is based on the mathematical difficulty of factoring large integers, a problem for which no efficient solution is known. The security of RSA derives from the fact that, given the product of two large prime numbers (used to generate the public and private keys), it is computationally infeasible to determine the original factors.",
  "The security of RSA comes from the fact that, while it is easy (even for a computer with modest capabilities) to multiply two large numbers together, it is very hard to do the reverse: to start with the product of two large primes and figure out what they were.",
  "RSA is widely used in electronic commerce protocols and is believed to be secure given sufficiently long keys and the current state of cryptographic research. However, as computational capabilities improve and as new algorithms are discovered, the key sizes needed for a secure RSA implementation increase. Additionally, RSA is not secure against a quantum computing breakthrough.",
];

let pkcs = [
  "Public-Key Cryptography Standards (PKCS) are a group of standards for public-key cryptography that were developed and published by RSA Laboratories, the research arm of RSA Security, starting in the 1990s. These standards encompass a wide range of cryptographic specifications, including techniques for secure password handling, encryption algorithms, key generation methods, and more.",
  `Key PKCS standards include: \n
PKCS#1: Defines mechanisms for RSA encryption and signing.
PKCS#3: Describes a method for key agreement based on the Diffie-Hellman protocol.
PKCS#5: Provides standards for password-based cryptography, including key derivation functions.
PKCS#7: Specifies a syntax for data encryption that can include not just the data itself but also related information like certificates and signatures. This was later superseded by Cryptographic Message Syntax (CMS), which is used in S/MIME for securing emails.
PKCS#10: Defines a standard syntax for certification request syntax.
PKCS#11: Defines an API, known as Cryptoki, for devices that hold cryptographic information and perform cryptographic functions.
PKCS#12: Describes a file format for storing several cryptography objects as a single file. Often used to store private keys with accompanying public key certificates, protected with a password-based symmetric key.`,
  "These standards are widely accepted and used in a variety of software and protocols to enable secure electronic communication and cryptographic infrastructure. PKCS has contributed significantly to the use of encryption and secure communications in everyday online activities.",
];

let pgp = [
  "Pretty Good Privacy (PGP) is an encryption program that provides cryptographic privacy and authentication for data communication. Developed by Phil Zimmermann in 1991, PGP is widely used for securing emails as well as files with end-to-end encryption, ensuring that only the intended recipient can access the content.",
  "PGP uses a mix of symmetric and asymmetric encryption to provide security services. For encrypting data, PGP generates a random session key using symmetric-key cryptography. This key is then used to encrypt the message. The session key itself is encrypted using the recipient's public key and sent along with the message. The recipient can decrypt the session key with their private key and then use that to decrypt the message.",
  "PGP also provides a way to sign messages to verify the sender's identity. It does this by creating a digital signature using the sender's private key, which can be verified by others using the sender's public key.",
  "Because of its strong encryption and widespread availability, PGP has become synonymous with secure message exchange and is a foundational tool in the realm of personal privacy and cybersecurity. Over time, PGP has evolved with variations and improvements and has inspired the creation of other encryption standards, such as the open-source GnuPG (GPG) which is compatible with the original PGP.",
];

let aes = [
  "The Advanced Encryption Standard (AES) is a symmetric encryption algorithm widely used across the globe to secure data. AES was established as an encryption standard by the U.S. National Institute of Standards and Technology (NIST) in 2001, after a 5-year standardization process that began in 1997.",
  "AES is a block cipher, which encrypts data in fixed-size blocks—128 bits in the case of AES. It can use cryptographic keys of 128, 192, or 256 bits for encryption, providing a high level of security. The algorithm itself is based on the ‘Rijndael’ cipher, developed by two Belgian cryptographers, Vincent Rijmen and Joan Daemen.",
  "One of the reasons for the selection of AES was its resistance to all known attacks, and it is efficient in both software and hardware implementations across a wide range of platforms. It replaced the older Data Encryption Standard (DES) which was found to be vulnerable to brute-force attacks.",
  "AES has become the de facto encryption standard for the U.S. government and is used worldwide. It is used to protect sensitive data in various applications including VPNs, Wi-Fi security, file encryption, and secure financial transactions. AES is considered secure against any attack, barring a breakthrough in quantum computing.",
];
const ITEM = [
  {
    title: "600-500 BCE",
    cardTitle: "Atbash Cipher",
    url: "https://en.wikipedia.org/wiki/Atbash",
    cardSubtitle:
      "The Atbash cipher is a substitution cipher originally used to encrypt the Hebrew alphabet.",
    cardDetailedText: [atbash[0], atbash[1], atbash[2]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://miro.medium.com/max/1152/0*m53hOZj-zZ-Ufq8u",
      },
    },
  },
  {
    title: "100-44 BCE",
    cardTitle: "Caesar Cipher",
    url: "https://en.wikipedia.org/wiki/Caesar_cipher",
    cardSubtitle:
      "Julius Caesar used this cipher to communicate with his generals.",
    cardDetailedText: [
      caesar[0],
      caesar[1],
      caesar[2],
      caesar[3],
      caesar[4],
      caesar[5],
    ],
    media: {
      type: "IMAGE",
      source: {
        url: "https://i5.walmartimages.com/asr/9608a68d-10ef-41f7-b5e4-348464b414cf_1.83ba43fa8010f9db1c212154e65821cd.jpeg",
      },
    },
  },
  {
    title: "1553",
    cardTitle: "Vigenère Cipher",
    url: "https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher",
    cardSubtitle:
      "A stronger cipher using a keyword to create a polyalphabetic substitution cipher.",
    cardDetailedText: [vigenC[0], vigenC[1], vigenC[2], vigenC[3], vigenC[4]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.boxentriq.com/img/vigenere-table3.png",
      },
    },
  },
  {
    title: "1917-1918",
    cardTitle: "Zimmermann Telegram",
    url: "https://en.wikipedia.org/wiki/Zimmermann_Telegram",
    cardSubtitle:
      "The British cryptographers deciphered a German encrypted message, which played a role in the US joining World War I.",
    cardDetailedText: [zimmerC[0], zimmerC[1], zimmerC[2]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://media.sciencephoto.com/image/c0438336/800wm/C0438336-Zimmermann_Telegram,_1917.jpg",
      },
    },
  },
  {
    title: "1939-1945",
    cardTitle: "Enigma Machine",
    url: "https://en.wikipedia.org/wiki/Enigma_machine",
    cardSubtitle: "German cipher machine used during World War II.",
    cardDetailedText: [enigmaC[0], enigmaC[1], enigmaC[2], enigmaC[3]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Enigma_%28crittografia%29_-_Museo_scienza_e_tecnologia_Milano.jpg/800px-Enigma_%28crittografia%29_-_Museo_scienza_e_tecnologia_Milano.jpg",
      },
    },
  },
  {
    title: "1977",
    cardTitle: "RSA Algorithm",
    url: "https://en.wikipedia.org/wiki/RSA_(cryptosystem)",
    cardSubtitle:
      "Introduction of RSA, an algorithm for public-key cryptography.",
    cardDetailedText: [rsa[0], rsa[1], rsa[2], rsa[3]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://files.oaiusercontent.com/file-HWDk2yxDBPy3QcV6xtd0KTvU?se=2023-11-17T21%3A29%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9c09b463-6890-45f9-ba02-0728869a3b8f.webp&sig=G80kqpJIU99f/42DNjBdwzG9mA5%2BMU60xf2wUgNAymI%3D",
      },
    },
  },
  {
    title: "1980",
    cardTitle: "Public-Key Cryptography Standards (PKCS)",
    url: "https://en.wikipedia.org/wiki/PKCS",
    cardSubtitle:
      "The PKCS were a set of standards devised and published by RSA Security for public-key cryptography, aiming to secure information exchange.",
    cardDetailedText: [pkcs[0], pkcs[1], pkcs[2]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://files.oaiusercontent.com/file-5mlnctyFCcfqfdZerkA2ZH6M?se=2023-11-18T02%3A12%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D78a8e8eb-4e55-47af-8546-f6df06eb5e22.webp&sig=LkiNxQIqicAC40i66vpnNEA%2BVSNHIYvnp4Uc8U9ATOk%3D",
      },
    },
  },
  {
    title: "1991",
    cardTitle: "Pretty Good Privacy (PGP)",
    url: "https://en.wikipedia.org/wiki/Pretty_Good_Privacy",
    cardSubtitle:
      "PGP is an encryption program that provides cryptographic privacy and authentication for data communication.",
    cardDetailedText: [pgp[0], pgp[1], pgp[2], pgp[3]],

    media: {
      type: "IMAGE",
      source: {
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F00%2F38%2F29%2F45%2F500_F_38294567_3cOpmBzNQQ50CrhVJEHjgR8kpo9TR9yK.jpg&f=1&nofb=1&ipt=d58ac0aa1f1f0dfcd89366784ca7c00208b6ff3eb89814ccfbcd85991e92acd3&ipo=images",
      },
    },
  },
  {
    title: "2000",
    cardTitle: "Advance Encryption Standard AES",
    url: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
    cardSubtitle:
      "The AES was announced by NIST as U.S. FIPS PUB 197 (Federal Information Processing Standards Publication 197).",
    cardDetailedText: [aes[0], aes[1], aes[2], aes[3]],
    media: {
      type: "IMAGE",
      source: {
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F1*RshQA9waAi-S7vdZkOKN6A.jpeg&f=1&nofb=1&ipt=f12df85a927606770cfa315a9bdb386517723e1b62a97216bd1461b9dc527195&ipo=images",
      },
    },
  },
];
export default ITEM;
