import { Chrono } from "react-chrono";

const History = () => {
  const items = [
    {
      title: "600-500 BCE",
      cardTitle: "Atbash Cipher",
      url: "https://en.wikipedia.org/wiki/Atbash",
      cardSubtitle:
        "The Atbash cipher is a substitution cipher originally used to encrypt the Hebrew alphabet.",
      cardDetailedText: [
        "The Atbash cipher is a simple substitution cipher that originated in ancient Israel and remained in use through at least the Biblical era. It was originally used to encode the Hebrew alphabet, where the first letter was replaced by the last letter, the second by the second-to-last, and so on.The Atbash cipher is a simple substitution cipher that originated in ancient Israel and remained in use through at least the Biblical era. It was originally used to encode the Hebrew alphabet, where the first letter was replaced by the last letter, the second by the second-to-last, and so on.",
      ],
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
      cardDetailedText:
        "The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on.",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/caesar_cipher_image.jpg",
        },
      },
    },
    {
      title: "1553",
      cardTitle: "Vigenère Cipher",
      url: "https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher",
      cardSubtitle:
        "A stronger cipher using a keyword to create a polyalphabetic substitution cipher.",
      cardDetailedText:
        "The Vigenère cipher uses a keyword to create a series of different Caesar ciphers based on the letters of the keyword. For the first letter of the plaintext, the shift is based on the first letter of the keyword, for the second letter of the plaintext, the shift is based on the second letter of the keyword, and so on.",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/vigenere_cipher_image.jpg",
        },
      },
    },
    {
      title: "1917-1918",
      cardTitle: "Zimmermann Telegram",
      url: "https://en.wikipedia.org/wiki/Zimmermann_Telegram",
      cardSubtitle:
        "The British cryptographers deciphered a German encrypted message, which played a role in the US joining World War I.",
      cardDetailedText:
        "The Zimmermann Telegram was a secret diplomatic communication issued from the German Foreign Office that proposed a military alliance between Germany and Mexico in the event of the United States' entering World War I against Germany. The message was intercepted and decrypted by British intelligence.",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/zimmermann_telegram_image.jpg",
        },
      },
    },
    {
      title: "1977",
      cardTitle: "RSA Algorithm",
      url: "https://en.wikipedia.org/wiki/RSA_(cryptosystem)",
      cardSubtitle:
        "Introduction of RSA, an algorithm for public-key cryptography.",
      cardDetailedText:
        "The RSA algorithm is a cryptosystem for secure data transmission. It was the first algorithm known to be suitable for signing as well as encryption, and one of the first great advances in public key cryptography.",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/rsa_algorithm_image.jpg",
        },
      },
    },
  ];

  return (
    <center>
      <div style={{ width: "1000px", height: "700px" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          scrollable={{ scrollbar: true }}
          useReadMore
          theme={{
            primary: "#E79F3D",
            secondary: "#F7F7F7",
            cardBgColor: "#F7F7F7",
            titleColor: "#E79F3D",
            titleColorActive: "#E79F3D",
          }}
        />
      </div>
    </center>
  );
};

export default History;
