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
    ;
};

exports.createPages = ({actions}) => {
  const {createPage} = actions;
  const placeTemplate = path.resolve(`./src/layouts/place.js`);
  console.log(placeData);
  placeData.forEach(place => {
    createPage({
      path: `/zasieg/${place.link}`,
      component: placeTemplate,
      context: {
        place: place.place,
        swiatlowod: place.swiatlowod
      }
    })
  })
}