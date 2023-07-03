import { describe, it, expect } from 'vitest';

describe('Test local storage save propertly', () => {
    it('local storage', () => {
        const obj = {
            theme: 'dark',
            layout: 'grid',
            favs: [],
          }
    
          localStorage.setItem('pokedexLocalContext', JSON.stringify([obj]))
    
          expect(JSON.parse(localStorage.getItem('pokedexLocalContext') || '[]')).toStrictEqual([obj])
    })
})