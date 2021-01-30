w=a.width=innerWidth
h=a.height=innerHeight
g=a.getContext('webgl')||a.getContext('experimental-webgl')
g.enable(g.DEPTH_TEST)
g.depthFunc(g.LEQUAL)

$prog(g, [vertexShader, fragmentShader])
posBuf = $buf([1,1,0,-1,1,0,1,-1,0,-1,-1,0])
pos = $attr("pos")


~function scene(time) {
	time=time*1e-3

	// clear screen
	g.clearColor(1/5, 1/5, 1/5, 1)
	g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT)

	// bind attributes to buffers
	$bind(pos, posBuf, 3)
	
	// set uniforms
	$uni("time", time)
	$uniV("resolution", [w,h])

	// draw
	g.drawArrays(g.TRIANGLE_STRIP,0,4)
	requestAnimationFrame(scene)
}(0)

// ParticlesJS Config.
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 80,
		"density": {
		  "enable": true,
		  "value_area": 700 } },
  
  
	  "color": {
		"value": "#ffffff" },
  
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000" },
  
		"polygon": {
		  "nb_sides": 5 } },
  
  
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false } },
  
  
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false } },
  
  
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1 },
  
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200 } } },
  
  
  
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "grab" },
  
		"onclick": {
		  "enable": true,
		  "mode": "push" },
  
		"resize": true },
  
	  "modes": {
		"grab": {
		  "distance": 140,
		  "line_linked": {
			"opacity": 1 } },
  
  
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3 },
  
		"repulse": {
		  "distance": 200,
		  "duration": 0.4 },
  
		"push": {
		  "particles_nb": 4 },
  
		"remove": {
		  "particles_nb": 2 } } },
  
  
  
	"retina_detect": true });