import amazonLogo from '../../assets/icons/AmazonLogo.svg';
import salesforceLogo from '../../assets/icons/SalesforceLogo.svg';
import googleLogo from '../../assets/icons/GoogleLogo.svg';
import urbnLogo from '../../assets/icons/UrbnLogo.svg';
import shopifyLogo from '../../assets/icons/ShopifyLogo.svg';
import whatsappLogo from '../../assets/icons/WhatsappLogo.svg';
import bmwLogo from '../../assets/icons/BmwLogo.svg';
import marriottLogo from '../../assets/icons/MarriottLogo.svg';
import './Section2.css';

/* ===========================
   COMPONENT: Section2
=========================== */

function Section2() {
  return (
    <section className="stripe-section section-2" id="section-2" aria-label="Customer Logos">
      <div className="container section-2_container">
        <div className="section-2_grid">
          <div className="section-2_item">
            <img src={amazonLogo} alt="Amazon" className="section-2_logo section-2_logo--amazon" />
          </div>
          <div className="section-2_item">
            <img src={salesforceLogo} alt="Salesforce" className="section-2_logo section-2_logo--salesforce" />
          </div>
          <div className="section-2_item">
            <img src={googleLogo} alt="Google" className="section-2_logo section-2_logo--google" />
          </div>
          <div className="section-2_item">
            <img src={urbnLogo} alt="URBN" className="section-2_logo section-2_logo--urbn" />
          </div>
          <div className="section-2_item">
            <img src={shopifyLogo} alt="Shopify" className="section-2_logo section-2_logo--shopify" />
          </div>
          <div className="section-2_item">
            <img src={whatsappLogo} alt="WhatsApp" className="section-2_logo section-2_logo--whatsapp" />
          </div>
          <div className="section-2_item">
            <img src={bmwLogo} alt="BMW" className="section-2_logo section-2_logo--bmw" />
          </div>
          <div className="section-2_item">
            <img src={marriottLogo} alt="Marriott" className="section-2_logo section-2_logo--marriott" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
