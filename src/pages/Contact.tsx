import { useState, type FormEvent } from "react";
import Button from "../components/ui/Button";
import {sendMail} from "../../resources/email"
import { hideTicker, showTicker } from "../redux/ticker/tickerSlice";
import { useDispatch } from "react-redux";


export function Contact() {

  const [rotate, setRotate] = useState<number | null>(null)
  const dispatch = useDispatch()

  const socials = [
    {
      Email: "https://mail.google.com/mail/?view=cm&to=mohatif02@gmail.com"
    },
    {
      Linkedin: "https://www.linkedin.com/in/atif-muhammad-ba1396289"
    },
    {
      Github: "https://github.com/Atif-Muhammad"
    },
    {
      Twitter: "https://x.com/muh6660099"
    },
    {
      Facebook: "https://www.facebook.com/share/1JTruFyQZ4/"
    },
    {
      Instagram: "https://www.instagram.com/a__t__f__o?igsh=NnE0eWxoYW5ia2Vo"
    },
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sent = await sendMail(e.currentTarget)
    if(sent === 200){
      dispatch(showTicker("Email Sent."));
    }else{
      dispatch(showTicker("Couldn't Send Email."))
    }

    setTimeout(() => {
      dispatch(hideTicker())
    }, 2500);
    
  }

  return (
    <div className="bg-[#57564F] w-full rounded-t-4xl py-10 px-4 sm:px-10">

      <div className="w-full overflow-hidden h-24 sm:h-32 group">
        <div className="marquee-container">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className={`font-bold mx-6 ${i % 2 === 0
                  ? "text-black"
                  : "text-stroke text-transparent"
                  } text-[clamp(2rem,6vw,6rem)]`}
              >
                SHALL WE? -
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-10 flex flex-col lg:flex-row items-start justify-center gap-10">

        <div className="w-full lg:w-1/2 flex flex-col ">
          {socials.map((social: object, index: number) => {
            const [platform, url] = Object.entries(social)[0];
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setRotate(index)}
                onMouseLeave={() => setRotate(null)}
                className="text-white hover:underline font-semibold text-xl sm:text-2xl md:text-3xl flex items-center justify-between border-t border-b py-2 px-2"
              >
                {platform}
                <span
                  className={`p-3 sm:p-4 bg-black rounded-full transition-transform duration-300 ${rotate === index ? "rotate-345" : "-rotate-45"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>

        <div className="w-full lg:w-1/2 h-full py-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-end gap-6 text-amber-50"
          >
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Send Me a Message?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    placeholder="Type your name"
                    className="px-3 py-2 rounded-md border border-amber-50 bg-transparent outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Type your email"
                    className="px-3 py-2 rounded-md border border-amber-50 bg-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Type subject of mail"
                    className="px-3 py-2 rounded-md border border-amber-50 bg-transparent outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="msg"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    name="msg"
                    required
                    id="msg"
                    rows={6}
                    placeholder="Type your message"
                    className="px-3 py-2 rounded-md border border-amber-50 bg-transparent outline-none min-h-10"
                  />
                </div>
              </div>
            </div>
            <Button text="Send Message" type="ghost" />
          </form>
        </div>
      </div>
    </div>

  )
}

