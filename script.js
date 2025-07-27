const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.querySelector("button");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

const quotes = [
  { text: "Arise, awake, and stop not until the goal is reached.", author: "Swami Vivekananda" },
  { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "In a conflict between the heart and the brain, follow your heart.", author: "Swami Vivekananda" },
  { text: "Let us sacrifice our today so that our children can have a better tomorrow.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { text: "Wear your failures as a badge of honor.", author: "Sundar Pichai" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs" },
  { text: "I hate losing and cricket being my first love, once I enter the ground it's a different zone altogether.", author: "Sachin Tendulkar" },
  { text: "You don’t play for the crowd, you play for the country.", author: "MS Dhoni" },
  { text: "Chase your dreams... but make sure you don’t find shortcuts.", author: "Sachin Tendulkar" },
  { text: "You have to fight to reach your dream. You have to sacrifice and work hard for it.", author: "Lionel Messi" },
  { text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.", author: "Pele" },
  { text: "Success is not a good teacher, failure makes you humble.", author: "Shah Rukh Khan" },
  { text: "I’m not just a hero; I’m a real person.", author: "Irrfan Khan" },
  { text: "I believe one should be allowed to have a passion for the things they love.", author: "Amitabh Bachchan" },
  { text: "None can destroy iron, but its own rust can. Likewise, none can destroy a person, but his own mindset can.", author: "Ratan Tata" },
  { text: "If you don't build your dream, someone else will hire you to help them build theirs.", author: "Dhirubhai Ambani" },
  { text: "Risk hai toh ishq hai.", author: "Harshad Mehta" },
  { text: "Price is what you pay. Value is what you get.", author: "Warren Buffett" },
  { text: "It’s fine to celebrate success but it is more important to heed the lessons of failure.", author: "Bill Gates" },
  { text: "Music is the best therapy in the world.", author: "A.R. Rahman" },
  { text: "A good voice is not enough; emotion makes a singer great.", author: "Lata Mangeshkar" },
  { text: "Everything comes to us that belongs to us if we create the capacity to receive it.", author: "Rabindranath Tagore" },
  { text: "If you want to shine like the sun, first burn like the sun.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Raise your words, not voice. It is rain that grows flowers, not thunder.", author: "Rumi" },
  { text: "The wound is the place where the light enters you.", author: "Rumi" },
  { text: "Life begins where fear ends.", author: "Osho" },
  { text: "If you resist change, you resist life.", author: "Sadhguru" },
  { text: "Your success is someone else's miracle.", author: "Jay Shetty" },
  { text: "Pain is not always a punishment, sometimes it's a preparation.", author: "Gaur Gopal Das" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Champions keep playing until they get it right.", author: "Billie Jean King" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "I can accept failure, everyone fails at something. But I can’t accept not trying.", author: "Michael Jordan" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Knowledge will give you power, but character respect.", author: "Bruce Lee" },
  { text: "If you’re changing the world, you’re working on important things.", author: "Larry Page" },
  { text: "The true sign of intelligence is not knowledge but imagination.", author: "Albert Einstein" },
  { text: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", author: "Kobe Bryant" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "All birds find shelter during a rain. But eagle avoids rain by flying above the clouds.", author: "Dr. A.P.J. Abdul Kalam" }
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[random].text;
  authorName.innerText = quotes[random].author;
}

speechBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerText} — ${authorName.innerText}`);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} — ${authorName.innerText}`;
  window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", newQuote);