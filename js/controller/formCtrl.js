myApp.controller('FormCtrl', function($scope) {

	$scope.indexTarefa = 0;

	$scope.clicouEditar = false;
	
	$scope.pessoa = {
		name : 'Edirlei',
		lastname : 'Pizatto',
		age : 33,
		phone : '(46)8822-8153',
		email : 'edirleipizatto@gmail.com'
	}

	$scope.list = [
		{
			nomeTarefa : "Lavar o banheiro",
			dataTarefa : '2016-03-15T02:00:00.123Z'
		},

		
		{
			nomeTarefa : "Jogar o Lixo",
			dataTarefa : '2016-03-15T10:00:00.123Z'
		},

		{
			nomeTarefa : "Passar Roupa",
			dataTarefa : '2016-03-15T10:00:00.123Z'
		}
	];
	
	//função para cadastrar uma nova tarefa 
	$scope.cadastraTarefa = function(data) {
		if (!!data) {

			$scope.list.push({
				nomeTarefa : data,
				dataTarefa : new Date().getTime()
			});		
			$scope.tarefa = undefined;

		} 
		else {

			alert('Informe uma Tarefa.');

		}		
	};

	//função para editar uma tarefa
	$scope.editaTarefa = function(dataIndex) {
		$scope.clicouEditar = true;
		$scope.indexTarefa = dataIndex;
		$scope.renomear = $scope.list[dataIndex].nomeTarefa;	

	};

	//função para renomear uma tarefa
	$scope.renomearTarefa = function(data) {
		/*var editObj = {};
		editObj = {
			'nomeTarefa' : data,
			'dataTarefa' : $scope.list[$scope.indexTarefa].dataTarefa
		};
		console.log(editObj);
		$scope.list[$scope.indexTarefa] = editObj;*/
		
		//console.log(editObj);
		$scope.list[$scope.indexTarefa].nomeTarefa = data;

		$scope.clicouEditar = false;
	};


	//função para deletar uma tarefa
	$scope.deletaTarefa = function(dataIndex) {

		 var index = $scope.list.indexOf(dataIndex);
 		 $scope.list.splice(dataIndex, 1); 

	};

});

