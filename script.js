document.addEventListener('DOMContentLoaded', function () {

    // --- MOTEUR DE FERMETURE AUTOMATIQUE (23h - 12h) ---
    function isShopOpen() {
        const now = new Date();
        const hour = now.getHours();
        // Fermé si heure >= 23 OU heure < 12
        return !(hour >= 23 || hour < 12);
    }
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
    phone: '33746788110',

    telegramInfo: 'https://t.me/terphouseoff',

    snapchat: 'https://snapchat.com/t/WV38isH8',
    instagram: 'https://www.instagram.com/terphouse.officiel?igsh=dHlud2NoOXo5NDhz&utm_source=qr',
    luffa: 'https://callup.luffa.im/c/2hQvSV5uoon',
    tiktok: 'https://www.tiktok.com/@terphouse0?_r=1&_t=ZN-94IxTeNWpTK',

    name: 'TerpsHouse72',
    logo: 'LogoT72.jpg',
    bgImage: 'Fondecran2.jpg',

    theme: {
        main: '#2a78c4b3',
        shadow: '#2ac4c4e3'
    },

    categoryImages: {
        'HASH': 'CategT72Hash.png',
        'WEED': 'CategT72Weed.png',
        'AUTRE': 'CategT73Autre.png'
    }
},
        'bxl': { 
            phone: '447541995981', 
            telegram: 'https://t.me/terphousebxl',
            name: 'TerpsHouseBxl',
            logo: 'LogoBxl.png',
            bgImage: 'Fondecran2.jpg',
            theme: { 
                main: '#ffce00', 
                bg: 'linear-gradient(90deg, #000000 0%, #ffce00 50%, #ed2939 100%)',
                // NOUVEAU : Le dégradé spécifique pour les sous-catégories BXL
                farmBg: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(255,206,0,0.5) 50%, rgba(237,41,57,0.7) 100%)',
                shadow: 'rgb(255 206 0 / 70%)' 
            },
            categoryImages: { 'HASH': 'CategT72Hash.png', 'WEED': 'CategT72Weed.png', 'AUTRE': 'CategT73Autre.png' }
        },
        '37': { 
            phone: '', 
            telegram: 'https://t.me/terpcommande37',     
            name: 'TerpsHouse37',
            logo: 'LogoT37.jpg',
            bgImage: 'Fondecran2.jpg',
            theme: { main: '#f3cb02bf', shadow: '#f3bb06' },
            categoryImages: { 'HASH': 'CategT72Hash.png', 'WEED': 'CategT72Weed.png', 'AUTRE': 'CategT73Autre.png' }
        },
        '75': { 
            phone: '33605824054', 
            telegram: 'https://t.me/terphouse75', 
            snapchat: '',
            instagram: '',
            luffa: '',
            name: 'TerpsHouse75',
            marquee: [
                '📆 OUVERT TOUS LES JOURS DE 11H À 22H ⏰',
                '🚨 SERVICE CONTINU 11H - 22H 🚨'
            ],
            logo: 'LogoT75.jpg',
            bgImage: 'Fondecran2.jpg',
            theme: { 
                main: '#0055A4', /* Bleu France */
                bg: 'linear-gradient(90deg, #002654 0%, rgba(255,255,255,0.15) 50%, #ed2939 100%)', /* Dégradé FR assombri pour lisibilité texte blanc */
                farmBg: 'linear-gradient(90deg, rgba(0,38,84,0.9) 0%, rgba(255,255,255,0.1) 50%, rgba(237,41,57,0.7) 100%)',
                shadow: 'rgba(0, 85, 164, 0.4)' 
            },
            categoryImages: { 'HASH': 'CategT72Hash.png', 'WEED': 'CategT72Weed.png', 'AUTRE': 'CategT73Autre.png' }
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
    // NOUVEAU : INJECTION DU FOND D'ÉCRAN DYNAMIQUE
    if (activeConfig.bgImage) {
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${activeConfig.bgImage}')`;
    }

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

    // --- INJECTION DYNAMIQUE DU BANDEAU DÉFILANT (MARQUEE) ---
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        // Horaires par défaut (72, BXL, etc.)
        const defaultMarquee = [
            '📆 OUVERT DU LUNDI AU LUNDI DE 12H30 À 00H ⏰'
            /* '🚨 DIMANCHE OUVERTURE À 13H30 🚨' */
        ];
        
        // On prend les horaires spécifiques si la franchise en a, sinon on met par défaut
        const msgs = activeConfig.marquee || defaultMarquee;
        
        // On injecte le texte 4 fois pour faire la boucle infinie sans coupure
        marqueeContent.innerHTML = `
            <span>${msgs[0]}</span>
            <span>${msgs[1] ? msgs[1] : msgs[0]}</span>
            <span>${msgs[0]}</span>
            <span>${msgs[1] ? msgs[1] : msgs[0]}</span>
        `;
    }
    
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
        { 
            id: 'HASH', name: '🍫 HASH 75', type: 'Hash', quality: '🍫 Hashish', image: 'CategT75Hash.png', 
            farms: [
                { id: 'FROZEN_US', name: 'FROZEN US 🇺🇸', products: [
                   /*  {
                        id: 'FROZEN_THE_MIDDLE_75', 
                        name: 'FROZEN The Middle 🇺🇸',
                        farm: 'The Middle 🌱',
                        strains: ['🍊 Orangina', '🍬 Zgusher'],
                        description: '🍊 Orangina  \n Strain très fruitée avec des notes d’agrumes et d’orange sucrée. Profil terpénique frais et intense, avec un goût bien marqué et une fumée douce. Effet relaxant et agréable, parfait pour chiller.\n\n 🍬 Zgusher  \n Profil très gourmand avec des arômes sucrés type bonbons et fruits tropicaux. Très riche en terpènes, texture bien collante et goût puissant. Effet équilibré, relaxant mais qui garde l’esprit léger',
                        image: 'ProductFrozTh.jpg',
                        video: 'VideoFrozTh.mp4',
                        tarifs: [{weight: '1g', price: 30}, {weight: '5g', price: 120}, {weight: '10g', price: 230}]
                    } */
                ]},
                { id: 'FROZEN', name: 'FROZEN ❄️', products: [
                   /*  {
                        id: 'FROZEN_VVS_75',
                        name: 'FROZEN VVS ❄️',
                        farm: '🧬 VVS',
                        strains: ['🥇 24K', '🍊 Tanger', '🧀 Cheese Berry', '🍹 Tropicalito'],
                        description: '🥇 24K: gas sucré + touche orangée, bien lourd.\n🍊 Tanger: agrumes frais, high clean.\n🧀 Cheese Berry: fromage doux + fruits rouges.\n🍹 Tropicalito: cocktail tropical sucré.',
                        image: 'Produit24K.jpg',
                        video: 'Video24K.mov',
                        tarifs: [{weight: '1.1g', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 140}]
                    } */
                ]},
                { id: 'DRY_120', name: 'DRY 120u 🛖', products: [
                   /*  {
                        id: 'DRY_120_PIRATE_75',
                        name: 'BUBBA DRY (120u) 🏴‍☠️',
                        farm: '🧬 Pirate Del Sur',
                        strains: [],
                        description: 'Bubba Dry c’est un hash old school, lourd et réconfortant 😮‍💨\nArômes terreux / chocolaté / légère note café, fumée douce et bien grasse.',
                        image: 'ProductPirate.jpg',
                        video: 'VideoPirate.mov',
                        tarifs: [{weight: '1.6g', price: 20}, {weight: '5g', price: 60}, {weight: '10g', price: 100}, {weight: '25g', price: 240}]
                    }*/
                ]},
                { id: 'DRY_90', name: 'DRY 90u ⚡️', products: [
                    {
                        id: 'DryMaradonag',
                        name: 'DryMaradona', 
                        farm: '🎩 Maradona Farm',
                        strains: [],
                        description: '',
                        image: 'ProductDD.png',
                        video: 'VideoDD.mp4',
                        tarifs: [
                            {weight: '5g', price: 50}, 
                            {weight: '10g', price: 70}, 
                            {weight: '50g', price: 250}, 
                            {weight: '100g', price: 450}
                        ]
                    } 
                   /*  {
                        id: 'CaliH_75',
                        name: 'CaliH 🎓', 
                        farm: '🎩 Darks Farm',
                        strains: ['RS11', 'Papaya', 'Sherbalto'],
                        description: 'RS11 : Profil fruité/candy, léger gaz (effet équilibré) \n  Papaya : Tropical sucré mangue/papaye (relax corporel marqué) \n  Sherbalto : Crémeux dessert + touche gas (calmant, parfait le soir).',
                        image: 'Product90Rs.jpg',
                        video: 'Video90Rs.mov',
                        tarifs: [
                            {weight: '5g', price: 60}, 
                            {weight: '10g', price: 110}, 
                            {weight: '25g', price: 250}, 
                            {weight: '50g', price: 450}, 
                            {weight: '100g', price: 660}
                        ]
                    } */
                ]},
                { id: 'DRY_73', name: 'DRY 73u', products: [
                    /* {
                        id: 'DRY_73_JEBLI_75',
                        name: 'GELATO (73u) 🍦',
                        farm: '🧬 Jebli Farm',
                        strains: [],
                        description: '73u souple, bien chargé en heads, fumée grasse, goût crémeux sucré.\nDaily efficace, clean et constant 😮‍💨',
                        image: 'ProductGG.jpg',
                        video: 'VideoGG.mp4',
                        tarifs: [{weight: '5g', price: 40}, {weight: '10g', price: 60}, {weight: '25g', price: 130}, {weight: '50g', price: 250}, {weight: '100g', price: 380}]
                    } */
                ]},
                { id: 'STATIC', name: 'STATIC ⚡️', products: [
                     {
                    id: '🏝️ oasis tropical',
                    name: '🏝️ Oasis Tropical',
                    farm: '🧬 PIRATE DEL SUR',
                    strains: [],
                    description: '☀️ DOUBLE STATIC ☀️',
                    image: 'ProductOa.jpg',
                    video: 'VideoOa.mp4',
                    tarifs: [
                        {weight: '1g (Sur Place) ', price: 30}, 
                        {weight: '5g', price: 100}, 
                        {weight: '10g', price: 190}
                    ]
                },
                   /*  {
                        id: 'STATIC_VVS_75',
                        name: 'STATIC VVS 2K25 💎',
                        farm: '🧬 VVS',
                        strains: ['🍓 Devil Fruit', '🍪 Glue Cookies', '🌈 Rainbow Sherbet', '🍈 Guava Melon'],
                        description: '🍓 Devil Fruit: Fruité avec une pointe gas.\n🍪 Glue Cookies: Gourmand + collant, cookies/gassy.\n🌈 Rainbow Sherbet: Profil plus terreux que sucré.\n🍈 Guava Melon: Tropical frais, melon/guava bien présent.',
                        image: 'ProductDevil.jpg',
                        video: 'VideoDevil.mp4',
                        tarifs: [{weight: '1g', price: 20}, {weight: '5g', price: 100}, {weight: '10g', price: 190}, {weight: '20g', price: 360}, {weight: '25g', price: 430}]
                    } */
                ]}
            ] 
        },
        { id: 'WEED', name: '🌿 WEED 75', type: 'Weed', quality: '🌿 Fleurs', image: 'CategT75Weed.png', farms: [
            { id: 'CALI_US', name: 'CALI US 🇺🇸', products: [
               /*  {
                    id: 'CALI_MOCHI',
                    name: 'MOCHI GELATO 🍧',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Profil crémeux sucré + fruité, avec des notes dessert type gelato et une légère touche gazeuse en fond.\nFumée douce, épaisse et très parfumée 😮‍💨\nEffet : montée progressive, high euphorique au début puis détente profonde.',
                    image: 'ProductMochi1.jpg',
                    video: 'VideoMochi1.mp4',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                }, */
            ]
        },
        ] },
        { id: 'AUTRE', name: '🧬 AUTRE', type: 'Autre', quality: '🧬 Divers', image: 'CategT75Autre.png', farms: [] }
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
        id: 'PACKS', name: '🏆 PACKS ÉVÉNEMENT', type: 'Packs', quality: '🏆 Packs', image: 'CategT72Pack.png',
        products: [
            {
                id: 'PACK_MAROC',
                name: '🇲🇦 PACK MAROC',
                farm: '🧬 Sélection Premium',
                strains: [],
                packDetails: '10g Frozen PDS + 10g VVS Darksfarm + 5g 120u Jebli', // INFO CACHÉE POUR LE BOT
                description: 'La puissance et le goût à l\'état pur.\n\n <span class="pack-link" data-id="GMO">👁️ 10g Frozen PDS</span>\n <span class="pack-link" data-id="STATIC_VVS">👁️ 10g VVS Darksfarm</span> \n <span class="pack-link" data-id="purpule punch">👁️ 5g 120u Jebli</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                image: 'PackMaroc.jpg',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 290, oldPrice: '330€' }]
            },
            {
                id: 'PACK_USA',
                name: '🇺🇸 PACK ÉTATS-UNIS',
                farm: '🧬 Sélection Premium',
                strains: [],
                packDetails: '5g Static Saha Terp + 5g Frozen Wepfli + 5g Cali US', // INFO CACHÉE POUR LE BOT
                description: 'L\'excellence californienne dans ton salon.\n\n <span class="pack-link" data-id="RAZBERRY">👁️ 5g Static Saha Terp</span>\n <span class="pack-link" data-id="GAS STATION">👁️ 5g Frozen Wepfli</span> \n <span class="pack-link" data-id="CALI_CEREAL">👁️ 5g Cali US</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                image: 'PackUSA.jpg',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 350, oldPrice: '390€' }]
            },
            {
                id: 'PACK_FRANCE',
                name: '🇫🇷 PACK FRANCE',
                farm: '🧬 Sélection Premium',
                strains: [],
                packDetails: '10g 120u Jebli + 5g 90u Darks Farm + 5g Cali US', // INFO CACHÉE POUR LE BOT
                description: 'Le trio parfait pour les connaisseurs.\n\n <span class="pack-link" data-id="purpule punch">👁️ 10g 120u Jebli</span>\n <span class="pack-link" data-id="CaliH">👁️ 5g 90u Darks Farm</span> \n <span class="pack-link" data-id="CALI_CEREAL">👁️ 5g Cali US</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                image: 'PackFrance.jpg',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 200, oldPrice: '240€' }]
            },
            {
                id: 'PACK_BRESIL',
                name: '🇧🇷 PACK BRÉSIL',
                farm: '🧬 Sélection Premium',
                strains: [],
                packDetails: '5g Amnesia + 10g Gelato 73u + 10g Jaune', // INFO CACHÉE POUR LE BOT
                description: 'Le combo quantité/qualité imbattable.\n\n <span class="pack-link" data-id="AMNESIA">👁️ 5g Amnesia</span>\n <span class="pack-link" data-id="DRY_73_JEBLI">👁️ 10g Gelato 73u</span> \n <span class="pack-link" data-id="Grappe Fruit 🍇">👁️ 10g Jaune</span>\n\n<span style="font-size: 0.8rem; color: var(--hint-color); font-style: italic; display: block; text-align: center; margin-top: 15px;">👆 Clique sur un produit pour voir sa fiche</span>',
                image: 'PackBresil.jpg',
                video: '',
                tarifs: [{ weight: '1 Pack', price: 110, oldPrice: '150€' }]
            }
        ]
    },
    /* {
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
    }, */
    {
        id: 'HASH', name: '🍫 HASH', type: 'Hash', quality: '🍫 Hashish', image: 'CategT72Hash.png',
        farms: [
            { id: 'STATIC_US', name: 'STATIC US 🇺🇸', products: [
                 {
                    id: 'RAZBERRY',
                    name: 'RAZBERRY MINTS 🍒', // Différencié
                    farm: '🧬 Saha Terps ',
                    strains: [],
                    description: '',
                    image: 'ProductRM.jpg',
                    video: 'VideoRM.mp4',
                    tarifs: [{ weight: '1g (Sur Place)', price: 30 }, { weight: '5g', price: 160 }, { weight: '10g', price: 270 }]
                },
                 {
                    id: 'SUB ZERO',
                    name: 'SUB ZERO 0️⃣', // Différencié
                    farm: '🧬 Saha Terps ',
                    strains: [],
                    description: '',
                    image: 'ProductSZ.jpg',
                    video: 'VideoSZ.mp4',
                    tarifs: [{ weight: '1g (Sur Place)', price: 40 }, { weight: '5g', price: 170 }, { weight: '10g', price: 320 }]
                },
                   {
                    id: 'staticuswel',
                    name: 'STATIC US 🗽 (WeFlips)', // Différencié
                    farm: '🥷🏼 WEFLIPS 🥷🏼',
                    strains: ['Sherbet 🍧', 'Gush Mints 🍬'],
                    description: '',
                    image: 'ProductWF.jpg',
                    video: 'VideoWF.mp4',
                    tarifs: [{weight: '1g (Sur Place)', price: 40}, {weight: '5g', price: 170}, {weight: '10g', price: 320}]
                },
               /*  {
                    id: 'STATIC_US_SAHA',
                    name: 'STATIC US 🇺🇸 (Saha Terps)', // Différencié
                    farm: '🧬 Saha Terps (⚠️ Exclusivité)',
                    strains: ['🥭 Guava Cake', '🍬 Atomic Runtz'],
                    description: 'Produit très haut de gamme, static propre, très riche en goût, texture sableuse / fondante, full terps.\nQualité US, grosse odeur dès l’ouverture.\n\n🥭 Guava Cake: Profil fruité / crémeux avec dominante goyave.\n🍬 Atomic Runtz: Saveur bonbon fruité avec côté gaz typique Runtz.',
                    image: 'ProductStaticUs.jpg',
                    video: 'VideoStaticUs.mp4',
                    tarifs: [{ weight: '1g (Sur Place)', price: 50 }, { weight: '5g', price: 180 }, { weight: '10g', price: 300 }, { weight: '20g', price: 560 }]
                } */
            ]},
            { id: 'STATIC', name: 'STATIC ⚡️', products: [
                {
                    id: '🏝️ oasis tropical',
                    name: '🏝️ Oasis Tropical',
                    farm: '🧬 PIRATE DEL SUR',
                    strains: [],
                    description: '☀️ DOUBLE STATIC ☀️',
                    image: 'ProductOa.jpg',
                    video: 'VideoOa.mp4',
                    tarifs: [
                        {weight: '1g (Sur Place) ', price: 30}, 
                        {weight: '5g', price: 100}, 
                        {weight: '10g', price: 190}
                    ]
                },
                 {
                    id: 'Static Olive 🫒',
                    name: 'Static Olive 🍈', // Différencié
                    farm: '👨🏻‍🌾 Jebli farm',
                    strains: [],
                    description: '',
                    image: 'ProductOlo1.jpg',
                    video: 'VideoOl1.mp4',
                    tarifs: [
                        {weight: '5g', price: 80},
                        {weight: '1 olive (10g)', price: 160},
                    ]
                },
               /*  {
                    id: '😮‍💨 Rainbow',
                    name: '😮‍💨 Rainbow',
                    farm: '🧬 PIRATE DEL SUR',
                    strains: [],
                    description: 'EXCLUSIVITÉ ( préparer vos papilles gustatives pour un goût d arc en ciel 🌈)',
                    image: 'ProductRain.jpg',
                    video: 'VideoRain.mp4',
                    tarifs: [
                        {weight: '2.5g', price: 60}, 
                        {weight: '5g', price: 110}, 
                        {weight: '10g', price: 200}, 
                        {weight: '25g', price: 470}
                    ]
                }, */
                {
                    id: 'STATIC_VVS',
                    name: 'STATIC VVS 2K25 💎',
                    farm: '🧬 VVS',
                    strains: ['🍓 Devil Fruit', '🍪 Glue Cookies', '🌈 Rainbow Sherbet', '🍈 Guava Melon'],
                    description: '🍓 Devil Fruit: Fruité avec une pointe gas.\n🍪 Glue Cookies: Gourmand + collant, cookies/gassy.\n🌈 Rainbow Sherbet: Profil plus terreux que sucré.\n🍈 Guava Melon: Tropical frais, melon/guava bien présent.',
                    image: 'ProductDevil.jpg',
                    video: 'VideoDevil.mp4',
                    tarifs: [{weight: '1g (Sur Place)', price: 20}, {weight: '5g', price: 100}, {weight: '10g', price: 190}, {weight: '20g', price: 360}, {weight: '25g', price: 430}]
                },
                {
                    id: 'STATIC_ANNONYMOUS',
                    name: 'STATIC ANNONYMOUS ', // Différencié
                    farm: '🧬 FARM ANONYMOUS',
                    strains: ['Gelato 41 🍪','Spritzer 🍸', 'Ice cream cake 🧁','Wedding cake 🍰'],
                    description: '',
                    image: 'ProductSta.jpg',
                    video: 'VideoSta.mov',
                    tarifs: [
                        { weight: '2.5g', price: 80 },
                        { weight: '5g', price: 130 }, 
                        { weight: '10g', price: 250 }, 
                        { weight: '25g', price: 550 }
                    ]
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
            ]},
            { id: 'FROZEN_US', name: 'FROZEN US 🇺🇸', products: [
                 {
                    id: 'GAS STATION',
                    name: 'GAS STATION ⛽', // Différencié
                    farm: '🥷🏼 WEFLIPS 🥷🏼',
                    strains: [],
                    description: '',
                    image: 'ProductGS.jpg',
                    video: 'VideoGS.mp4',
                    tarifs: [{weight: '1g (Sur Place)', price: 30}, {weight: '5g', price: 150}, {weight: '10g', price: 280}]
                },
             /*    {
                    id: 'natchos',
                    name: 'Natchos 🌵', // Différencié
                    farm: '💃 Sheeshe 💃',
                    strains: [],
                    description: '',
                    image: 'ProductNat.jpg',
                    video: 'VideoNat.mp4',
                    tarifs: [{weight: '1g', price: 30}, {weight: '5g', price: 120}, {weight: '10g', price: 230}]
                },
                {
                    id: 'FROZEN_Midle',
                    name: 'FROZEN The Middle 🇺🇸', // Différencié
                    farm: 'The Middle 🌱',
                    strains: ['🍊 Orangina', '🍬 Zgusher'],
                    description: '🍊 Orangina  \n Strain très fruitée avec des notes d’agrumes et d’orange sucrée. Profil terpénique frais et intense, avec un goût bien marqué et une fumée douce. Effet relaxant et agréable, parfait pour chiller.\n\n 🍬 Zgusher  \n Profil très gourmand avec des arômes sucrés type bonbons et fruits tropicaux. Très riche en terpènes, texture bien collante et goût puissant. Effet équilibré, relaxant mais qui garde l’esprit léger',
                    image: 'ProductFrozTh.jpg',
                    videos: ['VideoFrozTh.mov','VideoFrozTh2.mov'],
                    tarifs: [{weight: '1g', price: 30}, {weight: '5g', price: 120}, {weight: '10g', price: 230}]
                }, */
               /*  {
                    id: 'FROZEN_CALIPLATES',
                    name: 'FROZEN CALIPLATES 🇺🇸', // Différencié
                    farm: '🧬 CALIPLATES',
                    strains: ['🔥 OMG', '🧊 Otter Pops'],
                    description: '🔥 OMG: Gas sucré + notes crémeuses. Fumée bien grasse, effet rapide et lourd.\n🧊 Otter Pops: Profil fruité glacé, très aromatique. High clean puis détente.',
                    image: 'ProductCalip.jpg',
                    video: 'VideoCalip.mp4',
                    tarifs: [{weight: '1g ', price: 40}, {weight: '2.5g', price: 70}, {weight: '5g', price: 140}, {weight: '10g', price: 250}]
                }, */
            ]},
            { id: 'FROZEN', name: 'FROZEN ❄️', products: [
               
                {
                    id: 'Frozen PDS 💠',
                    name: 'Frozen PDS 💠', // Différencié
                    farm: 'Farm PDS',
                    strains: ['Hansoloburger 🍔' ,'Strawnana Mints 🍓','Papaya Crush 🥭' ],
                    description: '',
                    image: 'ProductHens.jpg',
                    video: 'VideoHens.mp4',
                    tarifs: [{weight: '1.1g (Sur Place)', price: 20}, {weight: '2.5g', price: 50}, {weight: '5g', price: 90}, {weight: '10g', price: 160}]
                },
                {
                    id: 'Frozen 🧊',
                    name: 'Frozen VVS 🧊', // Différencié
                    farm: '🧬 VVS',
                    strains: ['Clémentine 🍊' ,'Super Mimosa 🌼' , 'Hb x Tc 🔄'],
                    description: '',
                    image: 'ProductSM.jpg',
                    video: 'VideoSM.mp4',
                   tarifs: [
                        { weight: '1.5g (Sur Place)', price: 20 },
                        { weight: '5g', price: 70 }, 
                        { weight: '10g', price: 130 }
                                        ]
                },
                {
                    id: 'Gary Payton 🫒',
                    name: 'Gary Payton 🫒', // Différencié
                    farm: '👨🏻‍🌾 Jebli farm',
                    strains: [],
                    description: '',
                    image: 'ProductGP.jpg',
                    video: 'VideoGP.mov',
                    tarifs: [
                        {weight: '1 olive (10g)', price: 100},
                    ]
                },
               /*  {
                    id: 'GMO',
                    name: '🍊 GMO', // Différencié
                    farm: '🧬 Pirate Del Sur',
                    strains: [],
                    description: 'Une véritable frappe signée Pirate Del Sur 🏴‍☠️\nProfil terpénique ultra-puissant : une grosse base gassy / terreuse (typique du GMO) accompagnée d’une note d’agrumes piquante 🍊.\nTexture extrêmement grasse et fumée épaisse 😮‍💨\nEffet : Très lourd, sédatif et profondément relaxant. Parfait pour déconnecter le soir.',
                    image: 'ProductGmo.jpg',
                    video: 'VideoGmo.mp4',
                    tarifs: [{weight: '1.1g (Sur Place)', price: 20}, {weight: '2.5g', price: 50}, {weight: '5g', price: 90}, {weight: '10g', price: 160}]
                }, */
              /*   {
                    id: 'FROZEN_PIRATE',
                    name: '🆕 Sherbanger', // Différencié
                    farm: '🧬 Pirate Del Sur',
                    strains: [],
                    description: '🆕 Sherbanger: Profil moderne crémeux + gaz léger. Terps bien présents.',
                    image: 'ProductSher.jpg',
                    video: 'VideoSher.mp4',
                    tarifs: [{weight: '1.1g (Sur Place)', price: 20}, {weight: '2.5g', price: 50}, {weight: '5g', price: 90}, {weight: '10g', price: 160}]
                }, */
               /*  {
                    id: 'FROZEN_HWORLD',
                    name: 'FROZEN HWORLD ❄️', // Différencié
                    farm: '🧬 HWORLD',
                    strains: ['🍊 Orangina', '⛽️ GMO Kosher'],
                    description: '🍊 Orangina: Profil fruité / agrumes avec une touche sucrée et fraîche. Fumée douce, effet clean.\n⛽️ GMO Kosher: Profil gas / terreux très prononcé avec fond crémeux. Effet puissant, lourd.',
                    image: 'ProductHworld.jpg',
                    video: 'VideoHworld.mov',
                    tarifs: [{weight: '1.1g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '25g', price: 360}]
                }, */
               /*  {
                    id: 'FROZEN_ANONYMOUS',
                    name: 'FROZEN ANONYMOUS ❄️', // Différencié
                    farm: '🧬 FARM ANONYMOUS',
                    strains: ['🍇 Purple Cream', '🍬 Candy Shop', '🍪 ICC x Oreoz', '🖊️ Permanent Marker', '🍒 Lemon Cherry Gelato'],
                    description: '🍇 Purple Cream: Profil crémeux sucré.\n🍬 Candy Shop: Goût très sucré type bonbon.\n🍪 ICC x Oreoz: Mélange gourmand, crémeux + gazeux.\n🖊️ Permanent Marker: Gas / chimique bien prononcé.\n🍒 Lemon Cherry Gelato: Saveur citronnée sucrée.',
                    image: 'ProductAnon.jpg',
                    video: 'VideoAnon.mov',
                    tarifs: [{weight: '2.5g', price: 70}, {weight: '5g', price: 120}, {weight: '10g', price: 230}, {weight: '25g', price: 500}, {weight: '50g', price: 900}, {weight: '100g', price: 1450}]
                }, */
             /*    {
                    id: 'FROZEN_VVS',
                    name: 'FROZEN VVS ❄️', // Différencié
                    farm: '🧬 VVS',
                    strains: ['🥇 24K', '🍊 Tanger', '🧀 Cheese Berry', '🍹 Tropicalito'],
                    description: '🥇 24K: gas sucré + touche orangée, bien lourd.\n🍊 Tanger: agrumes frais, high clean.\n🧀 Cheese Berry: fromage doux + fruits rouges.\n🍹 Tropicalito: cocktail tropical sucré.',
                    image: 'Produit24K.jpg',
                    video: 'Video24K.mov',
                    tarifs: [{weight: '1.1g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 140}]
                } */
            ]},
            { id: 'DRY_120', name: 'DRY 120u 🛖', products: [
                 {
                    id: 'purpule punch',
                    name: '💜 purple punch 👊', 
                    farm: '🧬 Jebli Farm',
                    strains: [],
                    description: '',
                    image: 'Product120pp.jpg',
                    video: 'Video120pp.mp4',
                    tarifs: [
                        {weight: '1.7g (Sur Place)', price: 20}, {weight: '5g', price: 50},
                        {weight: '10g', price: 90}, {weight: '25g', price: 200},
                        {weight: '100g', price: 500},
                    ]
                }
              /*   {
                    id: 'DRY_120_DARKS',
                    name: 'TIRAMISU (120u) ☕️', // Nom de la souche utilisé en titre
                    farm: '🧬 Darks Farm',
                    strains: [], // Plus de sélection
                    description: 'Du 120u propre, pas sec, bien chargé en heads.\nProduit typé dessert strain : gourmand, aromatique, efficace.\nEffet : relaxant profond + mental clean. Idéal fin de journée.',
                    image: 'ProductTira.jpg',
                    video: 'VideoTira.mov',
                    tarifs: [{weight: '1 olive', price: 90}, {weight: '5 olives', price: 450}, {weight: '10 olives', price: 780}]
                }, */
              /*   {
                    id: 'DRY_120_PIRATE',
                    name: 'BUBBA DRY (120u) 🏴‍☠️', // Nom de la souche utilisé en titre
                    farm: '🧬 Pirate Del Sur',
                    strains: [], // Plus de sélection
                    description: 'Bubba Dry c’est un hash old school, lourd et réconfortant 😮‍💨\nArômes terreux / chocolaté / légère note café, fumée douce et bien grasse.',
                    image: 'ProductPirate.jpg',
                    video: 'VideoPirate.mov',
                    tarifs: [{weight: '1.4g (Sur Place)', price: 20}, {weight: '5g', price: 70}, {weight: '10g', price: 120}, {weight: '25g', price: 260}]
                }, */
               /*  {
                    id: 'DRY_120_JEBLI',
                    name: 'DRY 120u JEBLI 🇲🇦', // Différencié
                    farm: '🧬 Jebli Farm',
                    strains: ['🍌 Banana / RS11', '🍪 Biscotti', '🍒 Pink Cherry', '🍊 Orange Cream'],
                    description: '🍌 Banana / RS11: banane sucrée + gaz.\n🍪 Biscotti: crémeux cookie + gas, lourd en bouche.\n🍒 Pink Cherry: cerise sucrée, fumée douce.\n🍊 Orange Cream: agrumes crémeux, très gourmand.',
                    image: 'Product120p.jpg',
                    video: 'Video120p.mov',
                    tarifs: [{weight: '5g', price: 50}, {weight: '10g', price: 90}]
                } */
            ]},
            { id: 'DRY_90', name: 'DRY 90u ⚡️', products: [
                /* {
                    id: 'CaliH',
                    name: 'CaliH 🎓', 
                    farm: '🎩 Darks Farm',
                    strains: ['RS11', 'Papaya', 'Sherbalto'],
                    description: 'RS11 : Profil fruité/candy, léger gaz (effet équilibré) \n  Papaya : Tropical sucré mangue/papaye (relax corporel marqué) \n  Sherbalto : Crémeux dessert + touche gas (calmant, parfait le soir).',
                    image: 'Product90Rs.jpg',
                    video: 'Video90Rs.mov',
                    tarifs: [
                        {weight: '2.2g 📍 (Sur place)', price: 20}, 
                        {weight: '5g', price: 50}, 
                        {weight: '10g', price: 90}, 
                        {weight: '25g', price: 220}, 
                        {weight: '50g', price: 400}, 
                        {weight: '100g', price: 700}
                    ]
                }, */
                {
                    id: 'DRY_90_VVS',
                    name: 'DRY 90u VVS 💎', // Différencié
                    farm: '🧬 VVS',
                    isRestock: true, // 🔒 INTERRUPTEUR DE RUPTURE DE STOCK
                    strains: ['Super cherry', 'Lemon acai', 'Horchetta x sprtzzel', 'Icc 2', 'Lulo runtz', 'Lary reeses', 'Mimosa', 'Papayadawg', 'Zmo x papayadawg'],
                    description: 'Sélection Dry 90u VVS, qualité premium, nombreux strains disponibles (à choisir).',
                    image: 'ProductRestok.png',
                    video: 'Video90.mp4',
                    tarifs: [
                        {weight: '5g', price: 40},
                         {weight: '10g', price: 80},
                          {weight: '50g', price: 340},
                           {weight: '100g', price: 640}]
                },
               /*  {
                    id: 'DRY_90_GAZFRUIT',
                    name: 'MILO CHEESE (90u) 🧀', // Nom de la souche utilisé en titre
                    farm: '🧬 Gaz Fruit',
                    strains: [], // Plus de sélection
                    description: 'Profil fromagé / gaz / fruit mûr, bien marqué dès l’ouverture.\nFumée grasse, goût qui reste en bouche 😮‍💨\n90u bien chargé en heads, texture souple, aromatique et efficace.',
                    image: 'ProductMilo.jpg',
                    video: 'VideoMilo.mov',
                    tarifs: [
                    {weight: '5g', price: 50},
                     {weight: '10g', price: 90}]
                } */
            ]},
          /*   { id: 'DRY_73', name: 'DRY 73u', products: [
                {
                    id: 'DRY_73_JEBLI',
                    name: 'GELATO (73u) 🍦', // Nom de la souche utilisé en titre
                    farm: '🧬 Jebli Farm',
                    strains: [], // Plus de sélection
                    description: '73u souple, bien chargé en heads, fumée grasse, goût crémeux sucré.\nDaily efficace, clean et constant 😮‍💨',
                    image: 'ProductGG.jpg',
                    video: 'VideoGG.mp4',
                    tarifs: [
                        {weight: '10g', price: 60},
                        {weight: '100g', price: 400}
                    ]
                }
            ]}, */
            { id: 'SEMI_DRY', name: 'SEMI DRY', products: [
              /*   {
                    id: 'SEMIDRY_JEBLI',
                    name: 'SEMI-DRY JEBLI 🇲🇦', // Différencié
                    farm: '🧬 Jebli Farm',
                    strains: ['🌸 Pink Crack', '🍏 Fuji OG'],
                    description: '🌸 Pink Crack: Parfaite pour chill, musique, soirée posée.\n🍏 Fuji OG: Gros calmant, corps détendu, tête tranquille.',
                    image: 'ProductPink.jpg',
                    video: 'VideoPink.mov',
                    tarifs: [{weight: '5g', price: 30}, {weight: '10g', price: 60}, {weight: '50g', price: 230}, {weight: '100g', price: 440}]
                } */
            ]},
            { id: 'JAUNE', name: 'JAUNE 🧽', products: [
                {
                    id: 'Grappe Fruit 🍇',
                    name: 'Grappe Fruit 🍇',
                    farm: '👨🏻‍🌾 Jebli farm',
                    strains: [],
                    description: 'La Grappe Fruit est une variété de cannabis hybride Elle est connue pour ses arômes citronnés, terreux et légèrement diesel, ainsi que pour ses effets puissants mêlant euphorie mentale et relaxation du corps. Très populaire dans la culture cannabis, elle a servi de base à de nombreuses autres strains modernes. 🌿💨',
                    image: 'ProductJaune.jpg',
                    video: 'VideoJaune.mp4',
                    tarifs: [{weight: '5g', price: 30}, {weight: '10g', price: 50}, {weight: '25g', price: 110}, {weight: '50g', price: 180}, {weight: '100g', price: 350}]
                }
            ]},
          
        ]
    },
    {
        id: 'WEED', name: '🌿 WEED', type: 'Weed', quality: '🌿 Fleurs', image: 'CategT72Weed.png',
        farms: [
            { id: 'CALI_US', name: 'CALI US 🇺🇸', products: [
                {
                    id: 'ICE CREAM CAKE',
                    name: 'ICE CREAM CAKE 🍦', // Déjà unique, on retire juste les strains
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: '',
                    image: 'ProductICC.jpg',
                    video: 'VideoICC.mp4',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 750}]
                },
                /* {
                    id: 'gelato berries',
                    name: 'Gelato Berries 🫐', // Déjà unique, on retire juste les strains
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: '',
                    image: 'ProductGB.jpg',
                    video: 'VideoGB.mp4',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 750}]
                },
                {
                    id: 'Pinyati',
                    name: 'Pinyati 🍭', // Déjà unique, on retire juste les strains
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: '',
                    image: 'ProductPin.jpg',
                    video: 'VideoPin.mp4',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 750}]
                },
                {
                    id: 'CALI_CEREAL',
                    name: 'CEREAL MILK 🥣🥛', // Déjà unique, on retire juste les strains
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Strain très connue aux US, Cereal Milk a un goût sucré / crémeux avec des notes de lait et de céréales.\nEffet propre, relaxant mais pas trop lourd.\nProduit bien travaillé, texture propre, bonne odeur dès l’ouverture.',
                    image: 'ProductCereal.jpg',
                    video: 'VideoCereal.mp4',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 750}]
                },
               {
                    id: 'skittlez',
                    name: 'Skittlez 🌈', // Déjà unique, on retire juste les strains
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: '',
                    image: 'ProductSkit.jpg',
                    video: 'VideoSkit.mp4',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 750}]
                }, */
                 /*  {
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
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                },
                {
                    id: 'CALI_GELATO33',
                    name: 'GELATO 33 🍨',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Profil crémeux sucré + légèrement terreux, avec des notes vanille, dessert et une touche gazeuse typique des Gelato.\nFumée dense, grasse et très parfumée 😮‍💨\nUne Cali très équilibrée, puissante mais smooth.',
                    image: 'ProductGelato.jpg',
                    video: 'VideoGelato.mov',
                    tarifs: [{weight: '1.2g (Sur Place)', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                }, */
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
               /*  {
                    id: 'CALI_IRON',
                    name: 'IRON MAIDEN PINK 🎸',
                    farm: '🇺🇸 Cali US',
                    strains: [], // Plus de sélection
                    description: 'Profil gas sucré + floral, avec une petite touche candy en fin de bouche.\nFumée épaisse, bien grasse 😮‍💨\nMontée rapide, high clean au départ puis grosse détente corporelle.',
                    image: 'ProductIron.jpg',
                    video: 'VideoIron.mov',
                    tarifs: [{weight: '1.2g', price: 20}, {weight: '3.5g', price: 60}, {weight: '5g', price: 80}, {weight: '10g', price: 150}, {weight: '100g', price: 850}]
                } */
            ]
        },
            { id: 'CALI_ESP', name: 'WEED ESPAGNOL 🇪🇦', products: [
                {
                    id: 'AMNESIA',
                    name: 'AMNESIA 🍹', // Déjà unique, on retire juste les strains
                    farm: '🇪🇦 Weed Espagnol',
                    strains: [], // Plus de sélection
                    description: '',
                    image: 'ProductAmne.jpg',
                    video: 'VideoAmne.mp4',
                    tarifs: [
                        {weight: '2g (Sur Place)', price: 20}, 
                        {weight: '5g', price: 40}, 
                        {weight: '10g', price: 70},
                        {weight: '25g', price: 160}, 
                        {weight: '50g', price: 280}, 
                        {weight: '100g', price: 520}
                    ]
                }
            ]
        }
        ]
    },
    {
        id: 'AUTRE', name: '🧬 AUTRE', type: 'Autre', quality: '🧬 Divers', image: 'CategT73Autre.png',
        farms: [
            { id: 'Puff', name: 'Puff 💨', products: [
                {
                    id: 'puffthc',
                    name: 'Puff THC 💭',
                    farm: '🧬 Vape',
                    strains: [],
                    description: '',
                    image: 'ProductPuf.jpg',
                    video: 'VideoPuf.mov',
                    tarifs: [{weight: '1 puff', price: 60}]
                }
            ]},
            { id: 'Cigarettes', name: 'Cigarettes 🚬', products: [
                {
                    id: 'Cigarettes',
                    name: 'Cigarettes 🚬',
                    farm: '🧬 Malboro',
                    strains: [],
                    description: '',
                    image: 'ProductPuff.jpg',
                    video: '',
                    tarifs: [{weight: '1 unité', price: 10},{weight: '3 unité', price: 20},{weight: '10 unité', price: 45}]
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
                   /*  { id: 'STATIC_US', name: 'STATIC US 🇺🇸', products: [
                        
                    ]},
                    { id: 'FROZEN_US', name: 'FROZEN US 🇺🇸', products: [
                       
                    ]},
                    { id: 'FROZEN', name: 'FROZEN ❄️', products: [
                       
                    ]}, */
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
                   /*  { id: 'DRY_90', name: 'DRY 90u ⚡️', products: [
                       
                    ]},
                    { id: 'DRY_73', name: 'DRY 73u', products: [
                        
                    ]}, */
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
                   /*  { id: 'STATIC', name: 'STATIC ⚡️', products: [
                       
                    ]},
                    { id: 'SINGLE_SOURCE', name: 'SINGLE SOURCE 💎', products: [
                      
                    ]} */
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
                   /*  { id: 'PUFF', name: 'PUFF 💨', products: [
                       
                    ]} */
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
                video: 'VideoMs.mp4',
                tarifs: [
                    {weight: '1g', price: 40},
                    {weight: '5g', price: 140},
                    {weight: '10g', price: 260},
                    {weight: '25g', price: 600},
                    {weight: '50g', price: 1050}
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
        { id: 'KETAMINE', name: '🐴 KETAMINE', type: 'Ketamine', quality: 'Premium', image: 'CategKeta.png', products: [
            {
                id: 'KETA',
                name: 'Keta White',
                farm: 'StrongSelection 🏆',
                strains: [], // Plus de sélection
                description: '',
                image: 'ProductKet1.jpg',
                video: 'VideoKet1.mp4',
                tarifs: [
                    {weight: '1g', price: 30},
                    {weight: '2g', price: 50},
                    {weight: '5g', price: 100},
                    {weight: '10g', price: 180},
                ]
            },
        ] }
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
    let globalDeliveryMode = 'MeetUp'; // Choix par défaut

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
        productListContainer.classList.remove('farm-grid-2');

        if (currentView === 'categories') {
            qualityFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'none';
            
            // --- ROUTAGE INTELLIGENT DE LA GRILLE CATÉGORIES ---
            if (currentFranchise === 'strong72' || currentFranchise === '72') {
                productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colonnes pour Strong
            } else {
                productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // 1 colonne pour le reste
            }
            
            renderCategoryList();
        } else if (currentView === 'farms') {
            qualityFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            
            // --- ROUTAGE INTELLIGENT DE LA GRILLE ---
            if (currentFranchise === '72' && currentCategoryId === 'HASH') {
                productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Passe sur 2 colonnes
                productListContainer.classList.add('farm-grid-2'); // Active le CSS compact
            } else {
                productListContainer.style.gridTemplateColumns = '1fr'; // Reste sur 1 colonne pour les autres
                productListContainer.classList.remove('farm-grid-2');
            }
            
            const category = appData.find(c => c.id === currentCategoryId);
            const backBtn = document.createElement('button');
            backBtn.className = 'back-to-categories-btn';
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

        productListContainer.innerHTML = productsToRender.map(product => {
            // NOUVEAU : Calcul dynamique du prix d'appel selon le mode (Sur Place / Livraison)
            let displayPrice = 'N/A';
            if (product.tarifs && product.tarifs.length > 0) {
                let activeTarifs = product.tarifs;
                
                // Si on est sur le 72 en Livraison, on ignore les tarifs "Sur Place" pour le prix de la vignette
                if (currentFranchise === '72' && globalDeliveryMode === 'Livraison') {
                    activeTarifs = product.tarifs.filter(t => !t.weight.toLowerCase().includes('sur place'));
                }
                
                if (activeTarifs.length > 0) {
                    displayPrice = activeTarifs[0].price.toFixed(2) + '€';
                }
            }

            // --- BOUCLIER RESTOCK : Grise l'image et bloque les clics ---
            const restockStyle = product.isRestock ? '    filter: grayscale(50%); opacity: 0.7; pointer-events: none;' : '';

            return `
            <div class="product-card product-item-card" data-product-id="${product.id}" style="${restockStyle}">
                ${product.image ? `<img src="${product.image}" alt="">` : ''}
                <div class="info">
                    <div class="name">${product.name}</div>
                    ${product.farm ? `<div class="farm-subtitle">${product.farm}</div>` : ''}
                    <div class="price">${displayPrice}</div>
                </div>
            </div>
            `;
        }).join('') || '<p class="no-results">Bientôt disponible.</p>';
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
        
        // Moteur de détection : supporte le nouveau format "videos" (tableau) et l'ancien "video" (texte)
        const videoList = product.videos || (product.video ? [product.video] : []);
        
        // Boucle d'injection des vidéos
        videoList.forEach(vidSrc => {
            mediaHTML += `
                <div class="media-item">
                    <video class="product-video" src="${vidSrc}" muted loop playsinline controls preload="metadata"></video>
                </div>
            `;
        });

        // --- 2. GÉNÉRATION DU SÉLECTEUR DE STRAINS ---
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
            ${videoList.length > 0 ? `<div class="swipe-text" style="text-align:center; color:var(--hint-color); font-size:0.8rem; margin-top:8px;">Swipe ➡️ pour voir les médias</div>` : ''}
            
            <div class="name" style="font-size: 1.6rem; margin-top: 15px; text-align: center; font-family: impact, sans-serif;">${product.name}</div>
            ${product.farm ? `<div style="color: var(--hint-color); margin-bottom: 15px; font-style: italic; text-align: center;">🧪 ${product.farm}</div>` : ''}
            
            ${strainsHTML} <p class="product-description" style="margin-top: 15px;">${product.description || ''}</p>
            
           <div class="tarifs-title">💰 Tarifs :</div>
            <div class="tarifs-grid-container">${product.tarifs ? product.tarifs.filter(tarif => {
                // FILTRE DYNAMIQUE : On masque le détail si mode Livraison
                if (currentFranchise === '72' && globalDeliveryMode === 'Livraison') {
                    // Si le poids contient "sur place", on ne l'affiche pas
                    if (tarif.weight.toLowerCase().includes('sur place')) {
                        return false; 
                    }
                }
                return true; // Affiche les autres
            }).map(tarif => {
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
        if (videoList.length > 0) {
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

       document.getElementById('confirmation-items-list').innerHTML = cart.map((item, i) => {
            const packVisual = item.packDetails ? `<br><span style="font-size: 0.85rem; color: var(--brand-color);">🎁 Inclus : ${item.packDetails}</span>` : '';
            return `
            <div style="margin-bottom:12px; line-height: 1.4; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
                <b>${i + 1}. ${item.name}</b> ${packVisual} <br> 
                <span style="color: var(--hint-color);">Quantité : ${item.quantity}x ${item.weight} | ${item.totalPrice.toFixed(2)}€</span>
            </div>`;
        }).join('');

        document.getElementById('confirmation-summary').innerHTML = `
            <div class="summary-line total"><span>💰 Total final:</span><span>${subTotal.toFixed(2)}€</span></div>
        `;
       
        // --- GÉNÉRATION DYNAMIQUE DES BOUTONS DE COMMANDE (24/7) ---
        const checkoutBtnsContainer = document.getElementById('dynamic-checkout-buttons');
        let checkoutHTML = '';

        const orderMsgEncoded = formatOrderMessage();
        const tgStyle = `background: linear-gradient(45deg, #2a67ee, #16e6d5); color: black; text-shadow: none;`;
        const waStyle = `background: linear-gradient(45deg, #25D366, #128C7E); text-shadow: 0px 1px 2px rgba(0,0,0,0.5);`;

// --- SYSTÈME SPÉCIFIQUE 72 : PANIER INTELLIGENT ---
if (currentFranchise === '72') {

    const isMeetUp = globalDeliveryMode === 'MeetUp';

    if (isMeetUp) {

        // SUR PLACE -> @LeDispensair72
        checkoutHTML += `
            <div style="margin-bottom: 15px;">
                <div style="
                    color: var(--brand-color);
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                    font-weight: bold;
                    text-align: center;
                ">
                    🤝 Mode choisi : Sur Place
                </div>

                <input
                    type="hidden"
                    id="order-mode-select"
                    value="MeetUp"
                >
            </div>

            <button
    class="main-action-btn send-order-btn"
    data-platform="whatsapp"
    data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}"
    data-is-bot="true"
    style="${waStyle}; margin-bottom: 10px;"
>
    COMMANDER EN SUR PLACE 🤝
</button>
        `;

    } else {

        // LIVRAISON -> @LeDispensair72
        checkoutHTML += `
            <div style="margin-bottom: 15px;">

                <div style="
                    color: var(--brand-color);
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                    font-weight: bold;
                    text-align: center;
                ">
                    🚀 Mode choisi : Livraison
                </div>

                <div style="
                    color: var(--text-color);
                    font-size: 0.9rem;
                    margin-bottom: 8px;
                    font-weight: bold;
                    margin-top: 15px;
                ">
                    📍 Sélectionne ta zone de livraison :
                </div>

                <select
                    id="order-mode-select"
                    style="
                        width: 100%;
                        padding: 12px;
                        border-radius: 12px;
                        border: 1px solid var(--brand-color);
                        background: rgba(0,0,0,0.5);
                        color: white;
                        font-size: 1rem;
                        outline: none;
                    "
                >
                    <option value="Zone0">
                        🚀 Zone Le Mans (Min 50€)
                    </option>

                    <option value="Zone1">
                        🚀 Zone 15km (Min 100€ + 10€ frais)
                    </option>

                    <option value="Zone2">
                        🚀 Zone 25km (Min 200€ + 20€ frais)
                    </option>

                    <option value="Zone3">
                        🚀 Zone 35km (Min 250€ + 30€ frais)
                    </option>

                    <option value="Zone4">
                        🚀 Zone 40km (Min 300€ + 40€ frais)
                    </option>

                    <option value="Zone+">
                        🚀 +40km (À voir avec livreur)
                    </option>
                </select>

            </div>

            <div style="
                width: 100%;
                margin-bottom: 15px;
                text-align: left;
            ">

                <div style="
                    color: var(--text-color);
                    font-size: 0.9rem;
                    margin-bottom: 8px;
                    font-weight: bold;
                ">
                    📍 Adresse précise (Obligatoire) :
                </div>

                <textarea
                    id="delivery-address"
                    placeholder="N° Rue, Ville, Code Postal..."
                    style="
                        width: 100%;
                        box-sizing: border-box;
                        padding: 12px;
                        border-radius: 12px;
                        border: 1px solid rgba(255,255,255,0.2);
                        background: rgba(0,0,0,0.3);
                        color: white;
                        min-height: 65px;
                        font-family: inherit;
                        font-size: 1rem;
                    "
                ></textarea>

            </div>

            <button
    class="main-action-btn send-order-btn"
    data-platform="whatsapp"
    data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}"
    data-is-bot="true"
    style="${waStyle}; margin-bottom: 10px;"
>
    COMMANDER EN LIVRAISON 🚀
</button>
        `;
    }
}
        // --- SYSTÈME SPÉCIFIQUE 75 : DOUBLE BOUTON DIRECT (TG & WA) DANS LE PANIER ---
        else if (currentFranchise === '75') {
            checkoutHTML += `
              <div style="margin-bottom: 15px;">
                  <div style="color: var(--text-color); font-size: 0.9rem; margin-bottom: 8px; font-weight: bold;">📦 Mode de retrait :</div>
                  
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                      <div class="mode-btn active" data-val="MeetUp" style="background: var(--brand-color); color: black; padding: 12px; border-radius: 12px; text-align: center; font-weight: bold; cursor: pointer; border: 2px solid var(--brand-color); transition: all 0.2s;">🤝 Sur place</div>
                      <div class="mode-btn" data-val="Livraison" style="background: rgba(0,0,0,0.5); color: white; padding: 12px; border-radius: 12px; text-align: center; font-weight: bold; cursor: pointer; border: 2px solid rgba(255,255,255,0.2); transition: all 0.2s;">🚀 Livraison</div>
                  </div>

                  <div id="zone-selector-container" style="display: none; margin-bottom: 10px;">
                      <select id="order-zone-select" onchange="document.getElementById('order-mode-select').value = this.value" style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--brand-color); background: rgba(0,0,0,0.5); color: white; font-size: 1rem; outline: none;">
                          <option value="Zone0">🚀 Paris & Proche (Min 50€)</option>
                          <option value="Zone1">🚀 Zone 15km (Min 100€ + 10€ frais)</option>
                          <option value="Zone2">🚀 Zone 25km (Min 200€ + 20€ frais)</option>
                          <option value="Zone3">🚀 Zone 35km (Min 300€ + 30€ frais)</option>
                          <option value="Zone4">🚀 Zone 45km (Min 400€ + 40€ frais)</option>
                          <option value="Zone5">🚀 Zone 55km (Min 500€ + 50€ frais)</option>
                          <option value="Zone+">🚀 +55km (À voir avec livreur)</option>
                      </select>
                  </div>
                  
                  <input type="hidden" id="order-mode-select" value="MeetUp">
              </div>
              
              <div style="width: 100%; margin-bottom: 15px; text-align: left;">
                  <div style="color: var(--text-color); font-size: 0.9rem; margin-bottom: 8px; font-weight: bold;">📍 Adresse précise :</div>
                  <textarea id="delivery-address" placeholder="N° Rue, Ville, Code Postal... (Laisse vide si MeetUp)" style="width: 100%; box-sizing: border-box; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.3); color: white; min-height: 65px; font-family: inherit; font-size: 1rem;"></textarea>
              </div>
              <button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegram}?text=${orderMsgEncoded}" data-is-paris="true" style="${tgStyle}; margin-bottom: 10px;">COMMANDER SUR TÉLÉGRAM 💙</button>
              <button class="main-action-btn send-order-btn" data-platform="whatsapp" data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}" data-is-paris="true" style="${waStyle}; margin-bottom: 10px;">COMMANDER SUR WHATSAPP 📞</button>
            `;
        }

        // --- SYSTÈME CLASSIQUE (AUTRES FRANCHISES) ---
        else {
            if (activeConfig.telegramLivraison || activeConfig.phone) {
                checkoutHTML += `
                  <div style="width: 100%; margin-bottom: 15px; text-align: left;">
                      <div style="color: var(--text-color); font-size: 0.9rem; margin-bottom: 8px; font-weight: bold;">📍 Adresse (Obligatoire pour livraison) :</div>
                      <textarea id="delivery-address" placeholder="N° Rue, Ville, Code Postal... (Laisse vide si Sur Place)" style="width: 100%; box-sizing: border-box; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.3); color: white; min-height: 65px; font-family: inherit; font-size: 1rem;"></textarea>
                      <div style="font-size: 0.8rem; color: var(--brand-color); margin-top: 5px; text-align: right; font-weight: bold;">⚠️ Minimum de commande pour la livraison : 50€</div>
                  </div>
                `;
            }

            if (activeConfig.telegramLivraison) checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegramLivraison}?text=${orderMsgEncoded}" data-is-delivery="true" style="${tgStyle}; margin-bottom: 10px;">TLG LIVRAISON 🚀</button>`;
            if (activeConfig.telegramSurPlace) checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegramSurPlace}?text=${orderMsgEncoded}" style="${tgStyle}; margin-bottom: 10px;">TLG SUR PLACE 🤝</button>`;
            if (activeConfig.telegram && !activeConfig.telegramLivraison) checkoutHTML += `<button class="main-action-btn send-order-btn" data-platform="telegram" data-url="${activeConfig.telegram}?text=${orderMsgEncoded}" style="${tgStyle}; margin-bottom: 10px;">TÉLÉGRAM 💙</button>`;

            if (activeConfig.phone) {
                checkoutHTML += `
                    <div id="toggle-whatsapp-btn" style="text-align: center; margin-top: 5px; margin-bottom: 15px; cursor: pointer; padding: 10px;">
                        <span style="color: var(--hint-color); font-size: 0.9rem; text-decoration: underline; font-style: italic;">Uniquement si tu n'as pas Telegram 📞</span>
                    </div>
                    <div id="whatsapp-buttons-container" style="display: none; flex-direction: column; width: 100%;">
                        <button class="main-action-btn send-order-btn" data-platform="whatsapp" data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}" data-is-delivery="true" style="${waStyle}; margin-bottom: 10px;">WHATSAPP LIVRAISON 🚀</button>
                        <button class="main-action-btn send-order-btn" data-platform="whatsapp" data-url="https://wa.me/${activeConfig.phone}?text=${orderMsgEncoded}" style="${waStyle}; margin-bottom: 10px;">WHATSAPP SUR PLACE 🤝</button>
                    </div>
                `;
            }
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

  // --- MOTEUR DE CALCUL DES TICKETS (LOTERIE) ---
 /*  function calculateTickets(total) {
    if (total >= 500) return 15;
    if (total >= 300) return 6;
    if (total >= 200) return 4;
    if (total >= 100) return 2;
    if (total >= 50) return 1;
    return 0;
} */

function formatOrderMessage() {
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let msg = `*🛒 COMMANDE ${activeConfig.name}*\n\n`;
    cart.forEach((i, idx) => {
        const strainText = i.strainName ? ` [${i.strainName}]` : '';
        const packContent = i.packDetails ? `\n• 🎁 Inclus : ${i.packDetails}` : ''; // Affiche les détails du pack
        
        msg += `*${idx + 1}. ${i.rawName || i.name}${strainText}*${packContent}\n• Quantité: ${i.quantity}x ${i.weight}\n• Prix: ${i.totalPrice.toFixed(2)}€\n\n`;
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

        // Validation du portail d'entrée (Le choix de la méthode)
        if (target.closest('.gateway-btn')) {
            globalDeliveryMode = target.closest('.gateway-btn').dataset.mode;
            document.getElementById('mode-gateway-modal').style.display = 'none';
            showPage('page-home');
        }

        // Sélection d'un Strain
        if (target.closest('.strain-btn')) {
            const btn = target.closest('.strain-btn');
            // Retire la classe active des autres boutons
            document.querySelectorAll('.strain-btn').forEach(b => b.classList.remove('active'));
            // Ajoute la classe active au bouton cliqué
            btn.classList.add('active');
        }

     // --- GESTION DU TOGGLE BOUTONS MEETUP / LIVRAISON (POUR LE 75) ---
        if (target.closest('.mode-btn')) {
            const btn = target.closest('.mode-btn');
            
            // 1. Reset visuel de tous les boutons
            document.querySelectorAll('.mode-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = 'rgba(0,0,0,0.5)';
                b.style.color = 'white';
                b.style.border = '2px solid rgba(255,255,255,0.2)';
            });
            
            // 2. Activation du bouton cliqué
            btn.classList.add('active');
            btn.style.background = 'var(--brand-color)';
            btn.style.color = 'black';
            btn.style.border = '2px solid var(--brand-color)';

            // 3. Logique d'affichage (Révélation des zones)
            const mode = btn.dataset.val;
            const zoneContainer = document.getElementById('zone-selector-container');
            const zoneSelect = document.getElementById('order-zone-select');
            const hiddenInput = document.getElementById('order-mode-select');

            if (mode === 'MeetUp') {
                if (zoneContainer) zoneContainer.style.display = 'none';
                if (hiddenInput) hiddenInput.value = 'MeetUp';
            } else {
                if (zoneContainer) zoneContainer.style.display = 'block';
                if (hiddenInput && zoneSelect) hiddenInput.value = zoneSelect.value;
            }
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

        // NOUVEAU : On déclare le produit ici pour qu'il soit accessible à tout le bloc !
        const product = getProductById(pId);

        // --- 🚀 INTERCEPTEUR VIP / GROS VOLUME (PRIX À 0) ---
        if (price === 0) {
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
        const productBaseName = product.name;
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
                name: displayName, 
                weight: weight, 
                quantity: 1, 
                unitPrice: price, 
                totalPrice: price,
                rawName: productBaseName, 
                strainName: selectedStrain,
                packDetails: product.packDetails || '' // <-- La variable fonctionne maintenant parfaitement ici
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
    const isDelivery = btn.dataset.isDelivery === "true"; 
    const isBot = btn.dataset.isBot === "true"; // NOUVEAU DÉTECTEUR POUR LE 72
    const isParis = btn.dataset.isParis === "true"; // DÉTECTEUR POUR LE 75

    const totalOrderPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const addressInput = document.getElementById('delivery-address');
    const adresseLivraison = addressInput ? addressInput.value : "";
    
    const modeSelect = document.getElementById('order-mode-select');
    const selectedMode = modeSelect ? modeSelect.value : null;

   // --- RÈGLE 72 : LOGISTIQUE ZONÉE ---
   if (isBot && selectedMode) {
    const zones = {
        'Zone0': { min: 50, frais: 0, label: 'Zone Le Mans' },
        'Zone1': { min: 100, frais: 10, label: 'Zone 15km' },
        'Zone2': { min: 200, frais: 20, label: 'Zone 25km' },
        'Zone3': { min: 250, frais: 30, label: 'Zone 35km' },
        'Zone4': { min: 300, frais: 40, label: 'Zone 40km' },
        'Zone+': { min: 0, frais: 'À voir', label: '+40km' }
    };

    if (selectedMode !== 'MeetUp') {
        const zoneInfo = zones[selectedMode];
        
        // Vérification du Minimum
        if (totalOrderPrice < zoneInfo.min) {
            showNotification(`⚠️ Minimum ${zoneInfo.min}€ pour la ${zoneInfo.label}.`);
            return;
        }

        // Vérification de l'Adresse
        if (!adresseLivraison || adresseLivraison.trim() === "") {
            showNotification("⚠️ Précise ton adresse pour la livraison.");
            return;
        }

        const totalFinal = typeof zoneInfo.frais === 'number' ? (totalOrderPrice + zoneInfo.frais).toFixed(2) : totalOrderPrice.toFixed(2);
        url += encodeURIComponent(`\n\n📦 Mode : 🚀 LIVRAISON (${zoneInfo.label})\n📍 Adresse : ${adresseLivraison}\n💸 Frais : ${zoneInfo.frais}€\n💰 TOTAL FINAL : ${totalFinal}€`);
    } else {
        url += encodeURIComponent(`\n\n📦 Mode : 🤝 MEETUP (Sur Place)\n📍 Info : ${adresseLivraison || 'Aucune'}`);
    }
}

// --- RÈGLE 75 : SÉLECTEUR ZONÉ + TG/WA ---
else if (isParis && selectedMode) {
    const zones75 = {
        'Zone0': { min: 50, frais: 0, label: 'Paris & Proche' },
        'Zone1': { min: 100, frais: 10, label: 'Zone 15km' },
        'Zone2': { min: 200, frais: 20, label: 'Zone 25km' },
        'Zone3': { min: 300, frais: 30, label: 'Zone 35km' },
        'Zone4': { min: 400, frais: 40, label: 'Zone 45km' },
        'Zone5': { min: 500, frais: 50, label: 'Zone 55km' },
        'Zone+': { min: 0, frais: 'À voir', label: '+55km' }
    };

    if (selectedMode !== 'MeetUp') {
        const zoneInfo = zones75[selectedMode];
        
        // Bouclier Anti-Pertes (Vérification du minimum syndical)
        if (totalOrderPrice < zoneInfo.min) {
            showNotification(`⚠️ Minimum ${zoneInfo.min}€ pour la ${zoneInfo.label} (Ton panier : ${totalOrderPrice.toFixed(2)}€).`);
            return; 
        }
        
        // Bouclier Logistique (Adresse obligatoire)
        if (!adresseLivraison || adresseLivraison.trim() === "") {
            const addrInput = document.getElementById('delivery-address');
            if (addrInput) {
                addrInput.style.border = "2px solid var(--red-color)";
                setTimeout(() => addrInput.style.border = "1px solid rgba(255,255,255,0.2)", 2000);
            }
            showNotification("⚠️ L'adresse est obligatoire pour la livraison.");
            return;
        }
        
        // Calcul et injection des frais dans le message final
        const totalFinal = typeof zoneInfo.frais === 'number' ? (totalOrderPrice + zoneInfo.frais).toFixed(2) : totalOrderPrice.toFixed(2);
        url += encodeURIComponent(`\n\n📦 Mode : 🚀 LIVRAISON (${zoneInfo.label})\n📍 Adresse : ${adresseLivraison}\n💸 Frais : ${zoneInfo.frais}€\n💰 TOTAL FINAL : ${totalFinal}€`);
    } 
    else if (selectedMode === 'MeetUp') {
        let infoSupp = adresseLivraison.trim() !== "" ? `\n📍 Info supp : ${adresseLivraison}` : "";
        url += encodeURIComponent(`\n\n📦 Mode : 🤝 MEETUP (Sur Place)${infoSupp}`);
    }
}
    // --- RÈGLES CLASSIQUES POUR LES AUTRES FRANCHISES ---
    else {
        if (isDelivery) {
            if (totalOrderPrice < 50) {
                showNotification(`⚠️ Minimum 50€ pour la livraison (Ton panier : ${totalOrderPrice.toFixed(2)}€).`);
                return;
            }
            if (!adresseLivraison || adresseLivraison.trim() === "") {
                if (addressInput) {
                    addressInput.style.border = "2px solid var(--red-color)";
                    setTimeout(() => addressInput.style.border = "1px solid rgba(255,255,255,0.2)", 2000);
                }
                showNotification("⚠️ L'adresse est obligatoire pour la livraison.");
                return;
            }
            url += encodeURIComponent(`\n\n📍 Adresse de livraison : ${adresseLivraison}`);
        } 
        else if (adresseLivraison.trim() !== "") {
            url += encodeURIComponent(`\n\n📍 Info supp. (Adresse) : ${adresseLivraison}`);
        }
    }

    if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');

    // Sécurité presse-papier
    try {
        const urlObj = new URL(url);
        const rawMessage = urlObj.searchParams.get('text');
        if (rawMessage) navigator.clipboard.writeText(rawMessage).catch(e => {}); 
    } catch(e) {}

   // Ouverture instantanée (Optimisation Anti-Blocage Mobile)
    if (platform === 'telegram') {
        if (tg) {
            tg.openTelegramLink(url);
        } else {
            window.location.href = url; // Force l'ouverture native au lieu du pop-up
        }
    } else {
        if (tg) {
            tg.openLink(url);
        } else {
            window.location.href = url; // Force l'ouverture native au lieu du pop-up
        }
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
    
    // --- INTERCEPTEUR 72 (PORTAIL D'ENTRÉE) ---
    if (currentFranchise === '72') {
        const loader = document.getElementById("page-loader");
        if (loader) loader.style.display = "none";
        document.getElementById('mode-gateway-modal').style.display = 'flex';
    } else {
        showPage('page-home');
    }
}, 1500);
});
// --- AFFICHAGE DU POP-UP LOTERIE (1 FOIS PAR SESSION, UNIQUEMENT 72) ---
/*  if (currentFranchise === '72' && !sessionStorage.getItem('lotterySeen')) {
    const modal = document.getElementById('lottery-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Fermeture au clic
        document.getElementById('close-lottery').onclick = () => { modal.style.display = 'none'; sessionStorage.setItem('lotterySeen', 'true'); };
        document.getElementById('btn-understand-lottery').onclick = () => { modal.style.display = 'none'; sessionStorage.setItem('lotterySeen', 'true'); };
    }
} */