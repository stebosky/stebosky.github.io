const { styled } = window;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 2rem;
`;

const Heading = styled.h1`
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

function App() {
  return (
    <AppContainer>
      <Heading>Welcome to stebosky.github.io</Heading>
      <Paragraph>This page was previously empty. It now has basic content.</Paragraph>
    </AppContainer>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
