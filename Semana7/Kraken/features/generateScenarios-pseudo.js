var Mockaroo = require('mockaroo');
const fs = require("fs");
let datapoolpseudo = [];

generateData();


function generateData() {
    var client = new Mockaroo.Client({
        apiKey: '43ce8c40'
    }) 
    client.generate({
            count: 100,
            fields: [{
                name: 'titlepost',
                type: 'Naughty String'
            }, {
                name: 'contentpost',
                type: 'ICD10 Dx Desc (Long)'
            }, {
                name: 'titlepage',
                type: 'Naughty String'
            }, {
                name: 'contentpage',
                type: 'ICD10 Dx Desc (Long)'
            }, {
                name: 'bigtittle',
                type: 'Words',
                max:  80,
                min:  60
            }]
    }).then(function(records) {
            for (var i=0; i<records.length; i++) {
                var record = records[i];
                datapoolpseudo.push(record);               
            }
            iniciar();
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciar() {

    //96. Create Post with Datapool Pseudo with Mockaroo
        value = getRandomInt(0, 99);
        let content = datapoolpseudo[value];

        let datapoolcreatepost = `Feature: Create Post with Datapool Pseudo with Mockaroo 
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
        When I enter titulo post "${content.titlepost}"
        And I wait for 1 seconds
        When I enter description post "${content.contentpost}"
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
        fs.writeFileSync("096_createpost.feature.NA", datapoolcreatepost);

    //97. Create Post and Edit with Datapool Pseudo with Mockaroo
        valuePost1 = getRandomInt(0, 99);
        valuePost2 = getRandomInt(0, 99);
        let post = datapoolpseudo[valuePost1];
        let postEdit = datapoolpseudo[valuePost2];

        let datapooleditpost = `Feature: Create Post and Edit with Datapool Pseudo with Mockaroo 
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
        When I enter titulo post "${post.titlepost}"
        And I wait for 1 seconds
        When I enter description post "${post.contentpost}"
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
        Then I edit titulo post "${postEdit.titlepost}"
        And I wait for 1 seconds
        When I update
        And I wait for 4 seconds
        Then I click back post
        And I wait for 5 seconds`;
        fs.writeFileSync("097_editarpost.feature.NA", datapooleditpost);

    //98. Create Post, Publish and un-publish with Datapool Pseudo with Mockaroo
        value = getRandomInt(0, 99);
        post = datapoolpseudo[value];
        let datapoolunpublishpost = `Feature: Create Post, Publish and un-publish with Datapool Pseudo with Mockaroo
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
        When I enter titulo post "${post.titlepost}"
        And I wait for 1 seconds
        When I enter description post "${post.contentpost}"
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
        fs.writeFileSync("098_unplublishpost.feature.NA", datapoolunpublishpost);


    //99. Create Post with Datapool Pseudo with Mockaroo with tittle grether than 255 Char
        value = getRandomInt(0, 99);
        post = datapoolpseudo[value];
        datapoolcreatepost = `Feature: Edit Post with Datapool Pseudo with Mockaroo with tittle grether than 255 Char 
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
        When I enter titulo post "${post.titlepost}"
        And I wait for 1 seconds
        When I enter description post "${post.contentpost}"
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
        Then I edit titulo post "${post.bigtittle}"
        And I wait for 1 seconds
        When I update
        And I wait for 4 seconds
        Then I find note creation error "Update failed: Title cannot be longer than 255 characters."
        And I wait for 2 seconds`;
        fs.writeFileSync("099_crearpost.feature.NA", datapoolcreatepost);

    //114. Create Page with Datapool Pseudo
        value = getRandomInt(0, 99);
        let page = datapoolpseudo[value];
        let datapoolcreatepage = `Feature: Create Page with Datapool Pseudo with Mockaroo 
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
        When I enter titulo "${page.titlepage}"
        And I wait for 1 seconds
        When I enter description "${page.contentpage}"
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
        And I wait for 5 seconds`;
        fs.writeFileSync("114_crearpage.feature.NA", datapoolcreatepage);


    //115. Create Page and Edit with Datapool Pseudo
        valuePage1 = getRandomInt(0, 99);
        valuePage2 = getRandomInt(0, 99);
        page = datapoolpseudo[valuePage1];
        let pageEdit = datapoolpseudo[valuePage2];

        let datapooleditpage = `Feature: Create Page and Edit with Datapool Pseudo with Mockaroo 
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
        When I enter titulo "${page.titlepage}"
        And I wait for 1 seconds
        When I enter description "${page.contentpage}"
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
        Then I enter titulo "${pageEdit.titlepage}"
        And I wait for 1 seconds
        When I update
        And I wait for 4 seconds
        Then I click back
        And I wait for 5 seconds`;
        fs.writeFileSync("115_editarpage.feature.NA", datapooleditpage);

    //116. Create Page, Publish and un-publish with Datapool Pseudo
        value = getRandomInt(0, 19);
        page = datapoolpseudo[value];
        let datapoolunpublishpage = `Feature: Create Page, Publish and un-publish with Datapool Pseudo with Mockaroo
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
        When I enter titulo "${page.titlepage}"
        And I wait for 1 seconds
        When I enter description "${page.contentpage}"
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
        fs.writeFileSync("116_unplublishpage.feature.NA", datapoolunpublishpage);

    //117. Create Page with Datapool Pseudo with title grether than 255 Char
        value = getRandomInt(0, 19);
        page = datapoolpseudo[value];
        datapoolcreatepage = `Feature: Edit Page with Datapool Pseudo with title grether than 255 Char 
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
        When I enter titulo "${page.titlepage}"
        And I wait for 1 seconds
        When I enter description "${page.contentpage}"
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
        Then I enter titulo "${page.bigtittle}"
        And I wait for 1 seconds
        When I update
        And I wait for 4 seconds
        Then I find note creation error "Update failed: Title cannot be longer than 255 characters."
        And I wait for 2 seconds`;
        fs.writeFileSync("117_crearpage.feature.NA", datapoolcreatepage);
}