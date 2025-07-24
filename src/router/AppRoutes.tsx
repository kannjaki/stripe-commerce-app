import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import RefundPolicy from '../pages/legal/RefundPolicy';
import TermsOfService from '../pages/legal/TermsOfService';
import SpecialCommercialTransactions from '../pages/legal/SpecialCommercialTransactions';
import NotFound from '../pages/NotFound';
import SupportPolicy from '../pages/legal/SupportPolicy';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="commercial-transactions" element={<SpecialCommercialTransactions />} />
        <Route path="support-policy" element={<SupportPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 