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


//intens de coleta
//pegar todos os li´s

const itemsCollect = document.querySelectorAll(".items-grid li")

for(item of itemsCollect ){
	item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

//array para armazenar o id dos itens selecionados
let selectedItems = []

function handleSelectedItem(e){
	
	const itemLi = e.target

	//adicinoar ou remover uma classe com javascript
	//verificar se o item possui ou nao a classe e adicionar ou remove 
	itemLi.classList.toggle("selected")
	const itemId = itemLi.dataset.id


	/*verificar se existem itens selecionados, se sim, pegar os itens selecionados*/
	const alreadySelected = selectedItems.findIndex( item => {
		const itemFound = item == itemId
		return itemFound
	})


	/*se já estiver selecionado, tirar da seleção*/
	if(alreadySelected >= 0){
		const filteredItens = selectedItems.filter( item => {
			const itemIsDifferent = item != itemId
			return itemIsDifferent
		})

		selectedItems = filteredItens
		
	} else {
		/*se não estiver selecionado, adicionar a seleção*/
		selectedItems.push(itemId)
	}
	
	/*atualizar o campo escondido com os itens selecionados*/
	console.log(selectedItems)
	collectedItems.value = selectedItems

}