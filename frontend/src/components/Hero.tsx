import hero from "../assets/hero.png"

const Hero = () => {
  return(
    <div className="container pt-4">
        <img src={hero} className="w-full object-cover max-h-[800px]" alt="Hero" />
    </div>
  );
}

export default Hero;