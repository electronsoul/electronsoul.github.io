import { mySocials } from "../constants"

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm
    text-neutral-400 c-space">
        <div className="bg-gradient-to-r mb-4 from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        <div className="flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <a 
                class="px-7 py-[7px] outline-none no-underline text-white w-50 h-[32px] rounded-[16px] bg-[#0A66C2] font-sans"
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=skhanna23" 
                target="_blank">
                Follow Me On LinkedIn
        </a>

        <div className="flex gap-3">
            {mySocials.map((social, index) => (
                <a href={social.href} key={index}>
                    <img src={social.icon} className="w-5 h-5"
                    alt={social.name} />
                </a>
            ))}
        </div>
        <p>© 2025 Satyam Khanna</p>
        <p>All rights reserved</p>
    </section>
  )
}

export default Footer