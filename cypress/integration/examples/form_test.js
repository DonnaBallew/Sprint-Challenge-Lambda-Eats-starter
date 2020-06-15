describe("Testing form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("tests name input", function () {
    cy.get("[data-cy=name]").type("Testing Name");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox1]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox2]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox3]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox4]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox5]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox6]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox7]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox8]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox9]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox10]").check().should("be.checked");
  });
  it("tests checkbox input", function () {
    cy.get("[data-cy=checkbox11]").check().should("be.checked");
  });
  it("tests form submit", function () {
    cy.get("[data-cy=submit]").submit();
  });
});
