# Pratique des `@Input` et `@Output` avec Angular

🚀 Une mise en pratique simple et efficace pour comprendre le fonctionnement des `@Input` et `@Output` dans Angular.

## 🛠 On démarre !

Clone le repo, puis lance les commandes suivantes pour démarrer le projet :

```bash
npm install
npm run start
```

## 🧱 Structure du projet

La structure du projet est ultra simple, juste ce qu'il faut pour comprendre le fonctionnement des `@Input` et `@Output` :

- **Un composant parent** : `parent.component.ts`
    - Transmet des données à un composant enfant via un `@Input`.
    - Reçoit des données du composant enfant via un `@Output`.
- **Un composant enfant** : `child.component.ts`
    - Reçoit des données du composant parent grâce à un `@Input`.
    - Renvoie des données au composant parent via un `@Output`.

## 🎨 Style minimaliste

Pas de style, c'est moche mais l'essentiel est là. 😄

## ✨ Objectif

Apprenez à :
1. **Utiliser `@Input`** pour transmettre des données d’un parent à un enfant.
2. **Utiliser `@Output`** pour envoyer des événements ou des données d’un enfant à un parent.

Bonne pratique et amusez-vous bien ! 🚀
