var data = [[0.0, 0.0], [1.9407192468643188, -4.316240310668945], [1.9407192468643188, -4.316240310668945], [2.8704593181610107, -4.715686798095703], [6.2734880447387695, -1.1317647695541382], [12.24909782409668, 0.9542330503463745], [17.99001693725586, 3.3287200927734375], [25.283510208129883, 7.07907772064209], [32.44160461425781, 10.352319717407227], [38.95881271362305, 12.959816932678223], [46.2342529296875, 15.511835098266602], [53.166683197021484, 17.886322021484375], [58.85343933105469, 19.240001678466797], [62.49116134643555, 16.865514755249023], [68.57508850097656, 12.93762493133545], [77.0781478881836, 9.730957984924316], [84.9854507446289, 7.245513916015625], [91.07840728759766, 5.592249393463135], [94.15647888183594, 7.7670135498046875], [95.0049819946289, 15.733750343322754], [97.08110046386719, 25.10964584350586], [101.25138854980469, 27.81700325012207], [104.23016357421875, 28.027822494506836], [111.47852325439453, 28.760141372680664], [122.59027099609375, 30.74627685546875], [128.15066528320312, 32.76570129394531], [134.3519287109375, 34.629783630371094], [142.07870483398438, 35.905792236328125], [149.00210571289062, 36.63811111450195], [154.4451446533203, 38.89054489135742], [156.69277954101562, 43.70609664916992], [158.85012817382812, 48.92108917236328], [158.70570373535156, 53.614585876464844], [154.1562957763672, 56.05564880371094], [148.6500701904297, 55.22346878051758], [142.6112823486328, 53.880882263183594], [133.9547576904297, 52.0722770690918], [127.58198547363281, 49.886417388916016], [120.96548461914062, 48.610408782958984], [113.34703063964844, 46.846187591552734], [106.29725646972656, 44.31636047363281], [98.13720703125, 41.18736267089844], [90.92495727539062, 38.7241096496582], [84.41677856445312, 37.215091705322266], [78.70293426513672, 36.88221740722656], [73.67511749267578, 36.02784729003906], [66.28233337402344, 34.9626579284668], [59.48530197143555, 33.86417770385742], [51.32525634765625, 32.377349853515625], [49.041526794433594, 31.41202163696289], [45.37672424316406, 25.55347442626953], [42.0459098815918, 20.471628189086914], [38.39916229248047, 16.976472854614258], [32.95612335205078, 12.294073104858398], [27.332548141479492, 7.95564079284668], [20.192506790161133, 4.349527359008789], [13.034412384033203, 3.6394004821777344], [5.9395036697387695, 2.5076358318328857], [0.5415960550308228, -0.16643600165843964], [1.254697561264038, -2.0859978199005127], [2.4371824264526367, -3.517347574234009]];
   
var margin = {top: 20, right: 15, bottom: 60, left: 60}
, width = 960 - margin.left - margin.right
, height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
		.domain([-30, 200])
		.range([ 0, width ]);

var y = d3.scale.linear()
		.domain([-20, 70])
		.range([ height, 0 ]);

var chart = d3.select('body')
.append('svg:svg')
.attr('width', width + margin.right + margin.left)
.attr('height', height + margin.top + margin.bottom)
.attr('class', 'chart')

var main = chart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
.attr('width', width)
.attr('height', height)
.attr('class', 'main')   
  
// draw the x axis
var xAxis = d3.svg.axis()
.scale(x)
.orient('bottom');

main.append('g')
.attr('transform', 'translate(0,' + height + ')')
.attr('class', 'main axis date')
.call(xAxis);

// draw the y axis
var yAxis = d3.svg.axis()
.scale(y)
.orient('left');

main.append('g')
.attr('transform', 'translate(0,0)')
.attr('class', 'main axis date')
.call(yAxis);

var g = main.append("svg:g"); 

g.selectAll("scatter-dots")
.data(data)
.enter().append("svg:circle")
	.attr("cx", function (d,i) { return x(d[0]); } )
	.attr("cy", function (d) { return y(d[1]); } )
	.attr("r", 8);