import { ContactUs, Faq } from '../../components/contact/';

const ContactUsPage = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen gap-6 px-6 mt-20 sm:mt-44 sm:gap-16 sm:flex-row sm:px-16">
      <ContactUs />
      <Faq />
    </section>
  );
};

export default ContactUsPage;
