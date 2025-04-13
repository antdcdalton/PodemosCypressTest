pipeline {
    // Define en qué "agente" se ejecutará el pipeline; "any" significa que se puede ejecutar en cualquier nodo que esté disponible
    agent any

    // Variables de entorno que estarán disponibles en todas las etapas
    environment {
        // Si tienes instalado el NodeJS Plugin en Jenkins, define el nombre de la instalación (por ejemplo, “nodejs”)
        // Esto te permite usar la versión de Node.js que configuraste en Jenkins.
        // NODEJS_HOME = tool name: 'nodejs', type: 'NodeJS'
        // Asegúrate de que el PATH incluya el directorio binario de Node.js:
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde GitHub
                // Aquí se especifica la rama (por ejemplo, 'main') y la URL (usa SSH o HTTPS según lo configurado)
                git branch: 'main', url: 'git@github.com:antdcdalton/PodemosCypressTest.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala las dependencias del proyecto usando npm
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                // Ejecuta las pruebas de Cypress en modo headless (sin interfaz gráfica)
                sh 'npx cypress run'
            }
        }
        stage('Generate Allure Report') {
            steps {
                // Opcional: genera el reporte de Allure a partir de los resultados de Allure
                // El comando --clean elimina reportes anteriores para que se genere uno nuevo
                sh 'npx allure generate allure-results -o allure-report --clean'
            }
        }
    }

    post {
        // Acciones que se ejecutan siempre, sin importar si el pipeline falla o pasa
        always {
            // Archiva los artifacts (por ejemplo, el reporte de Allure) para poder acceder a ellos desde Jenkins
            archiveArtifacts artifacts: 'allure-report/**/*', fingerprint: true
            // Aquí podrías agregar otras acciones, como publicar archivos de resultado JUnit, etc.
        }
        failure {
            // Acciones adicionales en caso de fallo, por ejemplo, enviar notificaciones
            echo 'La ejecución falló. Revisa los logs para más detalles.'
        }
    }
}
