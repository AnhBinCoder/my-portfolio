import Service from "@/static/Service";

function Services() {
  return (
    <div
      id="Services"
      className="flex text-white min-h-full flex-col items-center bg-slate-800"
    >
      <img
        className="w-full h-44"
        src="/transitions/gradient.svg"
        alt="transition"
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold">
        My Services
      </p>
      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
        <Service
          hl="Front-end"
          desc="I specialize in creating responsive and dynamic user interfaces using the last technologies"
          img="/icons/front-end.svg"
        />
        <Service
          hl="Back-end"
          desc="With a strong background in backend development, i design robust and scalable server-side solutions."
          img="/icons/back-end.svg"
        />
        <Service
          hl="Full-stack"
          desc="Combining the best of both worlds, i offer full-stack development services to deliver end-to-end solutions. from designing engaging frontend to building powerful backend"
          img="/icons/full-stack.svg"
        />
      </div>
    </div>
  );
}

export default Services;
