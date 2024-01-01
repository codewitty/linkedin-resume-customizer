// Create a new MutationObserver instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Check if new nodes were added
        if (mutation.addedNodes) {
            // Try to select the "Apply" button
            var applyButton = document.querySelector('.jobs-apply-button.artdeco-button.artdeco-button--3.artdeco-button--primary');
            if (applyButton) {
                console.log('Single Apply button found'); // Debug message

                // Add an event listener to the "Apply" button
                applyButton.addEventListener('click', function(event) {
                    // Prevent the default action
                    event.preventDefault();

                    // Select the job description and the resume text
                    var jobDescription = document.querySelector('#job-details');
                    var resumeText = "Software Engineer | Codex Health, Palo Alto: Utilized GCP serverless architecture and multi-tenancy to deliver scalable cloud software services to a diverse  customer base, achieving a 30% reduction in infrastructure costs and improving system scalability by 50%, Developed and maintained GCP service integrations, including Cloud Pub/Sub, Cloud Functions, Cloud Run, and Cloud Build, to enhance software application functionality and scalability, Provisioned GCP resources, including project creation, service account setup, and service configuration, using Terraform and Terragrunt, reducing infrastructure deployment time by 40% and improving system maintainability, Built highly efficient microservices using cloud functions triggered by HTTP requests or Firestore Database Triggers, improving system resilience and reliability while minimizing cost and maintenance overhead, Set up and configured CI/CD pipelines using Google Cloud Build, including defining build steps, build triggers, and build logs, to enable automated builds, testing, and deployment of software applications on GCP Software Engineer, Big Data, Affinity Solutions: Co-ordinated project to develop and deploy DSAR CCPA compliance framework on Identity Engine, processed millions of records, ensured data privacy compliance, Migrated DSAR ETL pipeline to AWS, used Hive on EMR, S3, Glue, RedShift, streamlined data processing, storage, improved performance, Configured, optimized AWS EMR clusters, Hadoop, Hive, Spark, improved data processing speed, performance by 80%, Designed, implemented data pipelines, AWS services, Kinesis, Glue, Lambda, S3, processed over 1 TB data per day, achieved 50% reduction in ETL time, Configured, managed Apache Airflow on AWS EC2, automated data workflows, enabled scheduling, monitoring, alerting, resulted in 50% reduction in manual labor, Leveraged open-source libraries, AWS services, Boto3, Lambda, S3, developed automated sales report delivery system using Python, eliminated 4 hours weekly manual work, improved client satisfaction, Participated in weekly agile sprints, collaborated with cross-functional teams, drove project success."
                    // var resumeText = document.querySelector('#resume-text').value;

                    // Send a request to the ChatGPT API
                    fetch('https://api.openai.com/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer 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' // Replace 'YOUR_OPENAI_API_KEY' with your actual API key
                        },
                        body: JSON.stringify({
                            'model': 'gpt-3.5-turbo',
                            'temperature': 1.0,
                            'messages': [
                                {
                                    'role': 'system',
                                    'content': 'You are an assistant who helps tailor a work experience to match a specific job description.'
                                },
                                {
                                    'role': 'user',
                                    'content': `Here's the job description: ${jobDescription.textContent}`
                                },
                                {
                                    'role': 'user',
                                    'content': `Here's my work experience: ${resumeText}`
                                }
                            ]
                        })
                    })
                    .then(response => response.json())
                    .then(data => console.log(data['choices'][0]['message']['content']))
                    .catch(error => console.error('Error:', error));

                    // Remove the event listener
                    applyButton.removeEventListener('click', handleClick);
                });
            }
        }
    });
});

// Start observing the document with the configured mutation observer
observer.observe(document, {
    childList: true,
    subtree: true
});