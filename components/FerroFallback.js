import { motion } from "framer-motion";
import Image from "next/image";

const FerroFallback
 = () => {
  return (
    <motion.div
      className="cursor-pointer mt-4"
      animate={{ y: [0, 16, 0] }}
      transition={{
        duration: 7,
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
      }}
    >
      <Image
        priority
        src="/sludge.png"
        alt="sludge"
        width={500}
        height={500}
        layout="responsive"
        className="rounded-md"
      />
    </motion.div>
  );
};

export default FerroFallback;