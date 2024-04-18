// fichier de mapping(route, composant)

import ReactiveValue from "../views/reactiveValue.vue";
import PrimeurView from "../views/PrimeurView.vue";
import PaysView from "../views/PaysView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AdresseView from "../views/AdresseView.vue";
import PersonneView from "../views/PersonneView.vue";
import PersonneDetails from "../views/PersonneDetails.vue";
import CalculView from "../views/CalculView.vue";
import { createRouter, createWebHistory } from "vue-router";
import TableauView from "../views/TableauView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CompteurView from "../views/CompteurView.vue";
const routes = [
	{
		path: "/",
		component: HomeView,
		name: "home",
		alias: ["/accueil", "/home"],
		meta: { title: "Page d'accueil" },
	},
	{ path: "/reactive", component: ReactiveValue, name: "reactive" },
	{ path: "/primeur", component: PrimeurView, name: "primeur" },
	{ path: "/pays", component: PaysView, name: "pays" },
	{ path: "/about", component: AboutView, name: "about" },
	{ path: "/adresse", component: AdresseView, name: "adresse" },
	{ path: "/personne", component: PersonneView, name: "personne" },
	{ path: "/person", redirect: "/personne" },
	{
		path: "/personne/:id",
		component: PersonneDetails,
		name: "personne-details",
		props: true,
	},
	{ path: "/calcul/:op", component: CalculView, name: "calcul", props: true },
	{ path: "/tableau", redirect: { name: "tableau", params: { id: 0 } } },
	{ path: "/tableau/:id", component: TableauView, name: "tableau", props: true },
	{ path: "/:pathMatch(.*)", name: "not-found", component: NotFoundView },
	{ path: "/compteur", name: "compteur", component: CompteurView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "lien-actif",
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title ?? "";
	next();
});
export default router;
