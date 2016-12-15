var link = document.querySelector(".write-us");
			var popup = document.querySelector(".modal-content");
			var close = document.querySelector(".modal-content-close");
			var form = popup.querySelector("form");
			var login = popup.querySelector("[name='login']");
			var email = popup.querySelector("[name='email']");
			var storage = localStorage.getItem("login");

			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("modal-content-show");
				if (storage) {
					login.value = storage;
					setTimeout(function(){
						email.focus();
						}, 600);
					} 
					else {
						setTimeout(function(){
							login.focus();
							}, 600);
						}
					});

			close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("modal-content-show");
			});

			form.addEventListener("submit", function(event) {
				if (!(login.value && email.value)) {
					event.preventDefault();
					popup.classList.remove("modal-error");
					popup.classList.add("modal-error");
				} else {
					localStorage.setItem("login", login.value);
				}
			});
			window.addEventListener("keydown", function(event) {
				if (event.keyCode == 27) {
					if (popup.classList.contains("modal-content-show")) {
					popup.classList.remove("modal-content-show");
					}
				}
			});