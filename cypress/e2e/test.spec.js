describe("Prueba Allure", () => {
  it("Genera resultados de Allure", () => {
    cy.allure().step("Paso de prueba Allure");
    expect(true).to.be.true;
  });
});
