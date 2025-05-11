// URLs d'images pour les planètes (utilisant des sources d'images fiables)
const planetImages = {
    mercure: "https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg",
    venus: "https://solarsystem.nasa.gov/system/stellar_items/image_files/3_feature_1600x900_venus.jpg",
    terre: "https://solarsystem.nasa.gov/system/stellar_items/image_files/4_feature_1600x900_earth.jpg",
    mars: "https://solarsystem.nasa.gov/system/stellar_items/image_files/6_mars_carousel_3.jpg",
    jupiter: "https://solarsystem.nasa.gov/system/stellar_items/image_files/7_feature_1600x900_jupiter_juno5.jpg",
    saturne: "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_carousel_2.jpg",
    uranus: "https://solarsystem.nasa.gov/system/stellar_items/image_files/69_uranus_carousel_1.jpg",
    neptune: "https://solarsystem.nasa.gov/system/stellar_items/image_files/90_carousel_neptune_1.jpg"
};

// Images alternatives au cas où les premières ne chargent pas
const fallbackPlanetImages = {
    mercure: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/800px-Mercury_in_color_-_Prockter07-edit1.jpg",
    venus: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/800px-Venus-real_color.jpg",
    terre: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg",
    mars: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/800px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
    jupiter: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    saturne: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg",
    uranus: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg",
    neptune: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/800px-Neptune_Full.jpg"
};

// Image de fond pour l'en-tête
const heroBackground = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg";

// Images d'arrière-plan pour l'effet étoilé
const starsBackground = "https://www.transparenttextures.com/patterns/stardust.png";
const twinklingBackground = "https://www.transparenttextures.com/patterns/brushed-alum-dark.png";

// Données des planètes en français
const planetData = {
    mercure: {
        name: "Mercure",
        diameter: "4 880 km",
        distance: "57,9 millions km",
        orbit: "88 jours",
        temperature: "-173°C à 427°C",
        description: "Mercure est la planète la plus proche du Soleil et la plus petite du système solaire. Sa surface est couverte de cratères semblables à ceux de la Lune. En raison de sa proximité avec le Soleil, les températures à sa surface peuvent atteindre 427°C le jour et descendre à -173°C la nuit. Mercure n'a pas d'atmosphère significative pour retenir la chaleur, ce qui explique ces variations extrêmes de température."
    },
    venus: {
        name: "Vénus",
        diameter: "12 104 km",
        distance: "108,2 millions km",
        orbit: "225 jours",
        temperature: "462°C (moyenne)",
        description: "Vénus est souvent appelée la jumelle de la Terre en raison de sa taille similaire, mais les conditions y sont radicalement différentes. Son atmosphère dense composée principalement de dioxyde de carbone crée un effet de serre intense, faisant de Vénus la planète la plus chaude du système solaire avec une température moyenne de 462°C. La pression atmosphérique à sa surface est environ 90 fois celle de la Terre, équivalente à la pression ressentie à 900 mètres sous l'eau sur Terre."
    },
    terre: {
        name: "Terre",
        diameter: "12 742 km",
        distance: "149,6 millions km",
        orbit: "365,25 jours",
        temperature: "-88°C à 58°C",
        description: "La Terre est la seule planète connue abritant la vie. Elle est caractérisée par ses océans d'eau liquide qui couvrent environ 71% de sa surface, son atmosphère riche en oxygène et sa biodiversité extraordinaire. La Terre possède un champ magnétique qui nous protège des rayonnements solaires nocifs et une atmosphère qui régule la température, permettant l'existence d'eau sous ses trois états : solide, liquide et gazeux. Notre planète possède un satellite naturel, la Lune, qui influence les marées et stabilise l'axe de rotation de la Terre."
    },
    mars: {
        name: "Mars",
        diameter: "6 779 km",
        distance: "227,9 millions km",
        orbit: "687 jours",
        temperature: "-153°C à 20°C",
        description: "Mars est surnommée la 'planète rouge' en raison de sa couleur caractéristique due à l'oxyde de fer présent à sa surface. Elle présente des caractéristiques géologiques variées comme le plus grand volcan du système solaire, Olympus Mons, et un canyon, Valles Marineris, qui s'étend sur près d'un quart de la circonférence de la planète. Des preuves suggèrent que Mars avait autrefois de l'eau liquide à sa surface et une atmosphère plus dense. Aujourd'hui, elle possède une atmosphère ténue et de la glace d'eau à ses pôles."
    },
    jupiter: {
        name: "Jupiter",
        diameter: "139 822 km",
        distance: "778,5 millions km",
        orbit: "11,9 années",
        temperature: "-145°C (couches supérieures)",
        description: "Jupiter est la plus grande planète du système solaire et une géante gazeuse composée principalement d'hydrogène et d'hélium. Son trait distinctif est la Grande Tache Rouge, une tempête anticyclonique massive qui existe depuis au moins 400 ans. Jupiter possède un puissant champ magnétique et plus de 79 lunes connues, dont les quatre plus grandes (Io, Europe, Ganymède et Callisto) ont été découvertes par Galilée. La planète est également entourée d'anneaux ténus, bien que moins spectaculaires que ceux de Saturne."
    },
    saturne: {
        name: "Saturne",
        diameter: "116 464 km",
        distance: "1,4 milliard km",
        orbit: "29,5 années",
        temperature: "-178°C (couches supérieures)",
        description: "Saturne est célèbre pour son système d'anneaux spectaculaires, composés principalement de particules de glace et de poussière. Ces anneaux s'étendent jusqu'à 282 000 km du centre de la planète mais ne font que quelques dizaines de mètres d'épaisseur. Comme Jupiter, Saturne est une géante gazeuse avec une atmosphère principalement composée d'hydrogène et d'hélium. Elle possède au moins 82 lunes, dont Titan, la deuxième plus grande lune du système solaire et la seule à avoir une atmosphère dense."
    },
    uranus: {
        name: "Uranus",
        diameter: "50 724 km",
        distance: "2,9 milliards km",
        orbit: "84 années",
        temperature: "-224°C (couches supérieures)",
        description: "Uranus est une géante de glace unique car son axe de rotation est incliné à près de 98 degrés, ce qui signifie qu'elle tourne pratiquement sur le côté. Cette caractéristique fait qu'Uranus a des saisons extrêmes, chaque pôle restant dans l'obscurité ou la lumière pendant 42 ans. La planète a une couleur bleu-vert due à la présence de méthane dans son atmosphère qui absorbe la lumière rouge. Uranus possède un système d'anneaux ténus et 27 lunes connues, toutes nommées d'après des personnages des œuvres de Shakespeare et d'Alexander Pope."
    },
    neptune: {
        name: "Neptune",
        diameter: "49 244 km",
        distance: "4,5 milliards km",
        orbit: "165 années",
        temperature: "-218°C (couches supérieures)",
        description: "Neptune est la planète la plus éloignée du Soleil et la dernière des géantes de glace. Sa couleur bleue intense est due, comme pour Uranus, à la présence de méthane dans son atmosphère. Neptune est connue pour ses vents violents, les plus rapides du système solaire, pouvant atteindre 2 100 km/h. Lors du survol de Voyager 2 en 1989, une grande tache sombre similaire à la Grande Tache Rouge de Jupiter a été observée, bien qu'elle ait disparu depuis. Neptune a 14 lunes connues, dont la plus grande, Triton, est géologiquement active avec des geysers d'azote liquide."
    }
};

// Attendez que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Fonctionnalité du menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Ouvrir le menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le défilement
        });
    }
    
    // Fermer le menu mobile
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto'; // Réactiver le défilement
        });
    }
    
    // Fermer le menu mobile en cliquant sur un lien
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Appliquer les images depuis les CDNs pour éviter les erreurs de chargement
    // Image de fond de l'accueil
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${heroBackground}')`;
    }
    
    // Fond étoilé
    const starsElement = document.querySelector('.stars');
    const twinklingElement = document.querySelector('.twinkling');
    
    if (starsElement) {
        starsElement.style.backgroundImage = `url('${starsBackground}')`;
    }
    
    if (twinklingElement) {
        twinklingElement.style.backgroundImage = `url('${twinklingBackground}')`;
    }
    
    // Images des planètes dans les cartes
    document.querySelectorAll('.planet-card').forEach(card => {
        const planetKey = card.dataset.planet;
        const imgElement = card.querySelector('img');
        if (imgElement && planetImages[planetKey]) {
            imgElement.src = planetImages[planetKey];
            imgElement.onerror = () => handleImageError(imgElement, planetKey);
        }
    });
    
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
    
    // Amélioration de la gestion d'erreur pour les images avec fallback
    function handleImageError(img, planetKey) {
        // Vérifier si l'image est déjà celle de secours pour éviter une boucle
        if (img.src.includes(fallbackPlanetImages[planetKey])) {
            // Dernier recours - couleur de fond avec texte
            const parent = img.parentElement;
            if (parent) {
                parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(45deg, #0a0a30, #2a2a60);color:white;font-weight:bold;text-align:center;padding:10px;">${planetData[planetKey].name}</div>`;
            }
            return;
        }
        
        // Si l'image actuelle est l'image principale, essayer l'image de secours
        if (img.src.includes(planetImages[planetKey])) {
            img.src = fallbackPlanetImages[planetKey];
        } else {
            // Sinon, essayer l'image principale
            img.src = planetImages[planetKey];
        }
    }
    
    // Appliquer la gestion d'erreur aux images existantes
    document.querySelectorAll('.planet-card img').forEach(img => {
        const card = img.closest('.planet-card');
        if (card) {
            const planetKey = card.dataset.planet;
            img.onerror = () => handleImageError(img, planetKey);
        }
    });
    
    // Ouvrir la modal avec les détails de la planète
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planetCard = this.closest('.planet-card');
            const planetKey = planetCard.dataset.planet;
            const planet = planetData[planetKey];
            
            // Mise à jour des informations
            modalPlanetImage.src = planetImages[planetKey];
            modalPlanetImage.alt = planet.name;
            modalPlanetImage.onerror = () => handleImageError(modalPlanetImage, planetKey);
            
            modalPlanetName.textContent = planet.name;
            modalPlanetDiameter.textContent = planet.diameter;
            modalPlanetDistance.textContent = planet.distance;
            modalPlanetOrbit.textContent = planet.orbit;
            modalPlanetTemp.textContent = planet.temperature;
            modalPlanetDesc.textContent = planet.description;
            
            // Effets 3D :
            // Créer une réflexion sur la surface
            const planet3d = modalPlanetImage.closest('.planet-3d');
            if (planet3d) {
                planet3d.style.animation = `rotate3d ${Math.random() * 10 + 15}s linear infinite`;
            }
            
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
    
    // Fonction pour détecter les appareils mobiles
    function isMobileDevice() {
        return (window.innerWidth <= 768) || 
               ('ontouchstart' in window) || 
               (navigator.maxTouchPoints > 0);
    }
    
    // Animation du système solaire - Ajuster la vitesse d'orbite en fonction de la taille de l'écran
    function adjustOrbitSpeed() {
        const screenWidth = window.innerWidth;
        let speedFactor;
        
        if (screenWidth < 480) {
            speedFactor = 0.4; // Très petits écrans
        } else if (screenWidth < 768) {
            speedFactor = 0.6; // Tablettes et petits écrans
        } else if (screenWidth < 1200) {
            speedFactor = 0.8; // Écrans moyens
        } else {
            speedFactor = 1; // Grands écrans
        }
        
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
    
    // Optimisation pour appareils mobiles
    if (isMobileDevice()) {
        // Réduire les animations pour améliorer les performances sur mobile
        document.documentElement.classList.add('mobile-device');
        
        // Ajuster les interactions tactiles pour les planètes
        document.querySelectorAll('.planet').forEach(planet => {
            planet.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(1.5)';
                this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
                this.style.zIndex = '100';
            });
            
            planet.addEventListener('touchend', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.zIndex = '';
            });
        });
        
        // Meilleure détection des clics sur mobile pour les boutons de détails
        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.style.padding = '12px';
        });
    }
    
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
