import style from "./Logo.module.css";

const Logo = ({ src, alt, dimension }) => {
  const styledSize = () => {
    switch (dimension) {
      case "lg":
        return style.large;
      case "md":
        return style.medium;
      default:
        return style.small;
    }
  };

  return <img src={src} alt={alt} className={styledSize()} />;
};

export default Logo;
