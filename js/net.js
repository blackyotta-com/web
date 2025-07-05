        // Initialize Vanta.js background
        VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x5773ff,
            backgroundColor: 0x0a0a12,
            size: 0.8
        });
        
        // Initialize Three.js 3D models
        document.addEventListener('DOMContentLoaded', function() {
            // Torus in Hero Section
            const torusCanvas = document.getElementById('torusCanvas');
            const torusScene = new THREE.Scene();
            const torusCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const torusRenderer = new THREE.WebGLRenderer({ 
                canvas: torusCanvas, 
                alpha: true,
                antialias: true 
            });
            
            const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
            const torusMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x5773ff,
                wireframe: true,
                transparent: true,
                opacity: 0.8
            });
            const torus = new THREE.Mesh(torusGeometry, torusMaterial);
            torusScene.add(torus);
            
            torusCamera.position.z = 3;
            
            // Cube in Hero Section
            const cubeCanvas = document.getElementById('cubeCanvas');
            const cubeScene = new THREE.Scene();
            const cubeCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const cubeRenderer = new THREE.WebGLRenderer({ 
                canvas: cubeCanvas, 
                alpha: true,
                antialias: true 
            });
            
            const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            const cubeMaterial = new THREE.MeshBasicMaterial({ 
                color: 0xff007a,
                wireframe: true,
                transparent: true,
                opacity: 0.6
            });
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cubeScene.add(cube);
            
            cubeCamera.position.z = 3;
            
            // Pyramid in Hero Section
            const pyramidCanvas = document.getElementById('pyramidCanvas');
            const pyramidScene = new THREE.Scene();
            const pyramidCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const pyramidRenderer = new THREE.WebGLRenderer({ 
                canvas: pyramidCanvas, 
                alpha: true,
                antialias: true 
            });
            
            const pyramidGeometry = new THREE.ConeGeometry(0.8, 1.5, 4);
            const pyramidMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x00f0ff,
                wireframe: true,
                transparent: true,
                opacity: 0.6
            });
            const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
            pyramid.rotation.y = Math.PI / 4;
            pyramidScene.add(pyramid);
            
            pyramidCamera.position.z = 3;
            
            // XR Canvas in Features
            const xrCanvas = document.getElementById('xrCanvas');
            const xrScene = new THREE.Scene();
            const xrCamera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
            const xrRenderer = new THREE.WebGLRenderer({ 
                canvas: xrCanvas, 
                alpha: true,
                antialias: true 
            });
            
            const xrPointsGeometry = new THREE.BufferGeometry();
            const xrVertices = [];
            for (let i = 0; i < 1000; i++) {
                xrVertices.push(
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                );
            }
            xrPointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(xrVertices, 3));
            const xrPointsMaterial = new THREE.PointsMaterial({
                color: 0x5773ff,
                size: 0.02,
                transparent: true,
                opacity: 0.8
            });
            const xrPoints = new THREE.Points(xrPointsGeometry, xrPointsMaterial);
            xrScene.add(xrPoints);
            
            xrCamera.position.z = 2;
            xrRenderer.setSize(xrCanvas.width, xrCanvas.height);
            
            // Project 1 Canvas
            const project1Canvas = document.getElementById('project1Canvas');
            const project1Scene = new THREE.Scene();
            const project1Camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const project1Renderer = new THREE.WebGLRenderer({ 
                canvas: project1Canvas, 
                alpha: true,
                antialias: true 
            });
            
            // Create a grid of points for project 1
            const project1Geometry = new THREE.BufferGeometry();
            const project1Vertices = [];
            const gridSize = 10;
            
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    project1Vertices.push(
                        (i - gridSize/2) * 0.1,
                        (j - gridSize/2) * 0.1,
                        0
                    );
                }
            }
            
            project1Geometry.setAttribute('position', new THREE.Float32BufferAttribute(project1Vertices, 3));
            const project1Material = new THREE.PointsMaterial({
                color: 0x00f0ff,
                size: 0.05,
                sizeAttenuation: true
            });
            const project1Points = new THREE.Points(project1Geometry, project1Material);
            project1Scene.add(project1Points);
            
            project1Camera.position.z = 2;
            project1Renderer.setSize(project1Canvas.width, project1Canvas.height);
            
            // Project 2 Canvas
            const project2Canvas = document.getElementById('project2Canvas');
            const project2Scene = new THREE.Scene();
            const project2Camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const project2Renderer = new THREE.WebGLRenderer({ 
                canvas: project2Canvas, 
                alpha: true,
                antialias: true 
            });
            
            // Create a wireframe city for project 2
            const project2Group = new THREE.Group();
            
            for (let i = 0; i < 20; i++) {
                const height = Math.random() * 0.5 + 0.2;
                const buildingGeometry = new THREE.BoxGeometry(0.1, height, 0.1);
                const buildingMaterial = new THREE.MeshBasicMaterial({
                    color: 0x8a2be2,
                    wireframe: true
                });
                const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
                building.position.x = (Math.random() - 0.5) * 2;
                building.position.z = (Math.random() - 0.5) * 2;
                building.position.y = height / 2;
                project2Group.add(building);
            }
            
            project2Scene.add(project2Group);
            project2Camera.position.z = 3;
            project2Camera.position.y = 1;
            project2Renderer.setSize(project2Canvas.width, project2Canvas.height);
            
            // Project 3 Canvas
            const project3Canvas = document.getElementById('project3Canvas');
            const project3Scene = new THREE.Scene();
            const project3Camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const project3Renderer = new THREE.WebGLRenderer({ 
                canvas: project3Canvas, 
                alpha: true,
                antialias: true 
            });
            
            // Create a network of lines for project 3
            const project3Group = new THREE.Group();
            const project3Material = new THREE.LineBasicMaterial({ color: 0xff007a });
            
            for (let i = 0; i < 20; i++) {
                const project3Geometry = new THREE.BufferGeometry();
                const vertices = [];
                vertices.push(
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                );
                vertices.push(
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                );
                project3Geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
                const line = new THREE.Line(project3Geometry, project3Material);
                project3Group.add(line);
            }
            
            project3Scene.add(project3Group);
            project3Camera.position.z = 3;
            project3Renderer.setSize(project3Canvas.width, project3Canvas.height);
            
            // Tech Viz Canvas
            const techVizCanvas = document.getElementById('techVizCanvas');
            const techVizScene = new THREE.Scene();
            const techVizCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const techVizRenderer = new THREE.WebGLRenderer({ 
                canvas: techVizCanvas, 
                alpha: true,
                antialias: true 
            });
            techVizRenderer.setSize(techVizCanvas.width, techVizCanvas.height);
            
            // Create a particle system for tech viz
            const techVizParticles = 500;
            const techVizPositions = new Float32Array(techVizParticles * 3);
            const techVizColors = new Float32Array(techVizParticles * 3);
            
            for (let i = 0; i < techVizParticles; i++) {
                techVizPositions[i * 3] = (Math.random() - 0.5) * 10;
                techVizPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
                techVizPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
                
                techVizColors[i * 3] = Math.random() * 0.5 + 0.5; // R
                techVizColors[i * 3 + 1] = Math.random() * 0.3;    // G
                techVizColors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // B
            }
            
            const techVizGeometry = new THREE.BufferGeometry();
            techVizGeometry.setAttribute('position', new THREE.BufferAttribute(techVizPositions, 3));
            techVizGeometry.setAttribute('color', new THREE.BufferAttribute(techVizColors, 3));
            
            const techVizMaterial = new THREE.PointsMaterial({
                size: 0.1,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });
            
            const techVizParticleSystem = new THREE.Points(techVizGeometry, techVizMaterial);
            techVizScene.add(techVizParticleSystem);
            
            techVizCamera.position.z = 5;
            
            // Stats Canvas
            const statsCanvas = document.getElementById('statsCanvas');
            const statsScene = new THREE.Scene();
            const statsCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const statsRenderer = new THREE.WebGLRenderer({ 
                canvas: statsCanvas, 
                alpha: true,
                antialias: true 
            });
            statsRenderer.setSize(statsCanvas.width, statsCanvas.height);
            
            // Create data visualization
            const statsGroup = new THREE.Group();
            
            // Create bars
            const barHeights = [1.5, 2, 2.8, 1.8, 2.5];
            const barColors = [0x00f0ff, 0x5773ff, 0xff007a, 0x8a2be2, 0x00ffaa];
            
            for (let i = 0; i < barHeights.length; i++) {
                const barGeometry = new THREE.BoxGeometry(0.3, barHeights[i], 0.3);
                const barMaterial = new THREE.MeshBasicMaterial({ color: barColors[i] });
                const bar = new THREE.Mesh(barGeometry, barMaterial);
                bar.position.x = (i - 2) * 0.8;
                bar.position.y = barHeights[i] / 2;
                statsGroup.add(bar);
                
                // Add connecting lines
                if (i > 0) {
                    const lineGeometry = new THREE.BufferGeometry();
                    const lineVertices = [
                        (i-1 - 2) * 0.8, barHeights[i-1], 0,
                        (i - 2) * 0.8, barHeights[i], 0
                    ];
                    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
                    const lineMaterial = new THREE.LineBasicMaterial({
                        color: 0xffffff,
                        transparent: true,
                        opacity: 0.4
                    });
                    const line = new THREE.Line(lineGeometry, lineMaterial);
                    statsGroup.add(line);
                }
            }
            
            // Add base plane
            const planeGeometry = new THREE.PlaneGeometry(5, 0.1);
            const planeMaterial = new THREE.MeshBasicMaterial({
                color: 0x444444,
                side: THREE.DoubleSide
            });
            const plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.rotation.x = Math.PI / 2;
            plane.position.y = -0.05;
            statsGroup.add(plane);
            
            statsScene.add(statsGroup);
            statsCamera.position.z = 6;
            statsCamera.position.y = 1;
            statsCamera.lookAt(0, 1, 0);
            
            // Contact Canvas
            const contactCanvas = document.getElementById('contactCanvas');
            const contactScene = new THREE.Scene();
            const contactCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const contactRenderer = new THREE.WebGLRenderer({ 
                canvas: contactCanvas, 
                alpha: true,
                antialias: true 
            });
            
            // Create glowing orbs with connections
            const contactOrbs = [];
            const orbPositions = [];
            const orbColors = [0x00f0ff, 0x5773ff, 0xff007a, 0x8a2be2, 0x00ffaa];
            
            for (let i = 0; i < 5; i++) {
                const orbGeometry = new THREE.SphereGeometry(0.3, 16, 16);
                const orbMaterial = new THREE.MeshBasicMaterial({
                    color: orbColors[i],
                    transparent: true,
                    opacity: 0.8
                });
                const orb = new THREE.Mesh(orbGeometry, orbMaterial);
                
                orb.position.x = (Math.random() - 0.5) * 4;
                orb.position.y = (Math.random() - 0.5) * 2;
                orb.position.z = (Math.random() - 0.5) * 4;
                
                orbPositions.push(new THREE.Vector3(
                    orb.position.x,
                    orb.position.y,
                    orb.position.z
                ));
                
                contactOrbs.push(orb);
                contactScene.add(orb);
            }
            
            // Add connecting lines
            const lineGeometry = new THREE.BufferGeometry();
            const lineVertices = [];
            
            for (let i = 0; i < orbPositions.length; i++) {
                for (let j = i + 1; j < orbPositions.length; j++) {
                    lineVertices.push(
                        orbPositions[i].x, orbPositions[i].y, orbPositions[i].z,
                        orbPositions[j].x, orbPositions[j].y, orbPositions[j].z
                    );
                }
            }
            
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.2
            });
            const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
            contactScene.add(lines);
            
            contactCamera.position.z = 8;
            contactRenderer.setSize(contactCanvas.width, contactCanvas.height);
            
            // Footer Sphere
            const footerSphereCanvas = document.getElementById('footerSphereCanvas');
            const footerSphereScene = new THREE.Scene();
            const footerSphereCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const footerSphereRenderer = new THREE.WebGLRenderer({ 
                canvas: footerSphereCanvas, 
                alpha: true,
                antialias: true 
            });
            
            const footerSphereGeometry = new THREE.SphereGeometry(1, 32, 32);
            const footerSphereMaterial = new THREE.MeshBasicMaterial({
                color: 0x00f0ff,
                wireframe: true,
                transparent: true,
                opacity: 0.4
            });
            const footerSphere = new THREE.Mesh(footerSphereGeometry, footerSphereMaterial);
            footerSphereScene.add(footerSphere);
            
            footerSphereCamera.position.z = 3;
            
            // Intersection Observer for animated elements
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('.feature-panel').forEach(panel => {
                observer.observe(panel);
            });
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                // Rotate torus
                torus.rotation.x += 0.01;
                torus.rotation.y += 0.01;
                torusRenderer.render(torusScene, torusCamera);
                
                // Rotate cube (slower)
                cube.rotation.x += 0.005;
                cube.rotation.y += 0.005;
                cubeRenderer.render(cubeScene, cubeCamera);
                
                // Rotate pyramid (different axis)
                pyramid.rotation.x += 0.007;
                pyramid.rotation.z += 0.007;
                pyramidRenderer.render(pyramidScene, pyramidCamera);
                
                // Animate XR points
                xrPoints.rotation.y += 0.005;
                xrRenderer.render(xrScene, xrCamera);
                
                // Animate project 1 points
                project1Points.rotation.y += 0.01;
                const positions = project1Points.geometry.attributes.position;
                for (let i = 2; i < positions.count * 3; i += 3) {
                    positions.array[i] = Math.sin(Date.now() * 0.001 + i) * 0.5;
                }
                positions.needsUpdate = true;
                project1Renderer.render(project1Scene, project1Camera);
                
                // Animate project 2 buildings
                project2Group.rotation.y += 0.005;
                project2Renderer.render(project2Scene, project2Camera);
                
                // Animate project 3 lines
                project3Group.rotation.y += 0.008;
                project3Renderer.render(project3Scene, project3Camera);
                
                // Animate tech viz particles
                techVizParticleSystem.rotation.y += 0.003;
                techVizRenderer.render(techVizScene, techVizCamera);
                
                // Animate stats bars
                statsGroup.rotation.y += 0.002;
                statsRenderer.render(statsScene, statsCamera);
                
                // Animate contact orbs
                contactOrbs.forEach((orb, i) => {
                    orb.position.y = Math.sin(Date.now() * 0.001 + i) * 0.3;
                    orb.scale.setScalar(1 + Math.sin(Date.now() * 0.001 + i) * 0.2);
                });
                contactRenderer.render(contactScene, contactCamera);
                
                // Rotate footer sphere
                footerSphere.rotation.y += 0.01;
                footerSphereRenderer.render(footerSphereScene, footerSphereCamera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', function() {
                // Adjust canvas sizes and camera aspects
                const canvases = [
                    { canvas: torusCanvas, renderer: torusRenderer },
                    { canvas: cubeCanvas, renderer: cubeRenderer },
                    { canvas: pyramidCanvas, renderer: pyramidRenderer },
                    { canvas: xrCanvas, renderer: xrRenderer },
                    { canvas: project1Canvas, renderer: project1Renderer },
                    { canvas: project2Canvas, renderer: project2Renderer },
                    { canvas: project3Canvas, renderer: project3Renderer },
                    { canvas: techVizCanvas, renderer: techVizRenderer },
                    { canvas: statsCanvas, renderer: statsRenderer },
                    { canvas: contactCanvas, renderer: contactRenderer },
                    { canvas: footerSphereCanvas, renderer: footerSphereRenderer }
                ];
                
                canvases.forEach(item => {
                    // For the hero section floating elements
                    if ([torusCanvas, cubeCanvas, pyramidCanvas].includes(item.canvas)) {
                        const parent = item.canvas.parentElement;
                        const width = parent.offsetWidth;
                        const height = parent.offsetHeight;
                        
                        item.canvas.width = width;
                        item.canvas.height = height;
                        item.renderer.setSize(width, height);
                        
                        // Update camera for new aspect ratio
                        const camera = item === torusCanvas ? torusCamera : 
                                      item === cubeCanvas ? cubeCamera : pyramidCamera;
                        
                        camera.aspect = width / height;
                        camera.updateProjectionMatrix();
                    }
                    
                    // For other canvas elements with defined parents
                    else if (item.canvas.parentElement) {
                        const parent = item.canvas.parentElement;
                        const width = parent.offsetWidth;
                        const height = parent.offsetHeight;
                        
                        if (width > 0 && height > 0) {
                            item.canvas.width = width;
                            item.canvas.height = height;
                            item.renderer.setSize(width, height);
                            
                            // Update camera for new aspect ratio
                            let camera;
                            if (item === xrCanvas) camera = xrCamera;
                            else if (item === project1Canvas) camera = project1Camera;
                            else if (item === project2Canvas) camera = project2Camera;
                            else if (item === project3Canvas) camera = project3Camera;
                            else if (item === techVizCanvas) camera = techVizCamera;
                            else if (item === statsCanvas) camera = statsCamera;
                            else if (item === contactCanvas) camera = contactCamera;
                            else if (item === footerSphereCanvas) camera = footerSphereCamera;
                            
                            camera.aspect = width / height;
                            camera.updateProjectionMatrix();
                        }
                    }
                });
            });
            
            // Trigger initial resize
            window.dispatchEvent(new Event('resize'));
        });