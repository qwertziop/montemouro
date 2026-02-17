<script>
	import "../app.css";
	import { t, locale, setLocale, languages } from "$lib/i18n.js";
	import { page } from "$app/stores";
</script>

<div class="min-h-screen flex flex-col font-sans text-nature-900 bg-nature-50">
	<header
		class="fixed w-full z-50 bg-nature-50/90 backdrop-blur-sm border-b border-nature-200 transition-all duration-300"
	>
		<div
			class="container mx-auto px-4 h-20 flex items-center justify-between"
		>
			<a
				href="/"
				class="text-2xl font-display font-bold text-nature-800 tracking-tight"
			>
				Monte Mouro
			</a>

			<nav class="hidden md:flex items-center gap-8">
				<a
					href="#intro"
					class="text-sm font-medium hover:text-nature-600 transition-colors"
					>{$t("nav_home")}</a
				>
				<a
					href="#activities"
					class="text-sm font-medium hover:text-nature-600 transition-colors"
					>{$t("nav_activities")}</a
				>
				<a
					href="#contact"
					class="text-sm font-medium hover:text-nature-600 transition-colors"
					>{$t("nav_contact")}</a
				>
			</nav>

			<div class="flex items-center gap-4">
				<div
					class="flex items-center gap-2 text-sm font-medium bg-nature-100 rounded-full p-1"
				>
					{#each languages as lang}
						<button
							on:click={() => setLocale(lang)}
							class="px-3 py-1 rounded-full transition-colors {$locale ===
							lang
								? 'bg-white shadow-sm text-nature-800'
								: 'text-nature-500 hover:text-nature-700'}"
						>
							{lang.toUpperCase()}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</header>

	<main class="flex-grow pt-20">
		<slot />
	</main>

	<footer class="bg-nature-900 text-nature-100 py-12">
		<div class="container mx-auto px-4">
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-6"
			>
				<div class="text-center md:text-left">
					<h3 class="font-display text-xl font-bold mb-2">
						{$t("hero_title")}
					</h3>
					<p class="text-nature-300">Monte Mouro, Algarve</p>
				</div>
				<div class="text-center md:text-right text-sm text-nature-400">
					<p>
						&copy; {new Date().getFullYear()} Uwe Reichelt. All rights
						reserved.
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>
