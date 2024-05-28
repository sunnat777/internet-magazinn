import { useEffect } from 'react'
import s from '../Products/Products.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getRout } from '../../store/rout/routSlice';
import { cartIcon } from '../../utils/imgExport'
import CustomBtn from '../../components/UI/CustomBtn'
import UserLayout from '../../layouts/UserLayout';

export const ProductItem = () => {

  const { id } = useParams()

  const el = useSelector((state) => state.rout.rout)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRout(id))

  }, [])

  return (
    <>
      <div className={s.product}>
        <UserLayout>
          <div className={s.product_top}>
            <div className={s.product_top_left}>
              <Link to="/" className={s.product_top_left_link}>Назад</Link>
              <h2 className={s.product_top_left_text}>{el?.title}</h2>
            </div>
            <div className={s.product_top_right}>
              <CustomBtn text="В корзину" icon={cartIcon} width={141} height={44}

              />
            </div>

          </div>
          {el && (
            <div className={s.product_item}>
              <div className={s.product_item_left}>
                <img src={el?.thumbnail} alt="" className={s.product_item_left_img} />
                <h2 className={s.product_item_left_text}>
                  {el?.description}
                </h2>
              </div>
              <div className={s.product_item_right}>
                <h2 className={s.product_item_price}>
                  <span>Цена:</span>
                  <span>{el?.price}$</span>
                </h2>
                <h2 className={s.product_item_rating}>
                  <span>Рейтинг:</span>
                  <span>{el?.rating}</span>
                </h2>
                <h2 className={s.product_item_quantity}>
                  <span>Кол-во:</span>
                  <span>{el?.stock || 'Неизвестно'}</span>
                </h2>

              </div>
            </div>
          )}
        </UserLayout>


      </div>
    </>
  )
}

export default ProductItem