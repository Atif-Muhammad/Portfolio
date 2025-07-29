import emailjs from "@emailjs/browser";


export const sendMail = async (form: HTMLFormElement): Promise<number> => {
  try {
    // console.log(form);
    await emailjs.sendForm(
      "service_iqpph0a",
      "template_m94bo5b",
      form,
      "xE3OUgY5s6dGYhtR7"
    );
    return 200;
  } catch {
    // console.error("Email send failed", error);
    return 500;
  }
};
