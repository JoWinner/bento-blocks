import  { useEffect} from "react";
import { Headphones, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ToastNotification = ({  notifications, removeNotif  }) => {


  return (
    <div className="flex items-center justify-center">
      <div className="flex  flex-col gap-1 w-64 fixed top-5 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  },);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-center rounded gap-2 text-xs font-medium shadow-lg text-white bg-blue-300 pointer-events-auto"
    >
      <Headphones className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <X />
      </button>
    </motion.div>
  );
};

export default ToastNotification;

const generateNotif = () => {
    const data = {
      id: Math.random(),
      text: `${message}`,
    };
    return data;
  };