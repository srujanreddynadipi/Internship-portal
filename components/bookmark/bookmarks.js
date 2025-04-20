document.addEventListener('DOMContentLoaded', function() {
    const bookmarksContainer = document.getElementById('bookmarks-container');
    const emptyBookmarks = document.getElementById('empty-bookmarks');
    
    function loadBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        
        if (bookmarks.length === 0) {
            emptyBookmarks.style.display = 'block';
            bookmarksContainer.innerHTML = '';
            return;
        }
        
        emptyBookmarks.style.display = 'none';
        bookmarksContainer.innerHTML = bookmarks.map(job => `
            <div class="card" data-job-id="${job.id}">
                <div class="card-left ${job.bgColor}">
                    <img src="${job.logo}" alt="${job.company} logo" onerror="handleLogoError(this, '${job.company}')">
                </div>
                <div class="card-center">
                    <h3>${job.company}</h3>
                    <p class="card-detail">${job.details}</p>
                    <p class="card-loc">${job.location}</p>
                    <div class="card-sub">
                        <p>${job.timePosted}</p>
                        <p>${job.type}</p>
                        <p>${job.applicants}</p>
                    </div>
                </div>
                <div class="card-right">
                    <div class="card-tag">
                        <h5>Division</h5>
                        <a href="#">${job.division}</a>
                    </div>
                    <div class="card-salary">
                        <p>${job.salary}</p>
                    </div>
                </div>
                <ion-icon class="bookmark-icon" name="bookmark" data-job-id="${job.id}"></ion-icon>
            </div>
        `).join('');
        
        // Add click handlers for bookmark icons
        document.querySelectorAll('.bookmark-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const jobId = this.getAttribute('data-job-id');
                const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
                const updatedBookmarks = bookmarks.filter(job => job.id !== jobId);
                localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
                
                // Remove the card with animation
                const card = this.closest('.card');
                card.style.opacity = '0';
                setTimeout(() => {
                    card.remove();
                    if (updatedBookmarks.length === 0) {
                        emptyBookmarks.style.display = 'block';
                    }
                }, 300);
                
                showToast('Job removed from bookmarks');
            });
        });
    }
    
    // Load bookmarks when page loads
    loadBookmarks();
    
    // Add search functionality
    const searchInput = document.getElementById('bookmark-search');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        
        const filteredBookmarks = bookmarks.filter(job => 
            job.company.toLowerCase().includes(searchTerm) ||
            job.details.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm) ||
            job.division.toLowerCase().includes(searchTerm)
        );
        
        if (filteredBookmarks.length === 0) {
            bookmarksContainer.innerHTML = '<p class="no-results">No matching jobs found</p>';
        } else {
            loadFilteredBookmarks(filteredBookmarks);
        }
    });
    
    // Clear all bookmarks
    document.getElementById('clear-all').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all bookmarks?')) {
            localStorage.setItem('bookmarks', '[]');
            loadBookmarks();
            showToast('All bookmarks cleared');
        }
    });
});