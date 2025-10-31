document.addEventListener('DOMContentLoaded', () => {
    // Prayer Form Elements
    const prayerForm = document.getElementById('prayer-form');
    const shareCheckbox = document.getElementById('share-prayer');
    const emailInput = document.getElementById('email');

    // Prayer Management Elements
    const managementSection = document.getElementById('prayer-management');
    const prayerList = document.getElementById('prayer-list');
    const template = document.getElementById('prayer-card-template');

    // Story Elements
    const storiesContainer = document.getElementById('stories-container');

    // --- Prayer Form Logic ---
    if (prayerForm && shareCheckbox && emailInput) {
        function updateFormState() {
            const emailValid = emailInput.value.trim() !== '' && emailInput.validity.valid;
            const submitBtn = prayerForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = !shareCheckbox.checked || !emailValid;
                submitBtn.classList.toggle('opacity-50', submitBtn.disabled);
            }
        }

        emailInput.addEventListener('input', updateFormState);
        shareCheckbox.addEventListener('change', updateFormState);

        prayerForm.addEventListener('submit', function(event) {
            if (!shareCheckbox.checked || !emailInput.validity.valid) {
                event.preventDefault();
                return;
            }

            const formData = new FormData(this);
            const requestData = {
                who: formData.get('who'),
                need: formData.get('need'),
                promise: formData.get('promise'),
                email: formData.get('_replyto')
            };

            PrayerManager.saveRequest(requestData);
            // The form will now submit naturally to FormSubmit.co
        });

        updateFormState(); // Initial state
    }

    // --- Prayer Request Management System ---
    const PrayerManager = {
        storageKey: 'prayerRequests',

        init() {
            if (!localStorage.getItem(this.storageKey)) {
                localStorage.setItem(this.storageKey, JSON.stringify([]));
            }
        },

        saveRequest(request) {
            const requests = this.getRequests();
            request.id = Date.now().toString();
            request.status = 'new';
            request.dateReceived = new Date().toISOString();
            requests.push(request);
            localStorage.setItem(this.storageKey, JSON.stringify(requests));
            return request.id;
        },

        getRequests() {
            return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        },

        updateRequest(id, updates) {
            let requests = this.getRequests();
            requests = requests.map(req =>
                req.id === id ? { ...req, ...updates } : req
            );
            localStorage.setItem(this.storageKey, JSON.stringify(requests));
        },

        formatEmailBody(request, type = 'initial') {
            if (type === 'follow-up') {
                return encodeURIComponent(
                    `Following up on your prayer request for "${request.need.substring(0, 30)}..."\n\n` +
                    `${request.responseText}\n\n` +
                    `Blessings,\nThe Creative Calling Team`
                );
            }
            // This is for reference, but FormSubmit.co handles the initial email body.
            return encodeURIComponent(
                `Prayer Request\n\n` +
                `From: ${request.who || 'Anonymous'}\n\n` +
                `Request: ${request.need}\n\n` +
                (request.promise ? `Scripture Reference: ${request.promise}\n\n` : '') +
                `Request ID: ${request.id}\n` +
                `Contact: ${request.email}`
            );
        }
    };

    PrayerManager.init();

    // --- Prayer Management UI (Hidden by default) ---
    if (managementSection) {
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'P') {
                managementSection.classList.toggle('d-none');
                if (!managementSection.classList.contains('d-none')) {
                    refreshPrayerList();
                }
            }
        });

        function refreshPrayerList() {
            const requests = PrayerManager.getRequests();
            prayerList.innerHTML = '';

            requests.sort((a, b) => new Date(b.dateReceived) - new Date(a.dateReceived))
                .forEach(request => {
                    const card = template.content.cloneNode(true);
                    const cardElement = card.querySelector('.card');

                    card.querySelector('h4').textContent = request.who || 'Anonymous';
                    card.querySelector('.date').textContent = new Date(request.dateReceived).toLocaleDateString();
                    card.querySelector('.need').textContent = request.need;
                    
                    const feelingEl = card.querySelector('.feeling');
                    if (request.feeling) {
                        feelingEl.textContent = `Feeling: ${request.feeling}`;
                    } else {
                        feelingEl.remove();
                    }

                    const promiseEl = card.querySelector('.promise');
                    if (request.promise) {
                        promiseEl.textContent = `Promise: ${request.promise}`;
                    } else {
                        promiseEl.remove();
                    }

                    const badge = card.querySelector('.status-badge');
                    badge.textContent = request.status;
                    badge.className = 'status-badge badge rounded-pill'; // Reset classes
                    badge.classList.add(
                        request.status === 'new' ? 'bg-warning text-dark' :
                        request.status === 'responded' ? 'bg-success' :
                        request.status === 'completed' ? 'bg-secondary' :
                        'bg-info' // for 'draft'
                    );

                    const responseArea = card.querySelector('.response-area');
                    const responseText = card.querySelector('.response-text');
                    const respondBtn = card.querySelector('.respond-btn');
                    const followUpBtn = card.querySelector('.follow-up-btn');
                    const completeBtn = card.querySelector('.mark-completed-btn');

                    respondBtn.onclick = () => {
                        responseArea.classList.toggle('d-none');
                        if (request.responseText) {
                            responseText.value = request.responseText;
                        }
                    };

                    responseText.oninput = () => {
                        PrayerManager.updateRequest(request.id, {
                            responseText: responseText.value,
                            status: 'draft'
                        });
                        badge.textContent = 'draft';
                        badge.className = 'status-badge badge rounded-pill bg-info';
                    };

                    followUpBtn.onclick = () => {
                        const responseSubject = encodeURIComponent(`Re: Your Prayer Request - Creative Calling`);
                        const responseBody = PrayerManager.formatEmailBody({ ...request, responseText: responseText.value }, 'follow-up');
                        window.location.href = `mailto:${request.email}?subject=${responseSubject}&body=${responseBody}`;
                        PrayerManager.updateRequest(request.id, {
                            status: 'responded',
                            lastFollowUp: new Date().toISOString(),
                            responseText: responseText.value
                        });
                        refreshPrayerList();
                    };

                    completeBtn.onclick = () => {
                        PrayerManager.updateRequest(request.id, {
                            status: 'completed',
                            dateCompleted: new Date().toISOString()
                        });
                        refreshPrayerList();
                    };

                    prayerList.appendChild(card);
                });
        }
    }

    // --- Story Management ---
    if (storiesContainer) {
        async function loadStories() {
            try {
                const response = await fetch('assets/stories.json');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const stories = await response.json();

                const sortedStories = stories
                    .filter(story => story.status === 'approved')
                    .sort((a, b) => new Date(b.dateApproved || b.dateSubmitted) - new Date(a.dateApproved || a.dateSubmitted));

                if (sortedStories.length === 0) {
                    storiesContainer.innerHTML = `<div class="col-12 text-center"><p class="text-muted-custom">Share your story to be the first!</p></div>`;
                    return;
                }

                storiesContainer.innerHTML = sortedStories.map(story => {
                    const storyDate = new Date(story.dateApproved || story.dateSubmitted);
                    const scripture = story.scripture ? `<div class="mt-3 pt-3 border-top border-custom"><p class="small text-muted-custom mb-1">Scripture Reference</p><p class="fst-italic">"${story.scripture}"</p></div>` : '';
                    const tags = story.tags ? `<div class="mt-3">${story.tags.map(tag => `<span class="badge bg-custom border-custom me-1">${tag}</span>`).join('')}</div>` : '';

                    return `
                        <div class="col-md-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${story.title}</h5>
                                    <h6 class="card-subtitle mb-3 text-muted-custom">${story.author} • ${storyDate.toLocaleDateString()}</h6>
                                    <p class="card-text flex-grow-1">${story.body}</p>
                                    ${scripture}
                                    ${tags}
                                </div>
                            </div>
                        </div>`;
                }).join('');
            } catch (error) {
                console.error('Error loading stories:', error);
                storiesContainer.innerHTML = `<div class="col-12"><div class="alert alert-warning" role="alert">Unable to load stories. Please try again later.</div></div>`;
            }
        }

        loadStories();
        setInterval(loadStories, 5 * 60 * 1000); // Refresh every 5 minutes
    }
});