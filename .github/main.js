document.addEventListener('DOMContentLoaded', () => {
    // Prayer Form Elements
    const prayerForm = document.getElementById('prayer-form');

    // Prayer Management Elements
    const managementSection = document.getElementById('prayer-management');
    const prayerList = document.getElementById('prayer-list');
    const template = document.getElementById('prayer-card-template');

    // Story Elements
    const storiesContainer = document.getElementById('stories-container');

    // --- Prayer Form Logic ---
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(event) {
            const formData = new FormData(this);
            const requestData = {
                who: formData.get('name'),
                need: formData.get('prayer_request'),
                promise: formData.get('scripture'),
                email: formData.get('email'),
                type: formData.get('prayer_type'),
                isUrgent: formData.has('urgent')
            };

            PrayerManager.saveRequest(requestData);
            // The form will now submit naturally to FormSubmit.co
        });
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
                    // Method implementation would go here
                    return '';
                }
            };
        });