const openings = [
  "My dearest love,",
  "To the one who makes my heart skip a beat,",
  "Sweetheart,",
  "Hey you, beautiful soul,"
];

const bodies = [
  "Every moment with you feels like a dream I never want to wake up from.",
  "You light up my world brighter than the stars ever could.",
  "I never believed in soulmates until I met you.",
  "You are my sunshine on the cloudiest days."
];

const closings = [
  "Forever yours,",
  "With all my love,",
  "Yours truly,",
  "Endlessly in love,"
];

const names = [
  "Your secret admirer 💌",
  "Your one and only 💖",
  "Your cuddle bug 🐻",
  "Your forever Valentine ❤️"
];

function generateLetter() {
  const letter = `${random(openings)}\n\n${random(bodies)}\n\n${random(closings)}\n${random(names)}`;
  typeWriterEffect(letter, document.getElementById("letter"));
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function typeWriterEffect(text, element) {
  element.textContent = "";
  let i = 0;
  const speed = 40;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
