

function insert_Row() {
    //Write your code here
	let table=document.querySelector("#sampleTable")
	
	
		let tr=document.createElement("tr")
	
		let td1=document.createElement("td")
		td1.innerText="New Cell1"
	
		let td2=document.createElement("td")
		td2.innerText="New Cell2"
	
		tr.prepend(td1, td2)
		table.prepend(tr)
}
