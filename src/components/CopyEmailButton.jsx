import { useState } from "react"

const CopyEmailButton = () => {

    const [copied, setCopied] = useState(false);
    const email = "two.electrodes@gmail.com"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

    return (
        <button 
        className={`relative px-2 py-3 text-sm text-center 
            rounded-full font-extralight w-[12rem] cursor-pointer
            overflow-hidden transition-colors duration-300
            ${copied ? "bg-green-500" : "bg-primary"}`}

        onClick={copyToClipboard}>
            <p className="flex items-center justify-center gap-2">
                <img src="assets/copy.svg" className="w-5" alt="copy"/>
                {copied ? "Copied!" : "Get My Email"}
            </p>
        </button>
  )
}

export default CopyEmailButton