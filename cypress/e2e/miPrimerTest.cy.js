describe("propbar la pagina que este bien", () => {
  beforeEach(() => {
    cy.visit("https://mario32jk2.github.io/Hotels./");
  });

  it("Verificar que las todas las cards aparecen desde un inicio", () => {
    cy.get(".names-hotels").should("have.length", 18);
  });

  it("Aplicar cada filtro por precio y verificar que las cards que aparecen corresponden a el precio indicad", () => {
    cy.get("#prices").select("$");
    cy.wait(300);
    cy.get(".container-div-price p:nth-child(2)").contains("$");
    cy.get(".container-div-price p:nth-child(2)").should("have.length", 3);

    cy.get("#prices").select("$$");
    cy.wait(300);
    cy.get(".container-div-price p:nth-child(2)").contains("$$");
    cy.get(".container-div-price p:nth-child(2)").should("have.length", 4);

    cy.get("#prices").select("$$$");
    cy.wait(300);
    cy.get(".container-div-price p:nth-child(2)").contains("$$$");
    cy.get(".container-div-price p:nth-child(2)").should("have.length", 2);

    cy.get("#prices").select("$$$$");
    cy.wait(300);
    cy.get(".container-div-price p:nth-child(2)").contains("$$$$");
    cy.get(".container-div-price p:nth-child(2)").should("have.length", 9);

    cy.get("#prices").select("All prices");
    cy.wait(300);
    cy.get(".button-book-it").should("have.length", 18);
  });

  it("Boton clear borra todo y lo deje por defecto", () => {
    cy.get("#prices").select("$$$$");
    cy.wait(300);
    cy.get(".container-div-price p:nth-child(2)").contains("$$$$");
    cy.get(".container-div-price p:nth-child(2)").should("have.length", 9);
    cy.get("#clear").click();
    cy.wait(300)
    cy.get(".button-book-it").should("have.length", 18);
  });
});
