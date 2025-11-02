const startQuizButton = document.querySelector('.quizButton');
console.log(startQuizButton);
startQuizButton.addEventListener('click', () => {
   startQuizButton.style.display = 'none';
   const quizView = document.querySelector('.quizView');


   const questions = [
      {
         question: "What is the primary rule of firearm safety?",
         options: [
            "Always point the muzzle in a safe direction",
            "Keep your finger off the trigger until ready to shoot",
            "Know your target and what is beyond it",
            "All of the above"
         ],
         answer: 3
      },
      {
         question: "What should you do before cleaning a firearm?",
         options: [
            "Make sure it is unloaded",
            "Disassemble it completely",
            "Apply lubricant",
            "Wear gloves"
         ],
         answer: 0
      },
      // Add more questions as needed
      {
         question: "What is the correct way to store firearms?",
         options: [
            "In a locked safe or cabinet",
            "Loaded and under the bed",
            "In a drawer with ammunition",
            "Hanging on the wall"
         ],
         answer: 0
      },
      {
         question: "When should you wear eye and ear protection?",
         options: [
            "Only when shooting high-caliber firearms",
            "Only during competitions",
            "Whenever you are at the shooting range",
            "Only when instructed by a range officer"
         ],
         answer: 2
      }
   ];
   let currentQuestionIndex = 0;
   let score = 0;
   function showQuestion() {
      quizView.innerHTML = '';
      if (currentQuestionIndex < questions.length) {
         const currentQuestion = questions[currentQuestionIndex];
         const questionElement = document.createElement('h3');
         questionElement.textContent = currentQuestion.question;
         quizView.appendChild(questionElement);

         currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = "quizOption";
            optionButton.textContent = option;
            optionButton.style.background = 'rgba(119, 196, 255, 1)';
            optionButton.style.borderRadius = '5px';
            optionButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';

            optionButton.addEventListener('mouseover', () => {
               optionButton.style.transition = '.1s';
               optionButton.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.4)';
               optionButton.style.transform = 'scale(1.01)';
            });
            optionButton.addEventListener('mouseout', () => {
               optionButton.style.transition = '.3s';
               optionButton.style.boxShadow = 'initial';
               optionButton.style.transform = 'scale(1)';
            });

            // Add event listener for each option button
            optionButton.addEventListener('click', () => {
               optionButtons = quizView.querySelectorAll('.quizOption');
               console.log(optionButtons);
               optionButtons.forEach((btn, index) => {
                  console.log(btn, index);
                  if (index === currentQuestion.answer)
                     btn.style.backgroundColor = 'rgba(111, 255, 113, 0.8)';
                  else
                     btn.style.backgroundColor = 'rgba(255, 56, 56, 0.9)';
               });
               if (index === currentQuestion.answer) {
                  score++;
               }
               currentQuestionIndex++;
               setTimeout(() => {
                  showQuestion();
               }, 1000);
               //
            });
            quizView.appendChild(optionButton);
         });
         quizView.scrollIntoView({ behavior: 'smooth' });
      } else {

         quizView.innerHTML = `<h3>Quiz Completed!</h3><p>Your score: ${score} out of ${questions.length}</p>`;
         if (score === questions.length) {
            quizView.innerHTML += `<p>Excellent! You got a perfect score!</p>`;
         } else if (score >= questions.length / 2) {
            quizView.innerHTML += `<p>Good job! You got most right, try to review a bit more to have a perfect score!</p>`;
         } else {
            quizView.innerHTML += `<p>Good effort. Review the safety resources and try again to improve your score.</p>`;
         }
         startQuizButton.style.display = 'initial';
         startQuizButton.textContent = "Retake Quiz";

         currentQuestionIndex = 0;
         score = 0;
      }
   }

   showQuestion();

});


// Styling of quiz elements
const style = document.createElement('style');
style.textContent = `
   .quizView h3 {
      margin-bottom: 15px;
   }
   .quizView button {
      display: block;
      margin: 10px 0;
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
   }
   .quizView p {
      font-size: 18px;
      font-weight: bold;
   }
`;
document.head.appendChild(style);