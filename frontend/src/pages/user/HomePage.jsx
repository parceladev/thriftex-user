import Jumbotron from '../../components/homes/Jumbotron';
import Tagline from '../../components/homes/Tagline';
import Statistic from '../../components/homes/Statistic';
const HomePage = () => {
  return (
    <section className="p-16 font-sans bg-primary">
      <Jumbotron />
      <Tagline />
      <Statistic />
    </section>
  );
};

export default HomePage;
