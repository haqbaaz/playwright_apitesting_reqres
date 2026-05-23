pipeline {

    agent {
        docker {
            image 'playwright-apireqres'
            args '-u root'
        }
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
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