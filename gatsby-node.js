/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const placeData = require('./src/assets/texts/miejscowosci.json');
const path = require('path');

exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions;
    if (page.path.match(/zasieg/)) {
      page.context.layout = "zasieg"
      createPage(page)
    }
    if (page.path.match(/telewizja/)) {
      page.context.layout = "tv"
      createPage(page)
    }
    ;
};

exports.createPages = ({actions}) => {
  const {createPage} = actions;
  const placeTemplate = path.resolve(`./src/layouts/place.js`);
  placeData.forEach(place => {
    createPage({
      path: `/zasieg/${place.link}`,
      component: placeTemplate,
      context: {
        layout: "zasieg",
        place: place.place,
        textMain: place.textMain,
        textPackages: place.textPackages,
        textPackage1: place.textPackage1,
        textPackage2: place.textPackage2,
        textPackage3: place.textPackage3,
        textContact: place.textContact,
        textMeta: place.textmeta,
        mapLink: place.mapLink
      },
    })
  })
}