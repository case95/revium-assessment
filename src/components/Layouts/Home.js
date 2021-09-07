import Slider from "../commons/Slider/Slider";
import SectionParagraph from "../commons/SectionParagraph";

const Home = () => {
  const placeholderImages = [
    {
      id: "1",
      src: "assets/home/sunset1.jpg",
      alt: "Miami sunset",
      title: "Bienveido a Miami!",
    },
    {
      id: "2",
      src: "assets/home/sunset2.jpg",
      alt: "Brooklyn sunset",
      title: "Spread love, it's the brooklyn way.",
    },
    {
      id: "3",
      src: "assets/home/sunset3.jpg",
      alt: "Los Angeles sunset",
      title: "In Los Angeles, everyone is a star.",
    },
  ];

  const placeholderSectionText = {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: `Proin finibus rhoncus erat vitae efficitur.
      Etiam interdum dolor sem, vel auctor dolor imperdiet in.
      Integer posuere tellus vel nisl elementum vestibulum ac nec risus.
      Vivamus ac risus felis.
      Morbi ultricies fringilla dui, et posuere elit ultrices eget.
      In maximus augue ut elit consectetur, vitae convallis erat elementum.
      Suspendisse laoreet nulla turpis, commodo pharetra leo ornare vitae.
      Duis id lectus eget justo suscipit fermentum id a enim.
      Donec id convallis dolor.
      Nullam eros arcu, congue vitae iaculis molestie, dictum ut diam.
      Aenean consectetur neque in massa molestie ullamcorper.
      Aenean euismod elit placerat, lobortis leo et, consectetur risus.
      Fusce pharetra mi ipsum, vitae consequat nisi consectetur at.
      Quisque risus magna, ultrices eu turpis ac, sagittis aliquam ipsum.
      Integer egestas lectus mauris.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras egestas egestas ligula, quis sagittis augue pharetra at.
      Morbi nec scelerisque diam, a blandit sapien. Vestibulum ac arcu nulla.
      Mauris maximus, nisi at volutpat imperdiet, felis urna semper orci, nec eleifend est nulla eget libero.
      Praesent vel cursus diam, a sollicitudin justo.
      Donec facilisis eget velit sit amet euismod.
      Morbi quis odio libero.
      Curabitur ac rhoncus ex.
      In facilisis viverra velit, at volutpat nisi tristique vel.`,
  };

  return (
    <div>
      <Slider slides={placeholderImages} />
      <SectionParagraph {...placeholderSectionText} />
    </div>
  );
};

export default Home;
