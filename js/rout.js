

var app = angular.module('myApp', ["ngRoute",
						'ngMaxlength',
						'githubApp',
						'mysrch'
						
]);

app.config(function($routeProvider) {
    $routeProvider
	.when("/", {
        templateUrl : "assets/pages/index.html",
		controller : "myCtrl"
    })
    .when("/fntA", {
        templateUrl : "assets/pages/font-awesome.html",
		controller : "myCtrl"
    })
	.when("/glphA", {
        templateUrl : "assets/pages/glyphicons.html",
		controller : "myCtrl"

	})
	.when("/sto1", {
        templateUrl : "assets/pages/store.html",
		controller : "myCtrl"

	})
	.when("/sto2", {
        templateUrl : "assets/pages/store2.html",
		controller : "myCtrl"

	})
	.when("/blg1", {
        templateUrl : "assets/pages/blog.html",
		controller : "myCtrl"

	})
	.when("/blg2", {
        templateUrl : "assets/pages/blog2.html",
		controller : "myCtrl"

	})
	.when("/blg3", {
        templateUrl : "assets/pages/blog3.html",
		controller : "myCtrl"
    })
	.when("/pf1", {
        templateUrl : "assets/pages/portfolio.html",
		controller : "myCtrl"
    })
	.when("/pf2", {
        templateUrl : "assets/pages/portfolio2.html",
		controller : "myCtrl"
    })
	.when("/pf3", {
        templateUrl : "assets/pages/portfolio3.html",
		controller : "myCtrl"
    })
	.when("/pf5", {
        templateUrl : "assets/pages/portfolio5.html",
		controller : "myCtrl"
    })
	.when("/pf6", {
        templateUrl : "assets/pages/portfolio6.html",
		controller : "myCtrl"
    })
	.when("/pag1", {
        templateUrl : "assets/pages/faq.html",
		controller : "myCtrl"
    })
	.when("/pag2", {
        templateUrl : "assets/pages/404.html",
		controller : "myCtrl"
    })
	.when("/pag3", {
        templateUrl : "assets/pages/sitemap.html",
		controller : "myCtrl"
    })
	.when("/pag4", {
        templateUrl : "assets/pages/about.html",
		controller : "myCtrl"
    })
	.when("/pag5", {
        templateUrl : "assets/pages/features.html",
		controller : "myCtrl"
    })
	.when("/pag6", {
        templateUrl : "assets/pages/contact.html",
		controller : "myCtrl"
    })
	.when("/pag7", {
        templateUrl : "assets/pages/services.html",
		controller : "myCtrl"
    })
	.when("/pag8", {
        templateUrl : "assets/pages/round-img.html",
		controller : "myCtrl"
    })
	.when("/pag9", {
        templateUrl : "assets/pages/gallery.html",
		controller : "myCtrl"
    })
	.when("/pag10", {
        templateUrl : "assets/pages/business.html",
		controller : "myCtrl"
    })
	.when("/pag11", {
        templateUrl : "assets/pages/business2.html",
		controller : "myCtrl"
    })
	.when("/pag12", {
        templateUrl : "assets/pages/forms.html",
		controller : "myCtrl"
    })
	.when("/pag13", {
        templateUrl : "assets/pages/bootstrap-components.html",
		controller : "myCtrl"
    })
	.when("/fntA", {
        templateUrl : "assets/pages/font-awesome.html",
		controller : "myCtrl"
    })
	.when("/glphA", {
        templateUrl : "assets/pages/glyphicons.html",
		controller : "myCtrl"
	})
	.when("/indxB", {
        templateUrl : "assets/pages/index.html",
		controller : "myCtrl"
	})
	.when("/indxC", {
        templateUrl : "assets/pages/gmaps.html",
		controller : "myCtrl"
	})
	.when("/thmA", {
        templateUrl : "assets/pages/themes.html",
		controller : "myCtrl"
    
    });
});




app.controller('myCtrl', function($scope) {
    $scope.jsv = "javascript:void(0)";
    $scope.faco = "fa fa-circle-o";
	$scope.facdo = "fa fa-file-code-o";
	$scope.faal = "fa fa-angle-left";
	$scope.csh = "control-sidebar-subheading";
	$scope.csbh = "control-sidebar-heading";
	$scope.csm = "control-sidebar-menu";
	$scope.plR = "pull-right";	
	$scope.plL = "pull-left";
	$scope.prgB2 = "progress-bar progress-bar-";
	$scope.prgB2 = "progress-bar";
	$scope.tvM = "treeview-menu";
	$scope.tV = "treeview";
	$scope.fntA = "http://fontawesome.io/icon/";
	$scope.l4s6 = "col-lg-4 col-sm-6";
	$scope.m3s4 = "col-md-3 col-sm-4";	
	$scope.fA = "fa fa-";
	$scope.glpA = "glyphicon glyphicon-";	
	$scope.glpC = "glyphicon-class";
	$scope.Nme = "Angeal185";
	$scope.nme = 'Angeal';
	$scope.sidebarHover = "sidebar-mini sidebar-collapse sidebar-expanded-on-hover fixed";
	$scope.thm1 = "cerulean";
	$scope.thm2 = "cosmo";
	$scope.thm3 = "cyborg";
	$scope.thm4 = "darkly";
	$scope.thm5 = "flatly";
	$scope.thm6 = "journal";
	$scope.thm7 = "lumen";
	$scope.thm8 = "paper";
	$scope.thm9 = "readable";
	$scope.thm10 = "sandstone";
	$scope.thm13 = "spacelab";
	$scope.thm14 = "superhero";
	$scope.thm15 = "united";
	$scope.thm16 = "yeti";
	$scope.botsw = "http://bootswatch.com/";
	$scope.imgRes = "img-responsive";
	$scope.btn2i = "btn btn-info";
	$scope.adm = "Admin";
});
 
 
 
 angular.module('ngMaxlength', [])
    .controller('myCtrl', ['$scope', function($scope) {
      $scope.maxlength = 16;
    }]);
 

angular.module('mysrch', []);

app.controller('myCtrl2', function() {
  var vm = this;
  vm.searchValue = '';
  vm.searchData = [
    '#blg2',
    '#blog',
    'Azula',
    'Bolin',
    'Katara',
    'Korra',
    'Jinora',
    'Lin Beifong',
    'Momo',
    'Mai',
    'Mako',
    'Naga',
    'Sokka',
    'Suki',
    'Tenzin',
    'Toph Beifong',
    'Ty Lee',
    'Uncle Iroh',
    'Zuko'
  ];
});


  

  
  
