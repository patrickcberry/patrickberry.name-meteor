Router.configure({
	// the default layout
  	layoutTemplate: 'LayoutDefault'
});

// ===============================
// DEFAULT ROUTE

Router.route('/', function () {
  	//this.layout('LayoutDefault');
	this.render('carousel', {to: 'carousel'});
	this.render('home', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "home");
});

// ===============================
// RESUME

Router.route('/resume', function () {
	this.layout('ResumeLayout');
	this.render('sidebar', {to: 'sidebar'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "resume");
});

// ===============================
// INTERESTS

Router.route('/interests', function () {
	this.render('carousel', {to: 'carousel'});	
  	this.render('interests', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "interests");
});

// ===============================
// CONTACT

Router.route('/contact', function () {
	this.render('carousel', {to: 'carousel'});	
  	this.render('contact', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "contact");
});

// ===============================
// ABOUT

Router.route('/about', function () {
	this.render('carousel', {to: 'carousel'});	
  	this.render('about', {to: 'body'});
	this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "about");
});
