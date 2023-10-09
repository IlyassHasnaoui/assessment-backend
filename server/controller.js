module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}



module.exports = {

    getFortune: (req, res) => {
        const fortunes = [ "A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "All your hard work will soon pay off.", "A pleasant surprise is in store for you.", "You will receive some high prize or award."];
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    }
};

module.exports = { 
    
    getAffirmation: (req, res) => {

        const affirmations = ["You are capable of achieving greatness!", "Your potential knows no bounds.", "Every day is a new opportunity for success.", "You radiate positivity and confidence.", "You are on the path to realizing your dreams."];
        
        let randomIndex = Math.floor(Math.random() * affirmations.length);
        let randomAffirmation = affirmations[randomIndex];
        res.status(200).send(randomAffirmation);
    }
};

module.exports = {

    addGoal: (req, res) => {

        const goals = [];

        const { goal } = req.body;
        if (goal) {
            goals.push(goal);
            res.status(201).send(goal);
        } else {
            res.status(400).send("Invalid goal.");
        }
    }
};



module.exports = {

    getQuoteOfTheDay: (req, res) => {
        const quotes = ["The only way to do great work is to love what you do. - Steve Jobs", "Believe you can and you're halfway there. -Theodore Roosevelt", "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", "Don't watch the clock; do what it does. Keep going. - Sam Levenson", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"];
        
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let quoteOfTheDay = quotes[randomIndex];
        res.status(200).send(quoteOfTheDay);
    }
};