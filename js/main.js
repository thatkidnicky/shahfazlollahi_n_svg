var allIcons = document.querySelectorAll('.food');

function logMyId()
{
	console.log(this.id);

}

allIcons.forEach(currenticon => currenticon.addEventListener('click', logMyId))