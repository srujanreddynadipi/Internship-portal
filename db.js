const mongoose = require('mongoose');
const jobs = require('./components/findjob/findjobs').jobs;

// Initialize database with sample jobs
async function initializeDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/jobportal', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const Job = mongoose.model('Job');
        
        // Clear existing jobs
        await Job.deleteMany({});
        
        // Insert sample jobs
        await Job.insertMany(jobs);
        
        console.log('Database initialized with sample jobs');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}


module.exports = { initializeDB };