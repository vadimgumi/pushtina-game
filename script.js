const quotes = [
  { text: "Надо поддерживать российские тракторы, потому что это наше будущее.", isTrue: false, explanation: "Цитата выдуманная для игры. Такой фразы Пуштин не произносил." },
  { text: "Свобода лучше, чем несвобода.", isTrue: true, explanation: "Это действительно сказал Медведев на встрече с журналистами в 2008 году." },
  { text: "Если бы бабушка имела колёса, она была бы трамваем.", isTrue: true, explanation: "Реальная фраза Путина на пресс-конференции в 2014 году." },
  { text: "У нас всё есть, просто не для всех.", isTrue: false, explanation: "Сатирическая цитата, в реальности такой нет." },
  { text: "Денег нет, но вы держитесь!", isTrue: true, explanation: "Фраза Медведева жителям Крыма в 2016 году." },
  { text: "Путин — это не фамилия, это диагноз.", isTrue: false, explanation: "Это выдуманная цитата для игры." },
  { text: "Мы в рай, а они просто сдохнут.", isTrue: true, explanation: "Фраза Путина о ядерной войне, 2018 год." },
  { text: "Я как кот Леопольд: ребята, давайте жить дружно.", isTrue: false, explanation: "Сатирическая фраза, Пуштин такого не говорил." },
  { text: "Ходить в туалет — это не роскошь, а необходимость.", isTrue: false, explanation: "Выдуманная фраза." },
  { text: "Стабильность важнее свободы.", isTrue: true, explanation: "Похожая риторика регулярно использовалась в заявлениях Путина." },
  { text: "Уровень доверия к правительству высокий, потому что мы контролируем социологов.", isTrue: false, explanation: "Выдумка для сатирической игры." },
  { text: "Мы никогда не вмешиваемся, просто сильно интересуемся.", isTrue: false, explanation: "Сатирическая цитата." },
  { text: "У нас всё стабильно: плохо, но стабильно.", isTrue: false, explanation: "Выдуманная фраза для сатиры." },
  { text: "Лучшая экономика — это терпение.", isTrue: false, explanation: "Сатира, не реальная цитата." },
  { text: "Везде где Путин — там Россия, где нет Путина — там враги.", isTrue: false, explanation: "Сатирическая гипербола." },
  { text: "Мы должны поднимать страну с колен, чтобы удобнее было падать снова.", isTrue: false, explanation: "Ироническая фраза, не реальная." },
  { text: "Я устал, я ухожу.", isTrue: true, explanation: "Реальная фраза Бориса Ельцина в 1999 году." },
  { text: "Мы пойдём другим путём.", isTrue: true, explanation: "Цитата Ленина, часто используется в ироничном контексте." },
  { text: "Пуштин — это бренд, который работает.", isTrue: false, explanation: "Выдуманная цитата для сатиры." },
  { text: "Кто не понял — тот поймёт.", isTrue: true, explanation: "Фраза Путина, обращение к Федеральному собранию." },
  { text: "Нельзя просто так взять и отменить здравый смысл.", isTrue: false, explanation: "Сатирическая формулировка." },
  { text: "Мы всех победим — в том числе и сами себя.", isTrue: false, explanation: "Сатира." },
  { text: "Интернет — это ЦРУ.", isTrue: true, explanation: "Похожее заявление делал Патрушев в 2015 году." },
  { text: "Чем хуже, тем лучше — это наша стратегия.", isTrue: false, explanation: "Выдуманная для сатиры." },
  { text: "Если бы санкций не было, их стоило бы придумать.", isTrue: true, explanation: "Реальная риторика российских официальных лиц." },
  { text: "Сила есть — ума не надо.", isTrue: false, explanation: "Пословица, но в устах Пушкина не звучала." },
  { text: "Газ — наше оружие.", isTrue: true, explanation: "Смысловая суть встречается в заявлениях официальных лиц РФ." },
  { text: "На войне как на войне, особенно в экономике.", isTrue: false, explanation: "Сатирическая фраза." },
  { text: "Нам не нужна правда, у нас есть телевизор.", isTrue: false, explanation: "Сатира." },
  { text: "Я работаю как раб на галерах.", isTrue: true, explanation: "Реальная фраза Путина, 2008 год." },
  { text: "Запад нам завидует, потому что мы не Европа.", isTrue: false, explanation: "Сатирическая цитата." },
  { text: "Крым наш!", isTrue: true, explanation: "Политический лозунг, активно использовавшийся с 2014 года." },
  { text: "Ракета летит — значит работает.", isTrue: true, explanation: "Фраза Путина о вооружениях." },
  { text: "Я царь — потому что народ так решил.", isTrue: false, explanation: "Выдуманная цитата." },
  { text: "История нас оправдает — если мы её напишем.", isTrue: false, explanation: "Сатира на политическую пропаганду." },
  { text: "Я всегда говорю правду. Иногда.", isTrue: false, explanation: "Сатирическая цитата." },
  { text: "Закон — это то, что я скажу.", isTrue: false, explanation: "Сатира." },
  { text: "Чем больше запретов — тем свободнее мы себя чувствуем.", isTrue: false, explanation: "Сатира." },
  { text: "Россия не нападает. Она просто заходит.", isTrue: false, explanation: "Ироничная формулировка." },
  { text: "Всё идёт по плану. Просто не по нашему.", isTrue: false, explanation: "Сатирическая цитата." },
  { text: "Главное — стабильность. Даже если это стабильный кошмар.", isTrue: false, explanation: "Сатира." },
  { text: "Мы лучшие. Просто никто этого не знает.", isTrue: false, explanation: "Сатирическая цитата." },
  { text: "Нас уважают. Особенно когда мы с танками.", isTrue: false, explanation: "Сатира." },
  { text: "Нам всё равно, что вы думаете. У нас телевизор.", isTrue: false, explanation: "Сатира." },
  { text: "На свободу слова у нас свобода.", isTrue: false, explanation: "Сатирическая формулировка." },
  { text: "Это не репрессии. Это профилактика.", isTrue: false, explanation: "Сатирическая фраза." },
  { text: "У нас демократия, просто по-другому.", isTrue: true, explanation: "Фраза Путина в интервью." },
  { text: "Зачем правду, если есть патриотизм?", isTrue: false, explanation: "Сатирическая риторика." },
  { text: "Мы вас не держим. Но не выпускаем.", isTrue: false, explanation: "Сатира." },
  { text: "Свобода — это когда всё запрещено.", isTrue: false, explanation: "Сатира." }
];

let availableQuotes = [...quotes];
let currentQuote = getRandomQuote();
let score = 0;
let isMuted = false;

const quoteText = document.getElementById("quote-text");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const soundBtn = document.getElementById("sound-toggle");

// Музыка
const backgroundMusic = new Audio("audio/pepsee-vovochka.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
backgroundMusic.play().catch(() => {
  document.body.addEventListener("click", () => {
    backgroundMusic.play();
  }, { once: true });
});

// Вкл/Выкл звук
soundBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  backgroundMusic.muted = isMuted;
  soundBtn.textContent = isMuted ? "🔇" : "🔊";
});

function getRandomQuote() {
  const index = Math.floor(Math.random() * availableQuotes.length);
  return availableQuotes.splice(index, 1)[0];
}

function showQuote() {
  quoteText.textContent = currentQuote.text;
  result.textContent = "";
  nextBtn.style.display = "none";
}

function answer(userAnswer) {
  if (userAnswer === currentQuote.isTrue) {
    result.textContent = "✅ Верно! " + currentQuote.explanation;
    score += 1;
    playSound("right");
  } else {
    result.textContent = "❌ Неверно! " + currentQuote.explanation;
    playSound("wrong");
  }
  scoreDisplay.textContent = "Очки: " + score;
  nextBtn.style.display = "inline-block";
}

function nextQuote() {
  if (availableQuotes.length === 0) {
    quoteText.textContent = "🎉 Игра окончена!";
    result.textContent = "Вы набрали " + score + " очков.";
    nextBtn.style.display = "none";
    showRestartButton();
  } else {
    currentQuote = getRandomQuote();
    showQuote();
  }
}

function playSound(type) {
  if (isMuted) return;
  let sound = new Audio();
  sound.src = type === "right" ? "audio/maladets.mp3" : "audio/zamochu.mp3";
  sound.play();
}

function showRestartButton() {
  const btn = document.getElementById("restart-button");
  btn.style.display = "block";
  btn.addEventListener("click", () => {
    location.reload();
  });
}

showQuote();