document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const beginFriendQuizBtn = document.getElementById("beginFriendQuizBtn");
  const openInviteBtn = document.getElementById("openInviteBtn");

  const music = document.getElementById("bgMusic");
  const friendResultAudio = document.getElementById("friendResultAudio");

  const oddOneOutLevelNumber = document.getElementById("oddOneOutLevelNumber");
  const oddOneOutStatus = document.getElementById("oddOneOutStatus");
  const oddOneOutHint = document.getElementById("oddOneOutHint");
  const oddOneOutGrid = document.getElementById("oddOneOutGrid");
  const oddOneOutResult = document.getElementById("oddOneOutResult");
  const oddOneOutNextBtn = document.getElementById("oddOneOutNextBtn");

  const friendQuizProgress = document.getElementById("friendQuizProgress");
  const friendQuizExtra = document.getElementById("friendQuizExtra");
  const friendQuizQuestion = document.getElementById("friendQuizQuestion");
  const friendQuizOptions = document.getElementById("friendQuizOptions");
  const friendQuizAnswer = document.getElementById("friendQuizAnswer");
  const friendQuizError = document.getElementById("friendQuizError");
  const friendQuizNextBtn = document.getElementById("friendQuizNextBtn");
  const friendQuizScore = document.getElementById("friendQuizScore");
  const friendQuizMessage = document.getElementById("friendQuizMessage");
  const resultsSparks = document.getElementById("resultsSparks");

  const openQuizBtn = document.getElementById("openQuizBtn");
  const quizBackBtn = document.getElementById("quizBackBtn");
  const quizCloseBtn = document.getElementById("quizCloseBtn");
  const quizFinishBtn = document.getElementById("quizFinishBtn");
  const quizRetryBtn = document.getElementById("quizRetryBtn");

  const quizScreen = document.getElementById("pageQuiz");
  const quizForm = document.getElementById("quizForm");
  const quizResult = document.getElementById("quizResult");
  const quizResultInner = document.getElementById("quizResultInner");
  const quizOverlay = document.getElementById("quizOverlay");
  const resultCover = document.getElementById("resultCover");
  const resultBlurb = document.getElementById("resultBlurb");
  const resultAudio = document.getElementById("resultAudio");
  const quizNameInput = document.getElementById("quizName");

  let nigaraFallsPauseTime = 0;

  const oddOneOutLevels = [
    {
      words: ["Wake", "Sun", "Horizon", "Time"],
      oddOneOut: 3,
      hint: "Hint: Song - Wake Me Up",
      correctWord: "Time"
    },
    {
      words: ["Abyss", "Hour", "Darkness", "Legacy"],
      oddOneOut: 3,
      hint: "Hint: Song - The Abyss",
      correctWord: "Legacy"
    },
    {
      words: ["Spirit", "Breathing", "Bleeding", "Feelings"],
      oddOneOut: 0,
      hint: "Hint: Song - Cry For Me",
      correctWord: "Spirit"
    },
    {
      words: ["Window", "Road", "Fame", "Destination"],
      oddOneOut: 2,
      hint: "Hint: Song - Drive",
      correctWord: "Fame"
    },
    {
      words: ["Tub", "Water", "Shadow", "Preacher"],
      oddOneOut: 1,
      hint: "Hint: Song - Baptized in Fear",
      correctWord: "Water"
    }
  ];

  const friendQuizQuestions = [
    {
      question: "When did I first meet you?",
      answers: ["year 1 block 2", "year 1, block 2", "year one block two", "block 2 of year 1", "first year block 2", "year one, block two", "first year block two", "first year in block 2"]
    },
    {
      question: "What's my favorite redbull flavour?",
      answers: ["apricot strawberry", "the apricot strawberry", "strawberry apricot", "strawberry apricot redbull", "the apricot strawberry redbull", "strawberry apricot redbull", "the orange one", "the orange can of redbull","the orange can", "the strawberry apricot"]
    },
    {
      question: "What alcohol did we drink first year that you and I got drunk at campus?",
      answers: ["klipdrift", "klippies", "brandy", "klip drift"]
    },
    {
      question: "What big collection do I have displayed in my room on my shelf?",
      answers: ["energy drink collection", "energy drinks", "energy drink", "my energy drink collection", "energy drinks collection", "can collection", "can", "cans", "your can collection", "switch", "switch can collection", "switch cans", "switch collection"]
    },
    {
      question: "Which Kpop group did I first discover last year around June?",
      answers: ["bp", "blackpink", "black pink"]
    },
    {
      question: "Which artist that makes depressing music do you and I both like?",
      answers: ["chris grey", "chris", "grey"]
    },
    {
      question: "How many tattoos do I have?",
      answers: ["6", "six", "you have 6 tattoos", "you have six tattoos"]
    },
    {
      question: "What's my favorite animal?",
      answers: ["shark", "a shark", "sharks"]
    },
    {
      question: "What was the first concert I ever went to?",
      answers: ["Chris Brown", "chris brown", "breezy concert", "chris brown concert", "chris brown's concert", "chris browns concert", "the chris browwn concert", "a chris brown concert"]
    },
    {
      question: "What animal do I have a phobia of?",
      answers: ["snake", "snakes", "a snake"]
    },
    {
      question: "What spice which goes into food do I hate the taste/smell of?",
      answers: ["cinnamon","you hate cinnamon","you dont like cinnamon","you don't like cinnamon"]
    },
    {
      question: "Out of all my ex's/Situationships who was my biggest heartbreak?",
      answers: ["shikara"]
    },
    {
      question: "Out of all the broken promises which is my favorite?",
      answers: ["the series", "broken promises the series","the series of broken promises"]
    },
    {
      question: "What song is 'gang gang' and 'fried chicken' from? It's the +- 5 Year Plan group song.",
      answers: ["gnarly"]
    },
    {
      question: "Have I ever been ghosted—and by whom?",
      answers: ["tiara"]
    },
    {
      question: "Who was the first person I ever kissed?",
      options: "Options: Aidan, Logan, Nikara, Shikara, Tiara",
      answers: ["aidan"]
    },
    {
      question: "What movie did you guys force me to watch at campus our first year",
      answers: ["IT", "it", "it the movie", "the movie it", "IT the movie", "the movie IT"]
    },
    {
      question: "In our first year, block 2 when you got to know Shikara aswell.What was the reason I stopped talking to her at the time Pick 1-4 and type it out",
      options: "Options: 1.She wanted my full attention and time, 2.She didn't want to get to know my friends at the time, 3.She got upset that I was playing games with you, 4.She had feelings for Abhay",
      answers: [
        "she got upset that I was playign games with you",
        "she was upset you were playing games with me",
        "she never messaged you after she got upset that you were playign games with me",
        "she was upset that you were playing games with me",
        "she got upset you were playing game with me"
      ]
    },
    {
      question: "What happened on the 6th of November 2025?",
      answers: ["i got into a car crash", "car crash", "you got into a car crash", "car accident", "you were in a car crash", "got into a car crash"]
    },
    {
      question: "What do I always say to you when you making nonsense?",
      answers: ["I'm going to hit you", "im going to hit you", "your going to hit me", "you'r going to hit me","i'm going to beat you", "im going to wack you", "i'm going to clap you"]
    },
    {
      question: "Last question, nice and easy to end off. What are you saved as in my Phone?",
      answers: ["Keshie Poo", "keshie poo","keshiepoo"]
    }
  ];

  const SONG_KEYS = ["cry-for-me", "the-abyss", "Sao-Paulo", "timeless", "wake-me-up"];
  const SONG_PRETTY = {
    "cry-for-me": "Cry For Me",
    "the-abyss": "The Abyss",
    "Sao-Paulo": "Sao Paulo",
    "timeless": "Timeless",
    "wake-me-up": "Wake Me Up"
  };
  const SONG_BLURB = {
    "cry-for-me": "You're soft-hearted, dramatic in the best way, and you feel everything properly.",
    "the-abyss": "You're mysterious, deep, and a little hard to read, which makes people more curious.",
    "Sao-Paulo": "You carry yourself like a star. Confident, cool, and impossible to ignore.",
    "timeless": "You're calm, pretty, and easy to be around. Quiet vibe, strong presence.",
    "wake-me-up": "You bring energy, warmth, and life into every room you walk into."
  };

  let oddOneOutIndex = 0;
  let oddOneOutLocked = false;

  let friendQuizIndex = 0;
  let friendQuizCorrect = 0;
  const friendQuizResponses = [];
  let showDigDeeper = false;

  let scrollYBeforeQuiz = 0;

  function blurActiveField() {
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }
  }

  function pauseAllAudio() {
    if (music) {
      music.pause();
    }
    if (friendResultAudio) {
      friendResultAudio.pause();
    }
    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }
  }

  function playNigaraFalls() {
    if (!music) return;

    if (friendResultAudio) {
      friendResultAudio.pause();
      friendResultAudio.currentTime = 0;
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    const currentSrc = (music.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
    if (!currentSrc.includes("nigarafalls")) {
      music.src = "nigara-falls.mp3";
      music.load();
    }

    music.volume = 0.7;
    music.loop = true;
    music.play().catch(() => {});
  }

  function playShakeItInTheClub() {
    if (!friendResultAudio) return;

    // Save nigara-falls position before switching
    if (music && !music.paused) {
      nigaraFallsPauseTime = music.currentTime || 0;
      music.pause();
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    // Check if already playing the correct file
    const currentSrc = (friendResultAudio.getAttribute("src") || "").toLowerCase();
    if (!currentSrc.includes("shake-it-in-the-club")) {
      friendResultAudio.src = "shake-it-in-the-club.mp3";
      friendResultAudio.load();
    }

    friendResultAudio.volume = 0.7;
    friendResultAudio.loop = true;

    // Try to play
    const playPromise = friendResultAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log("Audio play failed:", err);
      });
    }
  }

  function stopShakeItInTheClub() {
    if (!friendResultAudio) return;
    friendResultAudio.pause();
    friendResultAudio.currentTime = 0;
  }

  function showOnlyPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) target.classList.add("active");
    blurActiveField();
  }

  function normalizeBasic(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function compact(value) {
    return normalizeBasic(value).replace(/\s+/g, "");
  }

  function levenshtein(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[m][n];
  }

  function similarEnough(userAnswer, expected) {
    const userNorm = normalizeBasic(userAnswer);
    const expectedNorm = normalizeBasic(expected);
    const userCompact = compact(userAnswer);
    const expectedCompact = compact(expected);

    if (!userNorm) return false;
    if (userNorm === expectedNorm) return true;
    if (userNorm.includes(expectedNorm) || expectedNorm.includes(userNorm)) return true;
    if (userCompact === expectedCompact) return true;

    const userTokens = userNorm.split(" ").filter(Boolean);
    const expectedTokens = expectedNorm.split(" ").filter(Boolean);
    const overlap = expectedTokens.filter((token) => userTokens.includes(token)).length;
    const ratio = expectedTokens.length ? overlap / expectedTokens.length : 0;
    if (ratio >= 0.7) return true;

    const distance = levenshtein(userCompact, expectedCompact);
    const longest = Math.max(userCompact.length, expectedCompact.length, 1);
    if (distance <= 2 || distance / longest <= 0.22) return true;

    return false;
  }

  function answerMatches(userAnswer, acceptedAnswers) {
    return acceptedAnswers.some((answer) => similarEnough(userAnswer, answer));
  }

  function loadOddOneOutLevel(index) {
    oddOneOutLocked = false;
    oddOneOutIndex = index;

    const level = oddOneOutLevels[index];
    oddOneOutLevelNumber.textContent = String(index + 1);
    oddOneOutStatus.textContent = "Spot the odd one out. Three words relate to the song, one doesn't.";
    oddOneOutHint.textContent = level.hint;
    oddOneOutResult.textContent = "";
    oddOneOutResult.className = "odd-one-out-result";
    
    if (index === oddOneOutLevels.length - 1) {
      oddOneOutNextBtn.textContent = "Finish Game";
    } else {
      oddOneOutNextBtn.textContent = "Next Level";
    }
    
    oddOneOutNextBtn.style.display = "none";

    // Clear and rebuild grid
    oddOneOutGrid.innerHTML = "";
    
    level.words.forEach((word, wordIndex) => {
      const block = document.createElement("div");
      block.className = "odd-one-out-block";
      block.textContent = word;
      block.dataset.index = wordIndex;
      block.addEventListener("click", () => handleOddOneOutClick(wordIndex));
      oddOneOutGrid.appendChild(block);
    });

    setTimeout(() => blurActiveField(), 0);
  }

  function handleOddOneOutClick(clickedIndex) {
    if (oddOneOutLocked) return;

    const level = oddOneOutLevels[oddOneOutIndex];
    const blocks = oddOneOutGrid.querySelectorAll(".odd-one-out-block");
    
    oddOneOutLocked = true;

    if (clickedIndex === level.oddOneOut) {
      // Correct - green
      blocks[clickedIndex].classList.add("correct");
      oddOneOutResult.textContent = "Correct! The odd one out was " + level.correctWord;
      oddOneOutResult.classList.add("correct-text");
    } else {
      // Incorrect - red
      blocks[clickedIndex].classList.add("incorrect");
      blocks[level.oddOneOut].classList.add("correct");
      oddOneOutResult.textContent = "Not quite! The odd one out was " + level.correctWord;
      oddOneOutResult.classList.add("incorrect-text");
    }

    // Show the next button
    oddOneOutNextBtn.style.display = "inline-block";
    oddOneOutNextBtn.style.visibility = "visible";
    oddOneOutNextBtn.style.opacity = "1";
  }

  function goToNextOddOneOutLevel() {
    if (oddOneOutIndex >= oddOneOutLevels.length - 1) {
      showOnlyPage("pageA");
      // Start shake-it-in-the-club when transitioning to quiz intro
      playShakeItInTheClub();
      return;
    }
    loadOddOneOutLevel(oddOneOutIndex + 1);
  }

  function renderFriendQuizQuestion() {
    if (showDigDeeper) {
      friendQuizProgress.textContent = "";
      friendQuizQuestion.textContent = "";
      friendQuizOptions.textContent = "";
      friendQuizExtra.textContent = "";
      friendQuizAnswer.style.display = "none";
      friendQuizError.textContent = "";
      friendQuizNextBtn.textContent = "Continue";
      
      let digDeeperDiv = document.getElementById("digDeeperText");
      if (!digDeeperDiv) {
        digDeeperDiv = document.createElement("div");
        digDeeperDiv.id = "digDeeperText";
        digDeeperDiv.className = "dig-deeper-text";
        friendQuizQuestion.parentNode.insertBefore(digDeeperDiv, friendQuizQuestion);
      }
      digDeeperDiv.innerHTML = "Time to dig deeper into your brain, lets see how well you really know me Brother Keshav";
      digDeeperDiv.style.display = "block";
      return;
    }

    const digDeeperDiv = document.getElementById("digDeeperText");
    if (digDeeperDiv) {
      digDeeperDiv.style.display = "none";
    }

    const item = friendQuizQuestions[friendQuizIndex];
    friendQuizProgress.textContent = `Question ${friendQuizIndex + 1} of ${friendQuizQuestions.length}`;
    friendQuizQuestion.textContent = item.question;
    friendQuizOptions.textContent = item.options || "";
    friendQuizExtra.textContent = item.extra || "";
    friendQuizAnswer.style.display = "block";
    friendQuizAnswer.value = friendQuizResponses[friendQuizIndex] || "";
    friendQuizError.textContent = "";
    friendQuizNextBtn.textContent = friendQuizIndex === friendQuizQuestions.length - 1 ? "Finish quiz" : "Next";

    setTimeout(() => blurActiveField(), 0);
  }

  function rainBlueSparks() {
    if (!resultsSparks) return;
    resultsSparks.innerHTML = "";

    for (let i = 0; i < 52; i++) {
      const spark = document.createElement("span");
      spark.className = "blue-spark";
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDelay = `${Math.random() * 0.9}s`;
      spark.style.animationDuration = `${1.2 + Math.random() * 1.4}s`;
      spark.style.height = `${60 + Math.random() * 120}px`;
      resultsSparks.appendChild(spark);
    }
  }

  function showFriendQuizResults() {
    showOnlyPage("friendQuizResults");
    // Ensure shake-it-in-the-club continues playing on results page
    if (friendResultAudio && friendResultAudio.paused) {
      playShakeItInTheClub();
    }
    rainBlueSparks();
    friendQuizScore.textContent = `You got ${friendQuizCorrect}/${friendQuizQuestions.length} questions correct!`;
    friendQuizMessage.textContent =
      friendQuizCorrect > 15
        ? "Wow Keshav, well done, I'm very proud of you man, You know me so well"
        : "Damn bruh, thought we knew each other better. Nah I'm kidding. It's aight. Love u Bala Boi";
  }

  function unlockInvite() {
    // Stop shake-it-in-the-club
    stopShakeItInTheClub();
    
    document.body.classList.remove("locked");
    document.body.classList.add("scroll-mode");
    
    // Resume nigara-falls from where it was paused
    if (music) {
      const currentSrc = (music.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
      if (!currentSrc.includes("nigarafalls")) {
        music.src = "nigara-falls.mp3";
        music.load();
      }
      try {
        music.currentTime = nigaraFallsPauseTime || 0;
      } catch (e) {}
      music.volume = 0.7;
      music.loop = true;
      music.play().catch(() => {});
    }
    
    document.getElementById("page2")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitFriendQuizAnswer() {
    if (showDigDeeper) {
      showDigDeeper = false;
      friendQuizIndex = 10;
      renderFriendQuizQuestion();
      return;
    }

    const answer = friendQuizAnswer.value.trim();

    if (!answer) {
      friendQuizError.textContent = "Don't be a bum, answer the question";
      return;
    }

    friendQuizResponses[friendQuizIndex] = answer;
    const current = friendQuizQuestions[friendQuizIndex];

    if (answerMatches(answer, current.answers)) {
      friendQuizCorrect += 1;
    }

    if (friendQuizIndex === 9) {
      showDigDeeper = true;
      renderFriendQuizQuestion();
      return;
    }

    if (friendQuizIndex === friendQuizQuestions.length - 1) {
      showFriendQuizResults();
      return;
    }

    friendQuizIndex += 1;
    renderFriendQuizQuestion();
  }

  function stopResultAudio() {
    if (!resultAudio) return;
    resultAudio.pause();
    resultAudio.currentTime = 0;
    resultAudio.removeAttribute("src");
  }

  function enterQuizAudioMode() {
    stopResultAudio();
    if (music && !music.paused) {
      nigaraFallsPauseTime = music.currentTime || 0;
    }
    pauseAllAudio();
  }

  function exitQuizAudioMode() {
    stopResultAudio();
    
    if (friendResultAudio) {
      friendResultAudio.pause();
      friendResultAudio.currentTime = 0;
    }

    if (document.body.classList.contains("scroll-mode")) {
      if (music) {
        const currentSrc = (music.getAttribute("src") || "").toLowerCase().replace(/-/g, '');
        if (!currentSrc.includes("nigarafalls")) {
          music.src = "nigara-falls.mp3";
          music.load();
        }
        try {
          music.currentTime = nigaraFallsPauseTime || 0;
        } catch (e) {}
        music.volume = 0.7;
        music.loop = true;
        music.play().catch(() => {});
      }
    } else {
      playShakeItInTheClub();
    }
  }

  function resetQuizUI() {
    quizForm?.reset();

    if (quizResult) quizResult.style.display = "none";
    if (quizResultInner) {
      quizResultInner.classList.remove("show");
      quizResultInner.innerHTML = "";
    }
    if (resultCover) {
      resultCover.classList.remove("show");
      resultCover.removeAttribute("src");
      resultCover.onload = null;
    }
    if (resultBlurb) resultBlurb.textContent = "";
    quizOverlay?.classList.remove("on");
  }

  function openQuiz() {
    scrollYBeforeQuiz = window.scrollY || 0;
    enterQuizAudioMode();
    resetQuizUI();

    document.body.classList.add("quiz-open");
    quizScreen?.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      if (quizScreen) quizScreen.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "auto" });
      blurActiveField();
    }, 0);
  }

  function closeQuiz() {
    document.body.classList.remove("quiz-open");
    quizScreen?.setAttribute("aria-hidden", "true");
    stopResultAudio();

    setTimeout(() => {
      window.scrollTo({ top: scrollYBeforeQuiz, behavior: "auto" });
    }, 0);

    exitQuizAudioMode();
  }

  function computeQuizResult() {
    if (!quizForm) return { error: "Quiz not found." };
    const data = new FormData(quizForm);
    const playerName = (data.get("quizName") || "").toString().trim();

    if (!playerName) {
      return { error: "Type your name first." };
    }

    for (let i = 1; i <= 6; i++) {
      if (!data.get(`q${i}`)) return { error: "Answer all 6 questions first." };
    }

    const scores = Object.fromEntries(SONG_KEYS.map((key) => [key, 0]));

    for (const [key, value] of data.entries()) {
      if (key.startsWith("q") && scores[value] !== undefined) scores[value] += 1;
    }

    const max = Math.max(...Object.values(scores));
    const top = Object.keys(scores).filter((key) => scores[key] === max);
    const chosen = top[Math.floor(Math.random() * top.length)];

    return { chosen, playerName };
  }

  function playResultSong(songKey) {
    pauseAllAudio();

    if (resultCover) {
      resultCover.src = `${songKey}.jpg`;
      resultCover.classList.add("show");
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
      resultAudio.src = `${songKey}.mp3`;
      resultAudio.load();
      resultAudio.play().catch(() => {});
    }
  }

  function revealQuizResult(songKey, playerName) {
    if (!quizResult || !quizResultInner) return;

    const safeName = playerName && playerName.trim() ? playerName.trim() : "You";

    quizResult.style.display = "block";
    quizResultInner.classList.remove("show");
    quizResultInner.innerHTML = `<h2>${safeName}, you are <span>${SONG_PRETTY[songKey] || "a Mystery Track"}</span></h2>`;

    if (resultBlurb) resultBlurb.textContent = SONG_BLURB[songKey] || "";

    if (quizOverlay) {
      quizOverlay.classList.add("on");
      setTimeout(() => quizOverlay.classList.remove("on"), 900);
    }

    requestAnimationFrame(() => quizResultInner.classList.add("show"));
    playResultSong(songKey);

    const scrollToFullResult = () => {
      quizResult.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => window.scrollBy({ top: 140, left: 0, behavior: "smooth" }), 350);
      setTimeout(() => window.scrollBy({ top: 80, left: 0, behavior: "smooth" }), 900);
    };

    setTimeout(scrollToFullResult, 180);

    if (resultCover) {
      resultCover.onload = () => setTimeout(scrollToFullResult, 80);
    }
  }

  startBtn?.addEventListener("click", () => {
    showOnlyPage("page1");
    if (music) {
      music.src = "nigara-falls.mp3";
      music.load();
    }
    playNigaraFalls();
    loadOddOneOutLevel(0);
  });

  oddOneOutNextBtn?.addEventListener("click", goToNextOddOneOutLevel);

  beginFriendQuizBtn?.addEventListener("click", () => {
    friendQuizIndex = 0;
    friendQuizCorrect = 0;
    friendQuizResponses.length = 0;
    showDigDeeper = false;
    
    const existingDigDeeper = document.getElementById("digDeeperText");
    if (existingDigDeeper) {
      existingDigDeeper.remove();
    }
    
    showOnlyPage("friendQuizPage");
    
    // Ensure shake-it-in-the-club is playing when quiz starts
    playShakeItInTheClub();
    
    renderFriendQuizQuestion();
  });

  friendQuizNextBtn?.addEventListener("click", submitFriendQuizAnswer);

  friendQuizAnswer?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitFriendQuizAnswer();
    }
  });

  openInviteBtn?.addEventListener("click", unlockInvite);

  openQuizBtn?.addEventListener("click", openQuiz);
  quizBackBtn?.addEventListener("click", closeQuiz);
  quizCloseBtn?.addEventListener("click", closeQuiz);

  quizRetryBtn?.addEventListener("click", () => {
    resetQuizUI();
    stopResultAudio();
    if (quizScreen) quizScreen.scrollTop = 0;
    setTimeout(() => blurActiveField(), 0);
  });

  quizFinishBtn?.addEventListener("click", () => {
    const res = computeQuizResult();

    if (res.error) {
      if (!quizResult || !quizResultInner) return;
      quizResult.style.display = "block";
      quizResultInner.classList.remove("show");
      quizResultInner.innerHTML = `<h2>Hold up</h2><p>${res.error}</p>`;
      if (resultBlurb) resultBlurb.textContent = "";
      requestAnimationFrame(() => quizResultInner.classList.add("show"));
      setTimeout(() => quizResult.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return;
    }

    revealQuizResult(res.chosen, res.playerName);
  });
});
