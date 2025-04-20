document.addEventListener('DOMContentLoaded', function() {
    // Sample data for chat contacts
    // Update the contacts array with online image URLs
    const contacts = [
        {
            name: 'Google Inc.',
            lastMessage: 'Thank you for your application',
            time: '2m ago',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
            unread: 2
        },
        {
            name: 'Microsoft',
            lastMessage: 'When can you start the interview?',
            time: '1h ago',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
            unread: 0
        },
        {
            name: 'Amazon',
            lastMessage: 'Your application has been received',
            time: '3h ago',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
            unread: 1
        },
        {
            name: 'Meta',
            lastMessage: 'Thanks for your interest',
            time: '5h ago',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
            unread: 0
        }
    ];

    // Populate chat contacts
    const chatContacts = document.querySelector('.chat-contacts');
    contacts.forEach(contact => {
        const contactElement = createContactElement(contact);
        chatContacts.appendChild(contactElement);
    });

    // Sample messages
    const messages = [
        { type: 'received', content: 'Hi! Thanks for applying to Google.' },
        { type: 'received', content: 'We\'ve reviewed your application and would like to proceed with an interview.' },
        { type: 'sent', content: 'Thank you! I\'m very excited about the opportunity.' },
        { type: 'sent', content: 'When would be a good time for the interview?' },
        { type: 'received', content: 'How about next Tuesday at 2 PM EST?' }
    ];

    // Populate messages
    const chatMessages = document.querySelector('.chat-messages');
    messages.forEach(message => {
        const messageElement = createMessageElement(message);
        chatMessages.appendChild(messageElement);
    });

    // Handle message sending
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.send-btn');

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Scroll to bottom of messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

function createContactElement(contact) {
    const div = document.createElement('div');
    div.className = 'chat-contact';
    div.innerHTML = `
        <img src="${contact.image}" alt="${contact.name}">
        <div class="contact-info">
            <h4>${contact.name}</h4>
            <p>${contact.lastMessage}</p>
        </div>
        ${contact.unread ? `<span class="unread-count">${contact.unread}</span>` : ''}
    `;
    return div;
}

function createMessageElement(message) {
    const div = document.createElement('div');
    div.className = `message ${message.type}`;
    div.innerHTML = `
        <div class="message-content">
            ${message.content}
        </div>
    `;
    return div;
}

function sendMessage() {
    const chatInput = document.querySelector('.chat-input input');
    const content = chatInput.value.trim();
    
    if (content) {
        const chatMessages = document.querySelector('.chat-messages');
        const messageElement = createMessageElement({
            type: 'sent',
            content: content
        });
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        chatInput.value = '';
    }
}

// Handle sidebar toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});