pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/haqbaaz/playwright_apitesting_reqres.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
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