// Données des planètes en français avec textures et tailles pour Three.js
const planetData = {
    mercure: {
        name: "Mercure",
        diameter: "4 880 km",
        distance: "57,9 millions km",
        orbit: "88 jours",
        temperature: "-173°C à 427°C",
        description: "Mercure est la planète la plus proche du Soleil et la plus petite du système solaire. Sa surface est couverte de cratères semblables à ceux de la Lune. En raison de sa proximité avec le Soleil, les températures à sa surface peuvent atteindre 427°C le jour et descendre à -173°C la nuit. Mercure n'a pas d'atmosphère significative pour retenir la chaleur, ce qui explique ces variations extrêmes de température.",
        color: 0xb6b6b6,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/mercury.jpg',
        size: 0.38,
        orbitRadius: 5.8,
        orbitSpeed: 4.1,
        rotationSpeed: 0.01
    },
    venus: {
        name: "Vénus",
        diameter: "12 104 km",
        distance: "108,2 millions km",
        orbit: "225 jours",
        temperature: "462°C (moyenne)",
        description: "Vénus est souvent appelée la jumelle de la Terre en raison de sa taille similaire, mais les conditions y sont radicalement différentes. Son atmosphère dense composée principalement de dioxyde de carbone crée un effet de serre intense, faisant de Vénus la planète la plus chaude du système solaire avec une température moyenne de 462°C. La pression atmosphérique à sa surface est environ 90 fois celle de la Terre, équivalente à la pression ressentie à 900 mètres sous l'eau sur Terre.",
        color: 0xffcc8f,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/venus.jpg',
        size: 0.95,
        orbitRadius: 10.8,
        orbitSpeed: 1.6,
        rotationSpeed: 0.003
    },
    terre: {
        name: "Terre",
        diameter: "12 742 km",
        distance: "149,6 millions km",
        orbit: "365,25 jours",
        temperature: "-88°C à 58°C",
        description: "La Terre est la seule planète connue abritant la vie. Elle est caractérisée par ses océans d'eau liquide qui couvrent environ 71% de sa surface, son atmosphère riche en oxygène et sa biodiversité extraordinaire. La Terre possède un champ magnétique qui nous protège des rayonnements solaires nocifs et une atmosphère qui régule la température, permettant l'existence d'eau sous ses trois états : solide, liquide et gazeux. Notre planète possède un satellite naturel, la Lune, qui influence les marées et stabilise l'axe de rotation de la Terre.",
        color: 0x57abf2,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/earth.jpg',
        cloudTextureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/earth_clouds.jpg',
        size: 1.0,
        orbitRadius: 15.0,
        orbitSpeed: 1.0,
        rotationSpeed: 0.01
    },
    mars: {
        name: "Mars",
        diameter: "6 779 km",
        distance: "227,9 millions km",
        orbit: "687 jours",
        temperature: "-153°C à 20°C",
        description: "Mars est surnommée la 'planète rouge' en raison de sa couleur caractéristique due à l'oxyde de fer présent à sa surface. Elle présente des caractéristiques géologiques variées comme le plus grand volcan du système solaire, Olympus Mons, et un canyon, Valles Marineris, qui s'étend sur près d'un quart de la circonférence de la planète. Des preuves suggèrent que Mars avait autrefois de l'eau liquide à sa surface et une atmosphère plus dense. Aujourd'hui, elle possède une atmosphère ténue et de la glace d'eau à ses pôles.",
        color: 0xff6b6b,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/mars.jpg',
        size: 0.53,
        orbitRadius: 22.8,
        orbitSpeed: 0.53,
        rotationSpeed: 0.008
    },
    jupiter: {
        name: "Jupiter",
        diameter: "139 822 km",
        distance: "778,5 millions km",
        orbit: "11,9 années",
        temperature: "-145°C (couches supérieures)",
        description: "Jupiter est la plus grande planète du système solaire et une géante gazeuse composée principalement d'hydrogène et d'hélium. Son trait distinctif est la Grande Tache Rouge, une tempête anticyclonique massive qui existe depuis au moins 400 ans. Jupiter possède un puissant champ magnétique et plus de 79 lunes connues, dont les quatre plus grandes (Io, Europe, Ganymède et Callisto) ont été découvertes par Galilée. La planète est également entourée d'anneaux ténus, bien que moins spectaculaires que ceux de Saturne.",
        color: 0xe0ae6f,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/jupiter.jpg',
        size: 11.2,
        orbitRadius: 77.9,
        orbitSpeed: 0.08,
        rotationSpeed: 0.04
    },
    saturne: {
        name: "Saturne",
        diameter: "116 464 km",
        distance: "1,4 milliard km",
        orbit: "29,5 années",
        temperature: "-178°C (couches supérieures)",
        description: "Saturne est célèbre pour son système d'anneaux spectaculaires, composés principalement de particules de glace et de poussière. Ces anneaux s'étendent jusqu'à 282 000 km du centre de la planète mais ne font que quelques dizaines de mètres d'épaisseur. Comme Jupiter, Saturne est une géante gazeuse avec une atmosphère principalement composée d'hydrogène et d'hélium. Elle possède au moins 82 lunes, dont Titan, la deuxième plus grande lune du système solaire et la seule à avoir une atmosphère dense.",
        color: 0xf4dc9f,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/saturn.jpg',
        ringTextureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/saturn_rings.png',
        size: 9.45,
        ringInnerRadius: 10.5,
        ringOuterRadius: 20.0,
        orbitRadius: 143.0,
        orbitSpeed: 0.03,
        rotationSpeed: 0.038
    },
    uranus: {
        name: "Uranus",
        diameter: "50 724 km",
        distance: "2,9 milliards km",
        orbit: "84 années",
        temperature: "-224°C (couches supérieures)",
        description: "Uranus est une géante de glace unique car son axe de rotation est incliné à près de 98 degrés, ce qui signifie qu'elle tourne pratiquement sur le côté. Cette caractéristique fait qu'Uranus a des saisons extrêmes, chaque pôle restant dans l'obscurité ou la lumière pendant 42 ans. La planète a une couleur bleu-vert due à la présence de méthane dans son atmosphère qui absorbe la lumière rouge. Uranus possède un système d'anneaux ténus et 27 lunes connues, toutes nommées d'après des personnages des œuvres de Shakespeare et d'Alexander Pope.",
        color: 0xc6edf7,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/uranus.jpg',
        size: 4.0,
        orbitRadius: 287.0,
        orbitSpeed: 0.01,
        rotationSpeed: 0.02,
        tilt: Math.PI/2 + 0.1  // Rotation sur le côté
    },
    neptune: {
        name: "Neptune",
        diameter: "49 244 km",
        distance: "4,5 milliards km",
        orbit: "165 années",
        temperature: "-218°C (couches supérieures)",
        description: "Neptune est la planète la plus éloignée du Soleil et la dernière des géantes de glace. Sa couleur bleue intense est due, comme pour Uranus, à la présence de méthane dans son atmosphère. Neptune est connue pour ses vents violents, les plus rapides du système solaire, pouvant atteindre 2 100 km/h. Lors du survol de Voyager 2 en 1989, une grande tache sombre similaire à la Grande Tache Rouge de Jupiter a été observée, bien qu'elle ait disparu depuis. Neptune a 14 lunes connues, dont la plus grande, Triton, est géologiquement active avec des geysers d'azote liquide.",
        color: 0x5cb8ff,
        textureURL: 'https://raw.githubusercontent.com/astronexus/solar-textures/main/neptune.jpg',
        size: 3.88,
        orbitRadius: 450.0,
        orbitSpeed: 0.006,
        rotationSpeed: 0.02
    }
};

// Gestionnaire de textures pour Three.js
const textureLoader = new THREE.TextureLoader();

// Créer les scènes et renderers 3D pour chaque planète
let scenes = {};
let cameras = {};
let renderers = {};
let controls = {};
let planets = {};
let orbitLines = {};

// Scène principale pour l'animation du système solaire
let mainScene, mainCamera, mainRenderer, mainControls;
let solarSystem, planetMeshes = {};
let sunMesh, starField;

// Date de démarrage pour les animations
let startTime = Date.now();

// Gestionnaire de redimensionnement
function handleResize() {
    const isMobile = window.innerWidth < 768;
    const mainCanvas = document.getElementById('solarSystemCanvas');
    
    if (mainCanvas) {
        // Ajuster la vue principale du système solaire
        mainCamera.aspect = mainCanvas.clientWidth / mainCanvas.clientHeight;
        mainCamera.updateProjectionMatrix();
        mainRenderer.setSize(mainCanvas.clientWidth, mainCanvas.clientHeight);
    }
    
    // Ajuster chaque planète individuelle
    Object.keys(renderers).forEach(planet => {
        const container = document.getElementById(`${planet}-3d`);
        if (container && renderers[planet]) {
            const width = container.clientWidth;
            const height = container.clientHeight;
            cameras[planet].aspect = width / height;
            cameras[planet].updateProjectionMatrix();
            renderers[planet].setSize(width, height);
        }
    });
    
    // Ajuster la planète dans la modal
    const modalContainer = document.getElementById('modal-planet-3d');
    if (modalContainer && renderers['modal']) {
        const width = modalContainer.clientWidth;
        const height = modalContainer.clientHeight || 300;
        cameras['modal'].aspect = width / height;
        cameras['modal'].updateProjectionMatrix();
        renderers['modal'].setSize(width, height);
    }
}

// Attendez que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.planet-card, .team-member').forEach(el => {
        observer.observe(el);
    });

    // Modal des planètes
    const modal = document.getElementById('planetModal');
    const detailsBtns = document.querySelectorAll('.details-btn');
    const closeModal = document.querySelector('.close-modal');
    
    // Image et information dans la modal
    const modalPlanetImage = document.getElementById('modalPlanetImage');
    const modalPlanetName = document.getElementById('modalPlanetName');
    const modalPlanetDiameter = document.getElementById('modalPlanetDiameter');
    const modalPlanetDistance = document.getElementById('modalPlanetDistance');
    const modalPlanetOrbit = document.getElementById('modalPlanetOrbit');
    const modalPlanetTemp = document.getElementById('modalPlanetTemp');
    const modalPlanetDesc = document.getElementById('modalPlanetDesc');
    
    // Ouvrir la modal avec les détails de la planète
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planetCard = this.closest('.planet-card');
            const planetKey = planetCard.dataset.planet;
            const planet = planetData[planetKey];
            
            // Mise à jour des informations
            modalPlanetImage.src = `images/${planetKey}.jpg`;
            modalPlanetImage.alt = planet.name;
            modalPlanetName.textContent = planet.name;
            modalPlanetDiameter.textContent = planet.diameter;
            modalPlanetDistance.textContent = planet.distance;
            modalPlanetOrbit.textContent = planet.orbit;
            modalPlanetTemp.textContent = planet.temperature;
            modalPlanetDesc.textContent = planet.description;
            
            // Afficher la modal avec animation
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Empêcher le défilement
            
            setTimeout(() => {
                modal.querySelector('.modal-content').classList.add('show');
            }, 10);
        });
    });
    
    // Fermer la modal
    closeModal.addEventListener('click', function() {
        modal.querySelector('.modal-content').classList.remove('show');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactiver le défilement
        }, 300);
    });
    
    // Fermer la modal en cliquant en dehors
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal.click();
        }
    });
    
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset pour la barre de navigation
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation du système solaire - Ajuster la vitesse d'orbite en fonction de la taille de l'écran
    function adjustOrbitSpeed() {
        const screenWidth = window.innerWidth;
        const speedFactor = screenWidth < 768 ? 0.6 : (screenWidth < 1200 ? 0.8 : 1);
        
        document.querySelectorAll('.orbit').forEach(orbit => {
            const currentAnimationDuration = parseFloat(
                window.getComputedStyle(orbit).getPropertyValue('animation-duration')
            );
            orbit.style.animationDuration = `${currentAnimationDuration * speedFactor}s`;
        });
    }
    
    // Ajuster au chargement et au redimensionnement
    adjustOrbitSpeed();
    window.addEventListener('resize', adjustOrbitSpeed);
    
    // Effet de parallaxe au défilement sur la section héro
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
    
    // Animation des planètes au survol
    const planets = document.querySelectorAll('.solar-system-container .planet');
    
    planets.forEach(planet => {
        planet.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.5)';
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
            this.style.zIndex = '100';
        });
        
        planet.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.zIndex = '';
        });
    });
    
    // Animation du titre principal
    const title = document.querySelector('.title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            span.classList.add('char-animation');
            title.appendChild(span);
        }
    }
    
    // Ajouter une classe pour animer les sections au défilement
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // Vérifier au chargement et au défilement
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
