import { render } from '@testing-library/react'
import GifExpertApp from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
  test('debe renderizar', () => {
    render(<GifExpertApp />)
  })
})