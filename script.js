/*D.O.M 

O DOM 
Document Object Model

é o padrão de como acessar e modificar os elementos HTML de uma página.


B.O.M

Browser Object Model

ele pode acessar a propiedade geral de uma janela por exemplo as navegações que
foram feitas, documetação e etc... 

Como manipular estes meios?

Podemos fazer uma busca pelo própio nome da ID

document.getElementById('nomedaid');

E também o mesmo pode ser procurado pela tag tipo lista

document.getElementsByTagName('nome ex li');

E pode ser buscado por uma classe

document.getElementsByClassName('nomeclasse');

Os dois ultimos serão mostrados como arrays.


Há outro tipo de seletor que tambem retorna um array, e ele seria o selector.

document.querySelectorAll('.primeira-classe .segunda-classe);

. -> indica que é classe
# -> Representa ID


Outra forma por exemplo tag e classe

documet.querySelectorAll('li .opcao');]



ADICIONAR E DELETAR ELEMENTOS


document.createElement(element)

document.removeChild(element)

document.appendChild(element) - > Indicado para adicionar elementro dentro de outro

document.replaceCHild(new, old) -> Se coloca o elemento novo e após o velho que irá ocorrer a operação.




COMO TRABALHAR E MANIPULAR ESTILOS


Acessar diretamente pelo js como se fosse css

document.getElementsByTagName("p").style.color = "Blue";



EVENTOS

São qualquer tipo de ações que o usuário faz na web


Tipos:

mouseover, mouseout.

click, dbclick.

Change, load.


Acionando eventos 

exemplo de código js

const botao = document.getElementById("meubotao");
botao.addEventListener("click", outraFuncao);

Ou seja ele estaŕá observando o botao, caso ele perceba um click ele fará 
alguma ação.

em atributo html podemos utiilizar onclick="ação(this)" ... dentro de alguma tag
para ocorrer a mudança dentro do mesmo. 

*/
// EXERCICIO DARK MODE 

//toggle - utilizado por exemplo para acionar ou desativar algo
//exemplo: um interruptor está ligado ele ao sera acionado e desligará o interruptor
//mas caso ele esteja desligado e o toggle seja ativado ele ligará o interruptor
function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];


button.addEventListener('click', changeMode);