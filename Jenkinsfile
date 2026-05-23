pipeline {

    agent {
        docker {
            image 'playwright-apireqres'
            // ↑ Use the image we already built
            // ↑ Has Node.js + Playwright + Browsers
            // ↑ No code inside
        }
    }

    stages {

        stage('Checkout Code') {
            steps {
                // ✅ Pull latest code from GitHub at runtime
                git 'https://github.com/haqbaaz/playwright_apitesting_reqres.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project specific npm packages
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // ✅ Command configured here
                sh 'npx playwright test'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }

    post {
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Tests failed! Check the report.'
        }
    }
}