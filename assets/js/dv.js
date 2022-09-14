const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '327955f08bmsh43ae8ba70314e87p1b4cadjsndf367a56ecba',
		'X-RapidAPI-Host': 'instagram204.p.rapidapi.com'
	}
};

fetch('https://instagram204.p.rapidapi.com/userfollowers/25025320/12/%7Bend_cursor%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	