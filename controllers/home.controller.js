exports.index = function(req,res) {

	let content = {
		highlight: {
			url:'/assets/images/home/banner/highlight.jpg',
			title: 'Hello'
		},
		thumbnail:[
		{
			url:'/assets/images/home/banner/thumbnail-1.jpg',
			title: 'SARIO'
		},
		{
			url:'/assets/images/home/banner/thumbnail-2.jpg',
			title: 'DORAEMON'
		},
		{
			url:'/assets/images/home/banner/thumbnail-3.jpg',
			title: 'MARUKO'
		},
		{
			url:'/assets/images/home/banner/thumbnail-4.jpg',
			title: 'HAMTARO'
		}
		]
	}
	res.render('home.twig', content)
}