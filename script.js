const questions = [
  {
    argument:
      "You should not trust Maya's point about the study policy because she failed one class last year.",
    choices: ["Ad hominem", "Red herring", "Weak analogy", "Bandwagon"],
    correct: 0,
    fallacy: "Ad hominem",
    explanation:
      "This argument attacks Maya personally instead of addressing her actual claim about the policy.",
    improve:
      "Respond to her reasons directly, such as whether the policy helps learning outcomes.",
    meter: {
      evidence: 18,
      logic: 22,
      relevance: 24,
      fairness: 10,
      clarity: 56,
    },
  },
  {
    argument:
      "Liam says we should limit phone use in class, so he basically wants to ban all technology forever.",
    choices: [
      "False dilemma",
      "Straw man",
      "Appeal to emotion",
      "Post hoc fallacy",
    ],
    correct: 1,
    fallacy: "Straw man",
    explanation:
      "It misrepresents Liam's moderate position as an extreme one, then attacks that distortion.",
    improve:
      "Address his real claim about phone limits instead of a made-up total ban.",
    meter: {
      evidence: 20,
      logic: 26,
      relevance: 35,
      fairness: 18,
      clarity: 52,
    },
  },
  {
    argument:
      "Either we cancel group projects entirely or students will keep getting unequal grades.",
    choices: ["False dilemma", "Circular reasoning", "Bandwagon", "Ad hominem"],
    correct: 0,
    fallacy: "False dilemma",
    explanation:
      "The speaker presents only two options while ignoring reasonable alternatives in between.",
    improve:
      "Consider other options, like peer evaluations or clearer role-based grading.",
    meter: {
      evidence: 30,
      logic: 28,
      relevance: 47,
      fairness: 24,
      clarity: 62,
    },
  },
  {
    argument:
      "If we allow one deadline extension, soon no deadlines will matter and the whole course will collapse.",
    choices: [
      "Hasty generalization",
      "Slippery slope",
      "Red herring",
      "Appeal to authority",
    ],
    correct: 1,
    fallacy: "Slippery slope",
    explanation:
      "It assumes a small step will trigger extreme consequences without showing a solid causal chain.",
    improve:
      "Provide evidence for likely outcomes, or explain safeguards for limited extensions.",
    meter: {
      evidence: 25,
      logic: 29,
      relevance: 53,
      fairness: 31,
      clarity: 60,
    },
  },
  {
    argument:
      "This source is reliable because it tells the truth, and we know it tells the truth because it is reliable.",
    choices: [
      "Circular reasoning",
      "Post hoc fallacy",
      "Weak analogy",
      "Straw man",
    ],
    correct: 0,
    fallacy: "Circular reasoning",
    explanation:
      "The conclusion is repeated as its own support, so no independent evidence is offered.",
    improve:
      "Use outside evidence, such as verification records or independent corroboration.",
    meter: {
      evidence: 12,
      logic: 15,
      relevance: 48,
      fairness: 40,
      clarity: 55,
    },
  },
  {
    argument:
      "Two students in that major cheated, so that major encourages dishonesty.",
    choices: [
      "Red herring",
      "Appeal to emotion",
      "Hasty generalization",
      "False dilemma",
    ],
    correct: 2,
    fallacy: "Hasty generalization",
    explanation:
      "It draws a broad conclusion about an entire group from a very small sample.",
    improve:
      "Use wider data before making claims about an entire major or department.",
    meter: {
      evidence: 17,
      logic: 24,
      relevance: 57,
      fairness: 20,
      clarity: 63,
    },
  },
  {
    argument:
      "If you vote against this policy, think about how heartbroken struggling students will feel tonight.",
    choices: [
      "Appeal to emotion",
      "Bandwagon",
      "Ad hominem",
      "Circular reasoning",
    ],
    correct: 0,
    fallacy: "Appeal to emotion",
    explanation:
      "The argument tries to persuade mainly through feelings rather than reasons and evidence.",
    improve:
      "Include evidence about how the policy affects students, then discuss emotions as context.",
    meter: {
      evidence: 23,
      logic: 31,
      relevance: 60,
      fairness: 42,
      clarity: 64,
    },
  },
  {
    argument:
      "A famous actor said this diet plan is scientifically perfect, so it must be true.",
    choices: [
      "Appeal to authority",
      "Straw man",
      "Red herring",
      "Post hoc fallacy",
    ],
    correct: 0,
    fallacy: "Appeal to authority",
    explanation:
      "Celebrity status does not automatically make someone an expert in nutrition science.",
    improve:
      "Use qualified experts and peer-reviewed research instead of fame alone.",
    meter: {
      evidence: 22,
      logic: 27,
      relevance: 58,
      fairness: 46,
      clarity: 66,
    },
  },
  {
    argument:
      "Why discuss the plagiarism report when the real issue is that campus parking is terrible?",
    choices: ["Weak analogy", "Red herring", "False dilemma", "Ad hominem"],
    correct: 1,
    fallacy: "Red herring",
    explanation:
      "It introduces an unrelated issue to distract from the topic under discussion.",
    improve:
      "Stay focused on the plagiarism issue first, then discuss parking separately.",
    meter: {
      evidence: 26,
      logic: 34,
      relevance: 14,
      fairness: 41,
      clarity: 59,
    },
  },
  {
    argument:
      "Everyone in our dorm uses that note-sharing app, so it is clearly the best study method.",
    choices: [
      "Bandwagon",
      "Appeal to emotion",
      "Slippery slope",
      "Circular reasoning",
    ],
    correct: 0,
    fallacy: "Bandwagon",
    explanation: "Popularity does not prove quality or effectiveness.",
    improve:
      "Compare study outcomes and learning quality, not just how many people use it.",
    meter: {
      evidence: 29,
      logic: 35,
      relevance: 65,
      fairness: 49,
      clarity: 67,
    },
  },
  {
    argument:
      "Running a student council is just like running a hospital, so both need exactly the same decision rules.",
    choices: ["Weak analogy", "Post hoc fallacy", "False dilemma", "Straw man"],
    correct: 0,
    fallacy: "Weak analogy",
    explanation:
      "The comparison ignores key differences between those two contexts.",
    improve:
      "Use analogies with stronger structural similarities, or justify which parts transfer.",
    meter: {
      evidence: 31,
      logic: 33,
      relevance: 45,
      fairness: 52,
      clarity: 61,
    },
  },
  {
    argument:
      "I wore my lucky pin and then got an A, so the pin caused my grade improvement.",
    choices: [
      "Ad hominem",
      "Hasty generalization",
      "Post hoc fallacy",
      "Appeal to authority",
    ],
    correct: 2,
    fallacy: "Post hoc fallacy",
    explanation:
      "Just because one event happens before another does not mean it caused it.",
    improve:
      "Consider other causes, such as preparation, tutoring, or better study habits.",
    meter: {
      evidence: 21,
      logic: 25,
      relevance: 54,
      fairness: 51,
      clarity: 63,
    },
  },
];

const fallacyDefinitions = [
  {
    name: "Ad hominem",
    definition: "Attacking the person instead of the argument.",
  },
  {
    name: "Straw man",
    definition:
      "Misrepresenting someone else's claim to make it easier to attack.",
  },
  {
    name: "False dilemma",
    definition: "Presenting only two options when more possibilities exist.",
  },
  {
    name: "Slippery slope",
    definition:
      "Claiming one small step will lead to extreme results without enough proof.",
  },
  {
    name: "Circular reasoning",
    definition: "Using the conclusion as support for itself.",
  },
  {
    name: "Hasty generalization",
    definition: "Making a broad claim from too little evidence.",
  },
  {
    name: "Appeal to emotion",
    definition: "Relying mainly on feelings instead of evidence and reasoning.",
  },
  {
    name: "Appeal to authority",
    definition:
      "Treating a claim as true mainly because an authority says it, especially when that authority is not relevant.",
  },
  {
    name: "Red herring",
    definition:
      "Bringing in a distraction that is not relevant to the main issue.",
  },
  {
    name: "Bandwagon",
    definition:
      "Arguing something is true or best because many people believe it or do it.",
  },
  {
    name: "Weak analogy",
    definition:
      "Comparing two things that are not similar in the ways that matter.",
  },
  {
    name: "Post hoc fallacy",
    definition:
      "Assuming that because one thing came first, it caused what came later.",
  },
];

const debateSkills = [
  {
    term: "Claim",
    icon: "📝",
    text: "The main point someone is trying to prove.",
  },
  {
    term: "Evidence",
    icon: "🔍",
    text: "Facts, examples, research, or testimony used to support the claim.",
  },
  {
    term: "Warrant",
    icon: "⚖️",
    text: "The reasoning that connects the evidence to the claim.",
  },
  {
    term: "Counterargument",
    icon: "🎙️",
    text: "The other side's strongest objection to your claim.",
  },
  {
    term: "Rebuttal",
    icon: "📣",
    text: "Your response to the counterargument with reasons or evidence.",
  },
  {
    term: "Ethos",
    icon: "🧠",
    text: "Credibility: why the speaker or source should be trusted.",
  },
  {
    term: "Pathos",
    icon: "❤️",
    text: "Emotional appeal: how feelings can shape persuasion.",
  },
  {
    term: "Logos",
    icon: "📊",
    text: "Logic and reasoning: how clearly the argument makes sense.",
  },
];

const meterKeys = ["evidence", "logic", "relevance", "fairness", "clarity"];

const argumentText = document.getElementById("argumentText");
const choicesWrap = document.getElementById("choices");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const feedback = document.getElementById("feedback");
const resultText = document.getElementById("resultText");
const explanationText = document.getElementById("explanationText");
const improveText = document.getElementById("improveText");
const nextBtn = document.getElementById("nextBtn");
const reviewScreen = document.getElementById("reviewScreen");
const quizCard = document.getElementById("quizCard");
const finalScore = document.getElementById("finalScore");
const resultTitle = document.getElementById("resultTitle");
const encouragement = document.getElementById("encouragement");
const restartBtn = document.getElementById("restartBtn");
const summaryList = document.getElementById("fallacySummary");
const skillsWrap = document.getElementById("debateSkills");
const startBtn = document.getElementById("startBtn");

let currentIndex = 0;
let score = 0;
let locked = false;
let started = false;

function renderSkills() {
  skillsWrap.innerHTML = debateSkills
    .map(
      (skill) =>
        `<article class="skill-item"><h3>${skill.icon} ${skill.term}</h3><p>${skill.text}</p></article>`,
    )
    .join("");
}

function renderSummary() {
  summaryList.innerHTML = fallacyDefinitions
    .map(
      (item) =>
        `<div class="summary-item"><strong>${item.name}:</strong> ${item.definition}</div>`,
    )
    .join("");
}

function updateStatus() {
  progressText.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  scoreText.textContent = `Score: ${score}`;
}

function resetBars() {
  meterKeys.forEach((key) => {
    const bar = document.getElementById(`bar-${key}`);
    const value = document.getElementById(`val-${key}`);
    bar.style.width = "0%";
    value.textContent = "0%";
  });
}

function animateBars(values) {
  meterKeys.forEach((key, i) => {
    const bar = document.getElementById(`bar-${key}`);
    const value = document.getElementById(`val-${key}`);
    const target = values[key];

    setTimeout(() => {
      bar.style.width = `${target}%`;
      value.textContent = `${target}%`;
    }, 90 * i);
  });
}

function renderQuestion() {
  const q = questions[currentIndex];
  locked = false;

  argumentText.textContent = q.argument;
  choicesWrap.innerHTML = "";
  feedback.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultText.className = "result";
  resetBars();

  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.type = "button";
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(idx));
    choicesWrap.appendChild(btn);
  });

  updateStatus();
}

function selectAnswer(choiceIndex) {
  if (locked) {
    return;
  }

  locked = true;
  const q = questions[currentIndex];
  const buttons = [...choicesWrap.querySelectorAll("button")];
  const isCorrect = choiceIndex === q.correct;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add("correct");
    }
    if (idx === choiceIndex && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += 1;
    resultText.textContent = "Correct. Good catch.";
    resultText.classList.add("ok");
  } else {
    resultText.textContent = `Not quite. The correct answer is ${q.fallacy}.`;
    resultText.classList.add("no");
  }

  explanationText.textContent = `Why: ${q.explanation}`;
  improveText.textContent = `Improve it: ${q.improve}`;
  feedback.classList.remove("hidden");
  animateBars(q.meter);
  scoreText.textContent = `Score: ${score}`;

  nextBtn.textContent =
    currentIndex === questions.length - 1 ? "See Final Review" : "Next";
  nextBtn.classList.remove("hidden");
}

function getResultTier(total) {
  if (total >= 10) {
    return {
      title: "Sharp Critical Thinker",
      message:
        "You consistently spot weak reasoning and evaluate arguments with strong judgment.",
    };
  }
  if (total >= 7) {
    return {
      title: "Strong Debater",
      message:
        "You read arguments carefully and catch many important reasoning problems.",
    };
  }
  if (total >= 4) {
    return {
      title: "Developing Argument Analyst",
      message:
        "Your foundation is solid. Keep practicing to sharpen your speed and precision.",
    };
  }
  return {
    title: "Keep Practicing",
    message:
      "Each round builds your skill. Focus on evidence, logic, and relevance as you review.",
  };
}

function showReview() {
  quizCard.classList.add("hidden");
  reviewScreen.classList.remove("hidden");

  const tier = getResultTier(score);
  finalScore.textContent = `Final score: ${score} / ${questions.length}`;
  resultTitle.textContent = tier.title;
  encouragement.textContent = tier.message;

  progressText.textContent = "Quiz complete";
}

function restartQuiz() {
  started = true;
  currentIndex = 0;
  score = 0;
  reviewScreen.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
  window.location.hash = "quiz";
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showReview();
  }
});

restartBtn.addEventListener("click", restartQuiz);

startBtn.addEventListener("click", () => {
  if (!started) {
    started = true;
    quizCard.classList.remove("hidden");
    renderQuestion();
  }
});

renderSkills();
renderSummary();
progressText.textContent = `Ready to begin`;
scoreText.textContent = `Score: 0`;

if (window.location.hash) {
  history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search,
  );
}
window.scrollTo({ top: 0, behavior: "auto" });
