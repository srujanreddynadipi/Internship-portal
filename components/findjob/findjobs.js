const jobs = [
  {
      id: 1,
      company: "Google",
      position: "Data Scientist",
      details: "Data Science, Data Engineer, Full Stack Developer",
      location: "Bangalore",
      timePosted: "1 min ago",
      type: "Full-Time",
      applicants: "200",
      division: "Data Engineer",
      salary: "₹22 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "We are looking for a Data Scientist to analyze complex data and help drive business decisions. The ideal candidate has strong statistical skills, programming abilities, and experience with machine learning."
  },
  {
      id: 2,
      company: "TikTok",
      position: "Data Analyst",
      details: "Data Analyst, Product Analyst",
      location: "Gurgaon",
      timePosted: "10 mins ago",
      type: "Part-Time",
      applicants: "120",
      division: "Data Analyst",
      salary: "₹14 lakhs",
      period: "Year",
      bgColor: "yellow-bg",
      description: "As a Data Analyst at TikTok, you'll work with cross-functional teams to analyze user behavior, create reports, and provide insights that drive product decisions."
  },
  {
      id: 3,
      company: "YouTube",
      position: "Full Stack Developer",
      details: "Full Stack",
      location: "Mumbai",
      timePosted: "1 min ago",
      type: "Full-Time",
      applicants: "200",
      division: "Full Stack Developer",
      salary: "₹18 lakhs",
      period: "Year",
      bgColor: "red-bg",
      description: "Join our engineering team to build and maintain web applications. You should have experience with both frontend and backend technologies and be comfortable working across the entire stack."
  },
  {
      id: 4,
      company: "Apple",
      position: "UI/UX Designer",
      details: "UI/UX Designer",
      location: "Bangalore",
      timePosted: "1 day ago",
      type: "Full-Time",
      applicants: "10",
      division: "Designer App",
      salary: "₹20 lakhs",
      period: "Year",
      bgColor: "purple-bg",
      description: "Design user interfaces for Apple products that are intuitive, accessible, and align with our design philosophy. You'll work closely with product managers and engineers to create exceptional user experiences."
  },
  {
      id: 5,
      company: "Amazon",
      position: "React Developer",
      details: "React",
      location: "Bangalore",
      timePosted: "2 weeks ago",
      type: "Full-Time",
      applicants: "7500",
      division: "Frontend",
      salary: "₹15 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "We're looking for a React developer to join our team. You'll build and maintain user interfaces for our web applications, working with our design and backend teams to deliver high-quality products."
  },
  {
      id: 6,
      company: "Adobe",
      position: "Backend Developer",
      details: "Backend Developer",
      location: "Bangalore",
      timePosted: "1 month ago",
      type: "Full-Time",
      applicants: "750",
      division: "Backend",
      salary: "₹16 lakhs",
      period: "Year",
      bgColor: "red-bg",
      description: "As a Backend Developer at Adobe, you'll design and implement server-side logic, maintain databases, and ensure high performance and responsiveness to requests from the front-end."
  },
  {
      id: 7,
      company: "Cisco",
      position: "Frontend Developer",
      details: "Frontend Developer",
      location: "Bangalore",
      timePosted: "1 day ago",
      type: "Full-Time",
      applicants: "75",
      division: "Frontend",
      salary: "₹12 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "Join our frontend team to create responsive and intuitive user interfaces. You should have experience with modern JavaScript frameworks and a good eye for design."
  },
  {
      id: 8,
      company: "Microsoft",
      position: "Full Stack Developer",
      details: "Full Stack Developer",
      location: "Bangalore",
      timePosted: "1 month ago",
      type: "Full-Time",
      applicants: "7500",
      division: "Full Stack",
      salary: "₹24 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "We're looking for a Full Stack Developer to join our team and help build web applications from the ground up. You should be comfortable working with both frontend and backend technologies."
  },
  {
      id: 9,
      company: "Asus",
      position: "Backend Developer",
      details: "Backend Developer",
      location: "Bangalore",
      timePosted: "2 hours ago",
      type: "Full-Time",
      applicants: "100",
      division: "Backend",
      salary: "₹10 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "Design and implement backend services for our products. You should have experience with scalable systems and be comfortable working with databases and APIs."
  },
  {
      id: 10,
      company: "Infosys",
      position: "System Designer",
      details: "System Design",
      location: "Bangalore",
      timePosted: "3 weeks ago",
      type: "Full-Time",
      applicants: "750",
      division: "System Design",
      salary: "₹18 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "As a System Designer, you'll architect solutions for complex business problems, defining system components, interfaces, and data flows. You should have experience with large-scale distributed systems."
  },
  {
      id: 11,
      company: "Netflix",
      position: "DevOps Engineer",
      details: "DevOps, Cloud Infrastructure",
      location: "Hyderabad",
      timePosted: "5 days ago",
      type: "Full-Time",
      applicants: "320",
      division: "Infrastructure",
      salary: "₹19 lakhs",
      period: "Year",
      bgColor: "red-bg",
      description: "Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure high availability and reliability of our services. Experience with AWS, Docker, and Kubernetes is required."
  },
  {
      id: 12,
      company: "Flipkart",
      position: "Product Manager",
      details: "Product Management, E-commerce",
      location: "Bangalore",
      timePosted: "2 days ago",
      type: "Full-Time",
      applicants: "450",
      division: "Product",
      salary: "₹21 lakhs",
      period: "Year",
      bgColor: "yellow-bg",
      description: "Lead product development from concept to launch, working with design, engineering, and marketing teams. You should have experience with e-commerce platforms and a track record of successful product launches."
  },
  {
      id: 13,
      company: "Oracle",
      position: "Database Administrator",
      details: "Database Management, SQL",
      location: "Mumbai",
      timePosted: "1 week ago",
      type: "Full-Time",
      applicants: "85",
      division: "Database",
      salary: "₹13 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "Manage and maintain our database systems, ensuring high performance, availability, and security. Experience with Oracle databases and performance tuning is required."
  },
  {
      id: 14,
      company: "IBM",
      position: "AI Research Scientist",
      details: "Artificial Intelligence, Machine Learning",
      location: "Delhi",
      timePosted: "3 days ago",
      type: "Full-Time",
      applicants: "65",
      division: "Research",
      salary: "₹23 lakhs",
      period: "Year",
      bgColor: "purple-bg",
      description: "Conduct research in the field of AI and machine learning, develop new algorithms, and publish findings in academic journals. PhD in Computer Science or a related field is preferred."
  },
  {
      id: 15,
      company: "Salesforce",
      position: "CRM Consultant",
      details: "Salesforce, CRM Configuration",
      location: "Pune",
      timePosted: "4 days ago",
      type: "Contract",
      applicants: "110",
      division: "CRM",
      salary: "₹9 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "Configure and customize Salesforce solutions for our clients, gathering requirements, designing solutions, and providing training. Salesforce certification is required."
  },
  {
      id: 16,
      company: "Accenture",
      position: "Cloud Architect",
      details: "Cloud Architecture, AWS, Azure",
      location: "Chennai",
      timePosted: "1 week ago",
      type: "Full-Time",
      applicants: "180",
      division: "Cloud",
      salary: "₹17 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "Design and implement cloud solutions for our clients, migrating applications to the cloud and optimizing for performance and cost. Experience with multiple cloud platforms is required."
  },
  {
      id: 17,
      company: "Tesla",
      position: "Embedded Systems Engineer",
      details: "Embedded Systems, C++, IoT",
      location: "Bangalore",
      timePosted: "2 weeks ago",
      type: "Full-Time",
      applicants: "95",
      division: "Engineering",
      salary: "₹16 lakhs",
      period: "Year",
      bgColor: "red-bg",
      description: "Develop software for embedded systems in our vehicles, working with hardware engineers to ensure reliable and efficient operation. Experience with real-time operating systems is required."
  },
  {
      id: 18,
      company: "Airbnb",
      position: "UX Researcher",
      details: "User Experience, Research",
      location: "Goa",
      timePosted: "3 days ago",
      type: "Full-Time",
      applicants: "60",
      division: "UX",
      salary: "₹11 lakhs",
      period: "Year",
      bgColor: "red-bg",
      description: "Conduct user research to inform our product design decisions, using a variety of qualitative and quantitative methods. Experience with usability testing and interview techniques is required."
  },
  {
      id: 19,
      company: "Twitter",
      position: "Data Engineer",
      details: "Data Engineering, Big Data",
      location: "Hyderabad",
      timePosted: "5 days ago",
      type: "Full-Time",
      applicants: "135",
      division: "Data",
      salary: "₹15 lakhs",
      period: "Year",
      bgColor: "blue-bg",
      description: "Build and maintain our data infrastructure, ensuring data quality, reliability, and accessibility. Experience with big data technologies like Hadoop and Spark is required."
  },
  {
      id: 20,
      company: "Uber",
      position: "Mobile Developer",
      details: "iOS, Android, Mobile Apps",
      location: "Bangalore",
      timePosted: "1 week ago",
      type: "Full-Time",
      applicants: "210",
      division: "Mobile",
      salary: "₹14 lakhs",
      period: "Year",
      bgColor: "yellow-bg",
      description: "Develop mobile applications for iOS and Android platforms, ensuring high performance, reliability, and a great user experience. Experience with Swift or Kotlin is required."
  }
];

// Logo service URLs - you can add more for redundancy
const logoServices = [
  "https://logo.clearbit.com/",    // Clearbit API
  "https://companieslogo.com/logo/",
  "https://www.brandfetch.com/api/logo/"
];

// Function to get company logo URL
function getCompanyLogo(company) {
  // Clean the company name for URL
  const companyName = company.toLowerCase().replace(/\s+/g, '');
  
  // Use the first logo service by default
  return `${logoServices[0]}${companyName}.com`;
}

// Function to handle logo loading errors
function handleLogoError(img, company) {
  // Try alternative logo service
  const index = logoServices.findIndex(service => img.src.includes(service));
  if (index < logoServices.length - 1) {
    // Try next service
    const companyName = company.toLowerCase().replace(/\s+/g, '');
    img.src = `${logoServices[index + 1]}${companyName}.com`;
  } else {
    // If all logo services fail, use a generic placeholder with company initials
    const initials = company.split(' ').map(word => word[0]).join('').toUpperCase();
    img.src = `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff&size=100`;
  }
}

// Function to create job cards dynamically
function createJobCards() {
  const wrapper = document.querySelector('.wrapper');
  
  // Clear existing cards
  wrapper.innerHTML = '';
  
  // Create new cards from the jobs array
  jobs.forEach(job => {
      const card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('data-job-id', job.id);
      
      card.innerHTML = `
          <div class="card-left ${job.bgColor}">
              <img src="${getCompanyLogo(job.company)}" alt="${job.company} logo" onerror="handleLogoError(this, '${job.company}')">
          </div>
          <div class="card-center">
              <h3>${job.company}</h3>
              <p class="card-detail">${job.details}</p>
              <p class="card-loc"><ion-icon name="location-outline"></ion-icon>${job.location}</p>
              <div class="card-sub">
                  <p><ion-icon name="today-outline"></ion-icon>${job.timePosted}</p>
                  <p><ion-icon name="hourglass-outline"></ion-icon>${job.type}</p>
                  <p><ion-icon name="people-outline"></ion-icon>${job.applicants} Applicants</p>
              </div>
          </div>
          <div class="card-right">
              <div class="card-tag">
                  <h5>Division</h5>
                  <a href="#">${job.division}</a>
              </div>
              <div class="card-salary">
                  <p><b>${job.salary}</b>/${job.period}</p>
              </div>
          </div>
          <ion-icon class="bookmark-icon" name="bookmark-outline" data-job-id="${job.id}"></ion-icon>
          <div class="additional-details" style="display: none; width: 100%; margin-top: 15px; padding-top: 15px; border-top: 1px solid #e7e7e7;">
              <h4>Job Description</h4>
              <p>${job.description}</p>
              <div class="action-buttons" style="margin-top: 15px;">
                  <button class="btn-apply">Apply Now</button>
                  <button class="btn-save">Save Job</button>
              </div>
          </div>
      `;
      
      wrapper.appendChild(card);
  });
  
  // Add event listeners for cards
  setupCardListeners();
  setupBookmarkListeners();
}

// Function to filter jobs based on category
function filterJobs(category) {
  if (category === 'Show All') {
      createJobCards();
      return;
  }
  
  const filteredJobs = jobs.filter(job => 
      job.details.includes(category) || 
      job.division.includes(category) ||
      job.position.includes(category)
  );
  
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
  
  if (filteredJobs.length === 0) {
      wrapper.innerHTML = '<p style="text-align: center; width: 100%; padding: 20px;">No jobs found matching your filter criteria.</p>';
      return;
  }
  
  filteredJobs.forEach(job => {
      const card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('data-job-id', job.id);
      
      card.innerHTML = `
          <div class="card-left ${job.bgColor}">
              <img src="${getCompanyLogo(job.company)}" alt="${job.company} logo" onerror="handleLogoError(this, '${job.company}')">
          </div>
          <div class="card-center">
              <h3>${job.company}</h3>
              <p class="card-detail">${job.details}</p>
              <p class="card-loc"><ion-icon name="location-outline"></ion-icon>${job.location}</p>
              <div class="card-sub">
                  <p><ion-icon name="today-outline"></ion-icon>${job.timePosted}</p>
                  <p><ion-icon name="hourglass-outline"></ion-icon>${job.type}</p>
                  <p><ion-icon name="people-outline"></ion-icon>${job.applicants} Applicants</p>
              </div>
          </div>
          <div class="card-right">
              <div class="card-tag">
                  <h5>Division</h5>
                  <a href="#">${job.division}</a>
              </div>
              <div class="card-salary">
                  <p><b>${job.salary}</b>/${job.period}</p>
              </div>
          </div>
          <ion-icon class="bookmark-icon" name="bookmark-outline" data-job-id="${job.id}"></ion-icon>
          <div class="additional-details" style="display: none; width: 100%; margin-top: 15px; padding-top: 15px; border-top: 1px solid #e7e7e7;">
              <h4>Job Description</h4>
              <p>${job.description}</p>
              <div class="action-buttons" style="margin-top: 15px;">
                  <button class="btn-apply">Apply Now</button>
                  <button class="btn-save">Save Job</button>
              </div>
          </div>
      `;
      
      wrapper.appendChild(card);
  });
  
  // Re-add event listeners after filtering
  setupCardListeners();
  setupBookmarkListeners();
}

// Set up event listeners for filter buttons
function setupFilterListeners() {
  const filterButtons = document.querySelectorAll('.btn-filter');
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          const category = this.textContent;
          filterJobs(category);
          
          // Update active state on buttons
          filterButtons.forEach(btn => btn.classList.remove('active-filter'));
          this.classList.add('active-filter');
      });
  });
}

// Set up event listeners for cards to expand/collapse
function setupCardListeners() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.addEventListener('click', function(e) {
          // Ignore clicks on the bookmark icon
          if (e.target.classList.contains('bookmark-icon') || 
              e.target.closest('.bookmark-icon')) {
              return;
          }
          
          // Toggle additional details
          const details = this.querySelector('.additional-details');
          if (details) {
              const isExpanded = details.style.display !== 'none';
              
              // First close all expanded cards
              document.querySelectorAll('.additional-details').forEach(d => {
                  d.style.display = 'none';
                  d.closest('.card').classList.remove('expanded');
              });
              
              // Then open this one if it wasn't already open
              if (!isExpanded) {
                  details.style.display = 'block';
                  this.classList.add('expanded');
              }
          }
      });
  });
}

// Set up event listeners for bookmark icons
// Update the bookmark click handler in the setupBookmarkListeners function
function setupBookmarkListeners() {
    const bookmarkIcons = document.querySelectorAll('.bookmark-icon');
    bookmarkIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const card = this.closest('.card');
            const jobData = {
                id: card.getAttribute('data-job-id'),
                company: card.querySelector('.card-center h3').textContent,
                logo: card.querySelector('.card-left img').src,
                bgColor: card.querySelector('.card-left').classList[1],
                details: card.querySelector('.card-detail').textContent,
                location: card.querySelector('.card-loc').textContent,
                timePosted: card.querySelector('.card-sub p:nth-child(1)').textContent,
                type: card.querySelector('.card-sub p:nth-child(2)').textContent,
                applicants: card.querySelector('.card-sub p:nth-child(3)').textContent,
                division: card.querySelector('.card-tag a').textContent,
                salary: card.querySelector('.card-salary p').textContent
            };

            const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
            const isBookmarked = bookmarks.some(job => job.id === jobData.id);

            if (isBookmarked) {
                // Remove bookmark
                const updatedBookmarks = bookmarks.filter(job => job.id !== jobData.id);
                localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
                this.setAttribute('name', 'bookmark-outline');
                showToast('Job removed from bookmarks');
            } else {
                // Add bookmark
                bookmarks.push(jobData);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                this.setAttribute('name', 'bookmark');
                showToast('Job added to bookmarks');
            }
        });
    });
}

// Add this helper function for toast notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }, 100);
}

// Functions to save and retrieve bookmarked jobs
function saveJob(jobId) {
  let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
  if (!savedJobs.includes(jobId)) {
    savedJobs.push(jobId);
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }
}

function removeSavedJob(jobId) {
  let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
  savedJobs = savedJobs.filter(id => id !== jobId);
  localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
}

function loadSavedJobs() {
  let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
  savedJobs.forEach(jobId => {
    const bookmarkIcon = document.querySelector(`.bookmark-icon[data-job-id="${jobId}"]`);
    if (bookmarkIcon) {
      bookmarkIcon.setAttribute('name', 'bookmark');
    }
  });
}

// Set up sort functionality
function setupSortListeners() {
  const sortSelect = document.querySelector('.sort-list select');
  sortSelect.addEventListener('change', function() {
      const sortValue = parseInt(this.value);
      
      if (sortValue === 0) { // All (default)
          createJobCards();
      } else {
          // Sort by salary
          let sortedJobs = [...jobs];
          
          sortedJobs.sort((a, b) => {
              const salaryA = parseInt(a.salary.replace(/\D/g, ''));
              const salaryB = parseInt(b.salary.replace(/\D/g, ''));
              
              if (sortValue === 1) { // Lowest
                  return salaryA - salaryB;
              } else { // Highest
                  return salaryB - salaryA;
              }
          });
          
          const wrapper = document.querySelector('.wrapper');
          wrapper.innerHTML = '';
          
          sortedJobs.forEach(job => {
              const card = document.createElement('div');
              card.className = 'card';
              card.setAttribute('data-job-id', job.id);
              
              card.innerHTML = `
                  <div class="card-left ${job.bgColor}">
                      <img src="${getCompanyLogo(job.company)}" alt="${job.company} logo" onerror="handleLogoError(this, '${job.company}')">
                  </div>
                  <div class="card-center">
                      <h3>${job.company}</h3>
                      <p class="card-detail">${job.details}</p>
                      <p class="card-loc"><ion-icon name="location-outline"></ion-icon>${job.location}</p>
                      <div class="card-sub">
                          <p><ion-icon name="today-outline"></ion-icon>${job.timePosted}</p>
                          <p><ion-icon name="hourglass-outline"></ion-icon>${job.type}</p>
                          <p><ion-icon name="people-outline"></ion-icon>${job.applicants} Applicants</p>
                      </div>
                  </div>
                  <div class="card-right">
                      <div class="card-tag">
                          <h5>Division</h5>
                          <a href="#">${job.division}</a>
                      </div>
                      <div class="card-salary">
                          <p><b>${job.salary}</b>/${job.period}</p>
                      </div>
                  </div>
                  <ion-icon class="bookmark-icon" name="bookmark-outline" data-job-id="${job.id}"></ion-icon>
                  <div class="additional-details" style="display: none; width: 100%; margin-top: 15px; padding-top: 15px; border-top: 1px solid #e7e7e7;">
                      <h4>Job Description</h4>
                      <p>${job.description}</p>
                      <div class="action-buttons" style="margin-top: 15px;">
                          <button class="btn-apply">Apply Now</button>
                          <button class="btn-save">Save Job</button>
                      </div>
                  </div>
              `;
              
              wrapper.appendChild(card);
          });
          
          // Re-add event listeners after sorting
          setupCardListeners();
          setupBookmarkListeners();
          loadSavedJobs();
      }
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  createJobCards();
  setupFilterListeners();
  setupSortListeners();
  loadSavedJobs();
  
  // Mobile sidebar toggle
  const menuBar = document.querySelector('.menu-bar');
  if (menuBar) {
      menuBar.addEventListener('click', function() {
          document.querySelector('.sidebar').classList.toggle('active');
      });
  }
  
  // Close detail view on mobile
  const closeDetail = document.querySelector('.close-detail');
  if (closeDetail) {
      closeDetail.addEventListener('click', function() {
          document.querySelector('.detail').style.display = 'none';
      });
  }
});

// Global error handler for the logo loading
window.handleLogoError = handleLogoError;

// Add bookmark functionality
$(document).ready(function() {
  // Initialize bookmarks from localStorage
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  // Update bookmark icons for already bookmarked jobs
  updateBookmarkIcons();
  
  // Add click event listeners to all bookmark icons
  $('.bookmark-icon').on('click', function() {
    const card = $(this).closest('.card');
    const jobData = {
      company: card.find('.card-center h3').text(),
      logo: card.find('.card-left img').attr('src'),
      bgColor: card.find('.card-left').attr('class').split(' ')[1],
      role: card.find('.card-detail').text(),
      location: card.find('.card-loc').text(),
      time: card.find('.card-sub p:nth-child(1)').text(),
      type: card.find('.card-sub p:nth-child(2)').text(),
      applicants: card.find('.card-sub p:nth-child(3)').text(),
      division: card.find('.card-tag a').text(),
      salary: card.find('.card-salary p').text(),
      id: generateId(card.find('.card-center h3').text() + card.find('.card-detail').text())
    };

    const jobIndex = bookmarks.findIndex(job => job.id === jobData.id);
    
    if (jobIndex === -1) {
      // Job not bookmarked yet, add it
      bookmarks.push(jobData);
      $(this).attr('name', 'bookmark');
      $(this).css('color', '#5765c3');
    } else {
      // Job already bookmarked, remove it
      bookmarks.splice(jobIndex, 1);
      $(this).attr('name', 'bookmark-outline');
      $(this).css('color', '');
    }

    // Save updated bookmarks to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    // Show feedback to user
    const toast = $('<div class="toast"></div>');
    toast.text(jobIndex === -1 ? 'Job added to bookmarks!' : 'Job removed from bookmarks!');
    $('body').append(toast);
    
    setTimeout(function() {
      toast.addClass('show');
      setTimeout(function() {
        toast.removeClass('show');
        setTimeout(function() {
          toast.remove();
        }, 300);
      }, 2000);
    }, 100);
  });

  // Helper function to update bookmark icons based on localStorage
  function updateBookmarkIcons() {
    $('.card').each(function() {
      const card = $(this);
      const company = card.find('.card-center h3').text();
      const role = card.find('.card-detail').text();
      const id = generateId(company + role);
      
      if (bookmarks.some(job => job.id === id)) {
        card.find('.bookmark-icon').attr('name', 'bookmark');
        card.find('.bookmark-icon').css('color', '#5765c3');
      }
    });
  }

  // Helper function to generate a unique ID for each job
  function generateId(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
});

// Function to fetch jobs from the server
// Function to fetch jobs from the server
async function fetchJobs() {
    try {
        const response = await fetch('http://localhost:3000/api/jobs');
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
}

// Function to display jobs
function displayJobs(jobs) {
    const jobsContainer = document.querySelector('.job-list');
    jobsContainer.innerHTML = ''; // Clear existing jobs

    jobs.forEach(job => {
        const jobCard = `
            <div class="card">
                <div class="card-left blue-bg">
                    <img src="../../images/companies/default-company.jpg">
                </div>
                <div class="card-center">
                    <h3>${job.jobTitle}</h3>
                    <p>${job.companyName}</p>
                    <div class="card-sub">
                        <p>${job.location}</p>
                        <p>${job.jobType}</p>
                        <p>${job.experienceLevel}</p>
                    </div>
                    <div class="card-sub">
                        <p><b>Skills:</b> ${job.skills.join(', ')}</p>
                    </div>
                </div>
                <div class="card-right">
                    <div class="card-salary">
                        <p><b>₹${job.salaryMin} - ₹${job.salaryMax}</b>/Year</p>
                    </div>
                    <div class="card-tag">
                        <h5>Experience Level</h5>
                        <p>${job.experienceLevel}</p>
                    </div>
                    <a href="#" class="apply-btn" onclick="applyForJob('${job._id}')">Apply Now</a>
                </div>
                <ion-icon class="bookmark-icon" name="bookmark-outline"></ion-icon>
            </div>
        `;
        jobsContainer.innerHTML += jobCard;
    });
}

// Function to handle job application
function applyForJob(jobId) {
    // Add your job application logic here
    alert('Application submitted successfully!');
}

// Fetch jobs when the page loads
document.addEventListener('DOMContentLoaded', fetchJobs);