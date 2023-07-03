import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'

import Home from './src/views/home/Home';
import Favourites from '../src/views/favourites/Favourites';
import Detail from '../src/views/detail/Detail';

describe('Views render property', () => {
    it('The home view renders appropriately', () => {
        render(<Home />)
        expect(screen.getByText(/Loading/i)).toBeInTheDocument()
      })
      it('The detail view renders appropriately', () => {
        render(<Detail />)
        expect(screen.getByText(/Loading/i)).toBeInTheDocument()
      })
      it('The favourite view renders appropriately', () => {
        render(<Favourites />)
        expect(screen.getByText(/Loading/i)).toBeInTheDocument()
      })
});