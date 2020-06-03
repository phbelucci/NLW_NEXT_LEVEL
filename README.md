# NVL_NEXT_LEVEL
Estudo de HMTL, CSS, JavaScript com o projeto Ecoleta - RocketSeat

--> Fase 1 completa!!! 

![alt text](https://raw.githubusercontent.com/phbelucci/NVL_NEXT_LEVEL/master/v1/fase_1.jpg)

```
HTML
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ecoleta</title>
	<link rel="stylesheet" type="text/css" href="styles/main.css">
	<link href="https://fonts.googleapis.com/css2?family=Roboto&700&family=Ubuntu:wght@700&display=swap" rel="stylesheet">

</head>
<body>

	<div id="page-home">
		
		<div class="content">	

			<header>
				<img src="icones/logo.svg" alt="LogoMarca">
				<a href="www.google.com.br">
					<span></span>
					Cadastre um ponto de coleta
				</a>
			</header>

			<main>
				
				<h1>Seu marketplace de coleta de resíduos</h1>

				<p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

				<a href="#">
					<span></span>
					<strong>Pesquisar pontos de coleta</strong>
				</a>

			</main>
			
			

		</div>

	</div>

</body>
</html>
```
```


```
CSS
```css
:root {

	--title-color: #322153;
	--primary-color: #34cb79;
	
}

* {
	margin: 0;
	padding: 0;
}

html {

	font-family: 'Roboto', sans-serif;

}

body {
	background: #f0f0f5;
	-webkit-font-smoothing: antialised;
}

a {
	text-decoration: none;
}

h1,h2,h3,h4,h5,h6 {
	color: var(--title-color);
	font-family: 'Ubuntu', sans-serif;
}

/*Box Model*/
#page-home {
	height: 100vh;
	background: url('../icones/home-background.svg') no-repeat;
	background-position: 35vw bottom;
}

#page-home .content {
	height: 100%;
	width: 90%;
	max-width: 1100px;
	margin: 0 auto; 
	display: flex;
	height: 100%;
	flex-direction: column;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}

#page-home header {
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

#page-home header a {

	display: flex;
	color: var(--title-color);
	font-weight: 700;

}

#page-home header a span {

	display: flex;
	margin-right: 20px;
	content: "";
	background-image: url('../icones/log-in.svg');
	width: 20px;
	height: 20px;

}

#page-home main {

	max-width: 560px;

	flex: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;

}

#page-home main h1 {
	font-size: 50px;
}

#page-home main p {
	font-size: 24px;
	line-height: 38px;
	margin-top: 24px;
}

#page-home main a {

	width: 100%;
	height: 72px;
	border-radius: 8px;

	max-width: 360px;

	background-color: var(--primary-color);

	display: flex;
	align-items: center;
	margin-top: 40px;
	transition: 400ms;

	color: white;
}

#page-home main a:hover {

	background-color: #2fb86e;

}

#page-home main a span {

	width: 72px;
	height: 72px;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	background-color: rgba(0,0,0,0.08);

	display: flex;
	align-items: center;
	justify-content: center;

}

#page-home main a span::after {
	content: "";
	background-image: url('../icones/search.svg');
	width: 20px;
	height: 20px;

}

#page-home main a strong {
	flex: 1;
	text-align: center;
}


@media (max-width: 900px) {
	#page-home {
		background-position-x: 70vw;

	}

	#page-home .content {
		align-items: center;
		text-align: center;
	}

	#page-home header a  {

		/*pagina sobre a outra*/
		position: absolute;
		bottom: 48px;

		left: 50%;

		/*desconsidera os 50% do restante.*/
		transform: translateX(-50%);
	}

	#page-home main {
		align-items: center;
	}

}
```
```

--> Fase 2 em andamento... 
