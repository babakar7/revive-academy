export const SITE_CONFIG = {
  name: "Revive Academie",
  tagline: "Devenez Coach de Pilates Certifié",
  location: "Almadies, Dakar, Senegal",
  email: "contact@revive-academie.com",
  phone: "+221 XX XXX XX XX",
};

export const NAV_LINKS = [
  { label: "Formations", href: "#formations" },
  { label: "Equipe", href: "#equipe" },
  { label: "Avantages", href: "#avantages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  eyebrow: "Formation Pilates Certifiante au Senegal",
  title: "Devenez Coach de Pilates Certifié",
  description:
    "L'academie de formation Pilates de haut niveau au Senegal. Rejoignez un cursus d'excellence alliant rigueur scientifique, expertise internationale et cadre exceptionnel. Notre programme complet vous prepare a maitriser la methode Pilates et a lancer une carriere epanouissante dans le coaching.",
  primaryCta: "Decouvrir nos formations",
  secondaryCta: "Postuler",
  badges: [
    "Certification Balanced Body",
    "20+ ans d'experience",
    "Encadrement medical",
    "Studio premium",
  ],
};

export const PROGRAMS = [
  {
    id: "mat1",
    name: "Pilates MAT 1",
    subtitle: "Fondamentaux au Tapis",
    duration: "97 heures",
    price: "1 250",
    currency: "EUR",
    description:
      "La porte d'entree indispensable pour comprendre la biomecanique du corps et les principes originels de Joseph Pilates. Maitrisez le repertoire Basic et Intermediaire des exercices au tapis.",
    content: [
      "45h de seminaires theoriques et pratiques",
      "20h de cours individuels",
      "20h de cours collectifs",
      "10h d'observation en situation reelle",
      "2h de coaching prive personnalise",
      "Manuel de formation complet + plateforme e-learning",
    ],
    prerequisite: "Entretien motivationnel pour evaluer votre projet et vos bases.",
    highlighted: false,
  },
  {
    id: "reformer1",
    name: "Pilates REFORMER 1",
    subtitle: "Formation Machine",
    duration: "80 heures",
    price: "1 900",
    currency: "EUR",
    description:
      "Apprenez a enseigner sur la machine emblematique du Pilates. Le Reformer offre une resistance et une precision inegalees pour accompagner tous types de clients.",
    content: [
      "30h de seminaires specialises Reformer",
      "20h de cours individuels sur machine",
      "20h de cours collectifs",
      "10h d'observation",
      "2h de coaching prive",
      "Manuel de formation + plateforme e-learning",
    ],
    prerequisite: "Certification Mat 1 + 5h de pratique personnelle sur Reformer.",
    highlighted: false,
  },
  {
    id: "pack",
    name: "PACK CARRIERE",
    subtitle: "Mat + Reformer",
    duration: "177 heures",
    price: "2 835",
    currency: "EUR",
    originalPrice: "3 150",
    discount: "-10%",
    description:
      "Le parcours complet pour devenir un instructeur Pilates polyvalent. Combinez les deux formations pour une maitrise totale de la methode.",
    content: [
      "Formation MAT 1 complete (97h)",
      "Formation REFORMER 1 complete (80h)",
      "Economie de 315 EUR sur le tarif global",
      "Accompagnement prioritaire",
      "Acces a tous les manuels et ressources",
    ],
    prerequisite: "Entretien motivationnel.",
    highlighted: true,
  },
];

export const TEAM = [
  {
    name: "Christine",
    role: "Lead Formatrice Pilates",
    bio: "Specialiste reconnue de la methode, Christine cumule plus de 20 ans d'experience et a deja forme de nombreux instructeurs. Elle assure la transmission du savoir technique et pedagogique, vous guidant dans l'acquisition de la gestuelle precise et dans l'art de coacher vos futurs clients.",
    credentials: [
      "Brevet d'Etat Educateur Sportif (2008)",
      "Certifiée Balanced Body - Paris (2008-2009)",
      "Certifiée Pilates Harmonie - Marseille (2009-2010)",
      "Certifiée Yamuna Body Rolling - Milan (2012)",
      "15+ annees d'experience en enseignement du Pilates",
      "Formatrice d'instructeurs confirmee",
    ],
  },
  {
    name: "Dr. Soukeyna",
    role: "Medecin, Specialiste Anatomie et Physiologie",
    bio: "La securite et la connaissance du corps sont au coeur de notre enseignement. Le Dr. Soukeyna encadre les modules d'anatomie appliquee au mouvement, vous permettant de comprendre les chaines musculaires et les articulations sollicitees pour une pratique sans risque et un accompagnement client optimal.",
    credentials: [
      "Docteur en medecine",
      "Specialiste en anatomie et physiologie",
      "Expert en biomecanique du mouvement",
    ],
  },
];

export const WHY_CHOOSE = [
  {
    title: "Expertise Internationale",
    description:
      "Notre formatrice est certifiée Balanced Body, reference mondiale du Pilates. Cette expertise vous garantit une formation aux standards internationaux.",
    icon: "Globe",
  },
  {
    title: "Encadrement Medical Unique",
    description:
      "Formation avec un medecin dans l'equipe pedagogique pour une approche securisee et scientifique du mouvement.",
    icon: "Heart",
  },
  {
    title: "Qualite Garantie",
    description:
      "Sessions limitees a 10 participants maximum pour assurer un suivi personnalise, des corrections individuelles et une progression optimale.",
    icon: "Users",
  },
  {
    title: "Environnement Premium",
    description:
      "Apprenez au Studio Revive aux Almadies : equipement professionnel haut de gamme, espace convivial avec restaurant, bar et piscine.",
    icon: "Building",
  },
  {
    title: "Acces Illimite",
    description:
      "Entrainez-vous en illimite au studio pendant 4 mois pour perfectionner votre pratique jusqu'a l'examen final.",
    icon: "Key",
  },
  {
    title: "Plateforme E-Learning",
    description:
      "Accedez a votre espace en ligne avec videos, fiches exercices et ressources pedagogiques pour reviser a votre rythme.",
    icon: "Monitor",
  },
  {
    title: "Debouches Concrets",
    description:
      "Possibilite d'embauche chez Revive pour les meilleurs profils + mise en relation avec notre reseau de studios partenaires.",
    icon: "Briefcase",
  },
  {
    title: "Evolution Continue",
    description:
      "Des formations avancees (Mat 2, Reformer 2) sont prevues pour poursuivre votre developpement professionnel.",
    icon: "TrendingUp",
  },
];

export const PRACTICAL_INFO = {
  nextSession: "Fin mars / avril 2026",
  location: "Studio Revive, Almadies, Dakar",
  frequency: "2 a 3 formations par an",
  maxParticipants: "10 participants maximum par formation",
  certification: "Diplome Revive Academie",
  enrollmentSteps: [
    {
      step: 1,
      title: "Candidature",
      description: "Contactez-nous pour planifier votre entretien motivationnel",
    },
    {
      step: 2,
      title: "Entretien",
      description: "Echangeons sur votre projet professionnel et vos motivations",
    },
    {
      step: 3,
      title: "Validation",
      description: "Confirmation de votre admissibilite",
    },
    {
      step: 4,
      title: "Inscription",
      description: "Reglement integral pour confirmer votre place",
    },
  ],
  closingNote: "Cloture : 3 jours avant le debut de la formation",
};

export const FAQ_ITEMS = [
  {
    question: "Quels sont les prerequis pour rejoindre la formation ?",
    answer:
      "Pour la formation MAT 1, un entretien motivationnel est necessaire pour evaluer votre projet et vos bases. Pour la formation REFORMER 1, vous devez avoir obtenu la certification Mat 1 et avoir effectue 5h de pratique personnelle sur Reformer.",
  },
  {
    question: "Comment se deroule la formation ?",
    answer:
      "La formation s'organise en deux phases : une periode intensive de 3 semaines pour les seminaires et cours encadres, suivie d'une periode de pratique libre au studio ou a distance jusqu'a l'examen final. Cette flexibilite vous permet de progresser a votre rythme.",
  },
  {
    question: "Le diplome est-il reconnu ?",
    answer:
      "Vous obtenez le Diplome Revive Academie, delivre par une formatrice certifiée Balanced Body, reference mondiale du Pilates. Cette certification vous permet d'exercer en tant qu'instructeur Pilates.",
  },
  {
    question: "Quelles sont les modalites de paiement ?",
    answer:
      "Le reglement integral est requis pour confirmer votre place. Contactez-nous pour discuter des possibilites de paiement echelonne selon votre situation.",
  },
  {
    question: "Puis-je me loger sur place ?",
    answer:
      "Le Studio Revive est situe aux Almadies, Dakar. Nous pouvons vous conseiller sur les options d'hebergement a proximite. L'environnement inclut un espace convivial avec restaurant, bar et piscine.",
  },
  {
    question: "Quels sont les debouches apres la formation ?",
    answer:
      "Les meilleurs profils ont la possibilite d'etre embauches chez Revive. Nous proposons egalement une mise en relation avec notre reseau de studios partenaires. Des formations avancees (Mat 2, Reformer 2) sont prevues pour continuer votre evolution.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Prenom N.",
    role: "Lorem ipsum dolor",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Prenom N.",
    role: "Lorem ipsum dolor",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Prenom N.",
    role: "Lorem ipsum dolor",
  },
];

export const FOOTER_LINKS = [
  { label: "Mentions legales", href: "#" },
  { label: "Politique de confidentialite", href: "#" },
];
