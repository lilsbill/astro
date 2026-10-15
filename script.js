const toggleBtn = document.getElementById('toggle-btn');
const removeText = document.getElementById('hide_text');

// Listen for a click on the button
toggleBtn.addEventListener('click', () => {
  // Automatically adds '.hidden' if missing, or removes it if present
  removeText.classList.toggle('hidden');
  toggleBtn.textContent = "Turn On lines";

    toggleBtn.addEventListener('click', () => {
        toggleBtn.textContent = "Turn Off lines";
    });

});

const toggleNms = document.getElementById('toggle-nms');
const removeName = document.getElementById('hide_text');

toggleNms.addEventListener('click', () => {
  // Automatically adds '.hidden' if missing, or removes it if present
  removeName.classList.toggle('hidden');
  toggleNms.textContent = "Turn On Names";

    toggleBtn.addEventListener('click', () => {
        toggleBtn.textContent = "Turn Off Names";
    });

});