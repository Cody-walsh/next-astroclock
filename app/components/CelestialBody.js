const CelestialBody = ({ data }, index) => {
	console.log(data);
	return (
		<li className="celestial-body" style={{ transform: `rotate(${data.deg}deg)`, color: `${data.color}` }}>
			<p>{data.name}→</p>
		</li>
	);
};

export default CelestialBody;
