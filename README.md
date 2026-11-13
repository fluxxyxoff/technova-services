# TechNova Services — site vitrine SEO/GEO

Projet scolaire fictif situé à Bruxelles. Quatre pages responsive : `index.html`, `services.html`, `apropos.html`, `contact.html`.

## Ouvrir dans VS Code
1. Ouvrir le dossier `TechNova-Services` dans VS Code.
2. Lancer `index.html` avec Live Server (ou double-cliquer sur le fichier).
3. Tester la navigation et le formulaire de démonstration.

## Publication et référencement
1. Publier le contenu de ce dossier sur un hébergeur statique HTTPS (par exemple GitHub Pages ou Netlify).
2. Vérifier les liens, la vue mobile et le fonctionnement en ligne.
3. Après l'obtention d'une URL définitive, ajouter les URL canoniques et les URLs `url` dans les données structurées, et créer un vrai `sitemap.xml` utilisant les URL réelles absolues du site.
4. Ajouter la ligne `Sitemap: https://VOTRE-DOMAINE/sitemap.xml` dans `robots.txt` en remplaçant par l'URL réelle.
5. Vérifier la propriété et soumettre le sitemap dans Google Search Console et Bing Webmaster Tools.
6. Utiliser les outils de test des données structurées et conserver les captures demandées par le professeur.
7. Faire les mesures de visibilité aux jours 1, 7 et 21 : ne pas inventer des résultats.

## Note pédagogique
Entreprise entièrement fictive. Aucun avis client, adresse de rue, numéro d'entreprise ou faux numéro de téléphone. Le formulaire de contact est une démonstration locale : il ne transmet aucune donnée. La police externe est facultative ; une police système de remplacement fonctionne hors connexion.

## Structure
- HTML : pages et référencement on-page (titres, descriptions, sections structurées, JSON-LD Organization)
- `css/style.css` : design responsive
- `js/main.js` : menu mobile et formulaire de démonstration
- `assets/favicon.svg` : icône de marque créée pour ce projet
- `robots.txt` : autorise l'exploration ; compléter le lien sitemap après publication

## JavaScript interactif (version enrichie)
- Menu mobile accessible (aria-expanded) et fermeture après sélection.
- Recherche instantanée et filtres par catégorie sur la page Services.
- Indication du nombre de services trouvés et message si aucun résultat.
- Compteur de caractères dans le formulaire de démonstration.
- Validation HTML intégrée ; aucun message n’est envoyé ni enregistré.
- Les questions fréquentes utilisent les éléments HTML natifs `details`/`summary`, accessibles sans JavaScript.
