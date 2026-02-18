<script>
	import "../app.css";
	import { t, locale, setLocale, languages } from "$lib/i18n.js";
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import { injectAnalytics } from "@vercel/analytics/sveltekit";

	let { children } = $props();

	$effect(() => {
		injectAnalytics({ mode: dev ? "development" : "production" });
	});
</script>

<div
	class="min-h-screen flex flex-col font-sans text-nature-900 bg-nature-50 selection:bg-nature-200 selection:text-nature-900"
>
	<header
		class="fixed w-full z-50 bg-nature-50/80 backdrop-blur-md border-b border-nature-200/50 transition-all duration-300 shadow-sm"
	>
		<div
			class="container mx-auto px-6 h-24 flex items-center justify-between"
		>
			<a
				href="/"
				class="text-3xl font-display font-bold text-nature-900 tracking-tight hover:opacity-80 transition-opacity"
			>
				Monte Mouro
			</a>

			<nav class="hidden md:flex items-center gap-6">
				<a
					href="#intro"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_intro")}</a
				>
				<a
					href="#audience"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_audience")}</a
				>
				<a
					href="#objectives"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_objectives")}</a
				>
				<a
					href="#activities"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_activities")}</a
				>
				<a
					href="#services"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_services")}</a
				>
				<a
					href="#infrastructure"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_infrastructure")}</a
				>
				<a
					href="#contact"
					class="text-xs font-bold uppercase tracking-widest text-nature-600 hover:text-nature-900 transition-colors"
					>{$t("nav_contact")}</a
				>
			</nav>

			<div class="flex items-center gap-4">
				<div
					class="flex items-center gap-1 text-xs font-bold bg-nature-100/50 rounded-full p-1 border border-nature-200"
				>
					{#each languages as lang}
						<button
							type="button"
							onclick={() => setLocale(lang)}
							class="px-4 py-1.5 rounded-full transition-all duration-300 {$locale ===
							lang
								? 'bg-white shadow-sm text-nature-900'
								: 'text-nature-400 hover:text-nature-600'}"
						>
							{lang.toUpperCase()}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</header>

	<main class="flex-grow pt-24">
		{@render children()}
	</main>

	<footer class="bg-nature-950 text-nature-100 py-16">
		<div class="container mx-auto px-6">
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-nature-800 pb-12 mb-12"
			>
				<div class="text-center md:text-left">
					<h3
						class="font-display text-3xl font-bold mb-3 text-nature-50"
					>
						{$t("hero_title")}
					</h3>
					<p class="text-nature-400 font-light tracking-wide">
						Monte Mouro, Algarve, Portugal
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>
