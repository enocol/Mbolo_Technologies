import Icon from "./Icon";
import ContactForm from "./ContactForm";
import { company } from "../data/site";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div>
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2>Tell us what you want to build</h2>
          <p>
            Send us a short description of your project. We reply within one business day
            with next steps — and, where it helps, a free 30-minute scoping call.
          </p>

          <div className="contact__points">
            <div className="contact__point">
              <Icon name="mail" size={20} />
              <span>
                <strong>Email</strong>
                <span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </span>
              </span>
            </div>
            <div className="contact__point">
              <Icon name="phone" size={20} />
              <span>
                <strong>Phone / WhatsApp</strong>
                <span>{company.phone}</span>
              </span>
            </div>
            <div className="contact__point">
              <Icon name="pin" size={20} />
              <span>
                <strong>Office</strong>
                <span>{company.address}</span>
              </span>
            </div>
            <div className="contact__point">
              <Icon name="clock" size={20} />
              <span>
                <strong>Working hours</strong>
                <span>{company.hours}</span>
              </span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
