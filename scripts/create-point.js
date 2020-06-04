function populateUFs() {

	const ufSelect = document.querySelector("[name=uf]")
	
	fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
	.then( res => res.json())
	.then( states => {
		console.log(states)
		for (state of states){
			ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
		}
	})
}

function getCities(e) {
	const citySelect = document.querySelector("[name=city]")
	const stateInput = document.querySelector("[name=state]")

	const ufValue = e.target.value;

	/*pegar o nome do estado que esta sendo selecionado e enviar para a URL*/
	const indexOfSelectedState = e.target.selectedIndex
	stateInput.value = e.target.options[indexOfSelectedState].text

	if(ufValue === ""){
		citySelect.innerHTML = `<option value>Selecione a Cidade</option>`
		citySelect.disabled = true	
	} else {
		const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
	
		fetch(url)
		.then(res => res.json())
		.then(cities => {
	
			for ( city of cities){
				citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
			}
	
			citySelect.disabled = false
		})
	}	
}

populateUFs()

document.querySelector("select[name=uf]")
.addEventListener("change", getCities)
