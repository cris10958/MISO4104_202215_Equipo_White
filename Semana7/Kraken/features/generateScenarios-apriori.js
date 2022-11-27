const faker = require("faker");
const fs = require("fs");
let datapoolA_priori = [];

generateData();
iniciar();

function generateData() {
    for (let i = 0; i < 20; i++) {
        let obj = {
            title: faker.lorem.sentence(),
            post: faker.lorem.paragraph(),
            titleBig: faker.lorem.paragraph(10),
        };
        datapoolA_priori.push(obj);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciar() {
//91. Create Post with Datapool Apriori
    value = getRandomInt(0, 19);
    let post = datapoolA_priori[value];
    let datapoolcreatepost = `Feature: Create Post with Datapool A-priori 
    @user1 @web
    Scenario: Como usuario quiero crear un post en la plataforma
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I open post
    And I wait for 1 seconds
    When I click new post
    And I wait for 1 seconds
    When I enter titulo post "${post.title}"
    And I wait for 1 seconds
    When I enter description post "${post.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish post right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    Then I click back post
    And I wait for 10 seconds`;
    fs.writeFileSync("091_crearpost.feature.NA", datapoolcreatepost);

//92. Create Post and Edit with Datapool Apriori
    valuePost1 = getRandomInt(0, 19);
    valuePost2 = getRandomInt(0, 19);
    post = datapoolA_priori[valuePost1];
    let postEdit = datapoolA_priori[valuePost2];

    let datapooleditpost = `Feature: Create Post and Edit with Datapool A-priori 
    @user1 @web
    Scenario: Como administrador de la aplicación Ghost realizo el login, la creación, publicación y edición de un post
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I open post
    And I wait for 1 seconds
    When I click new post
    And I wait for 1 seconds
    When I enter titulo post "${post.title}"
    And I wait for 1 seconds
    When I enter description post "${post.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish post right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    When I click back post
    And I wait for 1 seconds
    When I open edition
    And I wait for 1 seconds
    Then I edit titulo post "${postEdit.title}"
    And I wait for 1 seconds
    When I update
    And I wait for 4 seconds
    Then I click back post
    And I wait for 5 seconds`;
    fs.writeFileSync("092_editarpost.feature.NA", datapooleditpost);



//93. Create Post, Publish and un-publish with Datapool A-priori
    value = getRandomInt(0, 19);
    post = datapoolA_priori[value];
    let datapoolunpublishpost = `Feature: Create Post, Publish and un-publish with Datapool A-priori
    @user1 @web
    Scenario: Como administrador de la aplicación Ghost realizo el login, la creación, publicación y despublicar un post
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 1 seconds
    When I open post
    And I wait for 1 seconds
    When I click new post
    And I wait for 1 seconds
    When I enter titulo post "${post.title}"
    And I wait for 1 seconds
    When I enter description post "${post.title}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish post right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    When I click back post
    And I wait for 1 seconds
    When I open edition
    And I wait for 1 seconds
    When I unpublish
    And I wait for 2 seconds
    When I confirm unpublish
    And I wait for 2 seconds
    When I click back post
    And I wait for 2 seconds
    When I select unpublish
    And I wait for 2 seconds
    Then I click back post
    And I wait for 5 seconds`;
    fs.writeFileSync("093_unplublishpost.feature.NA", datapoolunpublishpost);

//94. Create Post with Datapool Apriori with tittle grether than 255 Char
    value = getRandomInt(0, 19);
    post = datapoolA_priori[value];
    datapoolcreatepost = `Feature: Edit Post with Datapool Apriori with tittle grether than 255 Char 
    @user1 @web
    Scenario: Como usuario quiero editar un post en la plataforma con un titulo de mas de 255 char
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I open post
    And I wait for 1 seconds
    When I click new post
    And I wait for 1 seconds
    When I enter titulo post "${post.title}"
    And I wait for 1 seconds
    When I enter description post "${post.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish post right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    When I click back post
    And I wait for 1 seconds
    When I open edition
    And I wait for 1 seconds
    Then I edit titulo post "${post.titleBig}"
    And I wait for 1 seconds
    When I update
    And I wait for 4 seconds
    Then I find note creation error "Update failed: Title cannot be longer than 255 characters."
    And I wait for 2 seconds`;
    fs.writeFileSync("094_crearpost.feature.NA", datapoolcreatepost);

//95. Create Post with empty field
    value = getRandomInt(0, 19);
    post = datapoolA_priori[value];
    datapoolcreatepost = `Feature: Create Post with Datapool A-priori 
    @user1 @web
    Scenario: Como usuario quiero crear un post en la plataforma
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I open post
    And I wait for 1 seconds
    When I click new post
    And I wait for 1 seconds
    When I enter description post "${post.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish post right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    Then I click back post
    And I wait for 5 seconds`;
    fs.writeFileSync("095_crearpost.feature.NA", datapoolcreatepost);

//103. Create Page with Datapool Apriori
    value = getRandomInt(0, 19);
    let page = datapoolA_priori[value];
    let datapoolcreatepage = `Feature: Create Page with Datapool A-priori 
    @user1 @web
    Scenario: Como usuario quiero crear un Page en la plataforma
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I click button page
    And I wait for 1 seconds
    When I click button new page
    And I wait for 1 seconds
    When I enter titulo "${page.title}"
    And I wait for 1 seconds
    When I enter description "${page.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    Then I click back
    And I wait for 10 seconds`;
    fs.writeFileSync("103_crearpage.feature.NA", datapoolcreatepage);

//104. Create Page and Edit with Datapool Apriori
    valuePage1 = getRandomInt(0, 19);
    valuePage2 = getRandomInt(0, 19);
    page = datapoolA_priori[valuePage1];
    let pageEdit = datapoolA_priori[valuePage2];

    let datapooleditpage = `Feature: Create Page and Edit with Datapool A-priori 
    @user1 @web
    Scenario: Como administrador de la aplicación Ghost realizo el login, la creación, publicación y edición de un page
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I click button page
    And I wait for 1 seconds
    When I click button new page
    And I wait for 1 seconds
    When I enter titulo "${page.title}"
    And I wait for 1 seconds
    When I enter description "${page.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    When I click back
    And I wait for 1 seconds
    When I open edition
    And I wait for 1 seconds
    Then I enter titulo "${pageEdit.title}"
    And I wait for 1 seconds
    When I update
    And I wait for 4 seconds
    Then I click back
    And I wait for 5 seconds`;
    fs.writeFileSync("104_editarpage.feature.NA", datapooleditpage);

//105. Create Page, Publish and un-publish with Datapool A-priori
    value = getRandomInt(0, 19);
    page = datapoolA_priori[value];
    let datapoolunpublishpage = `Feature: Create Page, Publish and un-publish with Datapool A-priori
    @user1 @web
    Scenario: Como administrador de la aplicación Ghost realizo el login, la creación, publicación y despublicar un Page
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 1 seconds
    When I click button page
    And I wait for 1 seconds
    When I click button new page
    And I wait for 1 seconds
    When I enter titulo "${page.title}"
    And I wait for 1 seconds
    When I enter description "${page.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    When I click back
    And I wait for 1 seconds
    When I open edition
    And I wait for 1 seconds
    When I unpublish
    And I wait for 2 seconds
    When I confirm unpublish
    And I wait for 2 seconds
    When I click back
    And I wait for 2 seconds
    When I select unpublish
    And I wait for 2 seconds
    Then I click back
    And I wait for 5 seconds`;
    fs.writeFileSync("105_unplublishpage.feature.NA", datapoolunpublishpage);

//106. Create Page with Datapool Apriori with title grether than 255 Char
    value = getRandomInt(0, 19);
    page = datapoolA_priori[value];
    datapoolcreatepage = `Feature: Edit Page with Datapool Apriori with title grether than 255 Char 
    @user1 @web
    Scenario: Como usuario quiero editar un page en la plataforma con un titulo de mas de 255 char
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I click button page
    And I wait for 1 seconds
    When I click button new page
    And I wait for 1 seconds
    When I enter titulo "${page.title}"
    And I wait for 1 seconds
    When I enter description "${page.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    When I click back
    And I wait for 1 seconds
    When I open edition
    And I wait for 1 seconds
    Then I enter titulo "${page.titleBig}"
    And I wait for 1 seconds
    When I update
    And I wait for 4 seconds
    Then I find note creation error "Update failed: Title cannot be longer than 255 characters."
    And I wait for 2 seconds`;
    fs.writeFileSync("106_crearpage.feature.NA", datapoolcreatepage);

//107. Create Page with empty field
    value = getRandomInt(0, 19);
    page = datapoolA_priori[value];
    datapoolcreatepage = `Feature: Create Page with Datapool A-priori 
    @user1 @web
    Scenario: Como usuario quiero crear un page en la plataforma
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I click button page
    And I wait for 1 seconds
    When I click button new page
    And I wait for 1 seconds
    When I enter titulo ""
    And I wait for 1 seconds
    When I enter description "${page.post}"
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    Then I click back post
    And I wait for 5 seconds`;
    fs.writeFileSync("107_crearpost.feature.NA", datapoolcreatepage);

}

