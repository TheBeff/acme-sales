const Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost/acme_sales', { logging: false });

var Region = db.define('region', {
	zipcode: {
		type: Sequelize.INTEGER,
		validate: {
			is: /^[0-9]{5}(?:-[0-9]{4})?$
		}
	}
});

var SalesPerson = db.define('salesPerson', {
	name: Sequelize.STRING
});

var SalesPersonRegion = db.define('salesPersonRegion', {});

Region.hasMany(SalesPersonRegion);
SalesPerson.hasMany(SalesPersonRegion);
SalesPersonRegion.belongsTo(Region);
SalesPersonRegion.belongsTo(SalesPerson);

module.exports = {
	Region,
	SalesPerson,
	SalesPersonRegion
};