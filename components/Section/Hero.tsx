import {useState} from "react"
import {FiMail} from "react-icons/fi"
import {TextBox} from "../TextBox"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"

export const Hero = () => {
  const [email, setEmail] = useState("")

  const submitWaitlistForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email)
      return toast.error("Please supply an email", {
        duration: 6000,
        style: {
          borderRadius: "10px",
        },
      })

    try {
      const {data} = await axios.post(
        "https://getwaitlist.com/api/v1/waitlists/submit",
        {
          api_key: process.env.NEXT_PUBLIC_WAITLIST_API_KEY,
          email,
          referral_link: document.URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (data) {
        toast.success("You'll be notified for early access", {
          duration: 6000,
          style: {
            borderRadius: "10px",
          },
        })
        setEmail("")
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong, try again later.", {
        duration: 6000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh] md:min-h-max">
        <Toaster reverseOrder={false} />
        <div className="p-6 mt-12 md:flex md:justify-center lg:mx-16 md:mt-24">
          <div className="flex xl:space-x-60">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl text-transform-gradient">
                highschool internships <br className="hidden md:block" />{" "}
                <span className="gradient_text">revolutionized</span>.
              </h1>
              <p className="max-w-xl text-lg text-gray-700">
                InternNova makes finding an internship easy and accessible for
                high-school students all over the world! Through our site,
                you'll be able to connect with prestigious global companies
                which will help you build your resume and gain invaluable
                inexperience to kickstart your career!
              </p>

              <div className="flex space-x-2">
                <TextBox
                  placeholder="Email Address"
                  width="md:w-[27rem] 2xl:w-[35rem]"
                  value={email}
                  setValue={setEmail}
                  Icon={FiMail}
                  type="email"
                  onSubmit={submitWaitlistForm}
                />
              </div>
              <p className="text-sm">Get notified when InternNova launches</p>
            </div>
            <img
              className="relative hidden mt-10 lg:block bottom-32"
              src="./illustration/Landing_Illustration.png"
              width="350px"
              height="auto"
              alt="Landing Illustration"
            />
          </div>
        </div>
      </div>
    </>
  )
}
