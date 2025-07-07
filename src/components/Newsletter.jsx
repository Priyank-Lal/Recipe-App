import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";
import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
              >
                <Mail className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold text-white">
                Never Miss a Recipe
              </h2>

              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Get weekly updates with new recipes, cooking tips, and exclusive
                content from our community of passionate chefs.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: "9999px",
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                    "& .MuiInputBase-input": {
                      padding: "16px 20px",
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight className="h-5 w-5" />}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center space-x-8 text-green-100"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Weekly recipes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Cooking tips</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">No spam</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
