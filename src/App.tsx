import styled from 'styled-components'

const Title = styled.h1`
  font-size: 4rem;
`

const Link = styled.a`
  color: blue;
  :hover {
    opacity: 0.6;
    text-decoration: underline;
  }
`

const Paragraph = styled.p<{ $fontSize?: 'small' | 'medium' }>`
  font-size: ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'small':
        return '1rem'
      case 'medium':
        return '2rem'
      default:
        return '1rem'
    }
  }};
`

function App() {
  return (
    <>
      <div className="container">
        <Title>Styled Components Playground</Title>
        <p>
          <Link href="/">Sample Link</Link>
        </p>
        <Paragraph $fontSize="medium">
          This is a paragraph component with some text.
        </Paragraph>
      </div>
    </>
  )
}

export default App
