Router.configure({
	// the default layout
  	layoutTemplate: 'LayoutDefault'
});

// ===============================
// DEFAULT ROUTE

Router.route('/', function () {
  	//this.layout('LayoutDefault');
	this.render('carousel', {to: 'carousel'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "none");
});

// ===============================
// RESUME

Router.route('/resume', function () {
  	this.render('resume', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "resume");
});

// ===============================
// INTERESTS

Router.route('/interests', function () {
  	this.render('interests', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "interests");
});

// ===============================
// CONTACT

Router.route('/contact', function () {
  	this.render('contact', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "contact");
});

// ===============================
// ABOUT

Router.route('/about', function () {
  	this.render('about', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "about");
});
