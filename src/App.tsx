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

function App() {
  return (
    <>
      <div className="container">
        <Title>Styled Components Playground</Title>
        <p>
          <Link href="/">Sample Link</Link>
        </p>
      </div>
    </>
  )
}

export default App
