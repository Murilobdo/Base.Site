import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);

        // Inicializa o estado
        handleChange();

        // Adiciona o event listener para mudanças de tamanho da tela
        mediaQueryList.addEventListener('change', handleChange);

        // Remove o listener ao desmontar o componente
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}

