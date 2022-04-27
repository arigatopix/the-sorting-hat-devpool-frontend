import Form from './components/Form/Form';
import Stat from './components/Stat/Stat';

import FormState from './contaxt/form/FormState';

function App() {
  return (
    <>
      <FormState>
        <Form />
        <br />

        <Stat />
        <br />
      </FormState>
    </>
  );
}

export default App;
