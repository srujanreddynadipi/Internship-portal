document.getElementById('jobPostForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const jobData = {
        companyName: formData.get('companyName'),
        jobTitle: formData.get('jobTitle'),
        location: formData.get('location'),
        jobType: formData.get('jobType'),
        experienceLevel: formData.get('experienceLevel'),
        salaryMin: formData.get('salaryMin'),
        salaryMax: formData.get('salaryMax'),
        skills: formData.get('skills').split(',').map(skill => skill.trim()),
        description: formData.get('description'),
        requirements: formData.get('requirements')
    };

    try {
        const response = await fetch('http://localhost:3000/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        });

        if (response.ok) {
            alert('Job posted successfully!');
            e.target.reset();
        } else {
            const error = await response.json();
            alert(error.message || 'Error posting job');
        }
    } catch (error) {
        alert('Error connecting to server');
        console.error(error);
    }
});