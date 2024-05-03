import {
  Banner,
  OurGoals,
  PartnerBrands,
  WhyWeDifferent,
} from '../../components/abouts';

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-5 px-6 sm:px-16">
      <Banner />
      <OurGoals />
      <PartnerBrands />
      <WhyWeDifferent />
    </div>
  );
};

export default AboutPage;
