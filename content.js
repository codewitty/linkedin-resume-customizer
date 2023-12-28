// Create a new MutationObserver instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Check if new nodes were added
        if (mutation.addedNodes) {
            // Try to select the "Apply" button
            var applyButton = document.querySelector('.jobs-apply-button.artdeco-button.artdeco-button--3.artdeco-button--primary');
            if (applyButton) {
                console.log('HEYYYY Apply button found'); // Debug message

                // Add a custom class to the button
                applyButton.classList.add('custom-hover');

                // Create a new style element
                var style = document.createElement('style');
                style.textContent = `
                    .jobs-apply-button.artdeco-button.artdeco-button--3.artdeco-button--primary.jobs-apply-button.artdeco-button.artdeco-button--3.artdeco-button--primary.custom-hover:hover {
                        background-color: green !important;
                    }
                `;

                // Append the style element to the head of the document
                document.head.append(style);

                // Disconnect the observer when the button is found
                observer.disconnect();
            }
        }
    });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });