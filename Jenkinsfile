pipeline {
    agent any
    environment {
        // Obtiene la instalación de Node.js configurada en Jenkins
        NODEJS_HOME = tool 'nodejs'
        // Actualiza el PATH para que incluya el directorio bin de Node.js
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:antdcdalton/PodemosCypressTest.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results -o allure-report --clean'
                sh 'npx allure serve allure-results'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**/*', fingerprint: true
        }
        failure {
            echo 'La ejecución falló. Revisa los logs.'
        }
    }
}
