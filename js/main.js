//questions = ["Økonomi spørsmål 1", "Familie spørsmål 1", "Barn spørsmål", "Økoonomi spørsmål 2", "Barn spørsmål 2"];
questions = [
  'Har du 100% oversikt over alle dine verdier',
  'Føler du deg ivaretatt og fulgt opp på en god måte der du har pengene din idag?',
  'Har du tatt riktige valg for hvor mye penger du skal ha på bankkonto, i eiendom og i investeringer som kan gi bedre avkastning?',
  'Har du lånt riktig mengde penger i forhold til inntekt og verdier?',
  'Har du en klar plan for hvordan verdiene skal videreføres til neste generasjon?',
  'Har du utarbeidet viktige dokumenter som dine nærmeste trenger hvis det skulle hende deg noe? (testament, fremtidsfullmakt, mm.)',
  'Har du en investeringsstrategi for pengene dine som er tilpasset dine mål? ',
  'Vet du hvilken påvirkning investeringene din har på viktige områder som miljø, menneskerettigheter og korrupsjon?',
  'Er formuen din best mulig organisert med tanke på skatt?',
  'Har du verdier for over 1 million kroner? (Eiendom, bank og investeringer)',
];

//questionTypes = ["okonomi", "familie", "barn", "okonomi", "barn"];
questionTypes = [
  'oversikt',
  'oppfolging',
  'riktig_investert',
  'lan',
  'generasjonsplanlegging',
  'viktige_dokumenter',
  'investerings_teknologi',
  'barekraft',
  'skatt',
  'total',
];
questionTypesNice = [
  'Oversikt',
  'Oppfølgning',
  'Riktig investert?',
  'Lån',
  'Generasjonsplanlegging',
  'Viktige dokumenter',
  'Investeringer',
  'Bærekraft',
  'Skatt',
  'Totalt',
];

types = {};
for (var i = 0; i < questionTypes.length; i++) {
  types[questionTypes] = 0;
}

answers = [];
counter = 0;

qCount = 0;
qTotal = questions.length;
qPercentage = 100 / qTotal;

questionText = document.querySelector('#question-text');
questionImage = document.querySelector('#question-image');
questionType = document.querySelector('#question-type');
progressBar = document.querySelector('#questionProgress');
qCountElm = document.querySelector('#question-current');
qTotalElm = document.querySelector('#question-total');
qTotalElm.innerHTML = qTotal;

yesButton = document.querySelector('#yes-button');
noButton = document.querySelector('#no-button');
var finishModal = new bootstrap.Modal(document.getElementById('finishModal'));

updateCount();
loadQuestion();

function nextQuestion(a) {
  console.log(a);
  if (qCount <= qTotal) {
    answers[qCount - 1] = parseInt(a);
    types[questionTypes[qCount - 1]] += parseInt(a);

    if (qCount == qTotal) {
      finish();
    } else {
      updateCount();
      loadQuestion();
    }
  }
}

function finish() {
  //sessionStorage.setItem("questions", questions);
  //sessionStorage.setItem("answers", answers);
  //sessionStorage.setItem("types", JSON.stringify(types));

  if (answers[answers.length - 1] == 1) {
    finishModal.toggle();
  } else {
    finishModal.toggle();
    console.log('joe');
  }
  //document.querySelector("#question-div").style.display = "none"
  //document.querySelector("#chart-div").style.display = "block"
  //drawChart()
}

function loadQuestion() {
  questionText.innerHTML = questions[qCount - 1];
  questionType.innerHTML = questionTypesNice[qCount - 1];
  questionImage.src = 'icons/farger/' + questionTypes[qCount - 1] + '.png';
}

function updateCount() {
  qCount++;
  qCountElm.innerHTML = qCount;
  currentPercent = qPercentage * (qCount - 1);
  addingPercentage = qPercentage / 10;
  updateProgress(0, currentPercent, addingPercentage);
}

function updateProgress(i, currentPercent, addingPercentage) {
  //  create a loop function
  setTimeout(function () {
    //  call a 3s setTimeout when the loop is called
    progressBar.style =
      'width: ' + String(currentPercent + addingPercentage * i) + '%';
    i++;
    setTimeout(function () {}, 500);
    if (i < 10) {
      //  if the counter < 10, call the loop function
      updateProgress(i, currentPercent, addingPercentage);
    } else if (qCount == qTotal) {
      progressBar.style = 'width: 100%';
    }
  }, 20);
}
//types = JSON.parse(sessionStorage.getItem("types"))
