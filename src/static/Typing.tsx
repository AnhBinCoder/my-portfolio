import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "React.js",
        300,
        "Next.js",
        300,
        "Tailwind CSS",
        300,
        "Javascript",
        300,
        "TypeScript",
        300,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "5px",
        fontSize: "1em",
        textAlign: "left",
        color: "#000",
        fontWeight: "bold",
        display: "inline-block",
        width: "38%",
      }}
      repeat={1}
    />
  );
}

export default Typing;
