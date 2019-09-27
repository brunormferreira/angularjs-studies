angular.module("Filmes").controller("FilmesController", function($scope){
	$scope.titulo = "Filmes que já assisti";

	$scope.filmes = [
		{
			id: "123123123",
			titulo: "Deadpool 2",
			ano: 2016,
			produtora: "Fox",
			sinopse: "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.",
			cartaz: "http://br.web.img3.acsta.net/c_215_290/pictures/18/04/19/15/31/2232385.jpg"
		},
		{
			id: "321321321",
			titulo: "X-MEN: APOCALYPSE",
			ano: 2016,
			produtora: "Fox",
			sinopse: "O ancestral dos mutantes, En Sabah Nur, retorna com planos de mergulhar o mundo em um apocalipse para garatir a supremacia. Sequência de \"X-Men: Dias de um Futuro Esquecido\".",
			cartaz: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Xmen_apocalypse_ver18.jpg/250px-Xmen_apocalypse_ver18.jpg"
		}
	];

	$scope.novoFilme = {};

	$scope.removerFilme = function(id) {
		angular.forEach($scope.filmes, function(filme, i){
			if(filme.id == id){
				$scope.filmes.splice(i, 1);
			}
		});
	}

	$scope.adicionarFilme = function(){
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now();
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	}
});