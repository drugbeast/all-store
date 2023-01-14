import { url } from '../index'
import {useEffect} from 'react' 
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { RootState } from '../store'
import {addProducts} from '../store/productsSlice'
import { IProduct } from '../interfaces'
import Product from '../components/Product'
import Search from '../components/Search'
import Sorts from '../components/Sorts'
import Filters from '../components/Filters'

function List () {
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    await fetch(url).then(res => res.json()).then(data => dispatch(addProducts(data)))
  }

  useEffect(() => {
    void fetchProducts()
  }, [])

  const prods: IProduct[] = useSelector((state: RootState) => state.products.products)
  return (
    <div>
      <div className="container flex px-20 pt-10 flex-col">
        <Search />
        <div className="flex pt-5">
          <div className="w-[25%]">
            <Filters />
          </div>
          <div className="w-[75%]">
              <Sorts />
              <div className="w-[100%] grid grid-cols-4 pt-5 gap-10">
                {
                  prods.map(item => {
                    return <Product {...item} key={item.id}/>
                  })
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
