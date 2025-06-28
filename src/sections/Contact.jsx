import { useState } from "react"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <section className="relative flex items-center c-space section-spacing">
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">
                        Let's Connect Further
                    </h2>
                    <p className="font-normal text-neutral-400">
                        Whether you're loking to build your next embedded device, improve an existing one, or bring a unique project to life, 
                        I'm here to help
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
                            placeholder="Hey Satyam! I have a wonderful idea, lets brainstrom over it" 
                            autoComplete="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required/>
                    </div>
                    <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender
                    to-royal hover-animation"> Send </button>
                </form>
            </div>
        </section>
  )
}

export default Contact