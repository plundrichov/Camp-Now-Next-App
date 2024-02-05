"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { NAV_LINKS } from "@/constants";

import Button from "./Button";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
			</Link>

			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="regulat-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button
					type="button"
					title="Login"
					icon="/user.svg"
					variant="btn_dark_green"
				/>
			</div>
			<button onClick={handleClick}>
				<Image
					src="menu.svg"
					alt="menu"
					width={32}
					height={32}
					className="inline-block cursor-pointer lg:hidden"
				/>
			</button>
		</nav>
	);
}

export default Navbar;
