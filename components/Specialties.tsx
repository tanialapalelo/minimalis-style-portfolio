import { specialties } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Specialties = () => {
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <>
      <p className="font-handlee bg-pink-300 font-bold mt-7 text-black w-fit">
        What I do?
      </p>
      <Image
        src="/assets/icons/arrow.svg"
        alt="arrow"
        width={50}
        height={50}
        className="-rotate-100 my-8"
      />
      <div className="flex flex-wrap justify-center">
        {specialties.map((specialty, idx) => {
          return (
            <motion.div
              variants={imageVariants}
              key={"images-first" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className={`rounded-xl -mr-4 mt-4 p-1 border flex-shrink-0 overflow-hidden bg-${specialty.color}-500 border-${specialty.color}-200`}
            >
              <div
                className={`rounded-lg h-72 w-72 object-cover flex-shrink-0 bg-${specialty.color}-100`}
              >
                <Image src={specialty.icon} alt="icon" width={50} height={50} />
                <p className="text-lg text-black">{specialty.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Specialties;
