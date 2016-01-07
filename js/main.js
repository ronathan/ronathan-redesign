document.addEventListener("DOMContentLoaded", function() {
	var menuItems = document.getElementsByClassName("menu-item");
	console.log(menuItems);
	for(var i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener("click", function() {
			var page = this.dataset.link;
			window.location.href = "file:///Users/ronathan/Code/ronathan-redesign/" + page + ".html";
		});
	}
});