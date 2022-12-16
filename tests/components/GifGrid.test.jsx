import { render, screen } from '@testing-library/react'
import GifGrid from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch'

  test('debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    })
    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })

  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const mockGifs = [
      {
        id: 'ABC',
        title: 'mockSaitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'mockGoku',
        url: 'https://localhost/goku.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      gifs: mockGifs,
      isLoading: false
    })
    render(<GifGrid category={category} />)
    // screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
