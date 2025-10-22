
var zodiacSign = "Aries";
var birthMonth = "April";
var birthDay = 2;
var luckyNumber = 9;
var Horoscope = 'bold, energetic, and confident leader with a competitive and pioneering spirit';
var belief = false;

document.getElementById("sign").innerHTML = "Zodiac Sign: " + zodiacSign;
document.getElementsByClassName("birthday")[0].innerHTML = "Birthday: " + birthMonth + " " + birthDay;
document.getElementsByClassName("luckyNum")[0].innerHTML = "Lucky Number: " + luckyNumber;
document.getElementsByTagName("p")[0].innerHTML += "\n" + Horoscope;
document.getElementsByTagName("p")[1].innerHTML += belief ? "I believe in horoscopes!" : "I do not believe in astrology.";



var moodRating = 4.2;
var partner1MoodRating = 5;
var partner2MoodRating = 4.6;
var averageMoodRating = (moodRating + partner1MoodRating + partner2MoodRating) / 3;
document.getElementsByTagName("p")[2].innerHTML = "Today's mood rating for " + zodiacSign + ": " + moodRating + " out of 5. The average mood rating of me and my partners is: " + averageMoodRating.toFixed(2) + ".";


var allSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
var mySign = allSigns[0];
var partner1Sign = allSigns[3];
var partner2Sign = allSigns[8];

var horoscopes = [
   "Today is a day for new beginnings. Embrace change and seize opportunities.",
   "Your determination will lead to success today. Stay focused on your goals.",
   "Communication is key today. Express yourself clearly and listen to others.",
   "Trust your intuition. It will guide you in making the right decisions.",
   "Your creativity shines today. Use it to inspire and lead others.",
   "Pay attention to the details. Your meticulous work will pay off.",
   "Balance is essential. Find harmony in all aspects of your life.",
   "Embrace transformation. Let go of what no longer serves you.",
   "Adventure awaits. Explore new horizons and expand your horizons.",
   "Hard work leads to success. Keep pushing toward your goals.",
   "Your unique perspective is an asset. Share your ideas with others.",
   "Trust your emotions. They will guide you in making the right choices."
]

document.getElementsByTagName("p")[3].innerHTML = "My zodiak sign is " + mySign + ". Marvens' zodiak sign is " + partner1Sign + ". Brandons zodiak sign is " + partner2Sign + ".";
document.getElementsByTagName("p")[4].innerHTML = "Marvens' zodiak sign is " + partner1Sign + ". Brandons zodiak sign is " + partner2Sign + ".";
document.getElementsByTagName("p")[5].innerHTML = "Brandon's zodiak sign is " + partner2Sign + ".";


var aHoroscope = horoscopes[0];
horoscopes[2] = Horoscope;
var partner1Horoscope = horoscopes[3];
var partner2Horoscope = horoscopes[8];

document.getElementsByTagName("p")[6].innerHTML += "\nAries' horoscope: " + aHoroscope;
document.getElementsByTagName("p")[7].innerHTML += "\nSagittarius' Horoscope: " + partner1Horoscope;
document.getElementsByTagName("p")[8].innerHTML += "\nCancer's Horoscope " + partner2Horoscope;