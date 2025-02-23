package pages;

import com.github.badeball.cypress_cucumber_preprocessor.CypressCucumberPreprocessorPlugin;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class HomePage {

    @Given("el usuario navega a la página de Marca")
    public void abrirPagina() {
        CypressCucumberPreprocessorPlugin.open("https://www.marca.com");
    }

    @Then("el logo de Marca es visible")
    public void verificarLogo() {
        assertTrue(CypressCucumberPreprocessorPlugin.get("img[src*='logo_marca']").isDisplayed());
    }

    @And("el menú principal contiene la opción {string}")
    public void verificarMenu(String opcion) {
        assertTrue(CypressCucumberPreprocessorPlugin.get("nav").contains(opcion));
    }

    @And("la sección de noticias está cargada")
    public void verificarNoticias() {
        assertTrue(CypressCucumberPreprocessorPlugin.get(".news").isDisplayed());
    }

    @And("la URL es correcta")
    public void verificarUrl() {
        assertTrue(CypressCucumberPreprocessorPlugin.url().equals("https://www.marca.com/"));
    }
}
