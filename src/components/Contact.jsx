import React from "react";
import Button from "./Button";

const Contact = () => {
	return (
		<div id="contact" className="my-20 min-h-96 w-screen px-10">
			<div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
				<div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
					<ImageClip className="contact-clip-path-1" src="img/contact-1.webp" />
					<ImageClip
						className="contact-clip-path-2 lg:translate-y-40 translate-y-60"
						src="img/contact-2.webp"
					/>
				</div>

				<div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
					<ImageClip
						className="absolute md:scale-125"
						src="img/swordman-partial.webp"
					/>
					<ImageClip
						className="sword-man-clip-path md:scale-125"
						src="img/swordman.webp"
					/>
				</div>

				<div className="flex flex-col items-center text-center">
					<p className="font-general text-xs uppercase ">Join Awwards</p>
					<p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
						l<b>e</b>t&#39;s buil<b>d</b> the <br /> ne<b>x</b>t er<b>a</b> of g
						<b>a</b>ming t<b>o</b>geth<b>e</b>r
					</p>

					<Button
						title={"Contact us"}
						containerClass={"cursor-pointer mt-10"}
					/>
				</div>
			</div>
		</div>
	);
};

const ImageClip = ({ src, className }) => {
	return (
		<div className={className}>
			<img src={src} />
		</div>
	);
};
export default Contact;
