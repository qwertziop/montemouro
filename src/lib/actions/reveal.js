/**
 * Svelte Action to trigger animations on scroll
 * Usage: <div use:reveal={{ threshold: 0.2, hidden: 'opacity-0 translate-y-8', visible: 'opacity-100 translate-y-0 transition-all duration-1000' }}>
 * @param {HTMLElement} node
 * @param {{ threshold?: number, delay?: number }} params
 */
export function reveal(node, { threshold = 0.1, delay = 0 } = {}) {
    const className = "opacity-0 translate-y-8"; // Default starting state
    const visibleClass = "opacity-100 translate-y-0 transition-all duration-1000 ease-out";
    
    // Apply initial state
    node.classList.add(...className.split(" "));
    if (delay) node.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.classList.remove(...className.split(" "));
                node.classList.add(...visibleClass.split(" "));
                observer.unobserve(node);
            }
        });
    }, {
        threshold
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
