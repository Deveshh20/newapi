const express = require('express');
const app = express();
const port = 3000;
const cors=require('cors')
// Survey questions data
const surveyQuestions = {
    technology: [
        "How frequently do you update your devices (smartphones, laptops, tablets, etc.)?",
        "What is your primary source of technology news?",
        "Which emerging technology are you most excited about?",
        "How concerned are you about data privacy and security?",
        "How often do you use smart home devices (e.g., smart speakers, smart lights)?"
    ],
    health: [
        "How often do you engage in physical exercise?",
        "How would you rate your overall mental health?",
        "How often do you visit a healthcare professional for regular check-ups?",
        "What is your primary source of health and wellness information?",
        "How often do you feel stressed or anxious?"
    ],
    education: [
        "What is your highest level of educational attainment?",
        "How do you prefer to learn new information?",
        "How important do you think continuing education is for career advancement?",
        "How often do you participate in professional development or training programs?",
        "What is the biggest barrier to furthering your education?"
    ]
};

// Routes to fetch survey questions
app.get('/survey/technology', (req, res) => {
    res.json(surveyQuestions.technology);
});

app.get('/survey/health', (req, res) => {
    res.json(surveyQuestions.health);
});

app.get('/survey/education', (req, res) => {
    res.json(surveyQuestions.education);
});

// Start the server
app.listen(port, () => {
    console.log(`Survey API server running at http://localhost:${port}`);
});
app.use(cors());
