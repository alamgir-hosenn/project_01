// Get the textarea element
const textarea = document.querySelector("textarea");

// Adjust textarea height based on content
textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
