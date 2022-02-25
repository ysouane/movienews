# Movie News

Site permettant d'afficher une liste de films provenant de l'api du site [The Movie DB](https://www.themoviedb.org/)</br>
(du plus récent au plus ancien, les plus populaire et la possibilité de les enregistrer dans des favoris).

La stack: React via create-react-app, Typescript, Redux, Sass<br/>
Librairie: date-fns<br/>
Test: Jest / react-test-renderer<br/>
Linter/Formateur: Eslint / Prettier<br/>

## Version en ligne du site
Une version en ligne du site est disponible à cette adresse :

**[Movie News](https://movienews-hrmu32ev4-ysouane.vercel.app/)**

## Installation et configuration du projet
Une fois le répo cloner ou télécharger, via le dossier de l'application lancer via un terminal la commande suivante : 

### `npm install`

Ensuite créer à la racine du dossier un fichier .env qui devra contenir : 
>**REACT_APP_THEMOVIEDB_API_KEY=*********************** <br/>
>**REACT_APP_THEMOVIEDB_API_URL=https://api.themoviedb.org**<br/>
>**REACT_APP_THEMOVIEDB_API_VERSION=3**<br/>

## Lancement du site

Des scripts sont configurés dans la package.json afin de les lancer automatiquement via un IDE

![image](https://user-images.githubusercontent.com/97733746/155627505-4da24d06-83ec-4251-867f-77fce695d8f6.png)

Utiliser [http://localhost:3000](http://localhost:3000) pour accéder au site via le navigateur

## Structure du site
A la racine se trouve les fichiers de configuration de :

- **Eslint: .eslintrc.json**
- **Prettier: .prettierrc**
- **Typescript: tsconfig.json**

Ensuite on retrouve le repertoire src/ dans lequel on va retrouver l'ensemble du code du site

> src<br/>
src\components<br/>
src\font<br/>
src\helpers<br/>
src\pages<br/>
src\redux<br/>
src\styles<br/>
src\utils<br/>
src\App.test.tsx<br/>
src\App.tsx<br/>
src\index.tsx<br/>
src\react-app-env.d.ts<br/>
src\setupTests.ts<br/>
