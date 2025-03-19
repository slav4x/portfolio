import { Tags } from '@/components';
import styles from './About.module.sass';

const tagsList = [
	'HTML',
	'SCSS',
	'BEM',
	'JavaScript(ES6+)',
	'SEO',
	'Gulp',
	'GIT',
	'Vite',
	'React',
	'NextJS',
	'TypeScript',
	'Express.js',
	'GSAP',
	'Lenis',
	'WordPress',
	'PHP',
	'Prisma'
];

export default function About() {
	return (
		<section className={styles.about}>
			<div className="container">
				<div className={styles.grid}>
					<div className="text">
						<h2 className="title">
							Я Вячеслав из Новосибирска. Уже более 10 лет занимаюсь фронтенд-разработкой с фокусом на верстке. Делаю
							адаптивные, быстрые сайты, где код логичен, переиспользуем, а структура не превращается в хаос.
						</h2>
						<p>
							Верстка для меня — это не просто картинка на экране, а основа удобного и стабильного сайта. Использую{' '}
							<b>компонентный подход, пишу чистый код, учитываю SEO и оптимизирую загрузку.</b> Работал с{' '}
							<b>анимациями (GSAP, Lenis)</b>, интегрировал верстку в <b>WordPress</b>, создавал кастомные темы и
							плагины.
						</p>
						<p>
							Есть опыт работы с <b>React</b> — делал админ-панели, несколько пет-проектов и работал с <b>Next.js</b>.
							Понимаю, как <b>организовать код, разбивать интерфейс на компоненты и работать с API.</b>
						</p>
						<p>
							Разбираюсь в дизайне, поэтому <b>могу не только сверстать макет, но и доработать его:</b> исправить
							отступы, цвета, адаптировать без макета, <b>не дожидаясь правок от дизайнера.</b>
						</p>
						<p>
							Также работал с <b>интеграцией API и различных систем:</b> бронирование автомобилей, онлайн-запись к врачу
							и другие платформы.
						</p>
						<p>
							Ранее работал <b>в командах и на аутсорсе</b>, сейчас сотрудничаю с разработчиками и дизайнерами как
							фрилансер. Делаю сайты, которые <b>выглядят хорошо, работают быстро и не создают проблем в поддержке.</b>
						</p>
					</div>
					<div className={styles.tags}>
						<Tags data={tagsList} />
					</div>
				</div>
			</div>
		</section>
	);
}
