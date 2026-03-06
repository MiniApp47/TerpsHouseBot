document.addEventListener('DOMContentLoaded', function () {
    // 1. ISOLATION TELEGRAM / WEB CLASSIC
    const isTelegram = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData !== "";
    const tg = isTelegram ? window.Telegram.WebApp : null;

    if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#2c2c2e');
        tg.setBackgroundColor('#1c1c1d');
    }

    // 2. ROUTAGE FRANCHISE DYNAMIQUE & THÈMES
    const urlParams = new URLSearchParams(window.location.search);
    const currentFranchise = urlParams.get('franchise') || '72'; 

    const franchiseConfig = {
        '72': { 
            phone: '33621376060', // Reste utilisé pour la commande WA et le lien WA
            telegramLivraison: 'https://t.me/volantrs3', // Commande Panier
            telegramSurPlace: 'https://t.me/LeDispensair72', // Commande Panier
            telegramInfo: 'https://t.me/terphouseoff', // NOUVEAU : Le canal pour la page Links
            snapchat: 'https://snapchat.com/t/WV38isH8',
            instagram: 'https://www.instagram.com/terphouse.officiel?igsh=dHlud2NoOXo5NDhz&utm_source=qr',
            luffa: 'https://callup.luffa.im/c/2hQvSV5uoon',
            tiktok: 'https://www.tiktok.com/@terphouse0?_r=1&_t=ZN-94IxTeNWpTK',
            name: 'TerpsHouse72',
            logo: 'LogoT72.png',
            bgImage: 'FondT72.jpg',
            theme: { main: '#2a78c4b3', shadow: '#2ac4c4e3' },
            categoryImages: { 'HASH': 'CategT72Hash.png', 'WEED': 'CategT72Weed.png', 'AUTRE': 'CategT73Autre.png' }
        },
        'bxl': { 
            phone: '447541995981', 
            telegram: 'https://t.me/terphousebxl',
            name: 'TerpsHouseBxl',
            logo: 'LogoBxl.png',
            bgImage: 'FondBXL.jpg',
            theme: { 
                main: '#ffce00', 
                bg: 'linear-gradient(90deg, #000000 0%, #ffce00 50%, #ed2939 100%)',
                // NOUVEAU : Le dégradé spécifique pour les sous-catégories BXL
                farmBg: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(255,206,0,0.5) 50%, rgba(237,41,57,0.7) 100%)',
                shadow: 'rgb(255 206 0 / 70%)' 
            },
            categoryImages: { 'HASH': 'CategBxlHash.png', 'WEED': 'CategBxlWeed.png', 'AUTRE': 'CategBxlAutre.png' }
        },
        '37': { 
            phone: '', 
            telegram: 'https://t.me/terpcommande37',     
            name: 'TerpsHouse37',
            logo: 'LogoT37.png',
            bgImage: 'FondT37.jpg',
            theme: { main: '#f3cb02bf', shadow: '#f3bb06' },
            categoryImages: { 'HASH': 'CategT37Hash.png', 'WEED': 'CategT37Weed.png', 'AUTRE': 'CategT37Autre.png' }
        },
        '75': { 
            phone: '33753638658', 
            telegram: 'https://t.me/terphouse75', 
            snapchat: '',
            instagram: '',
            luffa: '',
            name: 'TerpsHouse75',
            logo: 'LogoT75.jpg',
            bgImage: 'Fondecran.jpg',
            theme: { 
                main: '#0055A4', /* Bleu France */
                bg: 'linear-gradient(90deg, #002654 0%, rgba(255,255,255,0.15) 50%, #ed2939 100%)', /* Dégradé FR assombri pour lisibilité texte blanc */
                farmBg: 'linear-gradient(90deg, rgba(0,38,84,0.9) 0%, rgba(255,255,255,0.1) 50%, rgba(237,41,57,0.7) 100%)',
                shadow: 'rgba(0, 85, 164, 0.4)' 
            },
            categoryImages: { 'HASH': 'CategT75Hash.png', 'WEED': 'CategT75Weed.png', 'AUTRE': 'CategT75Autre.png' }
        },
        'strong72': { 
            phone: '', // Laissé vide = Pas de bouton WhatsApp
            telegram: 'https://t.me/meet_uup',
            name: 'StrongHouse72',
            logo: 'LogoStrong.png',
            bgImage: 'FondStrong.jpg',
            theme: { main: '#ff3b30', shadow: 'rgba(255, 59, 48, 0.3)' },
            // NOUVEAU : Images des catégories de Strong
            categoryImages: { 
                'COCO': 'CategCoco.png', 
                'MARRON': 'CategMarron.png', 
                'MDMA': 'CategMdma.png',
                'TAZ': 'CategTaz.png',
                'KETAMINE': 'CategKeta.png'
            }
        }
    };

    const activeConfig = franchiseConfig[currentFranchise] || franchiseConfig['72'];

    // --- MOTEUR D'INJECTION DYNAMIQUE ---
if (activeConfig.theme) {
    document.documentElement.style.setProperty('--brand-color', activeConfig.theme.main);
    document.documentElement.style.setProperty('--brand-shadow', activeConfig.theme.shadow);
    
    if (activeConfig.theme.bg) {
        document.documentElement.style.setProperty('--brand-bg', activeConfig.theme.bg);
    } else {
        document.documentElement.style.setProperty('--brand-bg', activeConfig.theme.main);
    }

    // NOUVEAU : On injecte le fond des sous-catégories si c'est BXL, sinon on laisse par défaut
    if (activeConfig.theme.farmBg) {
        document.documentElement.style.setProperty('--farm-bg', activeConfig.theme.farmBg);
    } else {
        document.documentElement.style.removeProperty('--farm-bg');
    }
}
    

    document.querySelectorAll('.dynamic-app-name').forEach(el => el.innerText = `👑 ${activeConfig.name.toUpperCase()} 👑`);
    
    const dynamicLogos = document.querySelectorAll('#page-loader img, .home-logo, .contact-logo');
    dynamicLogos.forEach(img => { img.src = activeConfig.logo || ''; });

    const contactLinks = [
        { name: 'WHATSAPP', url: `https://wa.me/${activeConfig.phone}`, id: 'whatsapp', className: 'whatsapp', text: "WHATSAPP 📞" },
        { name: 'SNAPCHAT', url: activeConfig.snapchat || '#', id: 'snapchat', className: 'snapchat', text: "SNAPCHAT 👻" },
        { name: 'INSTAGRAM', url: activeConfig.instagram || '#', id: 'instagram', className: 'instagram', text: "INSTAGRAM 📸" },
        { name: 'LUFFA', url: activeConfig.luffa || '#', id: 'luffa', className: 'luffa', text: "LUFFA 🔗" }
    ];

// Création dynamique de la matrice de liens de contact
const activeContactLinks = [];

// Règle 1 : S'il y a un numéro de tel, on crée le bouton WhatsApp
if (activeConfig.phone) {
    activeContactLinks.push({ url: `https://wa.me/${activeConfig.phone}`, className: 'whatsapp', text: "WHATSAPP 📞" });
}

// Règle 2 : S'il y a un Telegram unique (BXL, 37, Strong)
// Règle 2 : S'il y a un Telegram Info général (Pour la page Links)
if (activeConfig.telegramInfo) {
    activeContactLinks.push({ url: activeConfig.telegramInfo, className: 'telegram', text: "CANAL TÉLÉGRAM 📣" });
} else if (activeConfig.telegram) {
    // Fallback pour BXL / 37 / Strong qui n'ont qu'un seul lien Telegram
    activeContactLinks.push({ url: activeConfig.telegram, className: 'telegram', text: "TÉLÉGRAM 💙" });
}

// Règle 3 : Réseaux sociaux secondaires s'ils sont remplis
if (activeConfig.tiktok) {
    activeContactLinks.push({ url: activeConfig.tiktok, className: 'tiktok', text: "TIKTOK 🎵" });
}
if (activeConfig.snapchat) {
    activeContactLinks.push({ url: activeConfig.snapchat, className: 'snapchat', text: "SNAPCHAT 👻" });
}
if (activeConfig.instagram) {
    activeContactLinks.push({ url: activeConfig.instagram, className: 'instagram', text: "INSTAGRAM 📸" });
}
if (activeConfig.luffa) {
    activeContactLinks.push({ url: activeConfig.luffa, className: 'luffa', text: "LUFFA 🔗" });
}

    const progressBar = document.getElementById("myBar");
    const loader = document.getElementById("page-loader");
    setTimeout(() => { if (progressBar) progressBar.style.width = "100%"; }, 100);
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.5s ease";
            setTimeout(() => {
                loader.style.display = "none";
                loader.classList.remove('active');
                document.getElementById('page-home').classList.add('active');
            }, 500);
        }
    }, 2600);

   // --- 3. BASES DE DONNÉES LOCALES (STOCKS SÉPARÉS) ---

    // Menu PARIS (75)
    const catalog75 = [
        { id: 'HASH', name: '🍫 HASH 75', type: 'Hash', quality: '🍫 Hashish', image: 'CategT75Hash.png', farms: [ /* ... Produits exclusifs 75 ... */ ] },
        { id: 'WEED', name: '🌿 WEED 75', type: 'Weed', quality: '🌿 Fleurs', image: 'CategT75Weed.png', farms: [ /* ... */ ] },
        { id: 'AUTRE', name: '🧬 AUTRE', type: 'Autre', quality: '🧬 Divers', image: 'CategT75Autre.png', farms: [ /* ... */ ] }
    ];

    // Menu BRUXELLES (BXL)
    const catalogBxl = [
        { id: 'HASH', name: '🍫 HASH BXL', type: 'Hash', quality: '🍫 Hashish', image: 'CategBxlHash.png', farms: [ /* ... Produits exclusifs BXL ... */ ] },
        { id: 'WEED', name: '🌿 WEED BXL', type: 'Weed', quality: '🌿 Fleurs', image: 'CategBxlWeed.png', farms: [ /* ... */ ] },
        { id: 'AUTRE', name: '🧬 AUTRE', type: 'Autre', quality: '🧬 Divers', image: 'CategBxlAutre.png', farms: [ /* ... */ ] }
    ];

  /// Menu LE MANS (72)
  const catalog72 = [
    {
        id: 'PACKS', name: '🎁 PACKS TERPS HOUSE', type: 'Packs', quality: '🎁 Offres', image: 'CategT72Pack.png',
        // 1. On utilise "products" direct au lieu de "farms" pour zapper l'étape intermédiaire
        products: [
            {
                id: 'PACK_BIG_BOSS',
                name: '👑 PACK BIG BOSS',
                farm: '🧬 Sélection Premium',
                strains: [],
                // --- DESIGN NETTOYÉ SANS STYLE INLINE ---
                description: 'Le top du top, complet et premium.\n\n <span class="pack-link" data-id="CaliH">👁️ 5g Darks farm 90u</span>\n <span class="pack-link" data-id="STATIC_US_SAHA">👁️ 2g Saha terp</span> \n <span class="pack-link" data-id="FROZEN_HWORLD">👁️ 2g Frozen Hworld</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 190, oldPrice: '220€' }]
            },
            {
                id: 'PACK_SIGNATURE',
                name: '💎 PACK SIGNATURE',
                farm: '🧬 Sélection Premium',
                strains: [],
                description: 'Le juste équilibre qualité / quantité, pour ceux qui veulent du solide.\n\n <span class="pack-link" data-id="DRY_90_VVS">👁️ 5g VVS 90u</span> \n <span class="pack-link" data-id="DRY_120_PIRATE">👁️ 5g 120u Pirate Del Sur</span> \n <span class="pack-link" data-id="CALI_CEREAL">👁️ 5g Cali US Cereal</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 160, oldPrice: '190€' }]
            },
            {
                id: 'PACK_ORIGINAL',
                name: '🔥 PACK ORIGINAL',
                farm: '🧬 Sélection Premium',
                strains: [],
                description: 'L’entrée, efficace et accessible, parfait pour le quotidien.\n\n <span class="pack-link" data-id="DRY_73_JEBLI">👁️ 5g Gelato (73u)</span>\n <span class="pack-link" data-id="SEMIDRY_JEBLI">👁️ 5g Semi-Dry</span>\n <span class="pack-link" data-id="DRY_120_DARKS">👁️ 5g 120u Darks Farm</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 120, oldPrice: '140€' }]
            }
        ]
    },
    {
        id: 'HASH', name: '🍫 HASH', type: 'Hash', quality: '🍫 Hashish', image: 'CategT72Hash.png',
        farms: [
            { id: 'STATIC_US', name: 'STATIC US 🇺🇸', products: [
                {
                    id: 'STATIC_US_SAHA',
                    name: 'STATIC US 🇺🇸 (Saha Terps)', // Différencié
                    farm: '🧬 Saha Terps (⚠️ Exclusivité)',
                    strains: ['🥭 Guava Cake', '🍬 Atomic Runtz'],
                    description: 'Produit très haut de gamme, static propre, très riche en goût, texture sableuse / fondante, full terps.\nQualité US, grosse odeur dès l’ouverture.\n\n🥭 Guava Cake: Profil fruité / crémeux avec dominante goyave.\n🍬 Atomic Runtz: Saveur bonbon fruité avec côté gaz typique Runtz.',
                    image: 'ProductStaticUs.jpg',
                    video: 'VideoStaticUs.mp4',
                    tarifs: [{ weight: '1g', price: 50 }, { weight: '5g', price: 180 }, { weight: '10g', price: 300 }, { weight: '20g', price: 560 }]
                }
            ]},
            { id: 'FROZEN_US', name: 'FROZEN US 🇺🇸', products: [
                {
                    id: 'FROZEN_CALIPLATES',
                    name: 'FROZEN The Middle 🇺🇸', // Différencié
                    farm: 'The Middle 🌱',
                    strains: ['🍊 Orangina', '🍬 Zgusher'],
                    description: '🍊 Orangina  \n Strain très fruitée avec des notes d’agrumes et d’orange sucrée. Profil terpénique frais et intense, avec un goût bien marqué et une fumée douce. Effet relaxant et agréable, parfait pour chiller.\n\n 🍬 Zgusher  \n Profil très gourmand avec des arômes sucrés type bonbons et fruits tropicaux. Très riche en terpènes, texture bien collante et goût puissant. Effet équilibré, relaxant mais qui garde l’esprit léger',
                    image: 'ProductFrozTh.jpg',
                    video: 'VideoFrozTh.mp4',
                    tarifs: [{weight: '1g', price: 30}, {weight: '5g', price: 120}, {weight: '10g', price: 230}]
                },
                {
                    id: 'FROZEN_CALIPLATES',
                    name: 'FROZEN CALIPLATES 🇺🇸', // Différencié
                    farm: '🧬 CALIPLATES',
                    strains: ['🔥 OMG', '🧊 Otter Pops'],
                    description: '🔥 OMG: Gas sucré + notes crémeuses. Fumée bien grasse, effet rapide et lourd.\n🧊 Otter Pops: Profil fruité glacé, très aromatique. High clean puis détente.',
                    image: 'ProductCalip.jpg',
                    video: 'VideoCalip.mp4',
                    tarifs: [{weight: '1g', price: 40}, {weight: '2.5g', price: 70}, {weight: '5g', price: 140}, {weight: '10g', price: 250}]
                },
            ]},
            { id: 'FROZEN', name: 'FROZEN ❄️', products: [
                {
                    id: 'FROZEN_HWORLD',
                    name: 'FROZEN HWORLD ❄️', // Différencié
                    farm: '🧬 HWORLD',
                    strains: ['🍊 Orangina', '⛽️ GMO Kosher'],
                    description: '🍊 Orangina: Profil fruité / agrumes avec une touche sucrée et fraîche. Fumée douce, effet clean.\n⛽️ GMO Kosher: Profil gas / terreux très prononcé avec fond crémeux. Effet puissant, lourd.',
                    image: 'ProductHworld.jpg',
                    video: 'VideoHworld.mov',
                    tarifs: [{weight: '1.1g', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '25g', price: 360}]
                },
                {
                    id: 'FROZEN_ANONYMOUS',
                    name: 'FROZEN ANONYMOUS ❄️', // Différencié
                    farm: '🧬 FARM ANONYMOUS',
                    strains: ['🍇 Purple Cream', '🍬 Candy Shop', '🍪 ICC x Oreoz', '🖊️ Permanent Marker', '🍒 Lemon Cherry Gelato'],
                    description: '🍇 Purple Cream: Profil crémeux sucré.\n🍬 Candy Shop: Goût très sucré type bonbon.\n🍪 ICC x Oreoz: Mélange gourmand, crémeux + gazeux.\n🖊️ Permanent Marker: Gas / chimique bien prononcé.\n🍒 Lemon Cherry Gelato: Saveur citronnée sucrée.',
                    image: 'ProductAnon.jpg',
                    video: 'VideoAnon.mov',
                    tarifs: [{weight: '2.5g', price: 70}, {weight: '5g', price: 120}, {weight: '10g', price: 230}, {weight: '25g', price: 500}, {weight: '50g', price: 900}, {weight: '100g', price: 1450}]
                },
                {
                    id: 'FROZEN_VVS',
                    name: 'FROZEN VVS ❄️', // Différencié
                    farm: '🧬 VVS',
                    strains: ['🥇 24K', '🍊 Tanger', '🧀 Cheese Berry', '🍹 Tropicalito'],
                    description: '🥇 24K: gas sucré + touche orangée, bien lourd.\n🍊 Tanger: agrumes frais, high clean.\n🧀 Cheese Berry: fromage doux + fruits rouges.\n🍹 Tropicalito: cocktail tropical sucré.',
                    image: 'Produit24K.jpg',
                    video: 'Video24K.mov',
                    tarifs: [{weight: '1.1g', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 140}]
                },
                {
                    id: 'FROZEN_PIRATE',
                    name: 'FROZEN PIRATE 🏴‍☠️', // Différencié
                    farm: '🧬 Pirate Del Sur',
                    strains: ['🆕 Sherbanger', '♻️ Panacotta'],
                    description: '🆕 Sherbanger: Profil moderne crémeux + gaz léger. Terps bien présents.\n♻️ Panacotta: Gourmande et douce, notes dessert / vanille. Valeur sûre.',
                    image: 'ProductSher.jpg',
                    video: 'VideoSher.mp4',
                    tarifs: [{weight: '1.1g', price: 20}, {weight: '2.5g', price: 50}, {weight: '5g', price: 90}, {weight: '10g', price: 160}]
                }
            ]},
            { id: 'DRY_120', name: 'DRY 120u 🛖', products: [
                {
                    id: 'DRY_120_DARKS',
                    name: 'TIRAMISU (120u) ☕️', // Nom de la souche utilisé en titre
                    farm: '🧬 Darks Farm',
                    strains: [], // Plus de sélection
                    description: 'Du 120u propre, pas sec, bien chargé en heads.\nProduit typé dessert strain : gourmand, aromatique, efficace.\nEffet : relaxant profond + mental clean. Idéal fin de journée.',
                    image: 'ProductTira.jpg',
                    video: 'VideoTira.mov',
                    tarifs: [{weight: '1 olive', price: 130}, {weight: '5 olives', price: 500}, {weight: '10 olives', price: 850}]
                },
                {
                    id: 'DRY_120_PIRATE',
                    name: 'BUBBA DRY (120u) 🏴‍☠️', // Nom de la souche utilisé en titre
                    farm: '🧬 Pirate Del Sur',
                    strains: [], // Plus de sélection
                    description: 'Bubba Dry c’est un hash old school, lourd et réconfortant 😮‍💨\nArômes terreux / chocolaté / légère note café, fumée douce et bien grasse.',
                    image: 'ProductPirate.jpg',
                    video: 'VideoPirate.mov',
                    tarifs: [{weight: '1.4g', price: 20}, {weight: '5g', price: 70}, {weight: '10g', price: 120}, {weight: '25g', price: 260}]
                },
                {
                    id: 'DRY_120_JEBLI',
                    name: 'DRY 120u JEBLI 🇲🇦', // Différencié
                    farm: '🧬 Jebli Farm',
                    strains: ['🍌 Banana / RS11', '🍪 Biscotti', '🍒 Pink Cherry', '🍊 Orange Cream'],
                    description: '🍌 Banana / RS11: banane sucrée + gaz.\n🍪 Biscotti: crémeux cookie + gas, lourd en bouche.\n🍒 Pink Cherry: cerise sucrée, fumée douce.\n🍊 Orange Cream: agrumes crémeux, très gourmand.',
                    image: 'Product120p.jpg',
                    video: 'Video120p.mov',
                    tarifs: [{weight: '5g', price: 50}, {weight: '10g', price: 90}]
                }
            ]},
            { id: 'DRY_90', name: 'DRY 90u ⚡️', products: [
                {
                    id: 'CaliH',
                    name: 'CaliH 🎓', 
                    farm: '🎩 Darks Farm',
                    strains: ['RS11', 'Papaya', 'Sherbalto'],
                    description: 'RS11 : Profil fruité/candy, léger gaz (effet équilibré) \n  Papaya : Tropical sucré mangue/papaye (relax corporel marqué) \n  Sherbalto : Crémeux dessert + touche gas (calmant, parfait le soir).',
                    image: 'Product90Rs.jpg',
                    video: 'Video90Rs.mov',
                    tarifs: [
                        {weight: '2.2g 📍 (Sur place)', price: 20}, 
                        {weight: '5g', price: 60}, 
                        {weight: '10g', price: 110}, 
                        {weight: '25g', price: 250}, 
                        {weight: '50g', price: 450}, 
                        {weight: '100g', price: 660}
                    ]
                },
                {
                    id: 'DRY_90_VVS',
                    name: 'DRY 90u VVS 💎', // Différencié
                    farm: '🧬 VVS',
                    strains: ['Super cherry', 'Lemon acai', 'Horchetta x sprtzzel', 'Icc 2', 'Lulo runtz', 'Lary reeses', 'Mimosa', 'Papayadawg', 'Zmo x papayadawg'],
                    description: 'Sélection Dry 90u VVS, qualité premium, nombreux strains disponibles (à choisir).',
                    image: 'Product90.jpg',
                    video: 'Video90.mp4',
                    tarifs: [{weight: '5g', price: 50}, {weight: '10g', price: 90}, {weight: '50g', price: 360}, {weight: '100g', price: 600}]
                },
                {
                    id: 'DRY_90_GAZFRUIT',
                    name: 'MILO CHEESE (90u) 🧀', // Nom de la souche utilisé en titre
                    farm: '🧬 Gaz Fruit',
                    strains: [], // Plus de sélection
                    description: 'Profil fromagé / gaz / fruit mûr, bien marqué dès l’ouverture.\nFumée grasse, goût qui reste en bouche 😮‍💨\n90u bien chargé en heads, texture souple, aromatique et efficace.',
                    image: 'ProductMilo.jpg',
                    video: 'VideoMilo.mov',
                    tarifs: [{weight: '5g', price: 70}, {weight: '10g', price: 130}]
                }
            ]},
            { id: 'DRY_73', name: 'DRY 73u', products: [
                {
                    id: 'DRY_73_JEBLI',
                    name: 'GELATO (73u) 🍦', // Nom de la souche utilisé en titre
                    farm: '🧬 Jebli Farm',
                    strains: [], // Plus de sélection
                    description: '73u souple, bien chargé en heads, fumée grasse, goût crémeux sucré.\nDaily efficace, clean et constant 😮‍💨',
                    image: 'ProductGG.jpg',
                    video: 'VideoGG.mp4',
                    tarifs: [{weight: '5g', price: 40}, {weight: '10g', price: 60}, {weight: '25g', price: 130}, {weight: '50g', price: 250}, {weight: '100g', price: 380}]
                }
            ]},
            { id: 'SEMI_DRY', name: 'SEMI DRY', products: [
                {
                    id: 'SEMIDRY_JEBLI',
                    name: 'SEMI-DRY JEBLI 🇲🇦', // Différencié
                    farm: '🧬 Jebli Farm',
                    strains: ['🌸 Pink Crack', '🍏 Fuji OG'],
                    description: '🌸 Pink Crack: Parfaite pour chill, musique, soirée posée.\n🍏 Fuji OG: Gros calmant, corps détendu, tête tranquille.',
                    image: 'ProductPink.jpg',
                    video: 'VideoPink.mov',
                    tarifs: [{weight: '5g', price: 30}, {weight: '10g', price: 60}, {weight: '50g', price: 230}, {weight: '100g', price: 440}]
                }
            ]},
            { id: 'JAUNE', name: 'JAUNE 🧽', products: [
                {
                    id: 'JAUNE_CLASSIQUE',
                    name: 'JAUNE MOUSSEUX 🟡',
                    farm: '🧬 Classique',
                    strains: [],
                    description: 'Daily simple et efficace, texture souple, fumée correcte — parfait pour le quotidien.',
                    image: 'ProductJaune.jpg',
                    video: 'VideoJaune.mp4',
                    tarifs: [{weight: '5g', price: 30}, {weight: '10g', price: 50}, {weight: '25g', price: 110}, {weight: '50g', price: 180}, {weight: '100g', price: 350}]
                }
            ]},
            { id: 'STATIC', name: 'STATIC ⚡️', products: [
                {
                    id: 'STATIC_VVS',
                    name: 'STATIC VVS 2K25 💎',
                    farm: '🧬 VVS',
                    strains: ['🍓 Devil Fruit', '🍪 Glue Cookies', '🌈 Rainbow Sherbet', '🍈 Guava Melon'],
                    description: '🍓 Devil Fruit: Fruité avec une pointe gas.\n🍪 Glue Cookies: Gourmand + collant, cookies/gassy.\n🌈 Rainbow Sherbet: Profil plus terreux que sucré.\n🍈 Guava Melon: Tropical frais, melon/guava bien présent.',
                    image: 'ProductDevil.jpg',
                    video: 'VideoDevil.mp4',
                    tarifs: [{weight: '1g', price: 20}, {weight: '5g', price: 100}, {weight: '10g', price: 190}, {weight: '20g', price: 360}, {weight: '25g', price: 430}]
                }
            ]},
            { id: 'SINGLE_SOURCE', name: 'SINGLE SOURCE 💎', products: [
                {
                    id: 'SINGLE_CALIPLATE',
                    name: 'SINGLE SOURCE CALIPLATES 💎', // Différencié
                    farm: '🧬 Cali Plate',
                    strains: ['🏀 Gary Payton', '🍬 Gumbo', '🍇 Grappe Gas', '🍭 Jolly Rancher', '🌿 Bushmints'],
                    description: '🏀 Gary Payton: gas crémeux, effet lourd.\n🍬 Gumbo: sucré épicé, détente profonde.\n🍇 Grappe Gas: raisin + gaz, très aromatique.\n🍭 Jolly Rancher: candy fruité.\n🌿 Bushmints: mentholé/gas, corps posé.',
                    image: 'ProductGary.jpg',
                    video: 'VideoGary.mp4',
                    tarifs: [{weight: '2.5g', price: 80}, {weight: '5g', price: 150}, {weight: '10g', price: 280}, {weight: '20g', price: 540}]
                }
            ]}
        ]
    },
    {
        id: 'WEED', name: '🌿 WEED', type: 'Weed', quality: '🌿 Fleurs', image: 'CategT72Weed.png',
        farms: [
            { id: 'CALI_US', name: 'CALI US 🇺🇸', products: [
                {
                    id: 'CALI_CEREAL',
                    name: 'CEREAL MILK 🥣🥛', // Déjà unique, on retire juste les strains
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Strain très connue aux US, Cereal Milk a un goût sucré / crémeux avec des notes de lait et de céréales.\nEffet propre, relaxant mais pas trop lourd.\nProduit bien travaillé, texture propre, bonne odeur dès l’ouverture.',
                    image: 'ProductCereal.jpg',
                    video: 'VideoCereal.mp4',
                    tarifs: [{weight: '2.5g', price: 40}, {weight: '5g', price: 70}, {weight: '10g', price: 130}, {weight: '100g', price: 750}]
                },
                {
                    id: 'CALI_MOCHI',
                    name: 'MOCHI GELATO 🍧',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Profil crémeux sucré + fruité, avec des notes dessert type gelato et une légère touche gazeuse en fond.\nFumée douce, épaisse et très parfumée 😮‍💨\nEffet : montée progressive, high euphorique au début puis détente profonde.',
                    image: 'ProductMochi.jpg',
                    video: 'VideoMochi.mov',
                    tarifs: [{weight: '1.2g', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                },
                {
                    id: 'CALI_GELATO33',
                    name: 'GELATO 33 🍨',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Profil crémeux sucré + légèrement terreux, avec des notes vanille, dessert et une touche gazeuse typique des Gelato.\nFumée dense, grasse et très parfumée 😮‍💨\nUne Cali très équilibrée, puissante mais smooth.',
                    image: 'ProductGelato.jpg',
                    video: 'VideoGelato.mov',
                    tarifs: [{weight: '1.2g', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                },
               /*  {
                    id: 'CALI_LEMON',
                    name: 'LEMON CHERRY 🍋🍒',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Uniquement sur place.',
                    image: 'ProductLemon.jpg',
                    video: 'VideoLemon.mov',
                    tarifs: [{weight: '1.6g', price: 20}]
                }, */
                {
                    id: 'CALI_IRON',
                    name: 'IRON MAIDEN PINK 🎸',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Profil gas sucré + floral, avec une petite touche candy en fin de bouche.\nFumée épaisse, bien grasse 😮‍💨\nMontée rapide, high clean au départ puis grosse détente corporelle.',
                    image: 'ProductIron.jpg',
                    video: 'VideoIron.mov',
                    tarifs: [{weight: '1.2g', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                }
            ]}
        ]
    },
    {
        id: 'AUTRE', name: '🧬 AUTRE', type: 'Autre', quality: '🧬 Divers', image: 'CategT73Autre.png',
        farms: [
            { id: 'PUFF', name: 'PUFF 💨', products: [
                {
                    id: 'PUFF_PREMIUM',
                    name: 'PUFF PREMIUM 💨', // Différencié
                    farm: '🧬 Vape',
                    strains: ['Sherbanger', 'Melonade', 'Cherry', 'Blue Gotti'],
                    description: 'Puff premium. Plusieurs saveurs disponibles.',
                    image: 'ProductPuff.jpg',
                    video: 'VideoPuff.mp4',
                    tarifs: [{weight: '1 unité', price: 60}]
                }
            ]}
        ]
    }
];

    // Menu TOURS (37)
    const catalog37 = [
            {
                id: 'HASH', name: '🍫 HASH', type: 'Hash', quality: '🍫 Hashish', image: 'Categ37Hash.png',
                farms: [
                    { id: 'STATIC_US', name: 'STATIC US 🇺🇸', products: [
                        
                    ]},
                    { id: 'FROZEN_US', name: 'FROZEN US 🇺🇸', products: [
                       
                    ]},
                    { id: 'FROZEN', name: 'FROZEN ❄️', products: [
                       
                    ]},
                    { id: 'DRY_120', name: 'DRY 120u 🛖', products: [
                        {
                            id: 'Mintz',
                            name: 'Mintz ⛩', // Nom de la souche utilisé en titre
                            farm: 'JEBLI FARM 🧸',
                            strains: ['Banana / RS11','Biscotti','Pink Cherry','Orange Cream'], // Plus de sélection
                            description: '• Banana / RS11 – banane sucrée + gaz moderne, effet équilibré\n\n • Biscotti – crémeux cookie + gas, lourd en bouche 😮‍💨     \n\n • Pink Cherry – cerise sucrée, fumée douce, high clean     \n\n • Orange Cream – agrumes crémeux, très gourmand, détente progressive',
                            image: 'ProductMintz.jpg',
                            video: 'VideoMintz.mov',
                            tarifs: [
                                {weight: '5g', price: 50},
                             {weight: '10g', price: 90}]
                        },
                    ]},
                    { id: 'DRY_90', name: 'DRY 90u ⚡️', products: [
                       
                    ]},
                    { id: 'DRY_73', name: 'DRY 73u', products: [
                        
                    ]},
                    { id: 'SEMI_DRY', name: 'SEMI DRY', products: [
                        {
                            id: 'SEMIDRY_JEBLI',
                            name: 'SEMI-DRY JEBLI 🇲🇦', // Différencié
                            farm: 'JEBLI FARM 🧸',
                            strains: ['🌸 Pink Crack', '🍏 Fuji OG'],
                            description: '🧠 Pink Crack \n 👉 Parfaite pour chill, musique, soirée posée.\n\n 🍏 🧠 Fuji OG \n 👉 Gros calmant, corps détendu, tête tranquille.',
                            image: 'ProductPink.jpg',
                            video: 'VideoPink.mov',
                            tarifs: [{weight: '5g', price: 30}, {weight: '10g', price: 60}, {weight: '50g', price: 230}, {weight: '100g', price: 440}]
                        }
                    ]},
                    { id: 'JAUNE', name: 'JAUNE 🧽', products: [
                        {
                            id: 'LemonCherryGelato',
                            name: 'LemonCherryGelato 🍒',
                            farm: 'L.A. Mousse 🗽',
                            strains: [],
                            description: '👉 Daily simple et efficace, texture souple, fumée correcte — parfait pour le quotidien.',
                            image: 'ProductLA.png',
                            video: 'VideoLA.mp4',
                            tarifs: [{weight: '5g', price: 30}, {weight: '10g', price: 50}, {weight: '25g', price: 110}, {weight: '50g', price: 180}, {weight: '100g', price: 350}]
                        }
                    ]},
                    { id: 'STATIC', name: 'STATIC ⚡️', products: [
                       
                    ]},
                    { id: 'SINGLE_SOURCE', name: 'SINGLE SOURCE 💎', products: [
                      
                    ]}
                ]
            },
            {
                id: 'WEED', name: '🌿 WEED', type: 'Weed', quality: '🌿 Fleurs', image: 'CategT72Weed.png',
                farms: [
                    { id: 'CALI_US', name: 'CALI US 🇺🇸', products: [
                        {
                            id: 'CALI_LEMON',
                            name: 'LEMON CHERRY 🍋🍒',
                            farm: '🇺🇸 Cali US',
                            strains: [], // Plus de sélection
                            description: '',
                            image: 'ProductLemon.jpg',
                            video: 'VideoLemon.mov',
                            tarifs: [
                                {weight: '1,2g', price: 20},
                                {weight: '3,5g', price: 60},
                                {weight: '5g', price: 80},
                                {weight: '10g', price: 150},
                                {weight: '100g', price: 850}
                            ]
                        },
                    ]}
                ]
            },
            {
                id: 'AUTRE', name: '🧬 AUTRE', type: 'Autre', quality: '🧬 Divers', image: 'CategT73Autre.png',
                farms: [
                    { id: 'PUFF', name: 'PUFF 💨', products: [
                       
                    ]}
                ]
            }
    ];

    // Catalogue Strong (Arborescence à 2 niveaux - Produits directs)
    const catalogStrong = [
        { id: 'COCO', name: '❄️ COCO', type: 'Coco', quality: 'Premium', image: 'CategCoco.png', products: [
            {
                id: 'Coca écaille',
                name: 'Coca écaille',
                farm: 'StrongSelection 🏆',
                strains: [], // Plus de sélection
                description: '',
                image: 'ProductEc.png',
                video: 'VideoEc.mov',
                tarifs: [
                    {weight: '1g', price: 60},
                    {weight: '5g', price: 230},
                    {weight: '10g', price: 430}
                ]
            },
            {
                id: 'Coca en olive',
                name: 'Coca en olive',
                farm: 'StrongSelection 🏆',
                strains: [], // Plus de sélection
                description: '',
                image: 'ProductOl.png',
                video: 'VideoOl.mov',
                tarifs: [
                    {weight: '1g', price: 50},
                    {weight: '5g', price: 220},
                    {weight: '10g', price: 420}
                ]
            },
        ] },
        { id: 'MARRON', name: '🍫 MARRON', type: 'Marron', quality: 'Standard', image: 'CategMarron.png', products: [
            {
                id: 'Héroïne',
                name: 'Héroïne Ms',
                farm: 'StrongSelection 🏆',
                strains: [], // Plus de sélection
                description: '',
                image: 'ProductMs.png',
                video: 'VideoMs.mov',
                tarifs: [
                    {weight: '1g', price: 30},
                    {weight: '3g', price: 90},
                    {weight: '4g', price: 110},
                    {weight: '5g', price: 130},
                    {weight: '10g', price: 230},
                    {weight: '25g', price: 480}
                ]
            },
        ] },
        { id: 'MDMA', name: '💊 MDMA', type: 'MDMA', quality: 'Premium', image: 'CategMdma.png', products: [] },
        { id: 'TAZ', name: '⚡️ TAZ', type: 'Taz', quality: 'Premium', image: 'CategTaz.png', products: [
            {
                id: 'Batman',
                name: 'Batman rose',
                farm: 'StrongSelection 🏆',
                strains: [], // Plus de sélection
                description: '',
                image: 'ProductBat.png',
                video: 'VideoBat.mov',
                tarifs: [
                    {weight: '1 🍬', price: 10},
                    {weight: '5 🍬', price: 40},
                    {weight: '10 🍬', price: 70},
                    {weight: '+ privé', price: 0},
                ]
            },
        ] },
        { id: 'KETAMINE', name: '🐴 KETAMINE', type: 'Ketamine', quality: 'Premium', image: 'CategKeta.png', products: [] }
    ];

// Dictionnaire d'attribution des menus
const menuRouter = {
    '75': catalog75,
    'bxl': catalogBxl,
    '72': catalog72,
    '37': catalog37,
    'strong72': catalogStrong
};

// Sélection intelligente du catalogue final (Si la ville n'est pas trouvée, on met le 72 par défaut)
const appData = menuRouter[currentFranchise] || catalog72;
    // Remplacement dynamique des images du catalogue choisi
    if (activeConfig.categoryImages) {
        appData.forEach(category => {
            if (activeConfig.categoryImages[category.id]) {
                category.image = activeConfig.categoryImages[category.id];
            }
        });
    }

    // Variables d'état
    let cart = [];
    let currentFilters = { searchTerm: '', quality: 'all', farm: 'all' };
    let currentView = 'categories';
    let currentCategoryId = null;
    let currentFarmId = null;
    let paymentMethod = 'Espèce';

    // 4. MOTEUR D'AFFICHAGE INTELLIGENT
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const filterContainer = document.querySelector('.filters');
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    function getProductById(productId) {
        for (const category of appData) {
            // Mode Strong (Produits directs)
            if (category.products) {
                const p = category.products.find(x => x.id === productId);
                if (p) return p;
            }
            // Mode Terps (Produits dans Farms)
            if (category.farms) {
                for (const farm of category.farms) {
                    const p = farm.products.find(x => x.id === productId);
                    if (p) return p;
                }
            }
        }
        return undefined;
    }

    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');

        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        if (pageId === 'page-contact') document.getElementById('nav-contact').classList.add('active');
        else if (pageId === 'page-info') document.getElementById('nav-info').classList.add('active');
        else document.getElementById('nav-menu').classList.add('active');
    }

    function renderHomePage() {
        filterContainer.style.display = 'flex';
        const existingBackBtns = filterContainer.querySelectorAll('.back-to-categories-btn, .back-to-farms-btn');
        existingBackBtns.forEach(btn => btn.remove());

        if (currentView === 'categories') {
            qualityFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
            renderCategoryList();
        } else if (currentView === 'farms') {
            qualityFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = '1fr';
            
            const category = appData.find(c => c.id === currentCategoryId);
            const backBtn = document.createElement('button');
            backBtn.className = 'back-to-categories-btn';
            // Les deux spans permettent d'écarter le texte à gauche et à droite
            backBtn.innerHTML = `<span>‹ Retour</span> <span>${category.name}</span>`;
            filterContainer.prepend(backBtn);
            
            renderFarmList(currentCategoryId);
        } else if (currentView === 'products') {
            qualityFilterWrapper.style.display = 'none';
            
            // --- LA PORTE DE PÉAGE VISUELLE ---
            // Si on est dans les PACKS, on affiche 1 grande colonne pleine largeur
            if (currentCategoryId === 'PACKS') {
                productListContainer.style.gridTemplateColumns = '1fr';
            } else {
                // Sinon on garde le design classique à 2 colonnes
                productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
            }

            const category = appData.find(c => c.id === currentCategoryId);
            const backBtn = document.createElement('button');
            
            // --- 1. EXTRACTION DES PRODUCTEURS DE LA SOUS-CATÉGORIE ACTUELLE ---
            let availableProducts = [];
            if (currentFarmId && category.farms) {
                const farmSub = category.farms.find(f => f.id === currentFarmId);
                if (farmSub) availableProducts = farmSub.products;
            } else if (category.products) {
                availableProducts = category.products;
            }

            // On récupère uniquement les noms de producteurs uniques
            const uniqueFarms = [...new Set(availableProducts.map(p => p.farm).filter(Boolean))];

            // --- 2. CRÉATION DU MENU DÉROULANT ---
            if (uniqueFarms.length > 0) {
                farmFilterWrapper.style.display = 'flex';
                const farmSelect = document.getElementById('farm-filter');
                farmSelect.innerHTML = `<option value="all">👨‍🌾 - Toutes les Farms -</option>` + 
                    uniqueFarms.map(f => `<option value="${f}" ${f === currentFilters.farm ? 'selected' : ''}>${f}</option>`).join('');
            } else {
                farmFilterWrapper.style.display = 'none';
            }

            // --- 3. GESTION DU BOUTON RETOUR ---
            if (currentFarmId) {
                const farm = category.farms.find(f => f.id === currentFarmId);
                backBtn.className = 'back-to-farms-btn';
                backBtn.innerHTML = `<span>‹ Retour</span> <span>${farm ? farm.name : category.name}</span>`;
            } else {
                backBtn.className = 'back-to-categories-btn';
                backBtn.innerHTML = `<span>‹ Retour</span> <span>${category.name}</span>`;
            }
            filterContainer.prepend(backBtn);
            
            renderProductList(currentCategoryId, currentFarmId);
        }
    }

    function renderCategoryList() {
        const filtered = appData.filter(c => currentFilters.quality === 'all' || c.quality === currentFilters.quality);
        productListContainer.innerHTML = filtered.map(category => `
            <div class="category-card" data-category-id="${category.id}">
                <img src="${category.image}" alt="${category.name}">
            </div>
        `).join('') || '<p class="no-results">Aucune catégorie.</p>';
    }

    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category || !category.farms) return;
        productListContainer.innerHTML = category.farms.map(farm => `
            <div class="farm-list-btn" data-farm-id="${farm.id}">
                <div class="farm-btn-left">
                    <div class="farm-btn-info">
                        <span class="farm-btn-title">${farm.name}</span>
                        <span class="farm-btn-subtitle">${farm.products.length} articles</span>
                    </div>
                </div>
            </div>
        `).join('') || '<p class="no-results">Aucune sous-catégorie.</p>';
    }

    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        let productsToRender = [];

        // Récupération des produits selon l'arborescence
        if (farmId && category.farms) {
            const farm = category.farms.find(f => f.id === farmId);
            if (farm) productsToRender = farm.products;
        } else if (category.products) {
            productsToRender = category.products;
        }

        // --- APPLICATION DU FILTRE ---
        if (currentFilters.farm && currentFilters.farm !== 'all') {
            productsToRender = productsToRender.filter(p => p.farm === currentFilters.farm);
        }

        productListContainer.innerHTML = productsToRender.map(product => `
            <div class="product-card product-item-card" data-product-id="${product.id}">
                ${product.image ? `<img src="${product.image}" alt="">` : ''}
                <div class="info">
                    <div class="name">${product.name}</div>
                    ${product.farm ? `<div class="farm-subtitle">${product.farm}</div>` : ''}
                    <div class="price">${product.tarifs && product.tarifs.length ? product.tarifs[0].price.toFixed(2) + '€' : 'N/A'}</div>
                </div>
            </div>
        `).join('') || '<p class="no-results">Bientôt disponible.</p>';
    }

    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;
        document.getElementById('product-page-title').innerText = product.name;
        
        // --- 1. GÉNÉRATION DYNAMIQUE DU CARROUSEL MÉDIA ---
        let mediaHTML = '';
        mediaHTML += `
            <div class="media-item">
                ${product.image ? `<img src="${product.image}" alt="Photo ${product.name}">` : ''}
            </div>
        `;
        if (product.video) {
            mediaHTML += `
                <div class="media-item">
                    <video class="product-video" src="${product.video}" muted loop playsinline controls preload="metadata"></video>
                </div>
            `;
        }

        // --- 2. GÉNÉRATION DU SÉLECTEUR DE STRAINS (Corrigé) ---
        let strainsHTML = '';
        if (product.strains && product.strains.length > 0) {
            strainsHTML = `
                <div class="strain-container">
                    <div class="strain-title" style="text-align: center;">🧪 Choisissez votre Strain :</div>
                    <div class="strain-selector">
                        ${product.strains.map((strain, index) => `
                            <button class="strain-btn ${index === 0 ? 'active' : ''}" data-strain="${strain}">${strain}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // --- 3. INJECTION DU CONTENU DANS LA PAGE ---
        document.getElementById('product-details-content').innerHTML = `
            <div class="product-media-slider">
                ${mediaHTML}
            </div>
            ${product.video ? `<div class="swipe-text" style="text-align:center; color:var(--hint-color); font-size:0.8rem; margin-top:8px;">Swipe ➡️ pour la vidéo</div>` : ''}
            
            <div class="name" style="font-size: 1.6rem; margin-top: 15px; text-align: center; font-family: impact, sans-serif;">${product.name}</div>
            ${product.farm ? `<div style="color: var(--hint-color); margin-bottom: 15px; font-style: italic; text-align: center;">🧪 ${product.farm}</div>` : ''}
            
            ${strainsHTML} <p class="product-description" style="margin-top: 15px;">${product.description || ''}</p>
            
            <div class="tarifs-title">💰 Tarifs :</div>
            <div class="tarifs-grid-container">${product.tarifs ? product.tarifs.map(tarif => {
                // --- DÉTECTION AUTOMATIQUE DES OFFRES VIP (PRIX = 0) ---
                const isPrive = tarif.price === 0 || tarif.weight.includes('privé');
                const priceDisplay = isPrive ? 'Sur demande' : tarif.price.toFixed(2) + '€';
                const btnContent = isPrive ? '💬 VIP' : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-cart" /></svg>';

                return `
                <div class="tarif-item">
                    <div class="box-tarif">
                        <span class="tarif-wieght">
                            ${tarif.weight} 
                            ${tarif.oldPrice ? `<s style="color:var(--hint-color); font-size:1rem; margin-left:8px;">${tarif.oldPrice}</s>` : ''}
                        </span>
                        <span class="tarif-price">${priceDisplay}</span>
                    </div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}" ${isPrive ? 'style="font-size: 1.1rem; font-weight: bold; font-family: Impact, sans-serif;"' : ''}>
                        ${btnContent}
                    </button>
                </div>
                `;
            }).join('') : ''}</div>
        `;
        
        // --- 4. INITIALISATION DU MOTEUR DE LECTURE VIDÉO ---
        if (product.video) {
            initVideoAutoplayObserver();
        }

        showPage('page-product');
    }

    function renderCart() {
        const container = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            container.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
        } else {
            container.innerHTML = cart.map(item => `
            <div class="cart-item">
            <div class="item-details" data-product-id="${item.productId}" style="cursor: pointer;">
                <div class="name">${item.name} (${item.weight}) <span style="font-size:0.7rem; color:var(--hint-color); border: 1px solid var(--hint-color); padding: 2px 6px; border-radius: 5px; margin-left: 5px;">👁️ Voir</span></div>
                <div class="price">${item.totalPrice.toFixed(2)}€</div>
            </div>
                    <div class="quantity-selector">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                </div>
            `).join('');
            const total = cart.reduce((sum, i) => sum + i.totalPrice, 0);
            document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        }
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article(s)`;
        document.getElementById('confirmation-total-price').innerText = `${subTotal.toFixed(2)}€`;

        document.getElementById('confirmation-items-list').innerHTML = cart.map((item, i) => `
            <div style="margin-bottom:10px;">${i + 1}. ${item.name} | ${item.quantity}x ${item.weight} | ${item.totalPrice.toFixed(2)}€</div>
        `).join('');

        document.getElementById('confirmation-summary').innerHTML = `
            <div class="summary-line total"><span>💰 Total final:</span><span>${subTotal.toFixed(2)}€</span></div>
        `;
       
  // --- GÉNÉRATION DYNAMIQUE DES BOUTONS DE COMMANDE ---
// --- GÉNÉRATION DYNAMIQUE DES BOUTONS DE COMMANDE ---
const checkoutBtnsContainer = document.getElementById('dynamic-checkout-buttons');
let checkoutHTML = '';
const orderMsgEncoded = formatOrderMessage(); // Le message du panier pré-rempli

const tgStyle = `background: linear-gradient(45deg, #2a67ee, #16e6d5); color: black; text-shadow: none;`;
const waStyle = `background: linear-gradient(45deg, #25D366, #128C7E); text-shadow: 0px 1px 2px rgba(0,0,0,0.5);`;

// --- LE PÉAGE INTÉGRÉ (CHAMP D'ADRESSE) ---
if (activeConfig.telegramLivraison || activeConfig.phone) {
    checkoutHTML += `
      <div style="width: 100%; margin-bottom: 15px; text-align: left;">
          <div style="color: var(--text-color); font-size: 0.9rem; margin-bottom: 8px; font-weight: bold;">📍 Adresse (Obligatoire pour livraison) :</div>
          <textarea id="delivery-address" placeholder="N° Rue, Ville, Code Postal... (Laisse vide si Sur Place)" style="width: 100%; box-sizing: border-box; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.3); color: white; min-height: 65px; font-family: inherit; font-size: 1rem;"></textarea>
          <div style="font-size: 0.8rem; color: var(--brand-color); margin-top: 5px; text-align: right; font-weight: bold;">⚠️ Minimum de commande pour la livraison : 50€</div>
      </div>
    `;
}

// --- BLOC 1 : TELEGRAM (Priorité Absolue) ---
if (activeConfig.telegramLivraison) {
    checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegramLivraison}?text=${orderMsgEncoded}" data-is-delivery="true" style="${tgStyle}; margin-bottom: 10px;">TLG LIVRAISON 🚀</button>`;
}
if (activeConfig.telegramSurPlace) {
    checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegramSurPlace}?text=${orderMsgEncoded}" style="${tgStyle}; margin-bottom: 10px;">TLG SUR PLACE 🤝</button>`;
}
// Fallback Telegram Unique (BXL, 37, 75)
if (activeConfig.telegram && !activeConfig.telegramLivraison) {
    checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegram}?text=${orderMsgEncoded}" style="${tgStyle}; margin-bottom: 10px;">TÉLÉGRAM 💙</button>`;
}

// --- BLOC 2 : WHATSAPP (Porte de secours cachée) ---
if (activeConfig.phone) {
    // Le déclencheur visuel
    checkoutHTML += `
        <div id="toggle-whatsapp-btn" style="text-align: center; margin-top: 5px; margin-bottom: 15px; cursor: pointer; padding: 10px;">
            <span style="color: #00c759; font-size: 0.9rem; text-decoration: underline; font-style: italic;">Uniquement si tu n'as pas Telegram 📞</span>
        </div>
    `;
    
    // Le conteneur masqué (display: none)
    checkoutHTML += `<div id="whatsapp-buttons-container" style="display: none; flex-direction: column; width: 100%;">`;
    checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="whatsapp" data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}" data-is-delivery="true" style="${waStyle}; margin-bottom: 10px;">WHATSAPP LIVRAISON 🚀</button>`;
    checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="whatsapp" data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}" style="${waStyle}; margin-bottom: 10px;">WHATSAPP SUR PLACE 🤝</button>`;
    checkoutHTML += `</div>`;
}

checkoutBtnsContainer.innerHTML = checkoutHTML;
showPage('page-confirmation');
  }

    function renderContactPage() {
        document.getElementById('contact-links-container').innerHTML = activeContactLinks.map(link => `
            <a href="${link.url}" class="contact-link ${link.className}" target="_blank">${link.text}</a>
        `).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function showNotification(msg) {
        const notif = document.getElementById('notification-toast');
        notif.innerText = msg;
        notif.classList.add('show');
        setTimeout(() => notif.classList.remove('show'), 3000);
    }

    function formatOrderMessage() {
        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let msg = `*🛒 COMMANDE ${activeConfig.name}*\n\n`;
        cart.forEach((i, idx) => {
            // Si un strain a été sélectionné, on l'ajoute proprement au texte de la commande
            const strainText = i.strainName ? ` [${i.strainName}]` : '';
            msg += `*${idx + 1}. ${i.rawName || i.name}${strainText}*\n• Quantité: ${i.quantity}x ${i.weight}\n• Prix: ${i.totalPrice.toFixed(2)}€\n\n`;
        });
        msg += `*💰 TOTAL: ${total.toFixed(2)}€*\n💳 Paiement: ${paymentMethod}`;
        return encodeURIComponent(msg);
    }

    function populateFilters() {
        const qFilter = document.getElementById('quality-filter');
        const qualities = ['all', ...new Set(appData.map(c => c.quality).filter(Boolean))];
        qFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'TOUTES LES QUALITÉS' : q}</option>`).join('');
        qFilter.addEventListener('change', e => { currentFilters.quality = e.target.value; renderHomePage(); });

        // --- MOTEUR DU FILTRE PAR PRODUCTEUR (FARM) ---
        const fFilter = document.getElementById('farm-filter');
        if (fFilter) {
            fFilter.addEventListener('change', e => {
                currentFilters.farm = e.target.value; // Enregistre le choix du client
                renderProductList(currentCategoryId, currentFarmId); // Rafraîchit uniquement la liste
            });
        }
    }

    // 5. EVENT LISTENERS GLOBAUX
    document.body.addEventListener('click', function(e) {
        const target = e.target;

        // Sélection d'un Strain
        if (target.closest('.strain-btn')) {
            const btn = target.closest('.strain-btn');
            // Retire la classe active des autres boutons
            document.querySelectorAll('.strain-btn').forEach(b => b.classList.remove('active'));
            // Ajoute la classe active au bouton cliqué
            btn.classList.add('active');
        }

        // Toggle Accordéon Page Info
        if (target.closest('.accordion-header')) {
            const currentItem = target.closest('.accordion-item');
            // Optionnel : Fermer les autres accordéons si on en ouvre un nouveau
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem) item.classList.remove('active');
            });
            currentItem.classList.toggle('active');
            return; // Stoppe l'exécution pour éviter les conflits
        }

        if (target.closest('.nav-item')) {
            const pageId = target.closest('.nav-item').dataset.page;
            if (pageId === 'page-contact') renderContactPage();
            if (pageId === 'page-home') { currentView = 'categories'; currentCategoryId = null; renderHomePage(); }
            showPage(pageId);
        }

        if (target.closest('.category-card')) {
            currentCategoryId = target.closest('.category-card').dataset.categoryId;
            const category = appData.find(c => c.id === currentCategoryId);
            
            currentFilters.farm = 'all'; // Reset sécurité

            if (category.products) {
                currentFarmId = null;
                currentView = 'products';
            } else {
                currentView = 'farms';
            }
            renderHomePage();
        }

        if (target.closest('.farm-list-btn')) {
            currentFarmId = target.closest('.farm-list-btn').dataset.farmId;
            currentView = 'products';
            currentFilters.farm = 'all'; // Reset sécurité
            renderHomePage();
        }

        if (target.closest('.product-item-card')) {
            renderProductPage(target.closest('.product-item-card').dataset.productId);
        }

        if (target.closest('.back-to-categories-btn')) {
            currentFilters.farm = 'all'; // Reset sécurité
            currentView = 'categories'; renderHomePage();
        }
        if (target.closest('.back-to-farms-btn')) {
            currentFilters.farm = 'all'; // Reset sécurité
            currentView = 'farms'; renderHomePage();
        }

     // Ajout au panier avec prise en compte du Strain
     if (target.closest('.add-to-cart-btn')) {
        const btn = target.closest('.add-to-cart-btn');
        const pId = btn.dataset.productId;
        const weight = btn.dataset.weight;
        const price = parseFloat(btn.dataset.price);

        // --- 🚀 INTERCEPTEUR VIP / GROS VOLUME (PRIX À 0) ---
        if (price === 0) {
            const product = getProductById(pId);
            // On récupère le bon Telegram selon la franchise en cours
            const tgUrl = activeConfig.telegram || activeConfig.telegramLivraison;
            // Création du message pré-rempli
            const msg = encodeURIComponent(`Salut l'équipe, je suis intéressé par l'offre VIP/Gros pour le produit : ${product.name} 👑`);
            const finalUrl = `${tgUrl}?text=${msg}`;
            
            // Ouverture instantanée sans passer par le panier
            if (tg) tg.openTelegramLink(finalUrl);
            else window.open(finalUrl, '_blank');
            return; // 🛑 Stoppe le script ici, on n'ajoute rien au panier
        }
        
        // On vérifie si un strain est sélectionné sur la page
        const activeStrainBtn = document.querySelector('.strain-btn.active');
        const selectedStrain = activeStrainBtn ? activeStrainBtn.dataset.strain : null;
        
        // On crée un ID unique pour le panier (Produit + Poids + Strain)
        const cartItemId = selectedStrain ? `${pId}-${weight}-${selectedStrain}` : `${pId}-${weight}`;
        
        // On formate le nom affiché dans le panier (avec la couleur de la marque)
        const productBaseName = getProductById(pId).name;
        const displayName = selectedStrain 
            ? `${productBaseName} <br><span style="color: var(--brand-color); font-size: 0.85rem;">${selectedStrain}</span>` 
            : productBaseName;
        
        const existing = cart.find(i => i.id === cartItemId);
        if (existing) {
            existing.quantity++; 
            existing.totalPrice = existing.quantity * existing.unitPrice;
        } else {
            cart.push({ 
                id: cartItemId, 
                productId: pId, 
                name: displayName, // Contient le Strain en couleur
                weight: weight, 
                quantity: 1, 
                unitPrice: price, 
                totalPrice: price,
                rawName: productBaseName, // Pour le message Telegram
                strainName: selectedStrain // Pour le message Telegram
            });
        }
        renderCart();
        if(tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
        showNotification('🛒 Ajouté au panier • Voir ➔');
        }
        // --- 🚀 ROUTAGE DIRECT VERS PRODUIT (Panier ou Liens internes) ---
        if (target.closest('.item-details[data-product-id]')) {
            const pId = target.closest('.item-details').dataset.productId;
            renderProductPage(pId);
        }
        
        if (target.closest('.pack-link')) {
            const pId = target.closest('.pack-link').dataset.id;
            renderProductPage(pId);
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            const item = cart.find(i => i.id === btn.dataset.id);
            if (btn.dataset.action === 'increase') item.quantity++;
            else item.quantity--;

            if (item.quantity <= 0) cart = cart.filter(i => i.id !== item.id);
            else item.totalPrice = item.quantity * item.unitPrice;
            renderCart();
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.method === paymentMethod));
        }

        if (target.closest('#home-cart-button') || target.closest('#notification-toast')) { 
            renderCart(); 
            showPage('page-cart'); 
            // On fait disparaître la notification instantanément pour nettoyer l'écran
            document.getElementById('notification-toast').classList.remove('show'); 
        }

        if (target.closest('.close-button') || target.closest('.back-button') || target.closest('#cart-continue-shopping')) { showPage('page-home'); }
        if (target.closest('#checkout-button')) { renderConfirmation(); }
        if (target.closest('#confirmation-modify-order')) { showPage('page-cart'); }

// --- RÉVÉLATION DE LA PORTE DE SECOURS WHATSAPP ---
if (target.closest('#toggle-whatsapp-btn')) {
    const waContainer = document.getElementById('whatsapp-buttons-container');
    const toggleBtn = target.closest('#toggle-whatsapp-btn');
    if (waContainer) {
        waContainer.style.display = 'flex'; // On affiche les boutons WhatsApp
        toggleBtn.style.display = 'none'; // On désintègre le texte cliqué pour garder l'écran propre
    }
}
// --- ROUTAGE INTELLIGENT DE LA COMMANDE ---
if (target.closest('.send-order-btn')) {
    const btn = target.closest('.send-order-btn');
    const platform = btn.dataset.platform;
    let url = btn.dataset.url;
    const isDelivery = btn.dataset.isDelivery === "true"; // Vrai pour Telegram/WhatsApp Livraison

    // --- CALCUL DU PANIER POUR LA RÈGLE DES 50€ ---
    const totalOrderPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

    // --- LECTURE DU PÉAGE INTÉGRÉ ---
    const addressInput = document.getElementById('delivery-address');
    const adresseLivraison = addressInput ? addressInput.value : "";

    // Règle 1 : Clic sur un bouton Livraison (Minimum 50€ ET Adresse Obligatoire)
    if (isDelivery) {
        // Bouclier A : Minimum d'achat
        if (totalOrderPrice < 50) {
            showNotification(`⚠️ Minimum 50€ pour la livraison (Ton panier : ${totalOrderPrice.toFixed(2)}€).`);
            return; // Stoppe net l'exécution
        }

        // Bouclier B : Adresse
        if (!adresseLivraison || adresseLivraison.trim() === "") {
            if (addressInput) {
                addressInput.style.border = "2px solid var(--red-color)";
                setTimeout(() => addressInput.style.border = "1px solid rgba(255,255,255,0.2)", 2000);
            }
            showNotification("⚠️ L'adresse est obligatoire pour la livraison.");
            return; // Stoppe net l'exécution
        }
        url += encodeURIComponent(`\n\n📍 Adresse de livraison : ${adresseLivraison}`);
    } 
    // Règle 2 : Clic sur un bouton Sur Place (On transmet l'adresse si elle a été tapée, sans limite de prix)
    else if (adresseLivraison.trim() !== "") {
        url += encodeURIComponent(`\n\n📍 Info supp. (Adresse) : ${adresseLivraison}`);
    }

    if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');

    // Sécurité presse-papier
    try {
        const urlObj = new URL(url);
        const rawMessage = urlObj.searchParams.get('text');
        if (rawMessage) navigator.clipboard.writeText(rawMessage).catch(e => {}); 
    } catch(e) {}

    // Ouverture instantanée
    if (platform === 'telegram') {
        if (tg) tg.openTelegramLink(url);
        else window.open(url, '_blank');
    } else {
        if (tg) tg.openLink(url);
        else window.open(url, '_blank');
    }
}
    });

    // --- 10. MOTEUR D'AUTOPLAY VIDÉO AU SWIPE (INTUITION-BASED UX) ---
function initVideoAutoplayObserver() {
    const videos = document.querySelectorAll('.product-video');
    
    // Configuration de l'observateur : déclenche quand 60% de la vidéo est visible
    const observerOptions = {
        root: document.querySelector('.product-media-slider'), // Le conteneur du swipe
        threshold: 0.6 
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // La vidéo est swippée à l'écran -> On la lance
                video.play().catch(error => {
                    // Fallback si le navigateur bloque l'autoplay (rare en muet)
                    console.log("Autoplay bloqué, attend interaction.");
                });
            } else {
                // La vidéo n'est plus visible -> On la met en pause pour économiser batterie/ressources
                video.pause();
            }
        });
    }, observerOptions);

    // On attache l'observateur à chaque vidéo trouvée sur la page
    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

    // Initialisation
    setTimeout(() => {
        populateFilters();
        renderHomePage();
        updateCartCount();
        showPage('page-home');
    }, 1500);
});