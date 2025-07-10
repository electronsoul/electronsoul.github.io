import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isLoading, setisLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(formData)
        setisLoading(true)
        try{
            console.log("Form Submitted: ", formData)
            await emailjs.send("service_8tupcon", "template_soad2q8", {
                from_name: formData.name,
                to_name: "Satyam",
                from_email: formData.email,
                to_email: "two.electrodes@gmail.com",
                message: formData.message
            }, "Xb_XJIgpZoDzIwJde")
            setisLoading(false)
            alert("Sent Successfully 😄")
            setFormData({name: "", email: "", message: ""})
        } catch (error) {
            setisLoading(false)
            console.log(error)
            alert("Failed To Send 😕")
        }
    }

    return (
        <section className="relative flex items-center c-space section-spacing" id="contact">
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">
                        Let's Connect Further
                    </h2>
                    <p className="font-normal text-neutral-400">
                    If my profile aligns with the kind of embedded hardware expertise you're seeking, I'd be glad to connect 
                    and explore how I could contribute to your team.
                    </p>
                </div>
                
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">Your Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="Ram Kumar" 
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">Your Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="ram.kumar@email.com" 
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">Message For Me</label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="Hey there! I have a wonderful idea, let's brainstorm over it." 
                            autoComplete="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required/>
                    </div>
                    <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender
                    to-royal hover-animation">
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
  )
}

export default Contact