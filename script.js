

function insert_Row() {
    //Write your code here
	let table=document.querySelector("#sampleTable")
	
	
		let tr=document.createElement("tr")
	
		let td1=document.createElement("td")
		td1.textContent="New Cell1"
	
		let td2=document.createElement("td")
		td2.textContent="New Cell2"
	
		tr.append(td1, td2)
		table.prepend(tr)
}
