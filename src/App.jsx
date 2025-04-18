
import './App.css'
import ControlField from './Components/Control Field/ControlField';
import FamilyTree from './Components/FamilyTree/FamilyTree';
import FormAction from './Components/FormAction/FormAction';
import HookForm from './Components/HookForm/HookForm';
import Practice from './Components/practice/practice';
import PracticeHook from './Components/practicehook/PracticeHook';
import ProductManagement from './Components/ProductManagement/ProductManagement';
import SimpleForm from './Components/SimpleForm/SimpleForm';
import UnControlField from './Components/UnControlField/UnControlField';

function App() {



  return (
    <>
  <SimpleForm></SimpleForm>
  <FormAction></FormAction>
  <ControlField></ControlField>
  <UnControlField></UnControlField>
  <Practice></Practice>
  <HookForm></HookForm>
  <PracticeHook></PracticeHook>
  <ProductManagement></ProductManagement>
  <FamilyTree></FamilyTree>
    </>
  )
}

export default App
