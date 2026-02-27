# Portfolio - Site Web MERN Stack

Un site web portfolio moderne et responsive construit avec la stack MERN (MongoDB, Express, React, Node.js).

## 🚀 Fonctionnalités

- **Design moderne** avec animations fluides
- **Section Hero** avec présentation animée
- **À propos** avec compétences clés
- **Compétences** avec barres de progression
- **Projets** avec cartes interactives
- **Expérience** avec timeline
- **Contact** avec formulaire fonctionnel (sauvegarde en MongoDB)
- **Responsive** sur tous les appareils
- **Navigation smooth scroll**

## 🛠️ Technologies Utilisées

### Frontend
- React 18
- React Icons
- React Scroll
- Axios
- CSS3 avec variables personnalisées

### Backend
- Node.js
- Express
- MongoDB avec Mongoose
- CORS
- Dotenv

## 📦 Installation

### Prérequis
- Node.js (v18 ou supérieur)
- MongoDB (local ou Atlas)

### Backend

```bash
cd backend
npm install
```

Créez un fichier `.env` avec:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

Démarrez le serveur:
```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

L'application sera accessible à `http://localhost:3000`

## 🐳 Docker (Optionnel)

```bash
docker-compose up --build
```

## 📁 Structure du Projet

```
BIO Website/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js / .css
│   │   │   ├── Hero.js / .css
│   │   │   ├── About.js / .css
│   │   │   ├── Skills.js / .css
│   │   │   ├── Projects.js / .css
│   │   │   ├── Experience.js / .css
│   │   │   ├── Contact.js / .css
│   │   │   └── Footer.js / .css
│   │   ├── App.js / .css
│   │   └── index.js / .css
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🎨 Personnalisation

1. **Informations personnelles**: Modifiez les composants pour ajouter vos informations
2. **Couleurs**: Éditez les variables CSS dans `index.css`
3. **Projets**: Ajoutez vos projets dans `Projects.js`
4. **Liens sociaux**: Mettez à jour les liens GitHub, LinkedIn, etc.

## 📝 License

MIT License
