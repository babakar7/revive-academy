export const SITE_CONFIG = {
  name: "Revive Academy",
  tagline: "Devenez Coach de Pilates Certifié",
  location: "Almadies, Dakar, Sénégal",
  email: "contact@revive-academy.com",
  phone: "+221 78 464 43 29",
};

export const NAV_LINKS = [
  { label: "Formations", href: "#formations" },
  { label: "Équipe", href: "#equipe" },
  { label: "Avantages", href: "#avantages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  eyebrow: "Formation de Pilates Certifiante au Sénégal",
  title: "Devenez Coach de Pilates Certifié",
  description:
    "Rejoignez un cursus d'excellence alliant rigueur scientifique, expertise internationale et cadre exceptionnel. Notre programme complet vous prépare à maîtriser la méthode Pilates et à lancer une carrière épanouissante dans le coaching.",
  primaryCta: "Découvrir nos formations",
  secondaryCta: "Postuler",
  badges: [
    "Formatrice certifiée Balanced Body",
    "15+ ans d'expérience",
    "Encadrement médical",
    "Studio premium",
  ],
};

export const PROGRAMS = [
  {
    id: "mat1",
    name: "Pilates MAT 1",
    subtitle: "Fondamentaux de la méthode pilates",
    duration: "97 heures",
    sessionDates: "Lundi 30 Mars au Samedi 4 Avril",
    price: "820 000",
    currency: "FCFA",
    description:
      "  Le Mat n'est pas une option, c'est l'ADN de la méthode : aucune maîtrise des machines n'est complète sans cette fondation originelle. Comprenez la biomécanique du corps et les principes originels de Joseph Pilates. Maîtrisez le répertoire Basic et Intermédiaire des exercices au tapis.",
    content: [
      "40h de séminaires théoriques et pratiques",
      "20h de cours individuels",
      "20h de cours collectifs",
      "10h d'observation en situation réelle",
      "2h de coaching privé personnalisé",
      "Manuel de formation complet + plateforme e-learning",
    ],
    prerequisite: "Entretien motivationnel pour évaluer votre projet et vos bases.",
    highlighted: false,
  },
  {
    id: "reformer1",
    name: "Pilates REFORMER 1",
    subtitle: "Formation Machine",
    duration: "82 heures",
    sessionDates: "Mercredi 8 Avril au Samedi 12 Avril",
    price: "1 250 000",
    currency: "FCFA",
    description:
      "Apprenez à enseigner sur la machine emblématique du Pilates. Le Reformer offre une résistance et une précision inégalées pour accompagner tous types de clients.",
    content: [
      "30h de séminaires spécialisés Reformer",
      "20h de cours individuels sur machine",
      "20h de cours collectifs",
      "10h d'observation",
      "2h de coaching privé",
      "Manuel de formation + plateforme e-learning",
    ],
    prerequisite: "Certification Mat 1 + 5h de séances sur Reformer.",
    highlighted: false,
  },
  {
    id: "pack",
    name: "PACK CARRIÈRE",
    subtitle: "Mat 1 + Reformer 1",
    duration: "177 heures",
    sessionDates: "Lundi 30 Mars au Samedi 12 Avril",
    price: "1 860 000",
    currency: "FCFA",
    originalPrice: "2 070 000",
    discount: "-10%",
    description:
      "Le parcours complet pour devenir un instructeur Pilates polyvalent. Combinez les deux formations pour ouvrir tout le champ des possiblités en tant qu'instructeur.",
    content: [
      "Formation MAT 1 complète (97h)",
      "Formation REFORMER 1 complète (82h)",
      "Économie de 210 000 FCFA sur le tarif global",
      "Accompagnement prioritaire",
      "Accès à tous les manuels et ressources",
    ],
    prerequisite: "Entretien motivationnel.",
    highlighted: true,
  },
];

export const TEAM = [
  {
    name: "Christine",
    role: "Lead Formatrice Pilates",
    bio: "Spécialiste reconnue de la méthode, Christine cumule plus de 15 ans d'expérience et a déjà formé de nombreux instructeurs. Elle assure la transmission du savoir technique et pédagogique, vous guidant dans l'acquisition de la gestuelle précise et dans l'art de coacher vos futurs clients.",
    credentials: [
      "Brevet d'État Éducateur Sportif (2008)",
      "Certifiée Balanced Body - Paris (2008-2009)",
      "Certifiée Pilates Harmonie - Marseille (2009-2010)",
      "Certifiée Yamuna Body Rolling - Milan (2012)",
      "15+ années d'expérience en enseignement du Pilates",
      "Formatrice d'instructeurs confirmée",
    ],
  },
  {
    name: "Soukeyna",
    role: "Médecin, Spécialiste Anatomie et Physiologie",
    bio: "La sécurité et la connaissance du corps sont au cœur de notre enseignement. Soukeyna encadre les modules d'anatomie appliquée au mouvement, vous permettant de comprendre les chaînes musculaires et les articulations sollicitées pour une pratique sans risque et un accompagnement client optimal.",
    credentials: [
      "Médecin",
      "Spécialiste en anatomie et physiologie",
      "Expert en biomécanique du mouvement",
    ],
  },
];

export const WHY_CHOOSE = [
  {
    title: "Expertise Internationale",
    description:
      "Notre formatrice est certifiée Balanced Body, référence mondiale du Pilates. Cette expertise vous garantit une formation aux standards internationaux.",
    icon: "Globe",
  },
  {
    title: "Encadrement Médical Unique",
    description:
      "Formation avec un médecin dans l'équipe pédagogique pour une approche sécurisée et scientifique du mouvement.",
    icon: "Heart",
  },
  {
    title: "Qualité Garantie",
    description:
      "Sessions limitées à 10 participants maximum pour assurer un suivi personnalisé, des corrections individuelles et une progression optimale.",
    icon: "Users",
  },
  {
    title: "Environnement Premium",
    description:
      "Apprenez au Studio Revive aux Almadies : équipement professionnel haut de gamme, espace convivial avec restaurant, bar et piscine.",
    icon: "Building",
  },
  {
    title: "Accès Illimité",
    description:
      "Entraînez-vous en illimité au studio pendant 4 mois pour perfectionner votre pratique jusqu'à l'examen final.",
    icon: "Key",
  },
  {
    title: "Plateforme E-Learning",
    description:
      "Accédez à votre espace en ligne avec vidéos, fiches exercices et ressources pédagogiques pour réviser à votre rythme.",
    icon: "Monitor",
  },
  {
    title: "Débouchés Concrets",
    description:
      "Possibilité d'embauche chez Revive pour certains profils + mise en relation avec notre réseau d'autres studios.",
    icon: "Briefcase",
  },
  {
    title: "Évolution Continue",
    description:
      "Des formations avancées (Mat 2, Reformer 2) sont prévues pour poursuivre votre développement professionnel.",
    icon: "TrendingUp",
  },
];

export const PRACTICAL_INFO = {
  nextSession: "Lundi 30 Mars et Mercredi 8 Avril",
  location: "Studio Revive, Almadies, Dakar",
  frequency: "2 à 3 formations par an",
  maxParticipants: "10 participants maximum par formation",
  certification: "Diplôme Revive Academy",
  enrollmentSteps: [
    {
      step: 1,
      title: "Candidature",
      description: "Contactez-nous pour planifier votre entretien motivationnel",
    },
    {
      step: 2,
      title: "Entretien",
      description: "Échangeons sur votre projet professionnel et vos motivations",
    },
    {
      step: 3,
      title: "Validation",
      description: "Confirmation de votre admissibilité",
    },
    {
      step: 4,
      title: "Inscription",
      description: "Règlement intégral pour confirmer votre place",
    },
  ],
  closingNote: "Clôture : 3 jours avant le début de la formation",
};

export const FAQ_ITEMS = [
  {
    question: "Quels sont les prérequis pour rejoindre la formation ?",
    answer:
      "Pour la formation MAT 1, un entretien motivationnel est nécessaire pour évaluer votre projet et vos bases. Pour la formation REFORMER 1, vous devez avoir obtenu la certification Mat 1 et avoir effectué 5h de séances sur Reformer.",
  },
  {
    question: "Comment se déroule la formation ?",
    answer:
      "La formation s'organise en deux phases : une période intensive de 2 semaines pour les séminaires et cours encadrés, suivie d'une période de pratique libre au studio ou à distance jusqu'à l'examen final. Cette flexibilité vous permet de progresser à votre rythme.",
  },
  {
    question: "Comment se déroulent les examens ?",
    answer:
      "L'examen de certification peut se dérouler en présentiel ou en ligne et comprend trois épreuves : un QCM théorique sur l'anatomie, une mise en pratique individuelle au choix du jury, et 20 à 30 minutes d'enseignement pédagogique.",
  },
  {
    question: "Le diplôme est-il reconnu ?",
    answer:
      "Vous obtenez le Diplôme Revive Academy, délivré par une formatrice certifiée Balanced Body, référence mondiale du Pilates. Cette certification vous permet d'exercer en tant qu'instructeur Pilates.",
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer:
      "Le règlement est requis pour confirmer votre place. Contactez nous pour une possibilité d'echelonner le paiement",
  },
  {
    question: "Puis-je me loger sur place ?",
    answer:
      "Le Studio Revive est situé aux Almadies, Dakar. Nous pouvons vous conseiller sur les options d'hébergement à proximité. L'environnement inclut un espace convivial avec restaurant, bar et piscine.",
  },
  {
    question: "Quels sont les débouchés après la formation ?",
    answer:
      "Certains profils ont la possibilité d'être embauchés chez Revive. Nous proposons également une mise en relation avec d'autres studios. Des formations avancées (Mat 2, Reformer 2) sont prévues pour continuer votre évolution.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Prénom N.",
    role: "Lorem ipsum dolor",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Prénom N.",
    role: "Lorem ipsum dolor",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Prénom N.",
    role: "Lorem ipsum dolor",
  },
];

export const FOOTER_LINKS = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
];
