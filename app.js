/*jslint node: true*/
"use strict";

angular.module('newsSearch', [ ]).controller('main', function( $scope, $templateCache, $interpolate ) {
    console.log('angular');

    var template = $templateCache.get("drpublish-placeholder.html");

    $scope.articles = [];

    $scope.search = function(){
        console.log('Search...');
        var q = document.getElementById('keyword').value;

        // TODO: Implement seach via Gonzo
        $scope.articles = mockData()['results'];
    };

    $scope.addArticle = function( article ) {
        console.log( 'Adding to editor');
        console.log( article );
        var placeholder = $interpolate( template )( { article: article } );

        placeholder = placeholder.trim();
        console.log(placeholder);

        PluginAPI.Editor.insertElement( placeholder );
    };
});


function mockData(){
    return {
        results: [
            {
                thumbnailurl: 'http://pipr.startsiden.no/abcn/resized/972x//files/2015-24/hoyesterett.jpg',
                url: 'http://www.abcnyheter.no/nyheter/sport/2015/06/09/225744/morgan-andersen-moter-aftenposten-i-hoyesterett',
                title: 'Morgan Andersen møter',
                ingress: 'YOYOYO',
                publishedDate: '2015-05-30 20:00'
            },
            {
                thumbnailurl: 'http://pipr.startsiden.no/abcn/resized/972x//files/2015-24/hoyesterett.jpg',
                url: 'http://www.abcnyheter.no/nyheter/sport/2015/06/09/225744/morgan-andersen-moter-aftenposten-i-hoyesterett',
                title: 'Morgan Andersen møter',
                ingress: 'YOYOYO',
                publishedDate: '2015-05-30 20:00'
            },
            {
                thumbnailurl: 'http://pipr.startsiden.no/abcn/resized/972x//files/2015-24/hoyesterett.jpg',
                url: 'http://www.abcnyheter.no/nyheter/sport/2015/06/09/225744/morgan-andersen-moter-aftenposten-i-hoyesterett',
                title: 'Morgan Andersen møter',
                ingress: 'YOYOYO',
                publishedDate: '2015-05-30 20:00'
            }
        ]
    }
}