var checkboxes = $$("input");

const timer = ms => new Promise(res => setTimeout(res, ms))

async function turnOffInterests () {  
  	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked === true) {
			console.log("running " + i);
			checkboxes[i].click();
			await timer(4000);
		}
	}
}

turnOffInterests();
