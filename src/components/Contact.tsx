import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FormData } from "../types";

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

interface EmailJSResponse {
  status: number;
  text: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abhay",
          from_email: form.email,
          to_email: "abhayfaldu1922+3dportfolio@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setForm(initialForm);
      alert("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    // ... rest of your JSX
  );
};

export default SectionWrapper(Contact, "contact"); 
