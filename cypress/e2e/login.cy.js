

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://somriddhi.eksheba.gov.bd')
      cy.fixture('idPass').then((data)=>{
      cy.get("input[placeholder='01XXXXXXXXX']").type(data.email); 
      cy.get("input[placeholder='Enter password']").type(data.password);
      cy.get("button[class='btn text-light custom-bg-blue px-5 mt-4 fs-15 w-100']").click();
     
    //   cy.get('.HomePage-service > .MuiTypography-root').click().wait(3000);
    //   cy.xpath("//div[@class='AppHeader-sectionDesktop MuiBox-root css-0']//i[@class='flag flag-24 flag-bd']").click();
    //   cy.contains('a[title="User Management"]', 'User Management').find('span').wait(3000).click();
    //   cy.xpth("//div[@id='__next']").click();
    // })
    })
  })
})
  