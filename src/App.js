import Form from './components/Form/Form';
import Stat from './components/Stat/Stat';

import FormState from './contaxt/form/FormState';
import StatState from './contaxt/stat/StatState';

function App() {
  return (
    <>
      <FormState>
        <StatState>
          <Form />
          <br />

          <Stat />
          <br />
        </StatState>
      </FormState>
    </>
  );
}

export default App;
