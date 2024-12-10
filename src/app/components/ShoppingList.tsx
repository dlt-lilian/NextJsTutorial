import { plantList } from '../../data/plantList'
import CareScale from './CareScale'
function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='mx-16 my-8'>
			<ul className='border-b-2 w-96'>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item flex my-4 py-4 border-b-2 w-96'>
						{plant.isBestSale && <span>🔥</span>}
						{plant.name}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList