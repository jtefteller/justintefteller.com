
const styles = {
	video: "absolute inset-0 w-full h-full object-cover",
	div: "relative w-full h-0 pb-[56.25%]",
};

export function Video({src, title, ...props}) {
	return (

	<div className={styles.div}>
		<iframe 
			className={styles.video}
			src={src} title={title} 
			frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen
			{...props}
			>
		</iframe>
	</div>
	);
}