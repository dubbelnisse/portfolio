import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App'

test('renders the intro and experience', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText('Nils')).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'Experience' })
  ).toBeInTheDocument()
})
