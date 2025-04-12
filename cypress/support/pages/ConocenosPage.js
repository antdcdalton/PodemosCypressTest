import { SectionConoceLocator } from "../locators/SectionConoceLocator";
class ConocenosPage {

selecConocenosSection() {
cy.get(SectionConoceLocator.sectionConocenos).click();
}

verifyConocenosVideo() {
cy.get(SectionConoceLocator.videoConocenos).should("be.visible");
}


}

export default ConocenosPage;