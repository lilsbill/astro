const toggleBtn = document.getElementById('toggle-btn');
const removeText = document.getElementById('line_star');

// Listen for a click on the button
toggleBtn.addEventListener('click', () => {

  if (toggleBtn.textContent === "Turn Off Lines")
  {
    toggleBtn.textContent = "Turn On Lines";
    removeText.classList.toggle('hidden');
    this.classList.toggle('active');
  }
  else
  {
    toggleBtn.textContent = "Turn Off Lines";
    removeText.classList.toggle('hidden');
    this.classList.toggle('active');
  }

});

const toggleNms = document.getElementById('toggle-nms');
const removeName = document.getElementById('hide_text');

toggleNms.addEventListener('click', () => 
{
  if (toggleNms.textContent === "Turn Off Names")
  {
    toggleNms.textContent = "Turn On Names";
    removeName.classList.toggle('hidden');
  }
  else
  {
    toggleNms.textContent = "Turn Off Names";
    removeName.classList.toggle('hidden');
  }

});


const toggleBd = document.getElementById('toggle-bd');
const removeBdtext = document.getElementById('text_stars');
const removeBdstar = document.getElementById('no_stars');
const removeDpline = document.getElementById('dipper_line');


toggleBd.addEventListener('click', () =>
{
  if(toggleBd.textContent === 'Big Dipper Only')
  {
    toggleBd.textContent = 'All Stars';
    removeBdtext.classList.toggle('hidden');
    removeBdstar.classList.toggle('hidden');
    removeDpline.classList.toggle('hidden');
  }
  else
  {
    toggleBd.textContent = 'Big Dipper Only';
    removeBdtext.classList.toggle('hidden');
    removeBdstar.classList.toggle('hidden');
    removeDpline.classList.toggle('hidden');
  }
});