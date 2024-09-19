import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { FormRenderer, FormGenerator } from './pages';
import { Layout } from './components';
import { ROUTES } from './constants';

const Routing = () => (
  <>
    <Routes>
      <Route
        path={ROUTES.ROOT}
        element={<Navigate to={ROUTES.FORM_GENERATOR} />}
      />
      <Route
        path={ROUTES.FORM_GENERATOR}
        element={<FormGenerator />}
      />
      <Route
        path={ROUTES.FORM_RENDERER}
        element={<FormRenderer />}
      />
    </Routes>
  </>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <div className='App'>
          <Routing />
        </div>
      </Layout>
    </Router>
  );
};

export default App;
