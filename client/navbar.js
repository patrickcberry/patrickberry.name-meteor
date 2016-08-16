Template.navbar.helpers({
	
	// Monitors the "active-navbar-link" parameter in the Session and if it is set equal to 'about'
	// changes the class of the about link in the navbar to active
	checkActiveMenuItem: function(item){
		if (Session.equals("active-navbar-link", item )) {
			return "active";
		} else {
			return "";
		}		
	},

	/**
	isAboutActive: function() {
		if (Session.equals("active-navbar-link", "about")) {
			return "active";
		} else {
			return "";
		}
	},
	isLinksActive: function() {
		if (Session.equals("active-navbar-link", "links")) {
			return "active";
		} else {
			return "";
		}
	},
	isListsActive: function() {
		if (Session.equals("active-navbar-link", "lists")) {
			return "active";
		} else {
			return "";
		}
	},	
	isDevActive: function() {
		if (Session.equals("active-navbar-link", "dev")) {
			return "active";
		} else {
			return "";
		}
	},
	isDataActive: function() {
		if (Session.equals("active-navbar-link", "data")) {
			return "active";
		} else {
			return "";
		}
	},		
	isAdminActive: function() {
		if (Session.equals("active-navbar-link", "admin")) {
			return "active";
		} else {
			return "";
		}
	}
	*/	
});

