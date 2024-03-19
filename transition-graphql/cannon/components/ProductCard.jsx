import useAddToBasket from '../hooks/useAddToBasket';

const ProductCard = () => {
  const [basket, productAdded] = useUnit([
    basketModel.$basket,
    basketModel.productAdded,
  ]);

  const { productId, count, name, brandName, categoryName, categoryId, price, recommendations } =
    useSelector(productSelector);

  const isInBasket = (id) => !!basket.items.find(product => product.id === id);

  // const [addProductToBasket] = useAddToBasket({
  //   productId,
  //   count,
  //   productAnalytics: {
  //     productId,
  //     name,
  //     brandName,
  //     categoryName,
  //     categoryId,
  //     price,
  //   },
  // });

  return (
    <div>
      <div>
        {
          !isInBasket(productId)
            ? <button
              //onClick={() => addProductToBasket()}
              onClick={() => productAdded(params)}
            >
              купить
            </button>
            : count
        }
      </div>

      {
        recommendations.map((recommendation) => (
          <div>
            {
              isInBasket(recommendation.id)
                ? <button
                  onClick={() => addProductToBasket()}
                >
                  купить
                </button>
                : <icon/>
            }
          </div>
        ))
      }
    </div>
  )
}
