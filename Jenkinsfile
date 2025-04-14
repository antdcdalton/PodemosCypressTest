pipeline {
    agent any
    environment {
        // Obtiene la instalación de Node.js configurada en Jenkins (debe coincidir con lo que configuraste en Global Tool Configuration)
        NODEJS_HOME = tool 'nodejs'
        // Actualiza el PATH para incluir el directorio bin de Node.js
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
                // Genera el reporte de Allure a partir de los resultados en la carpeta allure-results,
                // eliminando reportes anteriores con la opción --clean
                sh 'npx allure generate allure-results -o allure-report --clean'
            }
        }
    }
    post {
        always {
            // Archiva los artifacts generados (por ejemplo, el contenido del reporte Allure)
            archiveArtifacts artifacts: 'allure-report/**/*', fingerprint: true
        }
        failure {
            echo 'La ejecución falló. Revisa los logs.'
        }
    }
}
