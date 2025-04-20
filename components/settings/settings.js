document.addEventListener('DOMContentLoaded', function() {
    // Handle skill tags
    const skillsInput = document.querySelector('.skills-input input');
    const skillsTags = document.querySelector('.skills-tags');

    skillsInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            addSkillTag(this.value.trim());
            this.value = '';
        }
    });

    // Remove skill tag
    skillsTags.addEventListener('click', function(e) {
        if (e.target.tagName === 'ION-ICON') {
            e.target.parentElement.remove();
        }
    });

    // Handle form submission
    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', function() {
        // Add loading state
        this.textContent = 'Saving...';
        this.disabled = true;

        // Simulate saving
        setTimeout(() => {
            this.textContent = 'Save Changes';
            this.disabled = false;
            showNotification('Settings saved successfully!');
        }, 1500);
    });

    // Handle photo change
    const changePhotoBtn = document.querySelector('.change-photo');
    changePhotoBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();

        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.querySelector('.profile-photo img').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
    });
});

function addSkillTag(skill) {
    const span = document.createElement('span');
    span.innerHTML = `${skill}<ion-icon name="close-outline"></ion-icon>`;
    document.querySelector('.skills-tags').appendChild(span);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }, 100);
}