import styles from './Tags.module.sass';

interface TagsProps {
	data: string[] | undefined;
}

export default function Tags({ data }: TagsProps) {
	return (
		<ul className={styles.tags}>
			{data?.map((item, idx) => (
				<li key={idx}>{item}</li>
			))}
		</ul>
	);
}
