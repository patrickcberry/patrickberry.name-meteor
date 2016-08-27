Template.sidebar.helpers({
	
	// Monitors the "active-navbar-link" parameter in the Session and if it is set equal to 'about'
	// changes the class of the about link in the navbar to active
	checkActiveMenuItem: function(item){
		if (Session.equals("active-sidebar-link", item )) {
			return "active";
		} else {
			return "";
		}		
	},

});

