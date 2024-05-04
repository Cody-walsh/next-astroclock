"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useRef, useEffect } from "react";

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<div class={styles.outerCircle}>
					<ul class={styles.zodiac}>
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
					<div class={styles.innerCircle}></div>
				</div>
			</div>
		</main>
	);
}
