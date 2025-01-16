new Vue({
	el: `#app`,

	data: {
		input: document.getElementsByClassName(`password-field`),
		eye: document.getElementsByClassName(`toggle-password`)
	},

	methods: {
		showPassword: function() {
			this.eye[0].classList.toggle(`active`);
			this.input[0].type === `password` ?
			this.input[0].type = `text` : this.input[0].type = `password`;
		}
	}
});