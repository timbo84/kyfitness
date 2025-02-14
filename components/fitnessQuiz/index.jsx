"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AdvancedFitnessQuiz() {
  const questions = [
    {
      id: "goal",
      question: "What is your primary fitness goal?",
      options: [
        { text: "Build muscle", value: "strength" },
        { text: "Lose weight", value: "weight-loss" },
        { text: "Increase endurance", value: "endurance" },
        { text: "Improve overall health", value: "general-fitness" },
      ],
      multiSelect: false,
    },
    {
      id: "experience",
      question: "How experienced are you with training?",
      options: [
        { text: "Beginner (0-6 months)", value: "beginner" },
        { text: "Intermediate (6 months - 2 years)", value: "intermediate" },
        { text: "Advanced (2+ years)", value: "advanced" },
      ],
      multiSelect: false,
    },
    {
      id: "workout-type",
      question: "What type of workouts do you enjoy? (Select all that apply)",
      options: [
        { text: "Strength training", value: "strength" },
        { text: "Cardio & endurance", value: "cardio" },
        { text: "Bodyweight & calisthenics", value: "bodyweight" },
        { text: "High-intensity (HIIT)", value: "hiit" },
        { text: "Yoga & flexibility", value: "yoga" },
      ],
      multiSelect: true,
    },
    {
      id: "diet",
      question: "How would you describe your eating habits?",
      options: [
        { text: "I eat whatever I want", value: "flexible" },
        { text: "I try to eat healthy, but not strict", value: "balanced" },
        { text: "I follow a strict diet (keto, vegan, etc.)", value: "strict" },
        { text: "I have no idea what to eat", value: "unsure" },
      ],
      multiSelect: false,
    },
    {
      id: "commitment",
      question: "How many days per week can you commit to training?",
      options: [
        { text: "1-2 days", value: "low" },
        { text: "3-4 days", value: "medium" },
        { text: "5+ days", value: "high" },
      ],
      multiSelect: false,
    },
  ];

  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const handleSelect = (questionId, value, multiSelect) => {
    setAnswers((prev) => {
      if (multiSelect) {
        return {
          ...prev,
          [questionId]: prev[questionId] ? [...prev[questionId], value] : [value],
        };
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      handleResult();
    }
  };

  const handleResult = () => {
    let selectedGoal = answers.goal;
    let workoutPreference = answers["workout-type"] || [];

    let program = "general-fitness"; 

    if (selectedGoal === "strength") {
      program = "strength";
    } else if (selectedGoal === "weight-loss") {
      program = "weight-loss";
    } else if (selectedGoal === "endurance") {
      program = "endurance";
    }

    if (workoutPreference.includes("hiit") && selectedGoal === "weight-loss") {
      program = "hiit-weight-loss";
    } else if (workoutPreference.includes("bodyweight") && selectedGoal === "strength") {
      program = "calisthenics-strength";
    }

    setResult(program);
  };

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold" style={{ color: "#f1ffc4" }}>Find Your Perfect Training Plan</h2>

      <div className="quiz-container mx-auto p-4 shadow rounded" style={{ maxWidth: "600px", background: "#5d576b", color: "#f1ffc4" }}>
        <div className="progress mb-3" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <h5 className="fw-bold">{questions[step].question}</h5>
              {questions[step].options.map((option) => (
                <button
                  key={option.value}
                  className={`btn mx-2 my-2 ${answers[questions[step].id]?.includes(option.value) ? "btn-light text-dark" : "btn-outline-light"}`}
                  onClick={() => handleSelect(questions[step].id, option.value, questions[step].multiSelect)}
                >
                  {option.text}
                </button>
              ))}
              <div className="mt-3">
                <button onClick={nextStep} className="custom-btn">Next</button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h4 className="fw-bold">Your Recommended Program: {result}</h4>
              <br />
              <Link href={`/programs/${result}`} className="custom-btn mt-3 fw-bold px-4 py-2">
                View Program
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
