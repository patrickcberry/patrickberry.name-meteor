Router.configure({
	// the default layout
  	layoutTemplate: 'LayoutDefault'
});

// ===============================
// DEFAULT ROUTE

Router.route('/', function () {
  	//this.layout('LayoutHome');
	this.render('carousel', {to: 'carousel'});
	this.render('home', {to: 'body'});
	//this.render('defaultFooter', {to: 'footer'});
	
	Session.set("active-navbar-link", "home");
});

// ===============================
// RESUME

Router.route('/resume', function () {
	this.layout('ResumeLayout');
	this.render('sidebar', {to: 'sidebar'});
	this.render('summary', {to: 'left'});
	this.render('objectives', {to: 'right'});
	this.render('blank', {to: 'full'});
	
	Session.set("active-navbar-link", "resume");
	Session.set("active-sidebar-link", "summary");
});

Router.route('/resume/:section', function () {
	switch ( this.params.section) {
		case "capabilities":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('capabilities', {to: 'full'});						
			Session.set("active-sidebar-link", "capabilities");
			break;

		case "achievements":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('achievements', {to: 'full'});						
			Session.set("active-sidebar-link", "achievements");
			break;		

		case "specialities":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('specialities', {to: 'full'});						
			Session.set("active-sidebar-link", "specialities");
			break;		

		case "keypositions":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('keypositions', {to: 'full'});						
			Session.set("active-sidebar-link", "keypositions");
			break;		

		case "history":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('history', {to: 'full'});						
			Session.set("active-sidebar-link", "history");
			break;		


		case "qualifications":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('qualifications', {to: 'full'});						
			Session.set("active-sidebar-link", "qualifications");
			break;		

		case "training":
			this.layout('ResumeLayout');
			this.render('sidebar', {to: 'sidebar'});
			this.render('blank', {to: 'left'});			
			this.render('blank', {to: 'right'});			
			this.render('training', {to: 'full'});						
			Session.set("active-sidebar-link", "training");
			break;		

		default:

	}

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
