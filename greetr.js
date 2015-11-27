function Greetr(firstname, lastname) {

	this.firstname = firstname;
	this.lastname = lastname;

}


Greetr.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

module.exports = Greetr;