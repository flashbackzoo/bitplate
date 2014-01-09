var requirejs = require("requirejs"),
	expect = require("expect.js");

describe("UserModel", function () {
	var UserModel, userModel;

	before(function (done) {
		requirejs([baseUrl + "/models/userModel.js"], function (Model) {
			UserModel = Model;
			done();
		});
	});

	beforeEach(function () {
		userModel = new UserModel();
	});

	it("getFullName() should return null if forename and surname are not set", function () {
		expect(userModel.getFullName()).to.be(null);
	});

	it("getFullName() should return null if forename is not set", function () {
		userModel.set("surname", "White");
		expect(userModel.getFullName()).to.be(null);
	});

	it("getFullName() should return null if surname is not set", function () {
		userModel.set("forename", "Walter");
		expect(userModel.getFullName()).to.be(null);
	});

	it("getFullName() should return 'Walter White' if forename and surname are set", function () {
		userModel.set("forename", "Walter");
		userModel.set("surname", "White");
		expect(userModel.getFullName()).to.be("Walter White");
	});
});