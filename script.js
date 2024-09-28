let currentQuestion = 0;
let score = 0;
let selectedSeries = 'all';
let questions = [];
let userName = '';
let userEmail = '';

const seriesData = {
    'History': {
        poster: '',
        questions: [
        { 
        question: 'Which city hosted the 2000 Summer Olympics?', 
        answers: ['Athens', 'Beijing', 'London', 'Sydney'], 
        correct: 3 // Correct answer is "Sydney"
    },
    { 
        question: 'In which year were the first modern Olympic Games held?', 
        answers: ['1900', '1912', '1896', '1904'], 
        correct: 2 // Correct answer is "1896"
    },
    { 
        question: 'Who is known as the fastest man in the world, having won multiple Olympic gold medals?', 
        answers: ['Carl Lewis', 'Usain Bolt', 'Michael Johnson', 'Jesse Owens'], 
        correct: 1 // Correct answer is "Usain Bolt"
    },
    { 
        question: 'What sport was added to the Olympic program in 2020?', 
        answers: ['Skateboarding', 'Surfing', 'Climbing', 'All of the above'], 
        correct: 3 // Correct answer is "All of the above"
    },
    { 
        question: 'Which country hosted the 2020 Summer Olympics?', 
        answers: ['Japan', 'Brazil', 'Canada', 'Greece'], 
        correct: 0 // Correct answer is "Japan"
    },
    { 
        question: 'In which year did the Winter Olympics first take place?', 
        answers: ['1932', '1924', '1948', '1936'], 
        correct: 1 // Correct answer is "1924"
    },
    { 
        question: 'Which athlete has won the most Olympic medals in history?', 
        answers: ['Michael Phelps', 'Bjørn Dæhlie', 'Larisa Latynina', 'Paavo Nurmi'], 
        correct: 0 // Correct answer is "Michael Phelps"
    },
    { 
        question: 'Which sport is featured in the Olympic Games that involves shooting and running?', 
        answers: ['Fencing', 'Biathlon', 'Archery', 'Pentathlon'], 
        correct: 1 // Correct answer is "Biathlon"
    },
    { 
        question: 'Which city hosted the 2000 Summer Olympics?', 
        answers: ['Athens', 'Beijing', 'London', 'Sydney'], 
        correct: 3 // Correct answer is "Sydney"
    },
    { 
        question: 'In which year were the first modern Olympic Games held?', 
        answers: ['1900', '1912', '1896', '1904'], 
        correct: 2 // Correct answer is "1896"
    },
    { 
        question: 'Who is known as the fastest man in the world, having won multiple Olympic gold medals?', 
        answers: ['Carl Lewis', 'Usain Bolt', 'Michael Johnson', 'Jesse Owens'], 
        correct: 1 // Correct answer is "Usain Bolt"
    },
    { 
        question: 'What sport was added to the Olympic program in 2020?', 
        answers: ['Skateboarding', 'Surfing', 'Climbing', 'All of the above'], 
        correct: 3 // Correct answer is "All of the above"
    },
    { 
        question: 'Which country hosted the 2020 Summer Olympics?', 
        answers: ['Japan', 'Brazil', 'Canada', 'Greece'], 
        correct: 0 // Correct answer is "Japan"
    },
    { 
        question: 'In which year did the Winter Olympics first take place?', 
        answers: ['1932', '1924', '1948', '1936'], 
        correct: 1 // Correct answer is "1924"
    },
    { 
        question: 'Which athlete has won the most Olympic medals in history?', 
        answers: ['Michael Phelps', 'Bjørn Dæhlie', 'Larisa Latynina', 'Paavo Nurmi'], 
        correct: 0 // Correct answer is "Michael Phelps"
    },
    { 
        question: 'Which sport is featured in the Olympic Games that involves shooting and running?', 
        answers: ['Fencing', 'Biathlon', 'Archery', 'Pentathlon'], 
        correct: 1 // Correct answer is "Biathlon"
    },
    { 
        question: 'Which Olympic Games were the first to feature a mascot?', 
        answers: ['Montreal 1976', 'Lake Placid 1980', 'Barcelona 1992', 'Atlanta 1996'], 
        correct: 0 // Correct answer is "Montreal 1976"
    },
    { 
        question: 'Who was the first woman to win an Olympic gold medal?', 
        answers: ['Charlotte Cooper', 'Helene de Pourtalès', 'Kathy Freeman', 'Nadia Comăneci'], 
        correct: 0 // Correct answer is "Charlotte Cooper"
    },
    { 
        question: 'Which country has won the most Olympic gold medals in history?', 
        answers: ['USA', 'Soviet Union', 'China', 'Great Britain'], 
        correct: 0 // Correct answer is "USA"
    },
    { 
        question: 'In what year were the Winter Olympics first held separately from the Summer Olympics?', 
        answers: ['1948', '1924', '1936', '1960'], 
        correct: 1 // Correct answer is "1924"
    },
    { 
        question: 'Who holds the record for the most gold medals in a single Olympics?', 
        answers: ['Mark Spitz', 'Michael Phelps', 'Bjørn Dæhlie', 'Carl Lewis'], 
        correct: 1 // Correct answer is "Michael Phelps"
    },
    { 
        question: 'What sport was introduced at the 2000 Olympics that features skaters performing tricks?', 
        answers: ['Snowboarding', 'Ice Hockey', 'Freestyle Skiing', 'Figure Skating'], 
        correct: 0 // Correct answer is "Snowboarding"
    },
    { 
        question: 'Which Olympic event combines swimming, cycling, and running?', 
        answers: ['Triathlon', 'Decathlon', 'Pentathlon', 'Heptathlon'], 
        correct: 0 // Correct answer is "Triathlon"
    },
    { 
        question: 'Which country was the first to win gold medals in the modern Olympics?', 
        answers: ['France', 'Great Britain', 'Greece', 'Italy'], 
        correct: 2 // Correct answer is "Greece"
    }
    
        ]
    },
    'Athletes': {
        poster: '',
        questions: [
    { 
        question: 'Which athlete holds the record for the most Olympic gold medals?', 
        answers: ['Mark Spitz', 'Michael Phelps', 'Carl Lewis', 'Usain Bolt'], 
        correct: 1 // Correct answer is "Michael Phelps"
    },
    { 
        question: 'Who is known as the “Lightning Bolt”?', 
        answers: ['Tyson Gay', 'Usain Bolt', 'Jesse Owens', 'Carl Lewis'], 
        correct: 1 // Correct answer is "Usain Bolt"
    },
    { 
        question: 'Which gymnast is famous for her perfect 10 score at the 1976 Olympics?', 
        answers: ['Nadia Comăneci', 'Mary Lou Retton', 'Simone Biles', 'Gabby Douglas'], 
        correct: 0 // Correct answer is "Nadia Comăneci"
    },
    { 
        question: 'Who was the first African American to win an Olympic gold medal?', 
        answers: ['DeHart Hubbard', 'John Baxter', 'Jesse Owens', 'Jackie Robinson'], 
        correct: 0 // Correct answer is "DeHart Hubbard"
    },
    { 
        question: 'Which athlete won the 100m sprint at the 1980 Olympics in Moscow?', 
        answers: ['Carl Lewis', 'Ben Johnson', 'Valery Borzov', 'Usain Bolt'], 
        correct: 2 // Correct answer is "Valery Borzov"
    },
    { 
        question: 'Which swimmer won 8 gold medals in a single Olympic Games?', 
        answers: ['Mark Spitz', 'Ryan Lochte', 'Michael Phelps', 'Katie Ledecky'], 
        correct: 2 // Correct answer is "Michael Phelps"
    },
    { 
        question: 'Which tennis player has won the most Olympic medals?', 
        answers: ['Andre Agassi', 'Serena Williams', 'Steffi Graf', 'Roger Federer'], 
        correct: 1 // Correct answer is "Serena Williams"
    },
    { 
        question: 'Which athlete is known for winning gold in both the 100m and 200m events in 2008 and 2012?', 
        answers: ['Usain Bolt', 'Michael Johnson', 'Carl Lewis', 'Tyson Gay'], 
        correct: 0 // Correct answer is "Usain Bolt"
    },
    { 
        question: 'Who is the first woman to win an Olympic gold medal in boxing?', 
        answers: ['Katie Taylor', 'Claressa Shields', 'Nicola Adams', 'Mary Kom'], 
        correct: 2 // Correct answer is "Nicola Adams"
    },
    { 
        question: 'Which athlete was disqualified for doping after winning a gold medal in the 1988 Olympics?', 
        answers: ['Carl Lewis', 'Ben Johnson', 'Marion Jones', 'Lance Armstrong'], 
        correct: 1 // Correct answer is "Ben Johnson"
    },
    { 
        question: 'Which basketball player led the USA to Olympic gold in 1992 and is known as "His Airness"?', 
        answers: ['Kobe Bryant', 'LeBron James', 'Michael Jordan', 'Larry Bird'], 
        correct: 2 // Correct answer is "Michael Jordan"
    },
    { 
        question: 'Who won the Olympic gold medal in men’s decathlon in 1976?', 
        answers: ['Dan O’Brien', 'Bruce Jenner', 'Daley Thompson', 'Jim Thorpe'], 
        correct: 1 // Correct answer is "Bruce Jenner"
    },
    { 
        question: 'Which American athlete won the gold medal in the 800m race in the 1960 Rome Olympics?', 
        answers: ['Roger Bannister', 'Otis Davis', 'Peter Snell', 'Jim Ryun'], 
        correct: 1 // Correct answer is "Otis Davis"
    },
    { 
        question: 'Which athlete won Olympic gold in both the 100m and 200m races in 1960?', 
        answers: ['Jim Hines', 'Tommy Smith', 'John Carlos', 'Bob Hayes'], 
        correct: 0 // Correct answer is "Jim Hines"
    },
    { 
        question: 'Which swimmer became the youngest Olympic champion at the 2000 Sydney Games?', 
        answers: ['Michael Phelps', 'Kristin Otto', 'Dara Torres', 'Lia Thomas'], 
        correct: 1 // Correct answer is "Kristin Otto"
    },
    { 
        question: 'Which athlete has won the most Olympic medals in track and field?', 
        answers: ['Paavo Nurmi', 'Carl Lewis', 'Jesse Owens', 'Allyson Felix'], 
        correct: 3 // Correct answer is "Allyson Felix"
    }
]

    },
    'Sports&Events': {
        poster: '',
        questions: [
    { 
        question: 'Which athlete is known as "The Greatest of All Time" in boxing?', 
        answers: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather', 'Manny Pacquiao'], 
        correct: 1 // Correct answer is "Muhammad Ali"
    },
    { 
        question: 'In which sport is the term "hat trick" commonly used?', 
        answers: ['Basketball', 'Hockey', 'Soccer', 'Cricket'], 
        correct: 2 // Correct answer is "Soccer"
    },
    { 
        question: 'What is the maximum score in a single game of bowling?', 
        answers: ['200', '250', '350', '300'], 
        correct: 3 // Correct answer is "300"
    },
    { 
        question: 'Which country won the first Rugby World Cup in 1987?', 
        answers: ['Australia', 'New Zealand', 'South Africa', 'England'], 
        correct: 1 // Correct answer is "New Zealand"
    },
    { 
        question: 'What is the name of the famous marathon held annually in Boston?', 
        answers: ['Boston Marathon', 'New York City Marathon', 'Chicago Marathon', 'London Marathon'], 
        correct: 0 // Correct answer is "Boston Marathon"
    },
    { 
        question: 'Which Olympic event includes the disciplines of javelin, shot put, and discus?', 
        answers: ['Heptathlon', 'Decathlon', 'Triathlon', 'Pentathlon'], 
        correct: 1 // Correct answer is "Decathlon"
    },
    { 
        question: 'What is the primary color of the tennis balls used at Wimbledon?', 
        answers: ['Yellow', 'Green', 'White', 'Orange'], 
        correct: 2 // Correct answer is "White"
    },
    {
    question: 'Which country has the nickname "The Land of the Rising Sun"?', 
    answers: ['China', 'South Korea', 'Thailand', 'Japan'], 
    correct: 3 // Correct answer is now "Japan"
},
    { 
        question: 'Which sport features the Davis Cup?', 
        answers: ['Tennis', 'Golf', 'Baseball', 'Basketball'], 
        correct: 0 // Correct answer is "Tennis"
    },
    { 
        question: 'In what year did the first Winter Olympics take place?', 
        answers: ['1924', '1932', '1948', '1956'], 
        correct: 0 // Correct answer is "1924"
    },
    { 
        question: 'Which athlete holds the record for the most Olympic gold medals?', 
        answers: ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Mark Spitz'], 
        correct: 1 // Correct answer is "Michael Phelps"
    },
    { 
        question: 'What is the name of the trophy awarded to the champion of the NHL?', 
        answers: ['Stanley Cup', 'Lombardi Trophy', 'Commissioner’s Trophy', 'World Series Trophy'], 
        correct: 0 // Correct answer is "Stanley Cup"
    },
    { 
        question: 'Which country is known for producing the sport of cricket?', 
        answers: ['United States', 'India', 'England', 'Australia'], 
        correct: 2 // Correct answer is "England"
    },
    { 
        question: 'In which sport do competitors perform a “floor routine”?', 
        answers: ['Gymnastics', 'Dance', 'Ice Skating', 'Diving'], 
        correct: 0 // Correct answer is "Gymnastics"
    },
    { 
        question: 'Which major tennis tournament is held in Australia every January?', 
        answers: ['Australian Open', 'US Open', 'French Open', 'Wimbledon'], 
        correct: 0 // Correct answer is "Australian Open"
    },
    { 
        question: 'Which sport involves hitting a shuttlecock over a net?', 
        answers: ['Tennis', 'Badminton', 'Squash', 'Ping Pong'], 
        correct: 1 // Correct answer is "Badminton"
    }
]
    },
    'Olympic Records': {
    poster: '', // Add an appropriate poster URL
    questions:[
    {
        question: 'Who holds the record for the most gold medals won by an athlete in Olympic history?',
        answers: ['Michael Phelps', 'Larisa Latynina', 'Bjørn Dæhlie', 'Mark Spitz'],
        correct: 0 // Correct answer is "Michael Phelps"
    },
    {
        question: 'What is the fastest time recorded in the men’s 100m sprint at the Olympics?',
        answers: ['9.63 seconds', '9.58 seconds', '9.72 seconds', '9.75 seconds'],
        correct: 1 // Correct answer is "9.58 seconds"
    },
    {
        question: 'Who holds the record for the most consecutive Olympic gold medals in the same event?',
        answers: ['Carl Lewis', 'Paavo Nurmi', 'Mark Spitz', 'Michael Phelps'],
        correct: 3 // Correct answer is "Michael Phelps"
    },
    {
        question: 'What is the highest score ever recorded in gymnastics at the Olympics?',
        answers: ['10.0', '9.975', '9.8', '10.5'],
        correct: 0 // Correct answer is "10.0"
    },
    {
        question: 'Which athlete holds the record for the most Olympic medals in a single Olympics?',
        answers: ['Michael Phelps', 'Bjørn Dæhlie', 'Larisa Latynina', 'Usain Bolt'],
        correct: 0 // Correct answer is "Michael Phelps"
    },
    {
        question: 'Who set the record for the fastest Olympic marathon time?',
        answers: ['Abel Kirui', 'Eliud Kipchoge', 'Haile Gebrselassie', 'Dennis Kipruto'],
        correct: 1 // Correct answer is "Eliud Kipchoge"
    },
    {
        question: 'What is the record number of gold medals won by a country in a single Summer Olympics?',
        answers: ['43', '50', '39', '47'],
        correct: 0 // Correct answer is "43"
    },
    {
        question: 'Which country set the record for the most gold medals in a single Olympic Games?',
        answers: ['United States', 'Soviet Union', 'China', 'Great Britain'],
        correct: 2 // Correct answer is "China"
    },
    {
        question: 'Who broke the record for the most Olympic medals won by a female athlete?',
        answers: ['Marit Bjørgen', 'Kristin Otto', 'Natalie Coughlin', 'Dara Torres'],
        correct: 0 // Correct answer is "Marit Bjørgen"
    },
    {
        question: 'In which sport was the longest standing Olympic record set in 1900?',
        answers: ['Men’s Long Jump', 'Men’s 100m', 'Men’s Shot Put', 'Women’s Swimming'],
        correct: 2 // Correct answer is "Men’s Shot Put"
    }
]

},
    'all': {
        poster: '',
        questions: []
    }
};

Object.keys(seriesData).forEach(series => {
    if (series !== 'all') {
        seriesData['all'].questions = seriesData['all'].questions.concat(seriesData[series].questions);
    }
});

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    userName = document.getElementById('name').value;
    userEmail = document.getElementById('email').value;
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    startQuiz();
});

let backgroundSound = null;

function selectSeries() {
    selectedSeries = document.getElementById('series').value;
    const posterUrl = seriesData[selectedSeries].poster;

    // Update the background image based on the selected series
    if (posterUrl) {
        document.body.style.backgroundImage = `url(${posterUrl})`;
    } else {
        // If no series or "all" is selected, revert to the default Netflix background
        document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper (19) (1).jpg")';
    }

    // Play background sound based on selected series
    playBackgroundSound(selectedSeries);

    startQuiz();
}

function playBackgroundSound(series) {
    // Stop any previously playing background sound
    if (backgroundSound) {
        backgroundSound.pause();
        backgroundSound.currentTime = 0; // Reset to the beginning
    }

    // Define the path to the background sound based on the selected series
    let soundFile = '';
    switch (series) {
        case 'gameOfThrones':
            soundFile = 'Game of Thrones S8 Official Soundtrack _ Main Title - Ramin Djawadi _ WaterTower.mp3';
            break;
        case 'strangerThings':
            soundFile = 'Stranger Things _ Title Sequence [HD] _ Netflix.mp3';
            break;
        case 'theBoys':
            soundFile = 'Homelander Theme  The Boys.mp3';
            break;
            case 'Dark':
            soundFile = 'Homelander Theme  The Boys.mp3';
            break;
        default:
            soundFile = ''; // No sound for "All" or default
    }

    // If there's a sound file for the selected series, play it
    if (soundFile) {
        backgroundSound = new Audio(soundFile);
        backgroundSound.loop = true;  // Loop the background sound
        backgroundSound.volume = 0.3; // Set the volume (adjust as needed)
        backgroundSound.play();
    }
}


// Shuffle and select 10 random questions from the series
function shuffleAndSelect(array, n) {
    let shuffled = array.slice();  // Copy the array to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];  // Swap elements
    }
    return shuffled.slice(0, n);  // Return the first 'n' shuffled elements
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    let allQuestions = seriesData[selectedSeries].questions;
    questions = shuffleAndSelect(allQuestions, 10);  // Select 10 random questions
    document.getElementById('shareButton').style.display = 'none';  // Hide share button
    loadQuestion();
}


let countdown;  // To store the setInterval for the countdown

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('questionContainer').innerHTML = `<p>Quiz complete! Your score: ${score}/${questions.length}</p>`;
        clearInterval(countdown); // Clear the timer
        document.getElementById('shareButton').style.display = 'block'; // Show the share button
        document.getElementById('twitterShareButton').style.display = 'block'; // Show the Twitter share button
        document.getElementById('facebookShareButton').style.display = 'block'; // Show the Facebook share button
        document.getElementById('resetButton').style.display = 'block'; // Show the reset button
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('answers').innerHTML = '';

    q.answers.forEach((answer, index) => {
        let btn = document.createElement('button');
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, q.correct);
        document.getElementById('answers').appendChild(btn);
    });

    // Start the countdown for the current question
    startCountdown(15);  // Start countdown from 15 seconds (adjust as needed)
}


function startCountdown(seconds) {
    let timeLeft = seconds;
    const timerText = document.getElementById('timerText');
    const timerBar = document.getElementById('timerBar');

    // Set the timer text display
    timerText.textContent = `Time left: ${timeLeft}s`;

    // Set the timer bar to full width initially
    timerBar.style.width = '100%';

    // Clear any existing countdowns
    clearInterval(countdown);

    // Start a new countdown
    countdown = setInterval(() => {
        timeLeft--;
        
        // Update the timer text
        timerText.textContent = `Time left: ${timeLeft}s`;

        // Calculate the width of the timer bar
        let widthPercentage = (timeLeft / seconds) * 100;
        timerBar.style.width = `${widthPercentage}%`;

        // Check if time is up
        if (timeLeft <= 0) {
            clearInterval(countdown);
            currentQuestion++;  // Move to the next question when time is up
            loadQuestion();     // Load the next question
        }
    }, 1000);  // Update every second
}






function checkAnswer(selected, correct) {
    let buttons = document.querySelectorAll('#answers button');
    buttons.forEach((btn, index) => {
        if (index === correct) {
            btn.classList.add('correct');
            if (selected === correct) {
                score++;
                playSound('correct');
            }
        } else {
            if (selected === index) {
                btn.classList.add('wrong');
                playSound('wrong');
            }
        }
    });

    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1000);
}

function playSound(type) {
    let sound = new Audio(type === 'correct' ? 'correct-6033.mp3' : 'wrong-47985.mp3');
    sound.play();
}

function sendEmail() {
    let mailtoLink = `mailto:${userEmail}?subject=Quiz Score&body=Hi ${userName},%0D%0A%0D%0AYou scored ${score} in the quiz!`;
    window.location.href = mailtoLink;
}

function sendEmail() {
    let seriesName = selectedSeries.charAt(0).toUpperCase() + selectedSeries.slice(1).replace(/([A-Z])/g, ' $1'); // Format the series name
    let mailtoLink = `mailto:${userEmail}?subject=Quiz Score for ${seriesName}&body=Hi ${userName},%0D%0A%0D%0AYou scored ${score} in the ${seriesName} quiz!`;
    window.location.href = mailtoLink;
}
function shareOnTwitter() {
    const seriesName = selectedSeries.charAt(0).toUpperCase() + selectedSeries.slice(1).replace(/([A-Z])/g, ' '); // Format series name
    const scoreMessage = `Hi, I scored ${score}/10 on @Olympicbrainstorm in the ${seriesName} category quiz! Can you beat me?`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(scoreMessage)}`;
    window.open(twitterUrl, '_blank');
}


function shareOnFacebook() {
    const seriesName = selectedSeries.charAt(0).toUpperCase() + selectedSeries.slice(1).replace(/([A-Z])/g, ' '); // Format the series name
    const scoreMessage = `Hi, I scored ${score}/10 in the ${seriesName} category quiz on OlympicBrainstorm ! Can you beat me?`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://learningyouth.com')}&quote=${encodeURIComponent(scoreMessage)}`;
    window.open(facebookUrl, '_blank');
    
}




function skipQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById('questionContainer').innerHTML = `<p>Quiz complete! Your score: ${score}/${questions.length}</p>`;
        document.getElementById('shareButton').style.display = 'block'; // Show the share button
    } else {
        loadQuestion();
    }
}