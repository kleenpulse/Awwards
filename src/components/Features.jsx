import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { VscDeviceCameraVideo } from "react-icons/vsc";

const Features = () => {
	return (
		<section className="bg-black pb-52">
			<div className="container mx-auto px-3 md:px-10">
				<div className="px-5 py-32">
					<p className="font-circular-web text-lg text-blue-50">
						Into the Metagame Layer
					</p>
					<p className="max-w-md font-circular-web text-lg text-blue-50/50">
						Dive deep into the ultimate gaming experience where strategy meets
						immersion! At Into the Metagame Layer, we explore the cutting-edge
						of competitive gaming, dissect the latest strategies, and uncover
						the secrets of the metagame.
					</p>
				</div>
				<BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
					<BentoCard
						src="videos/feature-1.mp4"
						title={
							<>
								r<b>a</b>dia<b>n</b>t
							</>
						}
						description="Whether you're a seasoned player looking to refine your skills or a curious newcomer eager to learn, our platform is your gateway to expert insights, detailed guides, and a vibrant community."
					/>
				</BentoTilt>
				<div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
					<BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
						<BentoCard
							src="videos/feature-2.mp4"
							title={
								<>
									xeeg<b>m</b>a
								</>
							}
							description="This version emphasizes excitement, engagement, and expertise, while creating a sense of community and belonging. Let me know if you'd like to tweak it further! ."
						/>
					</BentoTilt>

					<BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
						<BentoCard
							src="videos/feature-3.mp4"
							title={
								<>
									axi<b>o</b>s
								</>
							}
							description="Axios is a dynamic and engaging platform that combines the thrill of strategy with the excitement of gaming. Let me know if you'd like to tweak it further! "
						/>
					</BentoTilt>
					<BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
						<BentoCard
							src="videos/feature-4.mp4"
							title={
								<>
									az<b>u</b>re
								</>
							}
							description="Azure is a captivating platform that seamlessly blends strategy and gaming, creating a dynamic and immersive experience. "
						/>
					</BentoTilt>
					<BentoTilt className="bento-tilt_2 ">
						<div className="flex size-full flex-col justify-between bg-violet-300 p-5">
							<h1 className="bento-title special-font max-w-64">
								<b>W</b>e h<b>a</b>ve m<b>o</b>re to co<b>m</b>e!
							</h1>
							<TiLocationArrow className="m-5 scale-[5] self-end" />
						</div>
					</BentoTilt>
					<BentoTilt className="bento-tilt_2">
						<video
							src="videos/feature-5.mp4"
							autoPlay
							loop
							muted
							className="absolute left-0 top-0 object-cover object-center size-full"
						/>
					</BentoTilt>
				</div>
			</div>
		</section>
	);
};

const BentoTilt = ({ children, className = "" }) => {
	const [transformStyle, setTransformStyle] = useState("");
	const itemRef = useRef(null);

	const INTENSITY_X = 10;
	const INTENSITY_Y = -10;

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();

		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;

		const tiltX = (relativeY - 0.5) * INTENSITY_X;
		const tiltY = (relativeX - 0.5) * INTENSITY_Y;

		const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
		setTransformStyle(newTransform);
	};

	const handleMouseLeave = () => {
		setTransformStyle("");
	};

	return (
		<div
			className={className}
			ref={itemRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform: transformStyle }}
		>
			{children}
		</div>
	);
};

const BentoCard = ({ src, title, description }) => {
	return (
		<div className="relative size-full">
			<video
				src={src}
				autoPlay
				loop
				muted
				className="absolute left-0 top-0 object-cover object-center size-full"
			/>
			<div className="relative z-10 flex flex-col size-full justify-between p-5 text-blue-50">
				<div>
					<h1 className="bento-title special-font">{title}</h1>
					{description && (
						<p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
					)}
				</div>
			</div>
		</div>
	);
};
export default Features;
