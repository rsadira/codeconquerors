import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
    <section className="mt-4">
      <h1> CodeConquerors Member</h1>
      <div className="row">
        <div className="col-md-4">
          <FeatureItem
            dataTitle="Evander"
            dataRole="Carry"
            dataBio="With over a decade of experience in the industry, they have a knack for turning complex code into elegant solutions. Alex is a strong advocate for best coding practices and enjoys staying updated with the latest web technologies."
            dataImage="https://img.freepik.com/free-vector/cute-girl-shooting-with-shotgun-weapon-cartoon-vector-icon-illustration-people-holidays-isolated_138676-5703.jpg?w=740&t=st=1698935342~exp=1698935942~hmac=c6ec44aca1702c77a4fd81026a78ba6239c9403f90779cb285f0814acbfb1790"
          ></FeatureItem>
        </div>
        <div className="col-md-4">
          <FeatureItem
            dataTitle="Fahman"
            dataRole="Tank"
            dataBio="Sophie is our creative front-end developer with a passion for designing visually appealing and user-friendly websites. Her attention to detail ensures that every pixel is in its perfect place. She's also an advocate for responsive design and accessibility."
            dataImage="https://img.freepik.com/free-vector/cute-boy-playing-vr-game-with-robot-cartoon-vector-icon-illustration-people-technology-isolated_138676-5691.jpg?w=740&t=st=1698935372~exp=1698935972~hmac=a9a853c5c878cdd0a235b4fbe2e5f20b42280e5bc7015b3fe8955190f2d990b0"
          ></FeatureItem>
        </div>
        <div className="col-md-4">
          <FeatureItem
            dataTitle="Fajar"
            dataRole="Support"
            dataBio="Mike is our backend guru. He specializes in building robust server-side applications and databases that power our web solutions. With his strong problem-solving skills, he ensures that our websites not only look great but also function flawlessly."
            dataImage="https://img.freepik.com/free-vector/cute-rich-boy-throws-money-cartoon-vector-icon-illustration-people-business-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3950.jpg?w=740&t=st=1698935384~exp=1698935984~hmac=940f0a4695d7c7f2d4fe44a7e51d3b719cc955cde56d01ff1c3474bcf86f38c9"
          ></FeatureItem>
        </div>
        <div className="col-md-4 offset-2">
          <FeatureItem
            dataTitle="Haqi"
            dataRole="Midlaner"
            dataBio="Linda is a CSS expert with a keen eye for aesthetics. She takes pride in crafting beautiful and smooth user interfaces, turning design concepts into reality. Her work reflects a harmonious balance of design and functionality."
            dataImage="https://img.freepik.com/free-vector/cute-ninja-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-isolated-flat_138676-4801.jpg?w=740&t=st=1698935405~exp=1698936005~hmac=cc59a8baae59cd99de98df62d5e1d4b235a03cc9e22e5253abf5ab3434496e69"
          ></FeatureItem>
        </div>
        <div className="col-md-4">
          <FeatureItem
            dataTitle="Rolland"
            dataRole="Offlaner"
            dataBio="Tom is our quality assurance specialist. His meticulous testing and debugging skills ensure that our web projects are bug-free and perform optimally. Tom's commitment to quality helps us deliver websites that exceed client expectations."
            dataImage="https://img.freepik.com/free-vector/cute-astronaut-playing-rocket-kite-cartoon_138676-2525.jpg?w=740&t=st=1698935420~exp=1698936020~hmac=d4ba94661b19fd94ef073ddd2bad418895129e118cc3f55843f3b507d772d296"
          ></FeatureItem>
        </div>
      </div>
    </section>
  );
};

export default Feature;
