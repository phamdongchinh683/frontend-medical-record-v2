"use client";
import { INotification } from "@/interfaces/INotification";
import { options } from "@/mocks/SelectContact.json";
import ContactService from "@/services/ContactService";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import Button from "../Button";
import EmailInput from "../EmailInput";
import InfoInput from "../InfoInput";
import Notification from "../Notification";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<INotification>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (notification.type) {
      const timer = setTimeout(() => {
        setNotification({ type: null, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.type]);

  const closeNotification = () => {
    setNotification({ type: null, message: "" });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setNotification({ type: null, message: "" });

    try {
      const formData = new FormData(event.currentTarget);
      if (
        !formData.get("first_name") ||
        !formData.get("last_name") ||
        !formData.get("email") ||
        !formData.get("message") ||
        !formData.get("subject")
      ) {
        throw new Error("Please fill in all fields.");
      }
      const response = await ContactService(formData);

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      await response.json();
      setNotification({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      event.currentTarget.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.";
      setNotification({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Notification
        notification={notification}
        closeNotification={closeNotification}
      />

      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Have questions about MedRecords? We&apos;d love to hear from
                you. Reach out to our team for support, partnerships, or general
                inquiries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-pink-100">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>medrecords@gmail.com</span>
                </div>
                <div className="flex items-center text-pink-100">
                  <Phone className="h-6 w-6 mr-4" />
                  <span>+84 77 257 3366</span>
                </div>
                <div className="flex items-center text-pink-100">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>
                    53 B4 Street, Sala Urban Area, An Loi Dong Ward, Thu Duc
                    City, Ho Chi Minh City
                  </span>
                </div>
                <div className="flex items-center text-pink-100">
                  <Clock className="h-6 w-6 mr-4" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <InfoInput
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                  <InfoInput
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                  />
                </div>
                <EmailInput placeholder="Email" name="email" />
                <SelectOption options={options} name="subject" />
                <TextArea placeholder="Your message..." name="message" />
                <Button
                  type="submit"
                  value={isLoading ? "Sending..." : "Send Message"}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
