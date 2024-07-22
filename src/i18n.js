import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // App.js
      "culinaryCreations": "Culinary Creations",
      "explore": "Explore",
      "register": "Register",
      "askChef": "Ask a Chef",
      "nutrition": "Nutrition",
      "liveDemo": "Live Demo",
      "language": "Language",
      "footerSubtitle": "Elevate your cooking skills with us",
      "contactUs": "Contact Us",
      "businessHours": "Monday - Friday, 7am - 7pm",

      // Home.js
      "welcome": "Welcome to Culinary Creations",
      "discover": "Discover a world of flavors, learn from top chefs, and elevate your cooking skills with our interactive classes and recipes.",
      "exploreRecipes": "Explore Recipes",
      "exploreDescription": "Discover new dishes and cooking techniques from around the world.",
      "registerClasses": "Register for Classes",
      "registerDescription": "Join live cooking classes with expert chefs and improve your skills.",
      "userReviews": "User Reviews",
      "reviewQuote": "Culinary Creations has transformed my cooking skills! The classes are informative and fun, and the recipes are amazing.",
      "reviewAuthor": "Sarah L.",

      // Explore.js
      "exploreRecipesAndChefs": "Explore Recipes and Chefs",
      "filters": "Filters",
      "cuisine": "Cuisine",
      "dietaryRestrictions": "Dietary Restrictions",
      "cookingTime": "Cooking Time",
      "recipesByCuisine": "Recipes by Cuisine",
      "chef": "Chef",
      "none": "None",
      "featuredChefs": "Featured Chefs",
      "specialty": "Specialty",
      "Italian": "Italian",
      "Thai": "Thai",
      "Japanese": "Japanese",
      "Mexican": "Mexican",
      "Indian": "Indian",
      "American": "American",
      "Vegetarian": "Vegetarian",
      "Vegan": "Vegan",
      "GlutenFree": "Gluten-Free",
      "DairyFree": "Dairy-Free",
      "NutFree": "Nut-Free",
      "Under30": "Under 30 minutes",
      "30to60": "30-60 minutes",
      "Over60": "Over 60 minutes",
      "ItalianCuisine": "Italian Cuisine",
      "ThaiCuisine": "Thai Cuisine",
      "JapaneseCuisine": "Japanese Cuisine",
      "SpaghettiCarbonara": "Spaghetti Carbonara",
      "PadThai": "Pad Thai",
      "SushiRolls": "Sushi Rolls",
      "Tacos": "Tacos",
      "PaneerButterMasala": "Paneer Butter Masala",
      "VeganBurger": "Vegan Burger",

      // AskChef.js
      "selectChef": "Select a Chef",
      "chatWith": "Chat with {{name}}",
      "typeMessage": "Type your message here...",
      "selectChefToChat": "Select a chef to start chatting",
      "chefResponse": "Thank you for your question about {{specialty}}. I'd be happy to help!",

      // LiveCookingDemo.js
      "liveCookingDemonstrations": "Live Cooking Demonstrations",
      "upcomingDemonstrations": "Upcoming Demonstrations",
      "participantsCount": "{{count}} participants",
      "liveDemoDescription": "Join us for an interactive live cooking demonstration where you'll learn professional techniques and get real-time feedback from our expert chef.",
      "registerForDemo": "Register for this Demo",
      "selectDemoToViewDetails": "Select a demonstration to view details",
      "FrenchPastryTechniques": "French Pastry Techniques",
      "SushiRollingMasterclass": "Sushi Rolling Masterclass",
      "ItalianPastaFromScratch": "Italian Pasta from Scratch",

      // NutritionalAnalysis.js
      "nutritionalAnalysis": "Nutritional Analysis",
      "enterIngredients": "Enter ingredients (comma-separated):",
      "analyzeNutrition": "Analyze Nutrition",
      "nutritionalInformation": "Nutritional Information",
      "suggestionsForImprovement": "Suggestions for Improvement",
      "addMoreFiber": "Consider adding more fiber-rich ingredients to increase your fiber intake.",
      "reduceSaturatedFats": "Try to reduce the amount of saturated fats by using healthier oil alternatives.",
      "includeMoreProtein": "Include more lean protein sources to balance your macronutrients.",
      "calories": "Calories",
      "protein": "Protein",
      "carbs": "Carbs",
      "fat": "Fat",
      "fiber": "Fiber",

      // Register.js
      "registerForCookingClass": "Register for a Cooking Class",
      "name": "Name",
      "emailAddress": "Email address",
      "selectClass": "Select Class",
      "chooseClass": "Choose a class",
      "selectDate": "Select Date",
      "enterPaymentInfo": "Enter payment info",
      "registerNow": "Register Now",
      "bookingConfirmed": "Booking Confirmed!",
      "confirmationEmailSent": "A confirmation email has been sent to:",
      "contactForInquiries": "Please contact us at",
      "ItalianPastaMaking": "Italian Pasta Making",
      "ThaiCurryFundamentals": "Thai Curry Fundamentals",
      "SushiRollingTechniques": "Sushi Rolling Techniques",
      "FrenchPastryBasics": "French Pastry Basics",

      // GuidedTour.js
      "skip": "Skip",
      "finish": "Finish",
      "next": "Next"
    }
  },
  fr: {
    translation: {
      // App.js
      "culinaryCreations": "Créations Culinaires",
      "explore": "Explorer",
      "register": "S'inscrire",
      "askChef": "Demander à un Chef",
      "nutrition": "Nutrition",
      "liveDemo": "Démo en Direct",
      "language": "Langue",
      "footerSubtitle": "Améliorez vos compétences culinaires avec nous",
      "contactUs": "Contactez-nous",
      "businessHours": "Lundi - Vendredi, 7h - 19h",

      // Home.js
      "welcome": "Bienvenue à Créations Culinaires",
      "discover": "Découvrez un monde de saveurs, apprenez des meilleurs chefs et améliorez vos compétences culinaires avec nos cours interactifs et nos recettes.",
      "exploreRecipes": "Explorer les Recettes",
      "exploreDescription": "Découvrez de nouveaux plats et techniques de cuisine du monde entier.",
      "registerClasses": "S'inscrire aux Cours",
      "registerDescription": "Rejoignez des cours de cuisine en direct avec des chefs experts et améliorez vos compétences.",
      "userReviews": "Avis des Utilisateurs",
      "reviewQuote": "Créations Culinaires a transformé mes compétences culinaires ! Les cours sont informatifs et amusants, et les recettes sont incroyables.",
      "reviewAuthor": "Sarah L.",

      // Explore.js
      "exploreRecipesAndChefs": "Explorer les Recettes et les Chefs",
      "filters": "Filtres",
      "cuisine": "Cuisine",
      "dietaryRestrictions": "Restrictions Alimentaires",
      "cookingTime": "Temps de Cuisson",
      "recipesByCuisine": "Recettes par Cuisine",
      "chef": "Chef",
      "none": "Aucune",
      "featuredChefs": "Chefs en Vedette",
      "specialty": "Spécialité",
      "Italian": "Italienne",
      "Thai": "Thaïlandaise",
      "Japanese": "Japonaise",
      "Mexican": "Mexicaine",
      "Indian": "Indienne",
      "American": "Américaine",
      "Vegetarian": "Végétarien",
      "Vegan": "Végétalien",
      "GlutenFree": "Sans Gluten",
      "DairyFree": "Sans Produits Laitiers",
      "NutFree": "Sans Noix",
      "Under30": "Moins de 30 minutes",
      "30to60": "30-60 minutes",
      "Over60": "Plus de 60 minutes",
      "ItalianCuisine": "Cuisine Italienne",
      "ThaiCuisine": "Cuisine Thaïlandaise",
      "JapaneseCuisine": "Cuisine Japonaise",
      "SpaghettiCarbonara": "Spaghetti Carbonara",
      "PadThai": "Pad Thaï",
      "SushiRolls": "Rouleaux de Sushi",
      "Tacos": "Tacos",
      "PaneerButterMasala": "Paneer Butter Masala",
      "VeganBurger": "Burger Végétalien",

      // AskChef.js
      "selectChef": "Sélectionner un Chef",
      "chatWith": "Discuter avec {{name}}",
      "typeMessage": "Tapez votre message ici...",
      "selectChefToChat": "Sélectionnez un chef pour commencer à discuter",
      "chefResponse": "Merci pour votre question sur {{specialty}}. Je serais ravi de vous aider !",

      // LiveCookingDemo.js
      "liveCookingDemonstrations": "Démonstrations de Cuisine en Direct",
      "upcomingDemonstrations": "Démonstrations à Venir",
      "participantsCount": "{{count}} participants",
      "liveDemoDescription": "Rejoignez-nous pour une démonstration de cuisine interactive où vous apprendrez des techniques professionnelles et recevrez des commentaires en temps réel de notre chef expert.",
      "registerForDemo": "S'inscrire à cette Démo",
      "selectDemoToViewDetails": "Sélectionnez une démonstration pour voir les détails",
      "FrenchPastryTechniques": "Techniques de Pâtisserie Française",
      "SushiRollingMasterclass": "Masterclass de Roulage de Sushi",
      "ItalianPastaFromScratch": "Pâtes Italiennes Faites Maison",

      // NutritionalAnalysis.js
      "nutritionalAnalysis": "Analyse Nutritionnelle",
      "enterIngredients": "Entrez les ingrédients (séparés par des virgules) :",
      "analyzeNutrition": "Analyser la Nutrition",
      "nutritionalInformation": "Information Nutritionnelle",
      "suggestionsForImprovement": "Suggestions d'Amélioration",
      "addMoreFiber": "Envisagez d'ajouter plus d'ingrédients riches en fibres pour augmenter votre apport en fibres.",
      "reduceSaturatedFats": "Essayez de réduire la quantité de graisses saturées en utilisant des alternatives d'huile plus saines.",
      "includeMoreProtein": "Incluez plus de sources de protéines maigres pour équilibrer vos macronutriments.",
      "calories": "Calories",
      "protein": "Protéines",
      "carbs": "Glucides",
      "fat": "Lipides",
      "fiber": "Fibres",

      // Register.js
      "registerForCookingClass": "S'inscrire à un Cours de Cuisine",
      "name": "Nom",
      "emailAddress": "Adresse e-mail",
      "selectClass": "Sélectionner un Cours",
      "chooseClass": "Choisissez un cours",
      "selectDate": "Sélectionner une Date",
      "enterPaymentInfo": "Entrez les informations de paiement",
      "registerNow": "S'inscrire Maintenant",
      "bookingConfirmed": "Réservation Confirmée !",
      "confirmationEmailSent": "Un e-mail de confirmation a été envoyé à :",
      "contactForInquiries": "Veuillez nous contacter au",
      "ItalianPastaMaking": "Fabrication de Pâtes Italiennes",
      "ThaiCurryFundamentals": "Fondamentaux du Curry Thaï",
      "SushiRollingTechniques": "Techniques de Roulage de Sushi",
      "FrenchPastryBasics": "Bases de la Pâtisserie Française",

      // GuidedTour.js
      "skip": "Passer",
      "finish": "Terminer",
      "next": "Suivant"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
