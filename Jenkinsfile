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
                sh 'npx playwright test --reporter=html'
            }
        }

    }

    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
        success {
            echo '✅ All tests passed!'
            emailext(
                subject: "✅ BUILD SUCCESS - Playwright Tests #${BUILD_NUMBER}",
                body: """
                    <h2>Build Success!</h2>
                    <p>All Playwright tests passed successfully.</p>
                    <p><b>Job:</b> ${JOB_NAME}</p>
                    <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                    <p><b>Build URL:</b> <a href="${BUILD_URL}">${BUILD_URL}</a></p>
                    <p><b>Report:</b> <a href="${BUILD_URL}Playwright_20HTML_20Report">View Report</a></p>
                """,
                mimeType: 'text/html',
                to: 'mdhaqbaaz@gmail.com'
            )
        }
        failure {
            echo '❌ Tests failed! Check the report.'
            emailext(
                subject: "❌ BUILD FAILED - Playwright Tests #${BUILD_NUMBER}",
                body: """
                    <h2>Build Failed!</h2>
                    <p>Some Playwright tests failed. Please check the report.</p>
                    <p><b>Job:</b> ${JOB_NAME}</p>
                    <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                    <p><b>Build URL:</b> <a href="${BUILD_URL}">${BUILD_URL}</a></p>
                    <p><b>Report:</b> <a href="${BUILD_URL}Playwright_20HTML_20Report">View Report</a></p>
                """,
                mimeType: 'text/html',
                to: 'mdhaqbaaz@gmail.com'
            )
        }
    }
}