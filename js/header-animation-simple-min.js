!function($){function e(){requestAnimationFrame(e),o.rotation.x+=.01,o.rotation.y+=.02,i.render(n,t)}var n,t,i,a,r,o,d;d=function(){var e=document.getElementById("header-canvas");n=new THREE.Scene,t=new THREE.PerspectiveCamera(75,e.offsetWidth/e.offsetHeight,1,1e4),t.position.z=1e3,a=new THREE.BoxGeometry(200,200,200),r=new THREE.MeshBasicMaterial({color:3276875,wireframe:!0}),o=new THREE.Mesh(a,r),n.add(o),i=new THREE.WebGLRenderer({alpha:!0}),i.setSize(e.offsetWidth,e.offsetHeight),e.appendChild(i.domElement)},$(document).ready(function(){$(".identity-wrap").prepend("<div id='header-canvas'></div>"),d(),e()})}(jQuery);