describe("Teste da tela de Emissão de Senha", () => {
  it("Testar input de busca", () => {
    cy.server();
    cy.route("/v1/courses").as("getCourses");
    cy.visit("/emissoes");
    cy.wait("@getCourses").then(xhr => {
      console.log(xhr);
    });
    cy.get("[data-cy=searchCourses]").type("sistemas de");
    cy.get("[data-cy=buttonNormalNumber]").should("have.length", 1);
    cy.get("[data-cy=searchCourses]").clear();
  });

  it("Emitir Senha Normal Com Erro", () => {
    cy.server();
    cy.route({
      method: "POST", // Route all GET requests
      url: "/v1/numbers", // that have a URL that matches '/users/*'
      response: [], // and force the response to be: []
      status: 404
    }).as("postNumber");

    cy.get("[data-cy=buttonNormalNumber]")
      .first()
      .click();
    cy.get(".swal2-confirm").click();

    cy.wait("@postNumber").then(xhr => {
      console.log(xhr);
    });
    cy.get(".handler-error").should("be.visible");
    cy.wait(2100);
    cy.get(".handler-error").should("not.be.visible");
  });

  it("Emitir Senha Normal Sucesso", () => {
    cy.server();
    cy.route({
      method: "POST", // Route all GET requests
      url: "/v1/numbers" // that have a URL that matches '/users/*'
    }).as("postNumber");

    cy.get("[data-cy=buttonNormalNumber]")
      .first()
      .click();
    cy.get(".swal2-confirm").click();

    cy.wait("@postNumber").then(xhr => {
      console.log(xhr);
    });
    cy.get(".swal2-success.swal2-animate-success-icon").should("be.visible");
    cy.wait(2100);
    cy.get(".swal2-success.swal2-animate-success-icon").should(
      "not.be.visible"
    );
  });

  it("Emitir Senha Prioritaria Com Erro", () => {
    cy.server();
    cy.route({
      method: "POST", // Route all GET requests
      url: "/v1/numbers", // that have a URL that matches '/users/*'
      response: [], // and force the response to be: []
      status: 404
    }).as("postNumber");

    cy.get("[data-cy=buttonPriorityNumber]")
      .first()
      .click();
    cy.get(".swal2-confirm").click();

    cy.wait("@postNumber").then(xhr => {
      console.log(xhr);
    });
    cy.get(".handler-error").should("be.visible");
    cy.wait(2100);
    cy.get(".handler-error").should("not.be.visible");
  });

  it("Emitir Senha Prioritaria Sucesso", () => {
    cy.server();
    cy.route({
      method: "POST", // Route all GET requests
      url: "/v1/numbers" // that have a URL that matches '/users/*'
    }).as("postNumber");

    cy.get("[data-cy=buttonPriorityNumber]")
      .first()
      .click();
    cy.get(".swal2-confirm").click();

    cy.wait("@postNumber").then(xhr => {
      console.log(xhr);
    });
    cy.get(".swal2-success.swal2-animate-success-icon").should("be.visible");
    cy.wait(2100);
    cy.get(".swal2-success.swal2-animate-success-icon").should(
      "not.be.visible"
    );
  });

  it("Cancelar Emissão Senha Normal", () => {
    cy.get("[data-cy=buttonNormalNumber]")
      .first()
      .click();
    cy.get(".swal2-cancel").click();
    cy.get(".swal2-success").should("not.be.visible");
  });

  it("Cancelar Emissão Senha Prioritaria", () => {
    cy.get("[data-cy=buttonPriorityNumber]")
      .first()
      .click();
    cy.get(".swal2-cancel").click();
    cy.get(".swal2-success").should("not.be.visible");
  });
});
