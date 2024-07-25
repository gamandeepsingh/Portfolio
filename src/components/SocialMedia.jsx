import React from "react";
import { FiCreditCard, FiMail} from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <div className="p-4 max-md:mb-32 mx-1">
            <p className="text-xl font-semibold mb-2 text-white -ml-3">Contact Me</p>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 -ml-3">
                <Card title="LinkedIn" subtitle="Connect with me" href="https://www.linkedin.com/in/gamandeep-singh-344001256/" Icon={CiLinkedin}/>
                <Card title="Email" subtitle="Send email" href="mailto:gamandeepsingh6@gmail.com" Icon={FiMail} />
                <Card title="GitHub" subtitle="Let's Collaborate" href="https://github.com/gamandeepsingh" Icon={FaGithub} />
                <Card title="Twitter " subtitle="Follow me" href="https://x.com/GamandeepSingh4" Icon={FaXTwitter}
                />
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon, href }) => {
    return (
        <a
            href={href}
            className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
        >
            <div className="absolute inset-0 bg-[#FC0099] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100  group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-[#29003D] group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle}
            </p>
        </a>
    );
};

export default SocialMedia;