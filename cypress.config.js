const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
   reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true
      },
      video: true,
      videosFolder: 'cypress/videos',
      screenshotsFolder: 'cypress/screenshots',
      screenshotOnRunFailure: true,
      pageLoadTimeout: 120000, // 120 segundos
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions",  // <--- añade esto
    baseUrl: "https://podemos.mx/",
    env: {
      allure: true,
      allureResultsPath: 'allure-results'
    },
    setupNodeEvents(on, config) {
      // Inicializa el preprocesador de Cucumber
      addCucumberPreprocessorPlugin(on, config);

      // Configura el preprocesador con esbuild (eliminando el duplicado)
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // Inicializa el plugin de Allure y especifica la carpeta de resultados
      allureWriter(on, config, {
        resultsDir: 'allure-results'
      });

      // Para depuración: muestra en consola la ruta de resultados
      console.log('Allure results directory:', config.env.allureResultsPath || 'allure-results');

      return config;
    },
  },
});
