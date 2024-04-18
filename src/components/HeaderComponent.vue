<template>
	<header>
		<nav>
			<ul>
            <li><router-link to="/">Accueil</router-link></li> |
            <li><router-link to="/about">About</router-link></li> |
            <li><router-link to="/primeur">Primeur</router-link></li> |
            <li><router-link to="/pays">Pays</router-link></li> |
            <li><router-link to="/reactive">Reactive</router-link></li> |
            <li><router-link to="/adresse">Adresse</router-link></li> |
            <li><router-link to="/personne">Personne</router-link></li> |
            <li><router-link :class="{ 'lien-actif': $route.name == 'tableau' }" to="/tableau">Tableau</router-link></li> |
            <li><router-link to="/compteur">Compteur</router-link></li>
        </ul>
		</nav>
	</header>
</template>
<style scoped>
li {
	list-style-type: none;
    display: inline;
    margin: 0 10px;    
}
.lien-actif {
    font-weight: bold;
}
a {
    text-decoration: none;
}
</style>
