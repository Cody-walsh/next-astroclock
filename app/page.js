"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import CelestialBody from "./components/CelestialBody";
const dummyData = [
	{ name: "test", deg: 10 },
	{ name: "test", deg: 15 },
	{ name: "test", deg: 45 },
	{ name: "test", deg: 35 },
	{ name: "test", deg: 83 },
];

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<div className={styles.outerCircle}>
					<ul className={styles.zodiac}>
						<li>
							<p>Pisces</p>
						</li>
						<li>
							<p>Aquarius</p>
						</li>
						<li>
							<p>Capricorn</p>
						</li>
						<li>
							<p>Sagittarius</p>
						</li>
						<li>
							<p>Scorpio</p>
						</li>
						<li>
							<p>Libra</p>
						</li>
						<li>
							<p>Virgo</p>
						</li>
						<li>
							<p>Leo</p>
						</li>
						<li>
							<p>Cancer</p>
						</li>
						<li>
							<p>Gemini</p>
						</li>
						<li>
							<p>Taurus</p>
						</li>
						<li>
							<p>Aries</p>
						</li>
					</ul>
					<div className={styles.innerCircle}>
						<ul>
							{dummyData.map((data, index) => {
								return <CelestialBody data={data} index={index} />;
							})}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
