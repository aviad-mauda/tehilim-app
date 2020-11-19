const app = angular.module("myApp",[
    "headerModule",
    "submitModule"
])
.directive('header', function() {
    return {
        templateUrl: './header/header.html'
    };
})
.directive('submit', function() {
    return {
        templateUrl: './submit/submit.html'
    };
})
.run(function($rootScope, $http) {

    $http.get(serverDomain+"/booksCount").then((res)=>{
        $rootScope.booksCounter = res.data.booksCounter;
    }, (err)=>{
        console.log(err);
    });

    $rootScope.user = new Object();
    $rootScope.genders = [
        "בן",
        "בת"
    ]
    
    $rootScope.gendersRes = new Map();
    $rootScope.gendersRes.set("בן","m");
    $rootScope.gendersRes.set("בת","f");

    $rootScope.types = [
        "זיווג",
        "פרנסה",
        "רפואה",
        "ילדים"
    ]
    
    $rootScope.typesRes = new Map();
    $rootScope.typesRes.set("זיווג","marriage");
    $rootScope.typesRes.set("פרנסה","living");
    $rootScope.typesRes.set("רפואה","health");
    $rootScope.typesRes.set("ילדים","children");

    $rootScope.chapters = [
        "א",
        "ב",
        "ג",
        "ד",
        "ה",
        "ו",
        "ז",
        "ח",
        "ט",
        "י",
        "יא",
        "יב",
        "יג",
        "יד",
        "טו",
        "טז",
        "יז",
        "יח",
        "יט",
        "כ",
        "כא",
        "כב",
        "כג",
        "כד",
        "כה",
        "כו",
        "כז",
        "כח",
        "כט",
        "ל",
        "לא",
        "לב",
        "לג",
        "לד",
        "לה",
        "לו",
        "לז",
        "לח",
        "לט",
        "מ",
        "מא",
        "מב",
        "מג",
        "מד",
        "מה",
        "מו",
        "מז",
        "מח",
        "מט",
        "נ",
        "נא",
        "נב",
        "נג",
        "נד",
        "נה",
        "נו",
        "נז",
        "נח",
        "נט",
        "ס",
        "סא",
        "סב",
        "סג",
        "סד",
        "סה",
        "סו",
        "סז",
        "סח",
        "סט",
        "ע",
        "עא",
        "עב",
        "עג",
        "עד",
        "עה",
        "עו",
        "עז",
        "עח",
        "עט",
        "פ",
        "פא",
        "פב",
        "פג",
        "פד",
        "פה",
        "פו",
        "פז",
        "פח",
        "פט",
        "צ",
        "צא",
        "צב",
        "צג",
        "צד",
        "צה",
        "צו",
        "צז",
        "צח",
        "ק",
        "קא",
        "קב",
        "קג",
        "קד",
        "קה",
        "קו",
        "קז",
        "קח",
        "קט",
        "קי",
        "קיא",
        "קיב",
        "קיג",
        "קיד",
        "קטו",
        "קטז",
        "קיז",
        "קיח",
        "קיט אות א",
        "קיט אות ב",
        "קיט אות ג",
        "קיט אות ד",
        "קיט אות ה",
        "קיט אות ו",
        "קיט אות ז",
        "קיט אות ח",
        "קיט אות ט",
        "קיט אות י",
        "קיט אות כ",
        "קיט אות ל",
        "קיט אות מ",
        "קיט אות נ",
        "קיט אות ס",
        "קיט אות ע",
        "קיט אות פ",
        "קיט אות צ",
        "קיט אות ק",
        "קיט אות ר",
        "קיט אות ש",
        "קיט אות ת",
        "קכ",
        "קכא",
        "קכב",
        "קכג",
        "קכד",
        "קכה",
        "קכו",
        "קכז",
        "קכח",
        "קכט",
        "קל",
        "קלא",
        "קלב",
        "קלג",
        "קלד",
        "קלה",
        "קלו",
        "קלז",
        "קלח",
        "קלט",
        "קמ",
        "קמא",
        "קמב",
        "קמג",
        "קמד",
        "קמה",
        "קמו",
        "קמז",
        "קמח",
        "קמט",
        "קנ"    
    ]

})
