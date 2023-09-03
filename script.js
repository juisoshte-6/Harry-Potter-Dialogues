const quotes = [
  //  1 
    {
        text: "It does not do to dwell on dreams and forget to live.",
      author: "Albus Dumbledore"
    },
    {
      text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
      author: "Albus Dumbledore"
    },
    {
        text: "Fear of a name increases fear of the thing itself.",
        author: "Albus Dumbledore"
      },
      {
        text: "We could all have been killed - or worse, expelled.",
        author: "Hermione Granger"
      },
      {
        text: "The wand chooses the wizard.",
        author: "Garrick Ollivander"
      },
      {
        text: "Magic carpets all got punctures, have they?",
        author: "Uncle Vernon"
      },
      {
        text: "Training for the ballet, Potter?",
        author: "Draco Malfoy"
      },
      {
        text: "Of all the trees we could've hit, we had to get one that hits back.",
        author: "Ron Weasley"
      },
      {
        text: "When in doubt, go to the library.",
        author: "Ron Weasley"
      },
      {
        text: "I'll be in my bedroom, making no noise and pretending I'm not there.",
        author: "Harry Potter"
      },
     //11// {
      {
        text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author: "Albus Dumbledore"
      },
      {
        text: "Don't let the muggles get you down.",
        author: "Ron Weasley"
      },
      {
        text: "I solemnly swear that I am up to no good.",
        author: "George Weasley"
      },
      {
        text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
      },
      {
        text: "Mischief Managed!",
        author: "Harry Potter"
      },
      {
        text: "The consequences of our actions are always so complicated, so diverse, that predicting the future is a very difficult business indeed.",
        author: "Albus Dumbledore"
      },
      {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
      },
      {
        text: "Your devotion is nothing more than cowardice.",
        author: "Voldemort"
      },
      {
        text: "It matters not what someone is born, but what they grow to be.",
        author: "Albus Dumbledore"
      },
      {
        text: "Remember, if the time should come when you have to make a choice between what is right and what is easy, remember what happened to a boy who was good, and kind, and brave, because he strayed across the path of Lord Voldemort. Remember Cedric Diggory.",
        author: "Albus Dumbledore"
      },
      //21// {
       { text: "Numbing the pain for a while will make it worse when you finally feel it.",
        author: "Albus Dumbledore"
      },
      {
        text: "We are only as strong as we are united, as weak as we are divided.",
        author: "Albus Dumbledore"
      },
      {
        text: "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
        author: "Albus Dumbledore"
      },
      {
        text: "Just because it's taken you three years to notice, Ron, doesn't mean no one else has spotted I'm a girl!",
        author: "Hermione Granger"
      },
      {
        text: "Curiosity is not a sin.... But we should exercise caution with our curiosity",
        author: "Albus Dumbledore"
      },
      {
        text: "Twitchy little ferret, aren't you, Malfoy?",
        author: "Hermione Granger"
      },
      {
        text: "Indifference and neglect often do much more damage than outright dislike.",
        author: "Albus Dumbledore"
      },
      {
        text: "Just because you have the emotional range of a teaspoon doesn't mean we all have.",
        author: "Hermione Granger"
      },
      {
        text: "Wit beyond measure is man's greatest treasure.",
        author: "Luna Lovegood"
      },
      {
        text: "Don't worry. You're just as sane as I am.",
        author: "Luna Lovegood"
      },
/*31*/{
        text: "Youth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
        author: "Albus Dumbledore"
      },
      {
        text: "You should write a book translating mad things girls do so boys can understand them.",
        author: "Ron Weasley"
      },
      {
        text: "The mind is not a book, to be opened at will and examined at leisure. Thoughts are not etched on the inside of skulls, to be perused by an invader. The mind is a complex and many-layered thing.",
        author: "Severus Snape"
      },
      {
        text: "Dumbledore says people find it far easier to forgive others for being wrong than being right.",
        author: "Hermione Granger"
      },
      {
        text: "When you have seen as much of life as I have, you will not underestimate the power of obsessive love.",
        author: "Horace Slughorn"
      },
      {
        text: "It is the unknown we fear when we look upon death and darkness, nothing more.",
        author: "Albus Dumbledore"
      },
      {
        text: "Age is foolish and forgetful when it underestimates youth.",
        author: "Albus Dumbledore"
      },
      {
        text: "You need your friends, Harry.",
        author: "Albus Dumbledore"
      },
      {
        text: "Always",
        author: "Severus Snape"
      },
      {
        text: "I don't think you're a waste of space.",
        author: "Dudley Vernon"
      },
      //41
      {
        text: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
        author: "Albus Dumbledore"
      },
      {
        text: "Those who are best suited to power are those who have never sought it.",
        author: "Albus Dumbledore"
      },
      {
        text: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
      },
      {
        text: "Never trust anything that can think for itself if you can’t see where it keeps its brain!",
        author: "Arthur Weasley"
      },
      {
        text: "I am what I am, and I'm not ashamed.",
        author: "Rubeus Hagrid"
      },
      {
        text: "What's coming will come, and we'll meet it when it does.",
        author: "Rubeus Hagrid"
      },
      {
        text: "Anything's possible if you've got enough nerve.",
        author: "Ginny Weasley"
      },
      {
        text: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
      },
      {
        text: "To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
        author: "Albus Dumbledore"
      },
      {
        text: "It is impossible to manufacture or imitate love.",
        author: "Horace Slughorn"
      },
      //51
      {
        text: "I never really gave up on you. Not really. I always hoped…",
        author: "Ginny Weasley"
      },
      {
        text: "We'll send you a Hogwarts toilet seat.",
        author: "George Weasley"
      },
      {
        text: "I suppose she thinks you don’t forget your name. But we’re not stupid — we know we’re called Gred and Forge.",
        author: "George Weasley"
      },
      {
        text: "Wow, I wonder what it'd be like to have a difficult life?",
        author: "Harry Potter"
      },
      {
        text: "There's no need to call me 'sir,' Professor.",
        author: "Harry Potter"
      },
      {
        text: "He can move faster than Severus Snape confronted with shampoo.",
        author: "Fred Weasley"
      },
      {
        text: "We did it, we bashed them, wee Potter's the one. And Voldy's gone moldy, so now let's have fun!",
        author: "Peeves, the poltergeist"
      },
      {
        text: "Books! And cleverness! There are more important things — friendship and bravery…",
        author: "Hermione Granger"
      },
      {
        text: "If you want to kill Harry, you'll have to kill us too!",
        author: "Ron Weasley"
      },
      {
        text: "I enjoyed the meetings, too. It was like having friends.",
        author: "Luna Lovegood"
      },
      /*61*/{
        text: "You do them a disservice by not confiding something this important to them.",
        author: "Albus Dumbledore"
      },
      {
        text: "We're with you whatever happens.",
        author: "Ron Weasley"
      },
      {
        text: "We're coming with you. That was decided months ago — years, really.",
        author: "Hermione Granger"
      },
      {
        text: "Yer a wizard, Harry.",
        author: "Rubeus Hagrid"
      },
      {
        text: "You're saying it wrong. It's leviOsa, not levioSA.",
        author: "Hermione Granger"
      },
      {
        text: "What's life without a little risk?",
        author: "Sirius Black"
      },
      {
        text: "Nice one, James!",
        author: "Sirius Black"
      },
      {
        text: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
        author: "Luna Lovegood"
      },
      {
        text: "You can't deny, Dumbledore's got style.",
        author: "Kingsley Shacklebolt"
      },
      {
        text: "You shall not harm Harry Potter!",
        author: "Dobby"
      },
      /*71*/
      {
        text: "You're a little scary sometimes, you know that? Brilliant... but scary.",
        author: "Ron Weasley"
      },
      {
        text: "Ah, music. A magic beyond all we do here!",
        author: "Albus Dumbledore"
      },
      {
        text: "Master gave Dobby a sock",
        author: "Dobby"
      },
      {
        text: "Honestly, if you were any slower, you’d be going backward.",
        author: "Draco Malfoy"
      },
      {
        text: "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
        author: "Sirius Black"
      },
      {
        text: "I've had enough trouble for a lifetime.",
        author: "Harry Potter"
      },
      {
        text: "I've always wanted to use that spell.",
        author: "Minerva McGonagall"
      },
      {
        text: "Not my daughter, you bitch!",
        author: "Molly Weasley"
      },
      {
        text: "I am not worried, Harry. I am with you!",
        author: "Albus Dumbledore"
      },
      {
        text: "Honestly, woman, you call yourself our mother?",
        author: "Fred Weasley"
      },
      /*81*/
      {
        text: "What exactly is the function of a rubber duck?",
        author: "Arthur Weasley"
      },
      {
        text: "Why, dear boy, we don't send wizards to Azkaban just for blowing up their aunts.",
        author: "Cornelius Fudge"
      },
      {
        text: "These are mad times we live in! Mad!",
        author: "Horace Slughorn"
      },
      {
        text: "What happened down in the dungeon between you and Professor Quirrell is a complete secret. So, naturally, the whole school knows.",
        author: "Albus Dumbledore"
      },
      {
        text: "I mean, it's sort of exciting, isn't it, breaking the rules.",
        author: "Hermione Granger"
      },
      {
        text: "But all my shoes have mysteriously disappeared. I suspect the Nargles are behind it.",
        author: "Luna Lovegood"
      },
      {
        text: "You'd think a bit of snogging would cheer her up.",
        author: "Ron Weasley"
      },
      {
        text: "I'm sorry, Professor. But I must not tell lies.",
        author: "Harry Potter"
      },
      {
        text: "Have a biscuit, Potter",
        author: "Minerva McGonagall"
      },
      {
        text: "Why is it, when something happens, it is always you three?",
        author: "Minerva McGonagall"
      },
      /*91*/{
        text: "How dare you steal that car?",
        author: "Molly Weasley"
      },

  ];



const backgrounds = [
  "photo/img1.jpg",
  "photo/img2.jpg",
  "photo/img3.jpg",
  "photo/img4.jpg",
  "photo/img5.jpg",
  "photo/img6.jpg",
  "photo/img7.jpg",
  "photo/img8.jpg",
  "photo/img9.jpg",
  "photo/img10.jpg",
  "photo/img11.jpg",
  "photo/img12.jpg",
  "photo/img13.jpg",
  "photo/img14.jpg",
  "photo/img15.jpg",
  "photo/img16.jpg",
  "photo/img17.jpg",
  "photo/img18.jpg",
  "photo/img19.jpg"
  

];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomColor() {
  const colors = [
    "#740001", "#1a472a", "#0e1a40", "#ecb939",
    "#ae0001", "#2a623d", "#222f5b", "#f0c75e",
    "#eeba30", "#5d5d5d", "#726255",
    "#d3a625", "#946b2d", "#372e29"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomBackground() {
  const randomIndex = getRandomIndex(backgrounds.length);
  const imageUrl = `url(${backgrounds[randomIndex]})`;
  document.body.style.backgroundImage = imageUrl;
}

function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function displayQuote() {
  const { text, author } = getRandomQuote();
  const randomColor = getRandomColor();
  
  document.body.style.backgroundColor = randomColor; // Set background color
  document.querySelector("button").style.backgroundColor = randomColor; // Set button background color
  document.querySelector(".quote").textContent = text;
  document.querySelector(".author").textContent = "- " + author;
  document.querySelector(".quote").style.color = randomColor; // Set text color
  document.querySelector(".author").style.color = randomColor;
  document.querySelector("#top-left-text").style.color = randomColor; // Set author color
  
  getRandomBackground(); // Set the background image
}

document.getElementById("new-quote").addEventListener("click", displayQuote);

// Display a random quote and change colors when the page loads
displayQuote();
