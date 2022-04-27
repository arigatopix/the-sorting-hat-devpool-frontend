import Form from './components/Form/Form';
import Stat from './components/Stat/Stat';
import Popup from './components/Popup/Popup';

import FormState from './contaxt/form/FormState';

function App() {
  return (
    <>
      <FormState>
        <Form />
        <br />

        <Stat />
        <br />

        <Popup />
        <br />
      </FormState>
    </>
  );
}

export default App;
