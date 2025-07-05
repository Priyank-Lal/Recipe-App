import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Tasty Recipes",
      subtitle: "Explore dishes from all over the world",
      count: 124,
      image:
        "https://plus.unsplash.com/premium_photo-1668703459488-66a7445df882?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZlYXN0fGVufDB8fDB8fHww",
      link: "/recipes",
    },
    {
      id: 2,
      name: "Your Favourites",
      subtitle: "Quick access to your saved delights",
      count: 89,
      image:
        "https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=900&auto=format&fit=crop&q=60",
      link: "/favourites",
    },
    {
      id: 3,
      name: "Create a Recipe",
      subtitle: "Share your unique culinary ideas",
      count: 0,
      image:
        "https://images.unsplash.com/photo-1601226809816-b8c32440158a?w=900&auto=format&fit=crop&q=60",
      link: "/create-recipe",
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore Our Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quickly navigate to your saved recipes, discover new dishes, or
            create your own.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(cat.link)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-md group transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
                  <h3 className="text-xl sm:text-2xl font-bold drop-shadow-sm">
                    {cat.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 mt-1">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
